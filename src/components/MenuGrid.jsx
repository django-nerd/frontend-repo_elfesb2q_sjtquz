import { Sandwich, Flame, Drumstick, Coffee } from 'lucide-react';

const items = [
  {
    title: 'Signature Fried Chicken',
    desc: 'Crispy, juicy, perfectly seasoned — served with your choice of sauces.',
    price: '$9.99',
    badge: 'Best Seller',
    icon: Drumstick,
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Spicy Chicken Sandwich',
    desc: 'Hand-breaded chicken, spicy mayo, pickles, toasted brioche bun.',
    price: '$7.49',
    badge: 'Spicy',
    icon: Sandwich,
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Loaded Fries',
    desc: 'Golden fries topped with melted cheese, chicken bits, and secret sauce.',
    price: '$5.99',
    badge: 'New',
    icon: Flame,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Iced Lemon Tea',
    desc: 'Refreshing, zesty, and lightly sweetened to cool down any heat.',
    price: '$2.49',
    badge: 'Beverage',
    icon: Coffee,
    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2069&auto=format&fit=crop',
  },
];

export default function MenuGrid() {
  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Fan Favorites</h2>
            <p className="mt-2 text-neutral-600">Crafted fresh daily with the finest ingredients.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">View Full Menu</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.title} className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-square overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm">
                  {item.badge}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-amber-600" />
                  <h3 className="font-bold text-lg text-neutral-900">{item.title}</h3>
                </div>
                <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-extrabold text-neutral-900">{item.price}</span>
                  <button className="inline-flex items-center rounded-full bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600">Add to Cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
