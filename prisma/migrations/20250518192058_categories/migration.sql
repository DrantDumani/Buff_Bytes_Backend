/*
  Warnings:

  - A unique constraint covering the columns `[cat_id]` on the table `Exercise` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cat_id` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "cat_id" INTEGER NOT NULL,
ALTER COLUMN "type" SET DEFAULT 'primary';

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_cat_id_key" ON "Exercise"("cat_id");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
