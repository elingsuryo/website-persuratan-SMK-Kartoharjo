package service

import (
	"context"

	"website-penyuratan-smk-kartoharjo/internal/entity"
	"website-penyuratan-smk-kartoharjo/internal/http/dto"
	"website-penyuratan-smk-kartoharjo/internal/repository"
)

type MailService interface {
	GetAll(ctx context.Context) ([]entity.Mail, error)
	GetByID(ctx context.Context, id int64) (*entity.Mail, error)
	Create(ctx context.Context, req dto.CreateMailRequest) error
	Update(ctx context.Context, req dto.UpdateMailRequest) error
    Delete(ctx context.Context, mails *entity.Mail) error

}


type mailService struct {
	mailsRepository repository.MailRepository
}

func NewMailService(mailsRepository repository.MailRepository) MailService {
	return &mailService{mailsRepository}
}

 func (s mailService ) GetAll(ctx context.Context) ([]entity.Mail, error){
	 return s.mailsRepository.GetAll(ctx)
 }

func (s mailService) GetByID(ctx context.Context, id int64) (*entity.Mail, error){
	 return s.mailsRepository.GetByID(ctx, id)
}

func (s mailService) Create(ctx context.Context, req dto.CreateMailRequest) error{
	mail := &entity.Mail{
		Dari: req.Dari,
		Ke: req.Ke,
		File: req.File,	
		Date: req.Date,
		Signature: req.Signature,
	}
	return s.mailsRepository.Create(ctx, mail)
}

func (s mailService) Update(ctx context.Context, req dto.UpdateMailRequest) error{
	mails, err := s.mailsRepository.GetByID(ctx, req.ID)
	if err != nil {
		return err
	}
	if req.Dari != "" {
		mails.Dari = req.Dari
	}
	if req.Ke != "" {
		mails.Ke = req.Ke
	}
	if req.File != "" {
		mails.File = req.File
	}
	if req.Date != "" {
		mails.Date = req.Date
	}
	return s.mailsRepository.Update(ctx, mails)
}

func (s mailService) Delete(ctx context.Context, mails *entity.Mail) error{
	return s.mailsRepository.Delete(ctx, mails)
}