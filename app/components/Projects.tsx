"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  slug: string;
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
  limit?: number;
}

export default function Projects({
  projects,
  title = "Projects",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  limit = 7,
}: ProjectsProps) {
  const displayedProjects = projects.slice(0, limit);
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-12">{description}</p>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {displayedProjects.map((project, index) => {
              const heights = [250, 300, 350, 400];
              const randomHeight = heights[index % heights.length];
              return (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project.id}
                  className={`${
                    project.color || "bg-gray-300"
                  } rounded-lg overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid block`}
                  style={{ height: `${randomHeight}px` }}
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
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <button className="text-blue-900 font-bold hover:text-blue-700 transition">
            View Full Portfolio →
          </button>
        </div>
      </div>
    </section>
  );
}
