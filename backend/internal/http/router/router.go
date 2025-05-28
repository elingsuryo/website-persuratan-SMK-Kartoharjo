package router

import (
	"net/http"

	"website-penyuratan-smk-kartoharjo/internal/http/handler"
	"website-penyuratan-smk-kartoharjo/pkg/route"
)

var(
	adminOnly = []string{"Admin"}
	// headmasterOnly = []string{"headmaster"}
	dvPersuratanOnly = []string{"Headmaster"}
	allRoles = []string{"Admin", "Headmaster", "DvPersuratan"}
)

func PublicRoutes(userHandler handler.UserHandler, mailHandler handler.MailHandler) []route.Route{
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

func PrivateRoutes(userHandler handler.UserHandler, mailHandler handler.MailHandler) []route.Route{
	return []route.Route{
		{
			Method: http.MethodGet,
			Path: "/users",
			Handler: userHandler.GetUsers,
			Roles: adminOnly,
		},
		{
			Method: http.MethodGet,
			Path: "/users/:id",
			Handler: userHandler.GetByID,
			Roles: adminOnly,
		},
		{
			Method: http.MethodPost,
			Path: "/users",
			Handler: userHandler.CreateUser,
			Roles: adminOnly,
		},
		{
			Method: http.MethodPut,
			Path: "/users/:id",
			Handler: userHandler.UpdateUser,
			Roles: adminOnly,
		},
		{
			Method: http.MethodDelete,
			Path: "/users/:id",
			Handler: userHandler.DeleteUser,
			Roles: adminOnly,
		},
		{
			Method: http.MethodGet,
			Path: "/mails",
			Handler: mailHandler.GetAllMail,
			Roles: allRoles,
		},
		{
			Method: http.MethodPost,
			Path: "/mails",
			Handler: mailHandler.CreateMail,
			Roles: dvPersuratanOnly,
		},
	}
}