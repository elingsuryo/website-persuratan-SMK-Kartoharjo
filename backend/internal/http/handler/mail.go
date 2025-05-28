package handler

import (
	"net/http"

	"website-penyuratan-smk-kartoharjo/internal/http/dto"
	"website-penyuratan-smk-kartoharjo/internal/service"
	"website-penyuratan-smk-kartoharjo/pkg/response"

	"github.com/labstack/echo/v4"
)

type MailHandler struct {
	mailservice service.MailService
}

func NewMailHandler(mailService service.MailService) MailHandler {
	return MailHandler{mailService}
}

func (h *MailHandler) GetAllMail(ctx echo.Context) error {
	users, err := h.mailservice.GetAll(ctx.Request().Context())
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

	mail, err := h.mailservice.GetByID(ctx.Request().Context(), req.ID)
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

	err := h.mailservice.Create(ctx.Request().Context(), req)
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

	err := h.mailservice.Update(ctx.Request().Context(), req)
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

	mail,err :=  h.mailservice.GetByID(ctx.Request().Context(), req.ID)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	err = h.mailservice.Delete(ctx.Request().Context(), mail)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully deleting ", nil))
}