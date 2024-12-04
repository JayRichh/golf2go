"use client";

import { useState } from "react";

import Image from "next/image";

import { Modal } from "~/components/ui/Modal";
import { Text } from "~/components/ui/Text";

interface ImagePreviewProps {
  src: string;
  alt: string;
  title: string;
}

export function ImagePreview({ src, alt, title }: ImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center transition will-change-transform group-hover:scale-105"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 flex items-end p-6">
            <div className="translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Text variant="lg" className="font-medium text-white">
                {title}
              </Text>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-7xl p-0 overflow-hidden"
      >
        <div className="relative aspect-[4/3] w-full">
          <Image src={src} alt={alt} fill className="object-contain" sizes="95vw" priority />
        </div>
        <div className="bg-background p-4 text-center">
          <Text variant="lg" className="font-medium">
            {title}
          </Text>
        </div>
      </Modal>
    </>
  );
}
