/*
  Warnings:

  - A unique constraint covering the columns `[userId,athleteId]` on the table `AttributeSubmission` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AttributeSubmission" DROP CONSTRAINT "AttributeSubmission_userId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "AttributeSubmission_userId_athleteId_key" ON "AttributeSubmission"("userId", "athleteId");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "AttributeSubmission" ADD CONSTRAINT "AttributeSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
