import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function Home() {
  const projectsData = [
    { id: 1, title: "Campaign Design", type: "image" as const, src: "/placeholder.jpg", color: "bg-teal-300", category: "Campaign Design" },
  ];

  const brands = [
    "App Amrit", "Bitmoji", "Celebrite", "CHARTO", "CLARKE",
    "Clearbit", "FINAL", "HOUSING.com", "KINNEY API", "June",
    "MarkLogic", "MYKI", "OVMO", "PRODUCERS", "Streamlit",
    "TERXIAN", "Unstack", "tokamex", "Truebill"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side with image placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg flex items-end justify-center relative">
                <div className="text-center pb-12">
                  <p className="text-gray-400 text-sm mb-4">
                    • by <span className="text-teal-400">Leía Cornish</span> |<span className="text-teal-400"> I am Expulzih</span>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side with text */}
            <div className="space-y-6">
              <p className="text-teal-400 text-sm font-semibold">YOU NEED A CREATIVE HUMAN WHO BELIEVES IN</p>
                <h1 className="text-9xl font-bold leading-tight">ABCDE</h1>
              <p className="text-gray-300 text-lg mt-4">
                Creative Director & Designer crafting beautiful digital experiences
              </p>
              <p className="text-gray-300 text-lg">
                Sorry, I'm not afraid of Artificial Intelligence (AI). I believe strongly that humans aren't replaceable by Al not because I didn't founded Human intelligence (HI) about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hi Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-amber-50 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-7xl font-black text-gray-400 text-center">Hi</div>
            <div className="space-y-4 text-gray-700">
              <p className="text-sm leading-relaxed">
                Sorry, I'm afraid of Artificial Intelligence (AI). I believe strongly that humans aren't replaceable by AI not because I didn't founded Human Intelligence (HI) about it. Because I create for people, not for machines or code foundation.
              </p>
              <p className="text-sm leading-relaxed font-semibold">
                I am Soorej — Human First, Worn on Art & Creative Director, Creative Leader, Storyteller, and Travel Lover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects 
        projects={projectsData}
        title="Projects"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

 

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[--font-montserrat]">Brands I've worked for</h2>
          <p className="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {brands.map((brand, i) => (
              <div key={i} className="text-center text-gray-700 font-semibold text-sm hover:text-blue-900 transition cursor-pointer">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[--font-montserrat]">Contact Me</h2>
              <p className="text-gray-600 mb-6">
                Great work begins with a great conversation. Whether you want to pick my brain or discuss a potential project, feel free to get in touch with me.
              </p>
              <p className="text-gray-700 font-semibold">hi@soorejcreative.com</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900" placeholder="Your name" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900" placeholder="your@email.com" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900" placeholder="Your message..."></textarea>
              </div>

              <button className="w-full bg-blue-900 text-white font-semibold py-3 rounded-full hover:bg-blue-800 transition">
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
