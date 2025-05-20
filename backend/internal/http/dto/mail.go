package dto

type GetMailByIDRequest struct {
	ID int64 `param:"id" validate:"required"` //json, param mail/ I=param, query ?id_pengguna=asdsasort
}

type CreateMailRequest struct {
	To       string `json:"to" validate:"required"` //json, param mail/ I=param, query ?id_pengguna=asdsasort
	File        string  `json:"file" validate:"required"`
	Signature    int64 `json:"signature" validate:"required"`
	Access int64 `json:"acc"`
}

type UpdateMailRequest struct {
	ID          int64  `param:"id" validate:"required"`
	Title       string `json:"to" validate:"required"` //json, param mail/ I=param, query ?id_pengguna=asdsasort
	Year        string  `json:"file" validate:"required"`
	Director    int64 `json:"signature" validate:"required"`
	Description int64 `json:"acc"`
}