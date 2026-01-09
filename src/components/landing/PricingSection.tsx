import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Truck, ShieldCheck, Clock } from "lucide-react";

const features = [
  { icon: Gift, text: "Gratis box premium" },
  { icon: Truck, text: "Pengiriman cepat" },
  { icon: ShieldCheck, text: "Garansi original" },
  { icon: Clock, text: "Sampai dalam 2-4 hari" },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-sans mb-4 block">
            Penawaran Spesial
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Harga <span className="italic text-gold">Eksklusif</span>
          </h2>
          <div className="luxury-divider mt-6" />
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="luxury-card p-10 text-center border-gold/30 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-gold text-obsidian text-xs font-semibold uppercase tracking-wider px-4 py-2">
              Promo Hari Ini
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="text-muted-foreground mb-2">
                <span className="line-through">Rp199.000</span>
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="gold-text text-6xl font-serif">Rp149.000</span>
              </div>
              <p className="text-muted-foreground mt-2">per 50ml bottle</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm text-foreground/80">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="luxury" size="xl" className="w-full">
              Pesan Sekarang
            </Button>

            <p className="text-muted-foreground text-sm mt-4">
              *Harga promo berlaku sampai stok habis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
