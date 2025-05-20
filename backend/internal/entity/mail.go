package entity

type Mail struct {
	ID        int64  `json:"id"`
	To        string `json:"to"`
	File      string `json:"file"`
	Signature int64  `json:"signature"`
	Access    int64  `json:"acc"`
}

func (Mail) TableName() string {
	return "mails"
}