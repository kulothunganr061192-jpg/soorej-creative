"use client";

import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  type: "image" | "video";
  src: string;
  color?: string;
  description?: string;
  category?: string;
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "Brand Identity Design",
    "Campaign Design",
    "Generative Art",
    "Design for video",
    "Event Identity Design",
    "Brand Mark Design",
    "Art Direction",
    "Packaging Design",
    "Posters",
    "Illustrations",
    "Web Landing Pages",
    "Web App UI",
  ];

  const projectsData: Project[] = [
    {
      id: 1,
      title: "Motion Design Showcase",
      type: "video",
      src: "",
      color: "bg-teal-300",
      category: "Design for video",
      description: "A captivating motion design project showcasing creative animation techniques and storytelling through movement.",
    },
    {
      id: 2,
      title: "Brand Identity System",
      type: "image",
      src: "/placeholder.jpg",
      color: "bg-yellow-400",
      category: "Brand Identity Design",
      description: "Complete brand identity system including logo, color palette, and design guidelines.",
    },
    {
      id: 3,
      title: "Website Design",
      type: "image",
      src: "/placeholder.jpg",
      color: "bg-blue-900",
      category: "Web Landing Pages",
      description: "Modern and responsive website design with focus on user experience and conversion.",
    },
    {
      id: 4,
      title: "Mobile App Interface",
      type: "image",
      src: "/placeholder.jpg",
      color: "bg-rose-300",
      category: "Web App UI",
      description: "Intuitive mobile app interface design with seamless user interaction.",
    },
    {
      id: 5,
      title: "Product Photography",
      type: "image",
      src: "/placeholder.jpg",
      color: "bg-gray-500",
      category: "Posters",
      description: "Professional product photography showcasing details and quality.",
    },
    {
      id: 6,
      title: "Illustration Series",
      type: "image",
      src: "/placeholder.jpg",
      color: "bg-yellow-500",
      category: "Illustrations",
      description: "Custom illustration series for brand storytelling and visual communication.",
    },
    {
      id: 7,
      title: "Packaging Design",
      type: "image",
      src: "/placeholder.jpg",
      color: "bg-amber-700",
      category: "Packaging Design",
      description: "Eye-catching packaging design that stands out on shelves.",
    },
    {
      id: 8,
      title: "Video Marketing Campaign",
      type: "video",
      src: "",
      color: "bg-blue-800",
      category: "Campaign Design",
      description: "Engaging video marketing campaign for product launch and brand awareness.",
    },
    {
      id: 9,
      title: "Social Media Campaign",
      type: "image",
      src: "/placeholder.jpg",
      color: "bg-yellow-400",
      category: "Campaign Design",
      description: "Comprehensive social media campaign with consistent visual language.",
    },
    {
      id: 10,
      title: "Print Design",
      type: "image",
      src: "/placeholder.jpg",
      color: "bg-teal-200",
      category: "Posters",
      description: "Professional print design including brochures, flyers, and business cards.",
    },
    {
      id: 11,
      title: "UI Animation",
      type: "video",
      src: "",
      color: "bg-gray-600",
      category: "Design for video",
      description: "Smooth and delightful UI animations that enhance user experience.",
    },
    {
      id: 12,
      title: "Environmental Design",
      type: "image",
      src: "/placeholder.jpg",
      color: "bg-rose-400",
      category: "Brand Identity Design",
      description: "Large-scale environmental and spatial design for public spaces.",
    },
  ];

  const filteredProjects = selectedCategory
    ? projectsData.filter((p) => p.category === selectedCategory)
    : projectsData;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-300">
            Explore my collection of creative projects across various disciplines
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-blue-900 text-white"
                  : "border-2 border-blue-900 text-blue-900 hover:bg-blue-900/10"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-blue-900 text-white"
                    : "border-2 border-blue-900 text-blue-900 hover:bg-blue-900/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Masonry Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => {
              const randomHeights = [250, 300, 320, 350, 380, 400];
              const randomHeight =
                randomHeights[Math.floor(Math.random() * randomHeights.length)];

              return (
                <a
                  key={project.id}
                  href={`/projects/${project.id}`}
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center">
                    {project.type === "video" ? (
                      <div className="text-5xl text-white/50 group-hover:text-white/80 transition-all">
                        ▶
                      </div>
                    ) : null}

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <h3 className="text-white font-bold">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.category}</p>
                    </div>
                  </div>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interested in a project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your creative vision to life
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

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
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
