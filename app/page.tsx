import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const projects = [
    { id: 1, title: "Project 1", color: "bg-teal-200" },
    { id: 2, title: "Project 2", color: "bg-yellow-500" },
    { id: 3, title: "Project 3", color: "bg-gray-400" },
    { id: 4, title: "Project 4", color: "bg-rose-300" },
    { id: 5, title: "Project 5", color: "bg-blue-900" },
    { id: 6, title: "Project 6", color: "bg-yellow-500" },
    { id: 7, title: "Project 7", color: "bg-gray-600" },
    { id: 8, title: "Project 8", color: "bg-teal-100" },
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
              <h1 className="text-7xl font-black leading-tight font-[--font-montserrat]">ABCDE</h1>
              <p className="text-gray-300 text-lg">
                Sorry, I'm not afraid of Artificial Intelligence (AI). I believe strongly that humans aren't replaceable by Al not because I didn't founded Human intelligence (HI) about it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hi Section */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-7xl font-black text-gray-400 text-center md:text-left font-[--font-montserrat]">Hi</div>
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
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[--font-montserrat]">Projects</h2>
          <p className="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          
          <div className="grid grid-cols-4 gap-4 mb-8">
            {/* Large project */}
            <div className="col-span-2 row-span-2 bg-teal-200 rounded-lg h-80 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="text-6xl text-teal-300/30 group-hover:scale-110 transition-transform">▶</div>
            </div>
            
            {/* Right column projects */}
            <div className="col-span-2 bg-yellow-500 rounded-lg h-40 flex items-center justify-center text-white font-bold text-2xl">GIF</div>
            
            {/* Bottom row */}
            <div className="bg-gray-500 rounded-lg h-32 flex items-center justify-center">
              <div className="text-4xl text-gray-400/30">▲</div>
            </div>
            <div className="bg-rose-400 rounded-lg h-32 flex items-center justify-center text-white font-bold">UX</div>
            <div className="bg-blue-900 rounded-lg h-32 flex items-center justify-center">
              <div className="text-4xl text-blue-800/30">◆</div>
            </div>
            
            {/* Last row */}
            <div className="bg-yellow-500 rounded-lg h-32 flex items-center justify-center text-white font-bold">UIT</div>
            <div className="bg-gray-700 rounded-lg h-32 flex items-center justify-center">
              <div className="text-4xl text-gray-600/30">◉</div>
            </div>
            <div className="bg-teal-100 rounded-lg h-32 flex items-center justify-center">
              <div className="text-4xl text-teal-200/30">◆</div>
            </div>
          </div>

          <div className="text-center">
            <button className="text-blue-900 font-bold hover:text-blue-700 transition">View Full Portfolio →</button>
          </div>
        </div>
      </section>

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
