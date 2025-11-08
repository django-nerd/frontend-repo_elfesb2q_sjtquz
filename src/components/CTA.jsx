import { Truck, Shield, Clock } from 'lucide-react';

export default function CTA() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Good food, done right.</h2>
            <p className="mt-3 text-neutral-600 max-w-2xl">Since day one, our mission has been simple: serve unbelievably tasty chicken with lightning-fast service. We source quality ingredients and prepare everything fresh, every single day.</p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <Truck className="h-6 w-6 text-red-500" />
                <h3 className="mt-2 font-semibold text-neutral-900">Fast Delivery</h3>
                <p className="text-sm text-neutral-600">Hot and fresh at your door in under 30 minutes.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <Shield className="h-6 w-6 text-red-500" />
                <h3 className="mt-2 font-semibold text-neutral-900">Top Quality</h3>
                <p className="text-sm text-neutral-600">Premium ingredients and careful preparation.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <Clock className="h-6 w-6 text-red-500" />
                <h3 className="mt-2 font-semibold text-neutral-900">Open Late</h3>
                <p className="text-sm text-neutral-600">Cravings don’t wait — we’ve got you covered.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h3 className="text-xl font-bold text-neutral-900">Get 20% off your first order</h3>
            <p className="mt-1 text-sm text-neutral-600">Sign up for exclusive deals and tasty updates.</p>
            <form className="mt-4 grid gap-3">
              <input type="email" required placeholder="Email address" className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-200" />
              <button className="inline-flex items-center justify-center rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600">Subscribe</button>
              <p className="text-xs text-neutral-500">By subscribing, you agree to receive tasty emails. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
