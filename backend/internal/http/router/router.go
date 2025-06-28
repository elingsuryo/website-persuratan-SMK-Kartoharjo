package router

import (
	"net/http"

	"website-penyuratan-smk-kartoharjo/internal/http/handler"
	"website-penyuratan-smk-kartoharjo/pkg/route"
)

var(
	// adminOnly = []string{"admin"}
	headmasterOnly = []string{"headmaster"}
	// dvPersuratanOnly = []string{"headmaster"}
	allRoles = []string{"admin", "headmaster", "dvpersuratan"}
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
		{
			Method: http.MethodGet,
			Path: "/users",
			Handler: userHandler.GetUsers,
			Roles: headmasterOnly,
		},
		{
			Method: http.MethodPost,
			Path: "/users",
			Handler: userHandler.CreateUser,
			Roles: allRoles,
		},
		{
			Method: http.MethodGet,
			Path: "/users/:id",
			Handler: userHandler.GetByID,
			Roles: allRoles,
		},
		{
			Method: http.MethodPut,
			Path: "/users/:id",
			Handler: userHandler.UpdateUser,
			Roles: allRoles,
		},
		{
			Method: http.MethodDelete,
			Path: "/users/:id",
			Handler: userHandler.DeleteUser,
			Roles: allRoles,
		},
		{
			Method: http.MethodPost,
			Path: "/mails",
			Handler: mailHandler.CreateMail,
			Roles: allRoles,
		},
		{
			Method: http.MethodGet,
			Path: "/mails",
			Handler: mailHandler.GetAllMail,
			Roles: allRoles,
		},
		{
			Method: http.MethodGet,
			Path: "/mails/:id",
			Handler: mailHandler.GetMail,
			Roles: allRoles,
		},
		{
			Method: http.MethodDelete,
			Path: "/mails/:id",
			Handler: mailHandler.DeleteMail,
			Roles: allRoles,
		},
		{
			Method: http.MethodPut,
			Path: "/mails/:id",
			Handler: mailHandler.UpdateMail,
			Roles: allRoles,
		},
		{
			Method: http.MethodPut,
			Path: "/mails/signed/:id",
			Handler: mailHandler.SignedMail,
			Roles: allRoles,
		},
		{
			Method: http.MethodPut,
			Path: "/mails/reject/:id",
			Handler: mailHandler.RejectMail,
			Roles: allRoles,
		},
	}
}

func PrivateRoutes(userHandler handler.UserHandler, mailHandler handler.MailHandler) []route.Route{
	return []route.Route{
		{
			Method: http.MethodPost,
			Path: "/users",
			Handler: userHandler.CreateUser,
			Roles: allRoles,
		},
	}
}