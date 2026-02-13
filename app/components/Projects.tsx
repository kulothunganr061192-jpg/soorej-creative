"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  type: "image" | "video";
  src: string;
  color?: string;
  description?: string;
  category?: string;
  width?: number;
  height?: number;
}

interface ProjectsProps {
  projects: Project[];
  title?: string;
  description?: string;
}

export default function Projects({
  projects,
  title = "Projects",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-12">{description}</p>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {projects.map((project, index) => {
              const heights = [250, 300, 350, 400];
              const randomHeight = heights[index % heights.length];
              return (
                <div
                  key={project.id}
                  className={`${
                    project.color || "bg-gray-300"
                  } rounded-lg overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid`}
                  style={{ height: `${randomHeight}px` }}
                onClick={() => setSelectedProject(project)}
              >
                {project.type === "image" ? (
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={project.src}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  {project.type === "video" ? (
                    <div className="text-6xl text-white/50 group-hover:text-white/80 transition-all">
                      ▶
                    </div>
                  ) : (
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      <p className="font-semibold">{project.title}</p>
                      {project.category && (
                        <p className="text-sm text-gray-300">{project.category}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Label for non-image projects */}
                {project.type === "video" && !project.src && (
                  <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-sm font-bold text-gray-900">
                    {project.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="text-blue-900 font-bold hover:text-blue-700 transition">
            View Full Portfolio →
          </button>
        </div>
      </div>

      {/* Modal for selected project */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-video bg-gray-900">
              {selectedProject.type === "image" ? (
                <Image
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <video
                  src={selectedProject.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedProject.title}
              </h3>
              {selectedProject.category && (
                <p className="text-teal-600 font-semibold mb-4">
                  {selectedProject.category}
                </p>
              )}
              {selectedProject.description && (
                <p className="text-gray-600">{selectedProject.description}</p>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
