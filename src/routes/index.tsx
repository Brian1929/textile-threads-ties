import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Award, Users, Sparkles, MapPin, Phone, Mail, ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/albaine-logo.png";
import heroImg from "@/assets/textile-hero.jpg";
import heroImg2 from "@/assets/textile-hero-2.png";
import heroImg3 from "@/assets/textile-hero-3.png";
import heroImg4 from "@/assets/textile-hero-4.png";
import us1 from "@/assets/us-1.png";
import us2 from "@/assets/us-2.png";
import us3 from "@/assets/us-3.png";
import us4 from "@/assets/us-4.png";
import us5 from "@/assets/us-5.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Albaine SRL — Insumos y componentes textiles" },
      {
        name: "description",
        content:
          "Más de 40 años suministrando insumos y componentes textiles de calidad en Santiago, República Dominicana. El hilo que enlaza calidad y variedad.",
      },
      { property: "og:title", content: "Albaine SRL — Siempre junto a ti" },
      {
        property: "og:description",
        content:
          "Especialistas en insumos y componentes textiles con más de 40 años de trayectoria familiar.",
      },
    ],
  }),
  component: Index,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const slides = [heroImg, heroImg2, heroImg3, heroImg4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-[0_2px_20px_-12px_rgba(0,0,0,0.05)]"
      >
        <div className="w-full flex items-center justify-between px-6 md:px-12 py-3 relative">
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.replaceState(null, "", window.location.pathname);
              }}
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <img src={logo} alt="Albaine SRL" className="h-10 w-auto md:h-12" />
            </a>
          </div>
          
          <nav className="hidden gap-6 lg:gap-8 text-sm font-semibold md:flex absolute left-1/2 -translate-x-1/2">
            {[
              ["Inicio", "#top"],
              ["Nosotros", "#nosotros"],
              ["Hilos", "#showroom"],
              ["Cierres", "#showroom"],
              ["Cintas", "#showroom"],
              ["Tejidos", "#showroom"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a
                key={label + href}
                href={href}
                className="relative text-muted-foreground/90 transition-colors hover:text-primary duration-300 after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all duration-300 hover:after:left-0 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground/80">
              <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full font-bold tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 animate-pulse text-primary" />
                Al por mayor y detalle
              </span>
            </div>
            <Button asChild size="sm" className="rounded-full bg-gradient-to-r from-primary to-primary/80 shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 font-semibold px-5 py-2 text-xs">
              <a href="#contacto">Contáctanos</a>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero */}
      <section id="top" ref={heroRef} className="relative overflow-hidden">
        {/* Animated background blobs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-brand)" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-brand)" }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:items-center md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ y: isMobile ? 0 : yLeft, opacity: isMobile ? 1 : opacity }}
            className="md:col-span-6 lg:col-span-5"
          >
            <motion.div variants={fadeUp}>
              <img src={logo} alt="Albaine SRL" className="mb-6 h-16 w-auto drop-shadow-sm md:h-20" />
            </motion.div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              <Sparkles className="h-3.5 w-3.5" /> Más de 40 años de trayectoria
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
            >
              El hilo que enlaza{" "}
              <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
                calidad y variedad
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg text-muted-foreground">
              Especialistas en insumos y componentes textiles. Una historia familiar construida
              a través de generaciones, siempre disponible para ti.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full group">
                <a href="#contacto">
                  Hablemos
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#nosotros">Conoce más</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative md:col-span-6 lg:col-span-7 w-full md:w-[105%] lg:w-[110%] md:translate-x-6 lg:translate-x-12"
            style={{ y: isMobile ? 0 : yRight }}
          >
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-3xl group"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide]}
                  alt={`Hilos textiles de calidad - Diapositiva ${currentSlide + 1}`}
                  width={1920}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/40 backdrop-blur-md text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background/80 hover:scale-105 active:scale-95 shadow-sm border border-border/20 z-10 font-bold"
                aria-label="Anterior"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/40 backdrop-blur-md text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background/80 hover:scale-105 active:scale-95 shadow-sm border border-border/20 z-10 font-bold"
                aria-label="Siguiente"
              >
                →
              </button>

              {/* Indicators / Dots */}
              <div className="absolute bottom-4 right-4 flex gap-1.5 z-10 bg-black/20 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "w-5 bg-primary" : "w-1.5 bg-white/50 hover:bg-white"
                    }`}
                    aria-label={`Ir a diapositiva ${index + 1}`}
                  />
                ))}
              </div>
            </div>
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-lg md:block z-20"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1.2, -0.6, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <p className="text-3xl font-semibold">40+</p>
                <p className="text-sm text-muted-foreground">años de experiencia</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="border-y border-border/60 bg-secondary/10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            {/* Column 1: Copywriting */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-5"
            >
              <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-widest text-primary">
                Nosotros
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
              >
                Un legado familiar tejido con compromiso
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Somos un grupo de socios comerciales especializados en insumos y componentes textiles,
                comprometidos con la excelencia y la confianza a través de valores familiares
                forjados de generación en generación.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-6 border-t border-border/60 pt-8">
                <div>
                  <h4 className="text-3xl font-semibold text-primary">Calidad Elite</h4>
                  <p className="mt-1 text-sm text-muted-foreground">Componentes duraderos para confección industrial.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-semibold text-primary">3 Gen</h4>
                  <p className="mt-1 text-sm text-muted-foreground">De tradición familiar y confianza comercial.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Column 2: Asymmetric Bento Grid Gallery */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-7">
              {/* Left Column Staggered */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm aspect-[3/4]"
                >
                  <img
                    src={us4}
                    alt="Atención al cliente y cintas de colores"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                    <p className="text-sm font-medium text-white">Variedad e insumos en el showroom de Albaine</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm aspect-square"
                >
                  <img
                    src={us1}
                    alt="Embarque y logística en almacén"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                    <p className="text-sm font-medium text-white">Logística de despacho eficiente y garantizada</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column Staggered (downwards shift) */}
              <div className="space-y-4 pt-8 md:pt-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm aspect-square"
                >
                  <img
                    src={us3}
                    alt="Selección de muestras textiles"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                    <p className="text-sm font-medium text-white">Asesoría personalizada y muestras textiles</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm aspect-[3/4]"
                >
                  <img
                    src={us2}
                    alt="Operaciones de almacén y rollos de tela"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-6">
                    <p className="text-sm font-medium text-white">Gran stock disponible para despacho inmediato</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Parallax Banner */}
      <section id="showroom" className="relative h-[480px] overflow-hidden border-b border-border/60">
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={us5}
            alt="Showroom de Albaine SRL con variedad de telas y colores"
            className="h-full w-full object-cover blur-md scale-105 opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        </motion.div>

        <div className="relative mx-auto max-w-6xl h-full flex items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md rounded-3xl border border-border bg-background/90 p-8 backdrop-blur-md shadow-lg"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground">
              Nuestro Showroom
            </span>
            <h3 className="mt-4 text-2xl font-semibold">El catálogo más amplio del mercado</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Explora una variedad infinita de tejidos, cintas, hilos y accesorios en nuestra tienda principal. 
              Equipados para abastecer desde pequeños talleres de confección hasta grandes producciones industriales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: Award,
              title: "Calidad garantizada",
              text: "Insumos cuidadosamente seleccionados que cumplen los más altos estándares.",
            },
            {
              icon: Users,
              title: "Valores familiares",
              text: "Tres generaciones construyendo relaciones de confianza con cada cliente.",
            },
            {
              icon: Sparkles,
              title: "Variedad disponible",
              text: "Un amplio catálogo de componentes textiles, siempre a tu alcance.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/40 hover:shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 6, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground"
              >
                <Icon className="h-6 w-6" />
              </motion.div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-12 md:grid-cols-2 md:items-center"
          >
            <div>
              <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-widest text-primary">
                Contacto
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Siempre junto a ti
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                Visítanos en nuestra tienda en el Centro Histórico de Santiago o escríbenos para
                conocer nuestro catálogo completo.
              </motion.p>
              <motion.div 
                variants={fadeUp}
                className="mt-6 overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm transition-all hover:shadow-md"
              >
                <iframe
                  title="Mapa de ubicación de Albaine SRL"
                  src="https://maps.google.com/maps?q=Albaine%20SRL%20Aliados%20Textiles,%20Calle%2016%20de%20Agosto%20138,%20Santiago,%20Dominican%20Republic&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: "1rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
            <motion.ul variants={stagger} className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Dirección",
                  body: (
                    <>
                      Calle 16 de Agosto #138, Centro Histórico,
                      <br />
                      Santiago 51000, República Dominicana
                    </>
                  ),
                },
                { icon: Phone, title: "Teléfono", body: "(809) 971-4450" },
                { icon: Mail, title: "Correo", body: "Escríbenos para más información" },
              ].map(({ icon: Icon, title, body }) => (
                <motion.li
                  key={title}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">{title}</p>
                    <p className="text-sm text-muted-foreground">{body}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="w-full flex flex-col items-center justify-between gap-4 px-6 md:px-12 py-8 md:flex-row">
          <img src={logo} alt="Albaine SRL" className="h-10 w-auto" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Albaine SRL. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.replaceState(null, "", window.location.pathname);
            }}
            className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
            aria-label="Volver arriba"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
