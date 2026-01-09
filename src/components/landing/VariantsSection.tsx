import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Flame, Droplets, Flower2 } from "lucide-react";
import perfumeVariants from "@/assets/perfume-variants.jpg";

const variants = [
  {
    icon: Flame,
    name: "Woody Amber",
    character: "Maskulin & Dewasa",
    description: "Paduan kayu oud, vetiver, dan amber yang hangat. Cocok untuk pria yang ingin tampil berkuasa dan elegan.",
    notes: ["Oud Wood", "Vetiver", "Warm Amber", "Sandalwood"],
    color: "from-amber-600/20 to-amber-900/20",
  },
  {
    icon: Droplets,
    name: "Fresh Citrus",
    character: "Clean & Energik",
    description: "Kesegaran bergamot, lemon, dan oceanic accord. Sempurna untuk aktivitas siang yang dinamis.",
    notes: ["Bergamot", "Sea Salt", "White Musk", "Cedar"],
    color: "from-sky-600/20 to-blue-900/20",
  },
  {
    icon: Flower2,
    name: "Floral Soft",
    character: "Elegan & Lembut",
    description: "Harmoni rose, jasmine, dan vanilla yang memesona. Untuk wanita yang ingin meninggalkan kesan mendalam.",
    notes: ["Bulgarian Rose", "Jasmine", "Vanilla", "Musk"],
    color: "from-pink-600/20 to-rose-900/20",
  },
];

const VariantsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={perfumeVariants}
          alt="Perfume variants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-sans mb-4 block">
            Signature Series
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Temukan <span className="italic text-gold">Aromamu</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Setiap varian dirancang untuk momen berbeda. Pilih yang paling mewakili kepribadianmu.
          </p>
          <div className="luxury-divider mt-6" />
        </motion.div>

        {/* Variants Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className={`luxury-card p-8 h-full flex flex-col bg-gradient-to-br ${variant.color} hover:border-gold/40 transition-all duration-500`}>
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-none border border-gold/40 flex items-center justify-center group-hover:border-gold group-hover:shadow-[0_0_20px_hsl(40_60%_50%/0.2)] transition-all duration-500">
                    <variant.icon className="w-7 h-7 text-gold" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl mb-2 group-hover:text-gold transition-colors">
                  {variant.name}
                </h3>
                <span className="text-gold/80 text-sm uppercase tracking-wider mb-4">
                  {variant.character}
                </span>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {variant.description}
                </p>

                {/* Notes */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 block">
                    Fragrance Notes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {variant.notes.map((note) => (
                      <span
                        key={note}
                        className="text-xs px-3 py-1 border border-border/50 text-foreground/80"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button variant="luxuryOutline" className="w-full mt-auto">
                  Pilih Varian Ini
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VariantsSection;
