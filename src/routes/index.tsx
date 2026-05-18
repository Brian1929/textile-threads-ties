import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Award, Users, Sparkles, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/albaine-logo.png";
import heroImg from "@/assets/textile-hero.jpg";

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Albaine SRL" className="h-14 w-auto md:h-16" />
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            {[
              ["Nosotros", "#nosotros"],
              ["Valores", "#valores"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contacto">Contáctanos</a>
          </Button>
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

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]), opacity }}
          >
            <motion.div variants={fadeUp}>
              <img src={logo} alt="Albaine SRL" className="mb-6 h-20 w-auto md:h-24" />
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
            className="relative"
            style={{ y }}
          >
            <motion.div
              className="aspect-[4/5] overflow-hidden rounded-3xl"
              style={{ boxShadow: "var(--shadow-soft)" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={heroImg}
                alt="Hilos textiles de calidad"
                width={1920}
                height={1280}
                className="h-full w-full object-cover"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              animate-floating="true"
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-lg md:block"
            >
              <motion.p
                className="text-3xl font-semibold"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                40+
              </motion.p>
              <p className="text-sm text-muted-foreground">años de experiencia</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="border-y border-border/60 bg-secondary/30">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl px-6 py-24 text-center"
        >
          <motion.p variants={fadeUp} className="text-sm font-medium uppercase tracking-widest text-primary">
            Nosotros
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Un legado familiar tejido con compromiso
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Somos un grupo de socios comerciales especializados en insumos y componentes textiles,
            con una trayectoria de más de 40 años demostrando nuestro compromiso y valores
            familiares a través de distintas generaciones.
          </motion.p>
        </motion.div>
      </section>

      {/* Valores */}
      <section id="valores" className="mx-auto max-w-6xl px-6 py-24">
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
        <div className="mx-auto max-w-6xl px-6 py-24">
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
                { icon: Phone, title: "Teléfono", body: "Disponible en horario comercial" },
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
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <img src={logo} alt="Albaine SRL" className="h-12 w-auto" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Albaine SRL. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
