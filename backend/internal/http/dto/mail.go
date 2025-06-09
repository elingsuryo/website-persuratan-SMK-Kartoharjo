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
	Dari      string `json:"dari"`
	Judul     string `json:"judul"`
	Deskripsi string `json:"deskripsi"`
	Kategori  string `json:"kategori"`
	TglUpload string `json:"tgl_upload"`
	File      string `json:"file"`
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