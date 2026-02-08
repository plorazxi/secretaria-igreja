-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "rg" TEXT,
    "celular" CHAR(11) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "endereco" TEXT NOT NULL,
    "data_entrada" DATE NOT NULL,
    "note" VARCHAR(300) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_rg_key" ON "Cliente"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_celular_key" ON "Cliente"("celular");
