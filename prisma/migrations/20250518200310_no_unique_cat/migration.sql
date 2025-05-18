-- DropIndex
DROP INDEX "Exercise_cat_id_key";

-- AlterTable
ALTER TABLE "Exercise" ALTER COLUMN "type" SET DEFAULT 'primary';
