/*
  Warnings:

  - The `pro` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_factory_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_region_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_workPermit1_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_workPermit2_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_workPermit3_fkey";

-- DropIndex
DROP INDEX "User_nick_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "region" DROP NOT NULL,
ALTER COLUMN "factory" DROP NOT NULL,
DROP COLUMN "pro",
ADD COLUMN     "pro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "country" SET DEFAULT '',
ALTER COLUMN "workPermit1" DROP NOT NULL,
ALTER COLUMN "workPermit2" DROP NOT NULL,
ALTER COLUMN "workPermit3" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ProspectUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nick" TEXT NOT NULL,

    CONSTRAINT "ProspectUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_region_fkey" FOREIGN KEY ("region") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_factory_fkey" FOREIGN KEY ("factory") REFERENCES "Factory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workPermit1_fkey" FOREIGN KEY ("workPermit1") REFERENCES "State"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workPermit2_fkey" FOREIGN KEY ("workPermit2") REFERENCES "State"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workPermit3_fkey" FOREIGN KEY ("workPermit3") REFERENCES "State"("id") ON DELETE SET NULL ON UPDATE CASCADE;
