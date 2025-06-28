package server

import (
	"net/http"

	"website-penyuratan-smk-kartoharjo/config"
	"website-penyuratan-smk-kartoharjo/internal/entity"
	"website-penyuratan-smk-kartoharjo/pkg/response"
	"website-penyuratan-smk-kartoharjo/pkg/route"

	"github.com/golang-jwt/jwt/v5"
	echojwt "github.com/labstack/echo-jwt/v4"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

type Server struct {
	*echo.Echo
}

func NewServer(cfg *config.Config, publicRoutes []route.Route, privateRoutes []route.Route) *Server {
	e := echo.New()
	e.Static("/read/uploads", "uploads")
	v1 := e.Group("/api/v1")

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept, echo.HeaderAuthorization},
		AllowMethods: []string{http.MethodGet, http.MethodPut, http.MethodPost, http.MethodDelete, http.MethodPatch},
	}))

	if len(publicRoutes) > 0 {
		for _, route := range publicRoutes {
			v1.Add(route.Method, route.Path, route.Handler)
	}
}

	if len(privateRoutes) > 0 {
		for _, route := range privateRoutes {
			v1.Add(route.Method, route.Path, route.Handler, JWTMiddleware(cfg.JWTConfig.SecretKey), RBACMiddleware(route.Roles))
		}
	}

	return &Server{e}
}

func JWTMiddleware(secretKey string) echo.MiddlewareFunc {
	return echojwt.WithConfig(echojwt.Config{
		NewClaimsFunc: func(c echo.Context) jwt.Claims{
			return new(entity.JwtCustomClaims)
		},
		SigningKey: []byte(secretKey),   
		ErrorHandler: func(ctx echo.Context, err error) error {
			return ctx.JSON(http.StatusUnauthorized, response.ErrorResponse(http.StatusUnauthorized, "anda harus login untuk bisa mengakses"))
		},
	})
}

func RBACMiddleware(roles []string) echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			user := c.Get("user").(*jwt.Token)
			claims := user.Claims.(*entity.JwtCustomClaims)

			allowed := false

			for _, role := range roles {
				if role == claims.Role {
					allowed = true
					break
				}
			}
			if !allowed {
				return c.JSON(http.StatusForbidden, response.ErrorResponse(http.StatusForbidden, "anda tidak memiliki akses"))
			}
			return next(c)
		}
	}
}