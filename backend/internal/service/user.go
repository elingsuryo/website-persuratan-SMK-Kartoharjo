package service

import (
	"context"
	"errors"
	"time"

	"website-penyuratan-smk-kartoharjo/config"
	"website-penyuratan-smk-kartoharjo/internal/entity"
	"website-penyuratan-smk-kartoharjo/internal/http/dto"
	"website-penyuratan-smk-kartoharjo/internal/repository"

	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

type UserService interface {
	Login(ctx context.Context, email string, password string) (*entity.JwtCustomClaims, error)
	Register(ctx context.Context, req dto.UserRegisterRequest) error
	GetAll(ctx context.Context) ([]entity.User, error)
	GetByID(ctx context.Context, id int64) (*entity.User, error)
	Create(ctx context.Context, req dto.UserCreateRequest) error
	Update(ctx context.Context, req dto.UserUpdateRequest) error
	Delete(ctx context.Context, user *entity.User) error
}

// GenerateAccessToken implements TokenService.
func (u userService) GenerateAccessToken(ctx context.Context, claims entity.JwtCustomClaims) (string, error) {
	panic("unimplemented")
}

type userService struct {
	cfg            *config.Config
	userRepository repository.UserRepository
}

func NewUserService(cfg *config.Config, userRepository repository.UserRepository) UserService {
	return &userService{cfg, userRepository}
}

func (s *userService) Login(ctx context.Context, email string, password string) (*entity.JwtCustomClaims, error) {
	user, err := s.userRepository.GetByEmail(ctx, email)
	if err != nil {
		return nil, errors.New("email atau password salah")
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return nil, errors.New("email atau password salah")
	}

	expiredTime := time.Now().Add(time.Minute * 10)

	claims := &entity.JwtCustomClaims{
		Email: user.Email,
		FUllName: user.FullName,
		Role:     user.Role,
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    "penyuratan-app",
			ExpiresAt: jwt.NewNumericDate(expiredTime),
		},
	}

	return claims, nil
}

func (s *userService) Register(ctx context.Context, req dto.UserRegisterRequest) error {
	user := new(entity.User)
	user.Email = req.Email
	user.FullName = req.FullName
	user.Role = "headmaster"

	// exist, err := s.userRepository.GetByEmail(ctx, req.Email)
	// if err == nil && exist != nil {
	// 	return errors.New("email sudah terdaftar")
	// }
	// if err != nil {
	// return err
	// }

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	user.Password = string(hashedPassword)

	return s.userRepository.Create(ctx, user)
}
 
func (s userService)GetAll(ctx context.Context) ([]entity.User, error) {
	return s.userRepository.GetAll(ctx)
}

func (s userService) GetByID(ctx context.Context, id int64) (*entity.User, error) {
	return s.userRepository.GetByID(ctx, id)
}

func (s userService) Create(ctx context.Context, req dto.UserCreateRequest) error{
	User := &entity.User{
		Email: req.Email,
		Password: req.Password,	
		FullName: req.FullName,
		Whatsapp: req.Whatsapp,
		Role: req.Role,
	}
	exist, err := s.userRepository.GetByEmail(ctx, req.Email)
	if err == nil && exist != nil {
		return errors.New("email sudah terdaftar")
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	User.Password = string(hashedPassword)

	return s.userRepository.Create(ctx, User)
}


func (s userService) Update(ctx context.Context, req dto.UserUpdateRequest) error {
	user, err := s.userRepository.GetByID(ctx, req.ID)
	if err != nil {
		return err
	}
	if req.Email != "" {
		user.Email = req.Email
	}
	if req.FullName != "" {
		user.FullName = req.FullName
	}
	if req.Role != "" {
		user.Role = req.Role
	}
	if req.Password != "" {
		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
		if err != nil {
			return err
		}
		user.Password = string(hashedPassword)
	}
	if req.Whatsapp != "" {
		user.Whatsapp = req.Whatsapp
	}
	return s.userRepository.Update(ctx, user)
}	

func (s userService) Delete(ctx context.Context, user *entity.User) error{
	return s.userRepository.Delete(ctx, user)
}
