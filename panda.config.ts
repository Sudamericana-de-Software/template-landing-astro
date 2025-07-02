import { defineConfig } from "@pandacss/dev";
import { colorsTokens, keyframes, animationStyles, shadowsTokens } from "./src/style/theme";
import { typography } from "./src/style/tokens/typography";
import { containerPattern } from "./src/style/patterns/container";

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  theme: {
    extend: {
      semanticTokens: {
        colors: { ...colorsTokens },
        shadows: {
          ...shadowsTokens
        }
      },
      textStyles: { ...typography },
      keyframes,
      animationStyles
    },
  },
  patterns: {
    extend: {
      container: containerPattern
      
    }
  },
  jsxFramework: 'react',
  outdir: "styled-system",
});
