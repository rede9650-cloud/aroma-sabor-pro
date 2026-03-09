import heroCover from "@/assets/hero-cover.jpg";
import heroImage from "@/assets/hero-spices.jpg";
import bannerMarmitas from "@/assets/banner-marmitas.jpg";
import bannerMolhos from "@/assets/banner-molhos.jpg";
import bannerArmazenamento from "@/assets/banner-armazenamento.jpg";
import bannerCaldos from "@/assets/banner-caldos.jpg";
import bannerProfissional from "@/assets/banner-profissional.jpg";
import bannerNaturais from "@/assets/banner-naturais.jpg";
import bannerVideoaulas from "@/assets/banner-videoaulas.jpg";
import LinkCard from "@/components/LinkCard";
import { ChefHat } from "lucide-react";

const links = [
  {
    title: "Guia Temperos Caseiros",
    subtitle: "Aprenda a fazer seus próprios temperos",
    image: heroImage,
    href: "https://drive.google.com/file/d/1ZTO6ZjcPX1ciHtBngZAuEMmdkHHk4shR/view?usp=sharing",
  },
  {
    title: "Guia dos Temperos Naturais",
    subtitle: "Temperos frescos e saudáveis",
    image: bannerNaturais,
    href: "https://drive.google.com/file/d/1HUaXlFYljx-FB2jtNi8u7bfkN3WKIPCP/view?usp=sharing",
  },
  {
    title: "Vídeo Aulas Bônus",
    subtitle: "Aulas práticas em vídeo",
    image: bannerVideoaulas,
    href: "https://drive.google.com/drive/folders/157QZCVvH3VWKJ-1W0xwI1BkGXH6mofiO",
  },
  {
    title: "Cardápio Inteligente para Marmitas",
    subtitle: "Planeje suas marmitas com eficiência",
    image: bannerMarmitas,
    href: "https://drive.google.com/file/d/1ZdnibKys9935DbLmiCqqEjeORK-2cDXO/view?usp=sharing",
  },
  {
    title: "Guia do Armazenamento",
    subtitle: "Conserve seus temperos corretamente",
    image: bannerArmazenamento,
    href: "https://drive.google.com/file/d/1tt_ZI4FstzM-kP1M_-yp3NanZiShBJtX/view?usp=sharing",
  },
  {
    title: "Temperos de Cozinha Profissional",
    subtitle: "Técnicas de chef para seus pratos",
    image: bannerProfissional,
    href: "https://drive.google.com/file/d/121v2KizNtGB_AQhx3t91J1Ln6Tp5KjxG/view?usp=sharing",
  },
  {
    title: "Guia dos Molhos",
    subtitle: "Molhos que transformam qualquer receita",
    image: bannerMolhos,
    href: "https://drive.google.com/file/d/1Ownnne3t48osbpWDGcRIBRqFyrf3GXNi/view?usp=sharing",
  },
];

const bonusLinks = [
  {
    title: "53 Receitas de Caldos",
    subtitle: "Caldos que fazem a diferença",
    image: bannerCaldos,
    href: "https://drive.google.com/file/d/1K-P0Cm-JXUo9LoGpJtDH3F0bJ4MjSuFC/view",
  },
  {
    title: "100 Receitas de Molhos Especiais",
    subtitle: "Molhos para todas as ocasiões",
    image: bannerMolhos,
    href: "https://drive.google.com/file/d/1UPvSEYEOBTSW-rXFdODy4yNuA5WqxaK_/view?usp=sharing",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={heroCover}
          alt="Marmitas com temperos caseiros"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 banner-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ChefHat className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-extrabold text-gradient-warm leading-tight">
            Temperos Caseiros
          </h1>
          <p className="text-base font-display font-semibold text-foreground mt-1">
            para Venda de Marmitas
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-primary mt-3 font-body font-semibold">
            por Josefa Neves
          </p>
          <p className="text-sm text-muted-foreground mt-1 font-body">
            Seus materiais exclusivos estão aqui ✨
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="px-4 py-6 max-w-lg mx-auto space-y-4">
        <h2 className="font-display text-lg font-semibold text-foreground px-1">
          📚 Materiais
        </h2>
        {links.map((link, i) => (
          <LinkCard key={i} {...link} delay={i * 80} />
        ))}

        <div className="pt-4">
          <h2 className="font-display text-lg font-semibold text-foreground px-1">
            🎁 Bônus Exclusivos
          </h2>
        </div>
        {bonusLinks.map((link, i) => (
          <LinkCard key={`bonus-${i}`} {...link} isBonus delay={(links.length + i) * 80} />
        ))}

        <p className="text-center text-xs text-muted-foreground pt-6 pb-8 font-body">
          © 2026 Temperos Caseiros · Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default Index;
