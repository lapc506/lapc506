import type { Config } from "tailwindcss";

/**
 * "Chimera" brand tokens — ported from
 * chimeranext/better-microservices/apps/web/tailwind.config.ts.
 * Dark-first; light tokens derived in src/styles/global.css.
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,ts,tsx,js,jsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        // Chimera brand (raw hues for gradients/pills)
        brand: {
          primary: "#7C5CFF",
          secondary: "#3B82F6",
          tertiary: "#22D3EE",
          accent: "#EC4899",
        },
      },
      fontFamily: {
        heading: ["Sora Variable", "system-ui", "sans-serif"],
        body: ["Inter Variable", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "ui-monospace", "monospace"],
      },
      borderRadius: { lg: "10px", md: "8px", sm: "6px" },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg,#7C5CFF,#3B82F6,#22D3EE)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
