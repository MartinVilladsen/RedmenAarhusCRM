/*
  Warnings:

  - Added the required column `content` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Podcast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Podcast" ADD COLUMN     "content" TEXT NOT NULL;
