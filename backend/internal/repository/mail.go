package repository

import (
	"context"

	"website-penyuratan-smk-kartoharjo/internal/entity"

	"gorm.io/gorm"
)

type MailRepository interface {
    GetByID(ctx context.Context, id int64) (*entity.Mail, error)
    GetAll(ctx context.Context) ([]entity.Mail, error)
    Create(ctx context.Context, mail *entity.Mail) error
    Update(ctx context.Context, mail *entity.Mail) error
    Delete(ctx context.Context, mail *entity.Mail) error
}

type mailRepository struct {
	db *gorm.DB
}

func NewmailRepository(db *gorm.DB) MailRepository {
	return &mailRepository{db}
}

func (u mailRepository) GetByID(ctx context.Context, id int64) (*entity.Mail, error) {
    result := new(entity.Mail)

    if err := u.db.WithContext(ctx).Where("id = ?", id).First(&result).Error; err != nil {
        return nil, err
    }
    return result, nil
}

func (u mailRepository) GetAll(ctx context.Context) ([]entity.Mail, error) {
    result := make([]entity.Mail, 0)

    if err := u.db.WithContext(ctx).Find(&result).Error; err != nil {
        return nil, err 
    }
    return result, nil
}

func (u mailRepository) Create(ctx context.Context, mail *entity.Mail) error {
    return u.db.WithContext(ctx).Create(&mail).Error
}

func (u mailRepository) Update(ctx context.Context, mail *entity.Mail) error {
    return u.db.WithContext(ctx).Updates(&mail).Error
}

func (u mailRepository) Delete(ctx context.Context, mail *entity.Mail) error {
    return u.db.WithContext(ctx).Delete(&mail).Error
}