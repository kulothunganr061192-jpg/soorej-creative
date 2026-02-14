import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProjectGallery from "@/app/components/ProjectGallery";

interface ProjectDetail {
  id: number;
  title: string;
  slug: string;
  brand: string;
  category: string;
  description: string[];
  images: string[];
  videos?: string[];
  color: string;
  fullDescription: string;
}

// Sample project data - you can expand this
const projectsDatabase: { [key: number]: ProjectDetail } = {
  1: {
    id: 1,
    title: "Campaign Design",
    slug: "campaign-design",
    brand: "Brand - Amazon",
    category: "Campaign Design",
    color: "bg-teal-300",
    description: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat, esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat, esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
    ],
    fullDescription:
      "This work was produced in collaboration with an agency. All imagery, brand assets, and final outputs are the property of their respective owners and are displayed solely for portfolio representation.",
    images: [
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
      "/images/placeholder.jpg",
    ],
    videos: [],
  },
};

// Helper function to find project by slug
function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return Object.values(projectsDatabase).find(project => project.slug === slug);
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-5 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Project Not Found</h1>
          <p className="text-gray-600 mt-4">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/projects"
            className="inline-block mt-8 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
          >
            Back to Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-b from-gray-50 to-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="text-blue-900 font-semibold hover:text-blue-700 transition inline-block"
          >
            ← Back to Projects
          </Link>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-600">{project.brand}</p>
              </div>

              {/* Description */}
              <div className="space-y-6">
                {project.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Footer Note */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-sm text-gray-600">{project.fullDescription}</p>
              </div>

              
            </div>

            {/* Right Column - Gallery */}
            <ProjectGallery project={project} />
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(projectsDatabase).map((relatedProject) => {
              if (relatedProject.id === project.id)
                return null;
              return (
                <a
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className={`${relatedProject.color} rounded-lg overflow-hidden aspect-square cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-start p-6">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-bold text-lg">{relatedProject.title}</h3>
                      <p className="text-sm text-gray-200">
                        {relatedProject.brand}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s create something amazing for your brand
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
