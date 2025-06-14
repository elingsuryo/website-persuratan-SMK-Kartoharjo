package dto

type GetMailByIDRequest struct {
	ID int64 `param:"id" validate:"required"` //json, param mail/ I=param, query ?id_pengguna=asdsasort
}

type GetAllMailResponse struct {
	ID        int64  `json:"id"`
	Judul     string `json:"judul"`
	Deskripsi string `json:"deskripsi"`
	Kategori  string `json:"kategori"`
	TglUpload string `json:"tgl_upload"`
	File      string `json:"file"`
	Accept    bool   `json:"accept"`
}

type CreateMailRequest struct {
	Judul     string `form:"judul"`
	Deskripsi string `form:"deskripsi"`
	Kategori  string `form:"kategori"`
	TglUpload string `form:"tgl_upload"`
	File      string `form:"file"`
}

type UpdateMailRequest struct {
	ID        int64  `param:"id" validate:"required"`
	Judul     string `json:"judul"`
	Deskripsi string `json:"deskripsi"`
	Kategori  string `json:"kategori"`
	TglUpload string `json:"tgl_upload"`
	File      string `json:"file"`
	Accept    bool   `json:"accept"`
}