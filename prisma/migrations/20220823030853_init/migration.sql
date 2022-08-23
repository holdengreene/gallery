-- CreateTable
CREATE TABLE "gallery" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "cover_photo" TEXT,
    "category" TEXT NOT NULL,

    CONSTRAINT "gallery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "gallery_id" BIGINT NOT NULL,
    "image" TEXT NOT NULL,
    "thumbnail_image" TEXT,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_gallery" ON "gallery"("id");

-- CreateIndex
CREATE INDEX "idx_image" ON "image"("id");

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_gallery_id_fkey" FOREIGN KEY ("gallery_id") REFERENCES "gallery"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
