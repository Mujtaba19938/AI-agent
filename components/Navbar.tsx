'use client';

export default function Navbar() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'Pricing', path: '#pricing' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-30">
      <div className="rounded-full backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-3">
        <ul className="flex items-center gap-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="font-eurostile font-bold text-[#F44336] hover:text-white uppercase tracking-wide text-sm md:text-base transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

