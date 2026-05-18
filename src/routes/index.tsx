import { createFileRoute } from "@tanstack/react-router";
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="Albaine SRL" className="h-10 w-auto" />
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#nosotros" className="text-muted-foreground transition-colors hover:text-foreground">Nosotros</a>
            <a href="#valores" className="text-muted-foreground transition-colors hover:text-foreground">Valores</a>
            <a href="#contacto" className="text-muted-foreground transition-colors hover:text-foreground">Contacto</a>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contacto">Contáctanos</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Más de 40 años de trayectoria
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              El hilo que enlaza{" "}
              <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
                calidad y variedad
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Especialistas en insumos y componentes textiles. Una historia familiar
              construida a través de generaciones, siempre disponible para ti.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contacto">
                  Hablemos <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#nosotros">Conoce más</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/5] overflow-hidden rounded-3xl"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <img
                src={heroImg}
                alt="Hilos textiles de calidad"
                width={1920}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-lg md:block">
              <p className="text-3xl font-semibold">40+</p>
              <p className="text-sm text-muted-foreground">años de experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Nosotros</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Un legado familiar tejido con compromiso
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Somos un grupo de socios comerciales especializados en insumos y componentes textiles,
            con una trayectoria de más de 40 años demostrando nuestro compromiso y valores
            familiares a través de distintas generaciones.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
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
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ transitionProperty: "transform, border-color, box-shadow" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Contacto</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Siempre junto a ti
              </h2>
              <p className="mt-4 text-muted-foreground">
                Visítanos en nuestra tienda en el Centro Histórico de Santiago o escríbenos para
                conocer nuestro catálogo completo.
              </p>
            </div>
            <ul className="space-y-5">
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm text-muted-foreground">
                    Calle 16 de Agosto #138, Centro Histórico,<br />
                    Santiago 51000, República Dominicana
                  </p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-sm text-muted-foreground">Disponible en horario comercial</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">Correo</p>
                  <p className="text-sm text-muted-foreground">Escríbenos para más información</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Albaine SRL" className="h-8 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Albaine SRL. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
