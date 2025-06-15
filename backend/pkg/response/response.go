package response

type Response struct {
	Meta  Meta        `json:"meta"`
	Data  interface{} `json:"data"`
	Error interface{} `json:"error"`
}

type Meta struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

func SuccessResponse(message string, data interface{}) map[string]interface{} {
	return map[string]interface{}{
		"message": message,
		"data":    data,
	}
}

func ErrorResponse(code int, message string) Response {
	return Response{
		Meta: Meta{
			Code:    code,
			Message: message,
		},
		Data: nil,
	}
}