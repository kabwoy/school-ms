/*
  Warnings:

  - You are about to alter the column `gender` on the `parents` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `parents` MODIFY `gender` ENUM('MALE', 'FEMALE') NOT NULL DEFAULT 'MALE';
