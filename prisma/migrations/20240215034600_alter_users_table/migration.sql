/*
  Warnings:

  - You are about to alter the column `borrow_date` on the `borrows` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `return_date` on the `borrows` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `borrows` MODIFY `borrow_date` TIMESTAMP NOT NULL,
    MODIFY `return_date` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `token` VARCHAR(100) NULL;
