-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttributeSubmission" (
    "id" TEXT NOT NULL,
    "athleteId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "mvp" BOOLEAN,
    "comment" TEXT,
    "ranking" TEXT,
    "values" JSONB NOT NULL,

    CONSTRAINT "AttributeSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BuildTeam" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "athleteIds" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BuildTeam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AttributeSubmission_athleteId_idx" ON "AttributeSubmission"("athleteId");

-- CreateIndex
CREATE INDEX "AttributeSubmission_userId_idx" ON "AttributeSubmission"("userId");

-- CreateIndex
CREATE INDEX "BuildTeam_userId_idx" ON "BuildTeam"("userId");

-- AddForeignKey
ALTER TABLE "AttributeSubmission" ADD CONSTRAINT "AttributeSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildTeam" ADD CONSTRAINT "BuildTeam_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
