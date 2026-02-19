-- CreateTable
CREATE TABLE "UnlockedAthletes" (
    "userId" TEXT NOT NULL,
    "athleteIds" TEXT[],

    CONSTRAINT "UnlockedAthletes_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "UnlockedAthletes" ADD CONSTRAINT "UnlockedAthletes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
