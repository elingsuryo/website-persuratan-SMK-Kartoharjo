BEGIN;
CREATE TABLE IF NOT EXISTS mails(
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    deskripsi VARCHAR(255) NOT NULL,
    jenis VARCHAR(255) NOT NULL,
    kategori VARCHAR(255) NOT NULL,
    tgl_upload VARCHAR(255) NOT NULL,
    keterangan VARCHAR(255),
    note VARCHAR(255),
    tujuan VARCHAR(255),
    file VARCHAR(255) NOT NULL,
    accept Boolean
);

COMMIT;