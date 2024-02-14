-- CreateTable
CREATE TABLE `books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `author` VARCHAR(100) NOT NULL,
    `publisher` VARCHAR(100) NOT NULL,
    `stock` INTEGER NOT NULL,
    `status` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE INNODB;

-- CreateTable
CREATE TABLE `borrowers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE INNODB;

-- CreateTable
CREATE TABLE `borrows` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `book_id` INTEGER NOT NULL,
    `borrower_id` INTEGER NOT NULL,
    `borrow_date` TIMESTAMP NOT NULL,
    `return_date` TIMESTAMP NOT NULL,
    `status` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `borrows_book_id_key`(`book_id`),
    UNIQUE INDEX `borrows_borrower_id_key`(`borrower_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE INNODB;

-- AddForeignKey
ALTER TABLE `borrows` ADD CONSTRAINT `borrows_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `borrows` ADD CONSTRAINT `borrows_borrower_id_fkey` FOREIGN KEY (`borrower_id`) REFERENCES `borrowers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
