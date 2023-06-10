/*
  Warnings:

  - A unique constraint covering the columns `[externalId]` on the table `Pet` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Shelter" (
    "id" SERIAL NOT NULL,
    "externalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT[],
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "Shelter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "externalId" TEXT NOT NULL,
    "shelterId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shelter_externalId_key" ON "Shelter"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_externalId_key" ON "Event"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "Pet_externalId_key" ON "Pet"("externalId");

-- AddForeignKey
ALTER TABLE "Shelter" ADD CONSTRAINT "Shelter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("externalId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("externalId") ON DELETE RESTRICT ON UPDATE CASCADE;
