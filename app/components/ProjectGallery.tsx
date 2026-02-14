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

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const allMedia = [
    ...project.images.map((img) => ({ type: "image", src: img })),
    ...(project.videos?.map((vid) => ({ type: "video", src: vid })) || []),
  ];

  return (
    <div className="space-y-6">
      {/* Main Display */}
      <div className="rounded-lg overflow-hidden bg-gray-100 aspect-square flex items-center justify-center">
        {allMedia[selectedImageIndex]?.type === "image" ? (
          <Image
            src={allMedia[selectedImageIndex].src}
            alt={`${project.title} - Image ${selectedImageIndex + 1}`}
            className="w-full h-full object-cover"
            fill
          />
        ) : (
          <video
            src={allMedia[selectedImageIndex].src}
            controls
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-3">
        {allMedia.map((media, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              selectedImageIndex === index
                ? "border-blue-900"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {media.type === "image" ? (
              <Image
                src={media.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                fill
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-white text-2xl">▶</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
