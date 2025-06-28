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
	Signed(ctx context.Context, req dto.SignedMailRequest) error
	Reject(ctx context.Context, req dto.RejectMailRequest) error
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
		Judul:     req.Judul,
		Deskripsi: req.Deskripsi,
		Kategori:  req.Kategori,
		TglUpload: req.TglUpload,
		File:      req.File,
		Keterangan: "Diproses",
		Accept:    false,
	}
	return s.mailsRepository.Create(ctx, mail)
}

func (s mailService) Update(ctx context.Context, req dto.UpdateMailRequest) error{
	mails, err := s.mailsRepository.GetByID(ctx, req.ID)
	if err != nil {
		return err
	}
	if req.Judul != "" {
		mails.Judul = req.Judul
	}
	if req.Deskripsi != "" {
		mails.Deskripsi = req.Deskripsi
	}
	if req.TglUpload != "" {
		mails.TglUpload = req.TglUpload
	}
	if req.File != "" {
		mails.File = req.File
	}
	if req.Kategori != "" {
		mails.Kategori = req.Kategori
	}
	
	return s.mailsRepository.Update(ctx, mails)
}

func (s mailService) Delete(ctx context.Context, mails *entity.Mail) error{
	return s.mailsRepository.Delete(ctx, mails)
}

func (s mailService) Signed(ctx context.Context, req dto.SignedMailRequest) error{
	mails, err := s.mailsRepository.GetByID(ctx, req.ID)
	if err != nil {
		return err
	}
	if req.File != "" {
		mails.File = req.File
	}
	if req.Keterangan != "" {
		mails.Keterangan = "Diterima"
	}
	mails.Accept = true
	return s.mailsRepository.Update(ctx, mails)
}

func (s mailService) Reject(ctx context.Context, req dto.RejectMailRequest) error{
	mails, err := s.mailsRepository.GetByID(ctx, req.ID)
	if err != nil {
		return err
	}
	if req.Keterangan != "" {
		mails.Keterangan = "Ditolak"
	}
	mails.Note = req.Note
	mails.Accept = false
	return s.mailsRepository.Update(ctx, mails)
}