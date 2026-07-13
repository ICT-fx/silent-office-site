import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// One logo: an image source, a label for accessibility and a positioning class.
export interface TechIcon {
  id: number;
  src: string;
  alt: string;
  className: string; // absolute positioning (desktop only)
}

// Single floating logo with cursor-repel + continuous drift (desktop layout).
const FloatingIcon = ({
  mouseX,
  mouseY,
  iconData,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: TechIcon;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distance = Math.hypot(mouseX.current - cx, mouseY.current - cy);

      if (distance < 150) {
        const angle = Math.atan2(mouseY.current - cy, mouseX.current - cx);
        const force = (1 - distance / 150) * 50;
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${iconData.className}`}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 p-3.5 rounded-2xl bg-white shadow-lg shadow-gray-300/40 border border-gray-100"
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 4, 0, -4, 0],
        }}
        transition={{
          duration: 6 + (index % 5),
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <img
          src={iconData.src}
          alt={iconData.alt}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export interface FloatingTechIconsProps extends React.HTMLAttributes<HTMLElement> {
  icons: TechIcon[];
  title?: string;
}

// Reprend la typo du titre de la Hero, en plus petit et en sombre (fond clair).
const titleStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 800,
  fontSize: 'clamp(1.5rem, 3vw, 2.75rem)',
  lineHeight: 1.02,
  letterSpacing: '-0.05em',
  color: '#262626',
};

const FloatingTechIcons = React.forwardRef<HTMLElement, FloatingTechIconsProps>(
  ({ className = '', icons, title, ...props }, ref) => {
    const mouseX = React.useRef(0);
    const mouseY = React.useRef(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    return (
      <section
        ref={ref}
        onMouseMove={handleMouseMove}
        className={`relative w-full overflow-hidden bg-white ${className}`}
        {...props}
      >
        {/* Desktop: floating, cursor-reactive layout — capped at half a viewport */}
        <div className="hidden md:block relative h-[50vh] min-h-[360px] max-h-[520px]">
          {icons.map((iconData, index) => (
            <FloatingIcon
              key={iconData.id}
              mouseX={mouseX}
              mouseY={mouseY}
              iconData={iconData}
              index={index}
            />
          ))}

          {title && (
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4 pointer-events-none">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={titleStyle}
                className="max-w-2xl text-center"
              >
                {title}
              </motion.h2>
            </div>
          )}
        </div>

        {/* Mobile: titre centré au-dessus de la grille (évite le chevauchement) */}
        {title && (
          <h2 style={titleStyle} className="md:hidden text-center px-6 pt-12 pb-2 max-w-md mx-auto">
            {title}
          </h2>
        )}

        {/* Mobile: simple centered wrap grid (no overlap on small screens) */}
        <div className="md:hidden flex flex-wrap items-center justify-center gap-4 pt-6 pb-12 px-6">
          {icons.map((iconData, index) => (
            <motion.div
              key={iconData.id}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="flex items-center justify-center w-16 h-16 p-3 rounded-2xl bg-white shadow-md shadow-gray-300/40 border border-gray-100"
            >
              <img
                src={iconData.src}
                alt={iconData.alt}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
);

FloatingTechIcons.displayName = 'FloatingTechIcons';

export { FloatingTechIcons };
