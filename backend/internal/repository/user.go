package repository

import (
	"context"

	"website-penyuratan-smk-kartoharjo/internal/entity"

	"gorm.io/gorm"
)

type UserRepository interface {
	GetByEmail(ctx context.Context, email string) (*entity.User, error)
    // GetByResetPasswordToken(ctx context.Context, token string) (*entity.User, error)
    // GetByVerifyEmailToken(ctx context.Context, token string) (*entity.User, error)
	GetAll(ctx context.Context) ([]entity.User, error)
    Create(ctx context.Context, user *entity.User) error
    Update(ctx context.Context, user *entity.User) error
    Delete(ctx context.Context, user *entity.User) error
	GetByID(ctx context.Context, id int64) (*entity.User, error)
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepository{db}
}

func (u *userRepository) GetByEmail(ctx context.Context, email string) (*entity.User, error) {
	result := new(entity.User)

	if err := u.db.WithContext(ctx).Where("email = ?", email).First(&result).Error; err != nil {
		return nil, err
	}
	return result, nil
}

func (u userRepository) GetAll(ctx context.Context) ([]entity.User, error) {
    result := make([]entity.User, 0)

    if err := u.db.WithContext(ctx).Find(&result).Error; err != nil {
        return nil, err 
    }
   return result, nil
}

func (u *userRepository) Create(ctx context.Context, user *entity.User) error {
    return u.db.WithContext(ctx).Create(&user).Error
}

func (u userRepository) Update(ctx context.Context, user *entity.User) error {
    return u.db.WithContext(ctx).Updates(&user).Error
}

func (u userRepository) Delete(ctx context.Context, user *entity.User) error {
    return u.db.WithContext(ctx).Delete(&user).Error
}

func (u *userRepository) GetByID(ctx context.Context, id int64) (*entity.User, error) {
	result := new(entity.User)

    if err := u.db.WithContext(ctx).Where("id = ?", id).First(&result).Error; err != nil {
        return nil, err
    }
    return result, nil
}