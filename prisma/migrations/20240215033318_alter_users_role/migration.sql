/*
  Warnings:

  - You are about to alter the column `borrow_date` on the `borrows` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `return_date` on the `borrows` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `borrows` MODIFY `borrow_date` TIMESTAMP NOT NULL,
    MODIFY `return_date` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` VARCHAR(10) NOT NULL;
