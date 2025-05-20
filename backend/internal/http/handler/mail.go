package handler

import (
	"net/http"

	"github.com/elingsuryo/website-persuratan-SMK-Kartoharjo/internal/http/dto"
	"github.com/elingsuryo/website-persuratan-SMK-Kartoharjo/internal/service"
	"github.com/elingsuryo/website-persuratan-SMK-Kartoharjo/pkg/response"
	"github.com/labstack/echo/v4"
)

type MailHandler struct {
	mailervice service.MailService
}

func NewMailHandler(mailService service.MailService) MailHandler {
	return MailHandler{mailService}
}

func (h *MailHandler) GetAllMail(ctx echo.Context) error {
	users, err := h.mailService.GetAll(ctx.Request().Context())
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully", users))
}

func (h* MailHandler) GetMail(ctx echo.Context) error{
	var req dto.GetMailByIDRequest
	if err := ctx.Bind(&req); err != nil {
		return ctx.JSON(http.StatusBadRequest, response.ErrorResponse(http.StatusBadRequest, err.Error()))
	}

mail, err := h.mailService.GetByID(ctx.Request().Context(), req.ID)
if err != nil {
	return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
}
return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully", mail))

}

func (h *MailHandler) CreateMail(ctx echo.Context) error {
	var req dto.CreateMailRequest
	if err := ctx.Bind(&req); err != nil {
		return ctx.JSON(http.StatusBadRequest, response.ErrorResponse(http.StatusBadRequest, err.Error()))
	}

	err := h.mailService.Insert(ctx.Request().Context(), req)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully", nil))

}

func (h *MailHandler) UpdateMail(ctx echo.Context) error {
	var req dto.UpdateMailRequest
	if err := ctx.Bind(&req); err != nil {
		return ctx.JSON(http.StatusBadRequest, response.ErrorResponse(http.StatusBadRequest, err.Error()))
	}

	err := h.mailService.Update(ctx.Request().Context(), req)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully updating ", nil))
}

func (h *MailHandler) DeleteMail(ctx echo.Context) error {
	var req dto.GetMailByIDRequest
	if err := ctx.Bind(&req); err != nil {
		return ctx.JSON(http.StatusBadRequest, response.ErrorResponse(http.StatusBadRequest, err.Error()))
	}

	mail,err :=  h.mailService.GetByID(ctx.Request().Context(), req.ID)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	err = h.mailService.Delete(ctx.Request().Context(), mail)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully deleting ", nil))
}