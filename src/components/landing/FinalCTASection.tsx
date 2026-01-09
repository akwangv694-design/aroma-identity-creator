import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Timer } from "lucide-react";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-2 mb-8"
          >
            <Timer className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm uppercase tracking-wider">Stok Terbatas</span>
          </motion.div>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Saatnya Punya Aroma yang{" "}
            <span className="italic gold-text">Mewakili Dirimu</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Jangan biarkan kesan pertamamu biasa saja. Jadilah yang selalu diingat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="luxury" size="xl" className="min-w-[250px] group">
              Pesan Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-muted-foreground/70 text-sm mt-6">
            Pengiriman ke seluruh Indonesia 🇮🇩
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
