/*
  Warnings:

  - Added the required column `marks` to the `results` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `results` ADD COLUMN `marks` INTEGER NOT NULL;
