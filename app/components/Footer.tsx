export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">SOOREJ CREATIVE</h3>
            <p className="text-gray-400 text-sm">Creative digital design and development</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">MENU</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Works</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">SOCIAL</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">CONTACT</h4>
            <p className="text-sm text-gray-400">hi@soorejcreative.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Soorej Creative. Built with Next.js, Tailwind CSS, and Vercel.</p>
        </div>
      </div>
    </footer>
  );
}
