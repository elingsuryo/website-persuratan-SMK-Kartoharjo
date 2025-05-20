package service

import (
	"context"

	"github.com/elingsuryo/website-persuratan-SMK-Kartoharjo/internal/entity"
	"github.com/elingsuryo/website-persuratan-SMK-Kartoharjo/internal/http/dto"
	"github.com/elingsuryo/website-persuratan-SMK-Kartoharjo/internal/repository"
)

type MailService interface {
	GetAll(ctx context.Context) ([]entity.Mail, error)
	GetByID(ctx context.Context, id int64) (*entity.Mail, error)
	Insert(ctx context.Context, req dto.CreateMailRequest) error
	Update(ctx context.Context, req dto.UpdateMailRequest) error
    Delete(ctx context.Context, mails *entity.Mail) error

}


type mailService struct {
	mailsRepository repository.MailsRepository
}

func NewMailService(mailsRepository repository.MailsRepository) MailService {
	return &mailService{mailsRepository}
}

 func (s mailService ) GetAll(ctx context.Context) ([]entity.Mail, error){
	 return s.mailsRepository.GetAll(ctx)
 }

func (s mailService) GetByID(ctx context.Context, id int64) (*entity.Mail, error){
	 return s.maiksRepository.GetByID(ctx, id)
}

func (s mailService) Insert(ctx context.Context, req dto.CreateMailRequest) error{
	mail := &entity.Mail{
		To: req.To,
		File: req.File,	
		Signature: req.Signature,
		Access: req.Access,
	}
	return s.mailsRepository.Insert(ctx, mail)
}

func (s mailService) Update(ctx context.Context, req dto.UpdateMailRequest) error{
	mails, err := s.mailsRepository.GetByID(ctx, req.ID)
	if err != nil {
		return err
	}
	if req.To != "" {
		mails.To = req.To
	}
	if req.File != 0 {
		mails.File = req.File
	}
	if req.Signature != "" {
		mails.Signature = req.Signature
	}
	if req.Access != "" {
		mails.Access = req.Access
	}
	return s.mailsRepository.Update(ctx, mails)
}

func (s mailService) Delete(ctx context.Context, mails *entity.Mail) error{
	return s.mailssRepository.Delete(ctx, mails)
}