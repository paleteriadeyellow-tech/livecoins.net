import { Gamepad2 } from 'lucide-react';

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className = '', compact = false }: LogoProps) {
  const iconSize = compact ? 28 : 32;
  const textClass = compact ? 'text-lg' : 'text-xl sm:text-2xl';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Gamepad2
        size={iconSize}
        className="shrink-0 text-live-cyan"
        strokeWidth={2.25}
        aria-hidden
      />
      <span className={`font-display font-bold tracking-tight ${textClass}`}>
        Live
        <span className="bg-gradient-to-r from-live-cyan to-live-pink bg-clip-text text-transparent">
          coins
        </span>
      </span>
    </span>
  );
}
