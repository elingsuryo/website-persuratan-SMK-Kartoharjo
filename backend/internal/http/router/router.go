package router

import (
	"net/http"

	"website-penyuratan-smk-kartoharjo/internal/http/handler"
	"website-penyuratan-smk-kartoharjo/pkg/route"
)

var(
	// adminOnly = []string{"Administrator"}
	// userOnly = []string{"user"}
	allRoles = []string{"Administrator", "User"}
)

func PublicRoutes(userHandler handler.UserHandler) []route.Route{
	return []route.Route{
		{
			Method: http.MethodPost,
			Path: "/login",
			Handler: userHandler.Login,
			Roles: allRoles,
		},
		{
			Method: http.MethodPost,
			Path: "/register",
			Handler: userHandler.Register,
			Roles: allRoles,
		},
	}
}

// func PrivateRoutes(movieHandler handler.MovieHandler, userHandler handler.UserHandler) []route.Route{
// 	return []route.Route{
// 		{
// 			Method: http.MethodGet,
// 			Path: "/users",
// 			Handler: userHandler.GetUsers,
// 			Roles: adminOnly,
// 		},
// 		{
// 			Method: http.MethodGet,
// 			Path: "/users/:id",
// 			Handler: userHandler.GetByID,
// 			Roles: adminOnly,
// 		},
// 		{
// 			Method: http.MethodPost,
// 			Path: "/users",
// 			Handler: userHandler.CreateUser,
// 			Roles: adminOnly,
// 		},
// 		{
// 			Method: http.MethodPut,
// 			Path: "/users/:id",
// 			Handler: userHandler.UpdateUser,
// 			Roles: adminOnly,
// 		},
// 		{
// 			Method: http.MethodDelete,
// 			Path: "/users/:id",
// 			Handler: userHandler.DeleteUser,
// 			Roles: adminOnly,
// 		},
// 		{
// 			Method: http.MethodGet,
// 			Path: "/movies",
// 			Handler: movieHandler.GetAllMovies,
// 			Roles: allRoles,
// 		},
// 		{
// 			Method: http.MethodGet,
// 			Path: "/movies/:id",
// 			Handler: movieHandler.GetMovie,
// 			Roles: allRoles,
// 		},
// 		{
// 			Method: http.MethodPost,
// 			Path: "/movies",
// 			Handler: movieHandler.CreateMovie,
// 			Roles: adminOnly,
// 		},	
// 		{
// 			Method: http.MethodPut,
// 			Path: "/movies/:id",
// 			Handler: movieHandler.UpdateMovie,
// 			Roles: adminOnly,
// 		},
// 		{
// 			Method: http.MethodDelete,
// 			Path: "/movies/:id",
// 			Handler: movieHandler.DeleteMovie,
// 			Roles: adminOnly,
// 		},
// 	}
// }