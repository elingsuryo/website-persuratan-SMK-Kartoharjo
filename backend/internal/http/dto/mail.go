package dto

type GetMailByIDRequest struct {
	ID int64 `param:"id" validate:"required"` //json, param mail/ I=param, query ?id_pengguna=asdsasort
}

type GetAllMailResponse struct {
	ID        int64  `json:"id"`
	Dari      string `json:"dari"`
	Ke        string `json:"ke"`
	File      string `json:"file"`
	Date      string `json:"date"`
	Signature int64  `json:"signature"`
}

type CreateMailRequest struct {
	Dari      string `json:"dari"`
	Ke        string `json:"ke" validate:"required"` //json, param mail/ I=param, query ?id_pengguna=asdsasort
	File      string `json:"file" validate:"required"`
	Date      string `json:"date"`
	Signature int64  `json:"signature" validate:"required"`
}

type UpdateMailRequest struct {
	ID        int64  `param:"id" validate:"required"`
	Dari      string `json:"dari"`
	Ke        string `json:"ke" validate:"required"` //json, param mail/ I=param, query ?id_pengguna=asdsasort
	File      string `json:"file" validate:"required"`
	Date      string `json:"date"`
	Signature int64  `json:"signature" validate:"required"`
}