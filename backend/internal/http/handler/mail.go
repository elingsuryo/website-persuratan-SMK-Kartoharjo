package handler

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"time"

	"website-penyuratan-smk-kartoharjo/internal/http/dto"
	"website-penyuratan-smk-kartoharjo/internal/service"
	"website-penyuratan-smk-kartoharjo/pkg/response"

	"github.com/labstack/echo/v4"
	"github.com/pdfcpu/pdfcpu/pkg/api"
	"github.com/skip2/go-qrcode"
)

type MailHandler struct {
	mailservice service.MailService
}

func NewMailHandler(mailService service.MailService) MailHandler {
	return MailHandler{mailService}
}

func (h *MailHandler) GetAllMail(ctx echo.Context) error {
	mails, err := h.mailservice.GetAll(ctx.Request().Context())
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully", mails))
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
	jenis := ctx.FormValue("jenis")
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
		Jenis:     jenis,
		TglUpload: tglUpload,
		File:      filePath, // hanya path-nya
	}

	err = h.mailservice.Create(ctx.Request().Context(), req)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully uploaded", map[string]string{
        "file_url": "http://localhost:8080/dvpersuratan/uploads/namafile.pdf",
    },))
}

func (h *MailHandler) UpdateMail(ctx echo.Context) error {
    // Ambil ID dari parameter URL
    idStr := ctx.Param("id")
    id, err := strconv.Atoi(idStr)
    if err != nil {
        return ctx.JSON(http.StatusBadRequest, response.ErrorResponse(http.StatusBadRequest, "invalid ID"))
    }

    // Ambil data dari form
    judul := ctx.FormValue("judul")
    deskripsi := ctx.FormValue("deskripsi")
    kategori := ctx.FormValue("kategori")
	jenis := ctx.FormValue("jenis")
    tglUpload := ctx.FormValue("tgl_upload")

    var filePath string

    // Cek apakah ada file baru yang diupload
    formFile, err := ctx.FormFile("file")
    if err == nil {
        src, err := formFile.Open()
        if err != nil {
            return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, "failed to open uploaded file"))
        }
        defer src.Close()

        // Buat folder jika belum ada
        os.MkdirAll("uploads", os.ModePerm)

        // Buat nama file unik
        filename := fmt.Sprintf("%d_%s", time.Now().Unix(), formFile.Filename)
        filePath = "uploads/" + filename

        dst, err := os.Create(filePath)
        if err != nil {
            return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, "failed to save uploaded file"))
        }
        defer dst.Close()

        if _, err := io.Copy(dst, src); err != nil {
            return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, "failed to copy uploaded file"))
        }
    }

    // Siapkan request DTO
    req := dto.UpdateMailRequest{
        ID:        int64(id),
        Judul:     judul,
        Deskripsi: deskripsi,
        Kategori:  kategori,
		Jenis:     jenis,
        TglUpload: tglUpload,
        File:      filePath, // bisa kosong jika tidak diupdate
    }

    // Panggil service
    err = h.mailservice.Update(ctx.Request().Context(), req)
    if err != nil {
        return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
    }

    return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully updated", nil))
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

func (h *MailHandler) SignedMail(ctx echo.Context) error {
	idStr := ctx.Param("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		return ctx.JSON(http.StatusBadRequest, response.ErrorResponse(http.StatusBadRequest, "invalid ID"))
	}

	// Ambil data surat berdasarkan ID
	surat, err := h.mailservice.GetByID(ctx.Request().Context(), int64(id))
	if err != nil {
		return ctx.JSON(http.StatusNotFound, response.ErrorResponse(http.StatusNotFound, "surat tidak ditemukan"))
	}

	// Inisialisasi path file asal dan tujuan
	originalFilePath := surat.File
	fileName := filepath.Base(originalFilePath)
	signedFilePath := filepath.Join("uploads", "signed_" + fileName)

	// Generate QR Code
	qrContent := fmt.Sprintf("ID: %d\nStatus: Diterima\nTime: %s", id, time.Now().Format("2006-01-02 15:04:05"))
	qrTempPath := fmt.Sprintf("uploads/qr_%d.png", time.Now().Unix())

	err = qrcode.WriteFile(qrContent, qrcode.Medium, 256, qrTempPath)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, "failed to generate QR code"))
	}

	// Masukkan QR ke PDF
	desc := "scale:0.1, pos:br, off:-190 210, rot:0"
	err = api.AddImageWatermarksFile(originalFilePath, signedFilePath, []string{"-1"}, true, qrTempPath, desc, nil)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, "failed to embed QR code"))
	}
	_ = os.Remove(qrTempPath)

	// Update data surat
	req := dto.SignedMailRequest{
		ID:         int64(id),
		Accept:     true,
		Keterangan: "Diterima",
		Tujuan:     surat.Tujuan,
		File:       signedFilePath,
	}
	err = h.mailservice.Signed(ctx.Request().Context(), req)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("Successfully Signed", nil))
}




func (h *MailHandler) RejectMail(ctx echo.Context) error {
	var req dto.RejectMailRequest
	if err := ctx.Bind(&req); err != nil {
		return ctx.JSON(http.StatusBadRequest, response.ErrorResponse(http.StatusBadRequest, err.Error()))
	}
	req.Keterangan = "Ditolak"
	req.Accept = false
	err := h.mailservice.Reject(ctx.Request().Context(), req)
	if err != nil {
		return ctx.JSON(http.StatusInternalServerError, response.ErrorResponse(http.StatusInternalServerError, err.Error()))
	}

	return ctx.JSON(http.StatusOK, response.SuccessResponse("successfully reject mail", nil))
}
