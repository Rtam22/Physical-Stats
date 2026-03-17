/*
  Warnings:

  - You are about to drop the `BuildTeam` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BuildTeam" DROP CONSTRAINT "BuildTeam_userId_fkey";

-- DropTable
DROP TABLE "BuildTeam";

-- CreateTable
CREATE TABLE "AllstarTeam" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "athleteIds" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AllstarTeam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AllstarTeam_userId_idx" ON "AllstarTeam"("userId");

-- AddForeignKey
ALTER TABLE "AllstarTeam" ADD CONSTRAINT "AllstarTeam_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
