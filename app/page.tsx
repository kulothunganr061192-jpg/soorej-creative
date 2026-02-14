import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function Home() {
  const projectsData = [
    { id: 1, slug: "campaign-design", title: "Campaign Design", type: "image" as const, src: "/images/placeholder.jpg", color: "bg-teal-300", category: "Campaign Design" },
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Left side with image placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-96 h-96 bg-linear-to-b from-gray-700 to-gray-900 rounded-lg flex items-end justify-center relative">
                <div className="text-center pb-12">
                  <p className="text-gray-400 text-sm mb-4">
                    <span className="text-teal-400" style={{ color: '#a47764' }}>Leía Cornish</span>|<span className="text-teal-400"> I am Expulzih</span>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side with text */}
            <div className="space-y-6">
                <p className="text-xl font-medium tracking-wider" style={{color: '#a47764'}}>YOU NEED A CREATIVE HUMAN WHO BELIEVES IN</p>
                <h1 className="text-[9rem] font-bold leading-tight">ABCDE</h1>
                <p className="text-xl font-medium mt-4" style={{color: '#744444'}}>
                Curious?  <span className='' style={{ color: '#a47764' }}>Leila Consult</span>. I can Explain.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Hi Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8" style={{backgroundColor: '#ffdebb'}}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 text-7xl font-black text-gray-900 text-center">Hi</div>
        <div className="md:col-span-3 space-y-4 text-gray-900 px-8">
          <p className="text-xl leading-relaxed">
            Sorry, I&apos;m not afraid of Artificial Intelligence (AI). I don&apos;t think it&apos;s the end of humanity. I think it&apos;s the beginning, because I stand for people, not for machines or heartless design.
          </p>
          <p className="text-xl leading-relaxed font-semibold">
            &apos;I am Soorej&apos; — Human First, artist on Art & Creative Director, Creative Leader, Storyteller, and Travel Lover.
          </p>
        </div>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[--font-montserrat]">Brands I&apos;ve worked for</h2>
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
