import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image 
            src="/images/soorej-logo-01.svg" 
            alt="Soorej Creative" 
            width={50}
            height={50}
            className="w-10 h-10"
          />
          <h1 className="text-xl font-bold text-gray-900">
            Soorej Creative
          </h1>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-gray-700 hover:text-blue-900 transition font-semibold">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-900 transition font-semibold">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-900 transition font-semibold">Portfolio</a>
          <a href="#" className="text-gray-700 hover:text-blue-900 transition font-semibold">Contact</a>
        </div>
      </div>
    </nav>
  );
}
