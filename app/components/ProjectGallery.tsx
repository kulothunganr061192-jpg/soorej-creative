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

export default function ProjectGallery({ project }: { project: ProjectDetail }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <>
      <div className="space-y-6">
        {/* Main Image */}
        <div
          className={`${project.color} rounded-lg overflow-hidden aspect-video flex items-center justify-center cursor-pointer group relative`}
          onClick={() => {
            setSelectedImage(project.images[0] || null);
            setCurrentImageIndex(0);
          }}
        >
          {project.images[0] ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="text-6xl text-white/30">▶</div>
          )}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 gap-4">
          {project.images.slice(1).map((image, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden aspect-square cursor-pointer group relative bg-gray-200 flex items-center justify-center`}
              onClick={() => {
                setSelectedImage(image);
                setCurrentImageIndex(index + 1);
              }}
            >
              {image ? (
                <Image
                  src={image}
                  alt={`${project.title} - ${index + 2}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="text-4xl text-gray-400">+</div>
              )}
            </div>
          ))}
        </div>

        {/* Video Section */}
        {project.videos && project.videos.length > 0 && (
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              Video Showcase
            </h3>
            {project.videos.map((video, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden aspect-video bg-gray-900 flex items-center justify-center"
              >
                <video
                  src={video}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-6xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Project Preview"
              fill
              className="object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 font-bold px-4 py-2 rounded-lg transition"
            >
              ✕ Close
            </button>

            {/* Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                onClick={() => {
                  const newIndex =
                    currentImageIndex === 0
                      ? project.images.length - 1
                      : currentImageIndex - 1;
                  setCurrentImageIndex(newIndex);
                  setSelectedImage(project.images[newIndex]);
                }}
                className="bg-white/90 hover:bg-white px-4 py-2 rounded-lg transition font-semibold"
              >
                ← Previous
              </button>
              <button
                onClick={() => {
                  const newIndex =
                    currentImageIndex === project.images.length - 1
                      ? 0
                      : currentImageIndex + 1;
                  setCurrentImageIndex(newIndex);
                  setSelectedImage(project.images[newIndex]);
                }}
                className="bg-white/90 hover:bg-white px-4 py-2 rounded-lg transition font-semibold"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
