import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Sparkles, Sun, Moon, Heart, Award } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Tahan Lama 12+ Jam",
    description: "Formula premium yang menyatu dengan kulit dan bertahan sepanjang hari",
  },
  {
    icon: Sparkles,
    title: "Aroma Clean & Berkelas",
    description: "Wangi elegan yang tidak norak, cocok untuk segala kesempatan",
  },
  {
    icon: Sun,
    title: "Aktivitas Siang",
    description: "Fresh dan energik untuk menemani produktivitasmu",
  },
  {
    icon: Moon,
    title: "Pesona Malam",
    description: "Misterius dan memukau untuk momen spesialmu",
  },
  {
    icon: Heart,
    title: "Tidak Menusuk",
    description: "Aroma lembut yang nyaman di hidung tapi tetap memorable",
  },
  {
    icon: Award,
    title: "Eksklusif",
    description: "Tidak pasaran, untuk mereka yang ingin tampil berbeda",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-card relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-sans mb-4 block">
            Keunggulan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Mengapa <span className="italic text-gold">Memilih Kami?</span>
          </h2>
          <div className="luxury-divider mt-6" />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="luxury-card p-8 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-none border border-gold/30 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
              </div>
              <h3 className="font-serif text-xl mb-3 group-hover:text-gold transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
