import { Facebook, Instagram, Twitter, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-yellow-400 via-amber-400 to-red-500 grid place-items-center text-white font-black">LP</div>
              <span className="font-extrabold tracking-tight text-neutral-900">Los Pollos Hermanos</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600 max-w-xs">Crispy classics and spicy favorites made fresh daily. Order online or drop by our nearest location.</p>
            <div className="mt-4 flex items-center gap-3 text-neutral-700">
              <a aria-label="Facebook" href="#" className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50">
                <Facebook className="h-4 w-4" />
              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50">
                <Instagram className="h-4 w-4" />
              </a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li><a href="#menu" className="hover:text-neutral-900">Menu</a></li>
              <li><a href="#about" className="hover:text-neutral-900">About</a></li>
              <li><a href="#locations" className="hover:text-neutral-900">Locations</a></li>
              <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
            </ul>
          </div>

          <div id="locations">
            <h3 className="font-semibold text-neutral-900">Visit Us</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 1200 Central Ave, Albuquerque</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 742 Evergreen Ter, Springfield</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 31 Spooner St, Quahog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-900">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (505) 555-0110</li>
              <li className="flex items-center gap-2"><a href="mailto:hello@lospollos.com" className="hover:text-neutral-900">hello@lospollos.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Los Pollos Hermanos. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
            <a href="#" className="hover:text-neutral-900">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
