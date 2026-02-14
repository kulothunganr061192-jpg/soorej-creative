"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectDetail {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string[];
  images: string[];
  videos?: string[];
  color: string;
  fullDescription: string;
}

interface ProjectGalleryProps {
  project: ProjectDetail;
}

interface ImageDimensions {
  [key: string]: { width: number; height: number };
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({});

  const allMedia = [
    ...project.images.map((img) => ({ type: "image", src: img })),
    ...(project.videos?.map((vid) => ({ type: "video", src: vid })) || []),
  ];

  const handleImageLoad = (src: string, width: number, height: number) => {
    setImageDimensions((prev) => ({
      ...prev,
      [src]: { width, height },
    }));
  };

  const getGridClass = (src: string, index: number) => {
    const dims = imageDimensions[src];
    if (!dims) return "col-span-1 row-span-1";

    const aspectRatio = dims.width / dims.height;

    // Landscape (wider) - span 2 columns
    if (aspectRatio > 1.2) {
      return "col-span-2 row-span-1";
    }
    // Portrait (taller) - span 2 rows
    if (aspectRatio < 0.8) {
      return "col-span-1 row-span-2";
    }
    // Square or nearly square
    return "col-span-1 row-span-1";
  };

  return (
    <div className="space-y-6">
      

      {/* Masonry Gallery Grid */}
      <div className="grid grid-cols-4 gap-6 auto-rows-[250px]">
        {allMedia.map((media, index) => (
          <div
            key={index}
            className={`${getGridClass(media.src, index)} rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center relative`}
          >
            {media.type === "image" ? (
              <Image
                src={media.src}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onLoad={(result) => {
                  const img = result.target as HTMLImageElement;
                  handleImageLoad(media.src, img.naturalWidth, img.naturalHeight);
                }}
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-white text-4xl">▶</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
