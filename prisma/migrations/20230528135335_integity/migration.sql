-- DropForeignKey
ALTER TABLE `students` DROP FOREIGN KEY `students_parentId_fkey`;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `parents`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
