package builder

import (
	"website-penyuratan-smk-kartoharjo/config"
	"website-penyuratan-smk-kartoharjo/internal/http/handler"
	"website-penyuratan-smk-kartoharjo/internal/http/router"
	"website-penyuratan-smk-kartoharjo/internal/repository"
	"website-penyuratan-smk-kartoharjo/internal/service"
	"website-penyuratan-smk-kartoharjo/pkg/route"

	"gorm.io/gorm"
)

func BuildPublicRoutes(cfg *config.Config, db *gorm.DB) []route.Route {
	//repository
	userRepository := repository.NewUserRepository(db)
	//service
	userService := service.NewUserService(cfg,userRepository)
	tokenService := service.NewTokenService(cfg.JWTConfig.SecretKey)

	//handler
	userHandler := handler.NewUserHandler(tokenService, userService)
	//router

	//end
	return router.PublicRoutes( userHandler)
}

// func BuildPrivateRoutes(cfg *config.Config, db *gorm.DB) []route.Route {	
// 	userRepository := repository.NewUserRepository(db)

// 	userService := service.NewUserService(cfg, userRepository)
// 	tokenService := service.NewTokenService(cfg.JWTConfig.SecretKey)

// 	userHandler := handler.NewUserHandler(tokenService, userService)
// 	return router.PrivateRoutes(userHandler)
// }