import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    location: "Jakarta",
    text: "Baru kali ini nemu parfum lokal yang aromanya mahal dan tahan lama. Rekan kerja sampai nanya pakai parfum apa!",
    rating: 5,
    variant: "Woody Amber",
  },
  {
    name: "Rina Wijaya",
    location: "Bandung",
    text: "Dipakai pagi, masih kecium sampai malam. Aromanya elegan banget, nggak pasaran kayak parfum lain.",
    rating: 5,
    variant: "Floral Soft",
  },
  {
    name: "Budi Santoso",
    location: "Surabaya",
    text: "Worth every penny. Satu spray aja udah cukup, hemat dan wanginya premium. Highly recommended!",
    rating: 5,
    variant: "Fresh Citrus",
  },
];

const TestimonialsSection = () => {
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
            Testimoni
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Apa Kata <span className="italic text-gold">Mereka?</span>
          </h2>
          <div className="luxury-divider mt-6" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="luxury-card p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-gold/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic font-serif text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-6">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                <span className="inline-block mt-2 text-xs px-3 py-1 border border-gold/30 text-gold/80">
                  {testimonial.variant}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
