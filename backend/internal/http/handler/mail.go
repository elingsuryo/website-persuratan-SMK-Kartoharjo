package handler

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"time"

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
	// Ambil form values
	judul := ctx.FormValue("judul")
	deskripsi := ctx.FormValue("deskripsi")
	kategori := ctx.FormValue("kategori")
	tglUpload := ctx.FormValue("tgl_upload")

	// Ambil file dari form
	formFile, err := ctx.FormFile("file")
	if err != nil {
		return ctx.JSON(http.StatusBadRequest, response.ErrorResponse(http.StatusBadRequest, "file is required"))
	}

	// Buka file dan simpan ke folder "uploads"
	src, err := formFile.Open()
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, "failed to open uploaded file"))
	}
	defer src.Close()

	os.MkdirAll("uploads", os.ModePerm)
	// Buat nama file unik
	filename := fmt.Sprintf("%d_%s", time.Now().Unix(), formFile.Filename)
	filePath := "uploads/" + filename

	dst, err := os.Create(filePath)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, "failed to save uploaded file"))
	}
	defer dst.Close()

	if _, err := io.Copy(dst, src); err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, "failed to copy uploaded file"))
	}

	// Kirim ke service
	req := dto.CreateMailRequest{
		Judul:     judul,
		Deskripsi: deskripsi,
		Kategori:  kategori,
		TglUpload: tglUpload,
		File:      filePath, // hanya path-nya
	}

	err = h.mailservice.Create(ctx.Request().Context(), req)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully uploaded", nil))
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