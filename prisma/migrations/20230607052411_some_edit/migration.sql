/*
  Warnings:

  - Added the required column `date` to the `exams` table without a default value. This is not possible if the table is not empty.
  - Added the required column `termId` to the `exams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exams` ADD COLUMN `date` DATE NOT NULL,
    ADD COLUMN `termId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `terms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `term_name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `terms_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `exams` ADD CONSTRAINT `exams_termId_fkey` FOREIGN KEY (`termId`) REFERENCES `terms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
