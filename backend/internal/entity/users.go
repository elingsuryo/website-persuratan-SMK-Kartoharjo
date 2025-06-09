package entity

type User struct {
	ID       int64  `json:"id"`
	Email    string `json:"email"`
	Password string `json:"-"`
	FullName string `json:"full_name"`
	Whatsapp string `json:"whatsapp"`
	Role     string `json:"role"`
}

func (User) TableName() string {
	return "users"
}