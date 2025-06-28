package entity

type Mail struct {
	ID         int64  `json:"id"`
	Judul      string `json:"judul"`
	Deskripsi  string `json:"deskripsi"`
	Kategori   string `json:"kategori"`
	TglUpload  string `json:"tgl_upload"`
	File       string `json:"file"`
	Note       string `json:"note"`
	Keterangan string `json:"keterangan"`
	Accept     bool   `json:"accept"`
}

func (Mail) TableName() string {
	return "mails"
}