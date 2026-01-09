import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Semprotkan di Titik Nadi",
    description: "Leher, pergelangan tangan, dan belakang telinga adalah area terbaik untuk aplikasi parfum.",
  },
  {
    number: "02",
    title: "Jangan Digosok",
    description: "Menggosok parfum akan merusak molekul aroma. Biarkan mengering secara alami.",
  },
  {
    number: "03",
    title: "Biarkan Menyatu",
    description: "Tunggu beberapa menit hingga aroma menyatu sempurna dengan chemistry kulitmu.",
  },
];

const HowToUseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-sans mb-4 block">
            Panduan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Cara <span className="italic text-gold">Pemakaian</span>
          </h2>
          <div className="luxury-divider mt-6" />
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/30 to-transparent" />
              )}

              {/* Number */}
              <div className="inline-flex items-center justify-center w-20 h-20 border border-gold/40 mb-6 relative">
                <span className="gold-text text-3xl font-serif">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
