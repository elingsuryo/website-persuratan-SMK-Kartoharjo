package entity

type Mail struct {
	ID        int64  `json:"id"`
	Dari      string `json:"dari"`
	Ke        string `json:"ke"`
	File      string `json:"file"`
	Date      string `json:"date"`
	Signature int64  `json:"signature"`
}

func (Mail) TableName() string {
	return "mails"
}