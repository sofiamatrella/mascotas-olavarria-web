/*
  Warnings:

  - You are about to drop the column `age` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `ageLabel` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ageMonth` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ageYear` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "age",
ADD COLUMN     "ageLabel" TEXT NOT NULL,
ADD COLUMN     "ageMonth" INTEGER NOT NULL,
ADD COLUMN     "ageYear" INTEGER NOT NULL;
