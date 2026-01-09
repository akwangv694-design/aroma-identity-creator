import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import perfumeDetail from "@/assets/perfume-detail.jpg";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <img
                src={perfumeDetail}
                alt="Premium perfume close-up"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-gold/20" />
              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-gold/40" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-gold/40" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-sans mb-4 block">
              Cerita Kami
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Lebih dari Sekadar{" "}
              <span className="italic text-gold">Wewangian</span>
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <span className="text-foreground font-medium">Masalah:</span> Banyak parfum wangi di awal, 
                tapi menghilang dalam hitungan jam. Tak punya karakter. Tak meninggalkan kesan.
              </p>
              
              <div className="luxury-divider !mx-0 !w-16" />
              
              <p className="text-lg leading-relaxed">
                <span className="text-foreground font-medium">Solusi:</span> Kami menciptakan parfum dengan 
                formula premium, aroma berlapis, dan karakter kuat — bukan sekadar wangi, tapi identitas.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <span className="gold-text text-4xl font-serif">12+</span>
                <p className="text-muted-foreground text-sm mt-1">Jam Tahan Lama</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="gold-text text-4xl font-serif">100%</span>
                <p className="text-muted-foreground text-sm mt-1">Premium Ingredients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
