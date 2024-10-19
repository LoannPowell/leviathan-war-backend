-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nick" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "activationCode" TEXT,
    "passwordResetCode" TEXT,
    "intelligence" INTEGER NOT NULL DEFAULT 1,
    "endurance" INTEGER NOT NULL DEFAULT 1,
    "coordination" INTEGER NOT NULL DEFAULT 1,
    "luck" INTEGER NOT NULL DEFAULT 1,
    "region" INTEGER NOT NULL,
    "factory" INTEGER NOT NULL,
    "pro" BOOLEAN NOT NULL DEFAULT false,
    "theme" TEXT NOT NULL DEFAULT 'light',
    "exp" INTEGER NOT NULL DEFAULT 420,
    "party" INTEGER,
    "residency" INTEGER,
    "donations" INTEGER NOT NULL DEFAULT 0,
    "birthday" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resting" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fatigue" INTEGER NOT NULL DEFAULT 0,
    "productivity" INTEGER NOT NULL DEFAULT 100,
    "timeToNextAction" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "levcoins" INTEGER NOT NULL DEFAULT 10,
    "country" TEXT NOT NULL,
    "workPermit1" INTEGER NOT NULL,
    "workPermit2" INTEGER NOT NULL,
    "workPermit3" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" INTEGER NOT NULL,
    "schools" INTEGER NOT NULL DEFAULT 1,
    "sportCenter" INTEGER NOT NULL DEFAULT 1,
    "universities" INTEGER NOT NULL DEFAULT 1,
    "recreativeCenter" INTEGER NOT NULL DEFAULT 1,
    "policeStation" INTEGER NOT NULL DEFAULT 1,
    "militaryCamps" INTEGER NOT NULL DEFAULT 1,
    "coalPlants" INTEGER NOT NULL DEFAULT 1,
    "waterPlants" INTEGER NOT NULL DEFAULT 1,
    "healthCenters" INTEGER NOT NULL DEFAULT 1,
    "militaryBases" INTEGER NOT NULL DEFAULT 1,
    "happiness" INTEGER NOT NULL DEFAULT 1,
    "basicEducation" INTEGER NOT NULL DEFAULT 1,
    "healthSystem" INTEGER NOT NULL DEFAULT 1,
    "higherEducation" INTEGER NOT NULL DEFAULT 1,
    "coalBonus" INTEGER NOT NULL DEFAULT 1,
    "uraniumBonus" INTEGER NOT NULL DEFAULT 1,
    "lithiumBonus" INTEGER NOT NULL DEFAULT 1,
    "diamondBonus" INTEGER NOT NULL DEFAULT 1,
    "waterBonus" INTEGER NOT NULL DEFAULT 1,
    "ironBonus" INTEGER NOT NULL DEFAULT 1,
    "oilBonus" INTEGER NOT NULL DEFAULT 1,
    "farmlandsBonus" INTEGER NOT NULL DEFAULT 1,
    "terrain" TEXT NOT NULL DEFAULT 'Mountains',
    "lat" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "lon" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
    "frontiers" TEXT NOT NULL DEFAULT '1',
    "countryCode" TEXT NOT NULL DEFAULT 'co',
    "isoNumeric" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "levcoins" INTEGER NOT NULL DEFAULT 1,
    "uranium" INTEGER NOT NULL DEFAULT 1,
    "coal" INTEGER NOT NULL DEFAULT 1,
    "lithium" INTEGER NOT NULL DEFAULT 1,
    "diamond" INTEGER NOT NULL DEFAULT 1,
    "water" INTEGER NOT NULL DEFAULT 1,
    "iron" INTEGER NOT NULL DEFAULT 1,
    "oil" INTEGER NOT NULL DEFAULT 1,
    "leader" INTEGER,
    "ministerOfEconomics" INTEGER,
    "ministerOfDefense" INTEGER,
    "ministerOfForeignAffairs" INTEGER,
    "kindOfGovernment" INTEGER NOT NULL DEFAULT 0,
    "electionsInProgress" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Party" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" INTEGER NOT NULL,
    "exp" INTEGER NOT NULL DEFAULT 200,
    "leader" INTEGER,
    "kindBonus" TEXT NOT NULL DEFAULT 'damage',
    "positionsInParlament" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Party_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Factory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "exp" INTEGER NOT NULL DEFAULT 500,
    "kindFactory" TEXT NOT NULL DEFAULT 'farmland',
    "percent" BOOLEAN NOT NULL DEFAULT true,
    "qty" INTEGER NOT NULL DEFAULT 0,
    "owner" INTEGER NOT NULL,
    "salary" INTEGER NOT NULL DEFAULT 0,
    "levcoins" INTEGER NOT NULL DEFAULT 0,
    "region" INTEGER NOT NULL,

    CONSTRAINT "Factory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nick_key" ON "User"("nick");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- CreateIndex
CREATE UNIQUE INDEX "State_name_key" ON "State"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Party_name_key" ON "Party"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Party_leader_key" ON "Party"("leader");

-- CreateIndex
CREATE UNIQUE INDEX "Factory_name_key" ON "Factory"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_region_fkey" FOREIGN KEY ("region") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_factory_fkey" FOREIGN KEY ("factory") REFERENCES "Factory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_party_fkey" FOREIGN KEY ("party") REFERENCES "Party"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workPermit1_fkey" FOREIGN KEY ("workPermit1") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workPermit2_fkey" FOREIGN KEY ("workPermit2") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_workPermit3_fkey" FOREIGN KEY ("workPermit3") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_state_fkey" FOREIGN KEY ("state") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_state_fkey" FOREIGN KEY ("state") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Party" ADD CONSTRAINT "Party_leader_fkey" FOREIGN KEY ("leader") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factory" ADD CONSTRAINT "Factory_owner_fkey" FOREIGN KEY ("owner") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factory" ADD CONSTRAINT "Factory_region_fkey" FOREIGN KEY ("region") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
