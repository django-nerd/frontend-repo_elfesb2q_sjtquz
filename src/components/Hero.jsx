import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-yellow-100/60 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-800 text-xs font-semibold">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              Crispy. Juicy. Legendary.
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              Los Pollos Hermanos
            </h1>
            <p className="mt-4 text-lg text-neutral-600 max-w-xl">
              Freshly fried chicken, golden fries, and signature sauces crafted with love. Order now and get hot, delicious meals delivered fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#menu" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3 text-base font-semibold text-white hover:bg-red-600 transition">
                Order Now <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-base font-semibold text-neutral-900 hover:bg-neutral-50 transition">
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
              <div>
                <span className="font-bold text-neutral-900">50k+</span> happy customers
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1">4.9/5 rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-tr from-yellow-200 via-amber-200 to-red-200 p-2">
              <div className="h-full w-full rounded-2xl bg-white grid grid-cols-3 gap-2 p-2">
                <div className="col-span-2 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop"
                    alt="Fried chicken bucket"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid grid-rows-2 gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2070&auto=format&fit=crop"
                    alt="Burger"
                    className="h-full w-full rounded-xl object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop"
                    alt="Fries"
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
