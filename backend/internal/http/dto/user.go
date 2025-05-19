package dto

type UserLoginRequest struct {
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
}

type UserRegisterRequest struct {
	Email    string `json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
	FullName string `json:"full_name" validate:"required"`
}

type GetAllUserResponse struct {
	ID       int64  `json:"id"`
	Email    string `json:"email"`
	FullName string `json:"full_name"`
	Role     string `json:"role"`
}

type GetUserByIDRequest struct {
	ID int64 `param:"id" validate:"required"` //json, param movie/ I=param, query ?id_pengguna=asdsasort
}

type UserUpdateRequest struct {
	ID       int64  `param:"id" validate:"required"`       //json, param movie/ I=param, query ?id_pengguna=asdsasort
	Email    string `json:"email" validate:"required"`     //json, param movie/ I=param, query ?id_pengguna=asdsasort
	FullName string `json:"full_name" validate:"required"` //json, param movie/ I=param, query ?id_pengguna=asdsasort
	Role     string `json:"role" validate:"required"`      //json, param movie/ I=param, query ?id_pengguna=asdsasort
	Password string `json:"password" validate:"required"`  //json, param movie/ I=param, query ?id_pengguna=asdsasort
}

type UserCreateRequest struct {
	Email    string `json:"email" validate:"required"`     //json, param movie/ I=param, query ?id_pengguna=asdsasort
	FullName string `json:"full_name" validate:"required"` //json, param movie/ I=param, query ?id_pengguna=asdsasort
	Role     string `json:"role" validate:"required"`      //json, param movie/ I=param, query ?id_pengguna=asdsasort
	Password string `json:"password" validate:"required"`  //json, param movie/ I=param, query ?id_pengguna=asdsasortS
}

type RequestResetPassword struct {
	Email string `json:"email" validate:"required"`
}

type ResetPasswordRequest struct {
	Token    string `param:"token" validate:"required"`
	Password string `json:"password" validate:"required"`
}

type VerifyEmailRequest struct {
	Token string `param:"token" validate:"required"`
}