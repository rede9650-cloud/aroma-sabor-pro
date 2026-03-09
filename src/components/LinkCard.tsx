import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  isBonus?: boolean;
  delay?: number;
}

const LinkCard = ({ title, subtitle, image, href, isBonus = false, delay = 0 }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className={`absolute inset-0 ${isBonus ? 'banner-overlay-bonus' : 'banner-overlay'}`} />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {isBonus && (
            <span className="inline-block px-2 py-0.5 rounded-sm text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground mb-2">
              Bônus
            </span>
          )}
          <h3 className="font-display text-lg font-bold text-foreground leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="w-4 h-4 text-primary" />
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
