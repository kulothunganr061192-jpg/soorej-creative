"use client";

import Image from "next/image";

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
  const allMedia = [
    ...project.images.map((img) => ({ type: "image", src: img })),
    ...(project.videos?.map((vid) => ({ type: "video", src: vid })) || []),
  ];

  return (
    <div className="space-y-6">
      {/* Title Section */}
      <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center min-h-62.5">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
          <p className="text-lg text-gray-600 mt-2">{project.category}</p>
        </div>
      </div>

      {/* Images Layout - Left Featured + Right Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Side - Large Featured Image */}
        {allMedia[0] && (
          <div className="rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center relative row-span-full h-137.5">
            {allMedia[0].type === "image" ? (
              <Image
                src={allMedia[0].src}
                alt={`${project.title} - Featured`}
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-white text-6xl">▶</span>
              </div>
            )}
          </div>
        )}

        {/* Right Side - Images Grid */}
        <div className="grid grid-cols-1 gap-6 auto-rows-[250px]">
          {allMedia.slice(1).map((media, index) => (
            <div
              key={index + 1}
              className="rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center relative"
            >
              {media.type === "image" ? (
                <Image
                  src={media.src}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
    </div>
  );
}
