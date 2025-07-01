import { defineConfig } from "@pandacss/dev";
import { colorsTokens, keyframes, animationStyles, shadowsTokens } from "./src/style/theme";
import { typography } from "./src/style/tokens/typography";

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
      container: {
        transform(props) {
          // Definimos nuevos valores predeterminados
          return {
            position: 'relative',
            width: '100%',
            maxWidth: 'calc(100vw - 100px)',
            mx: 'auto',
            ...props         // incluir cualquier otra propiedad pasada
          }
        },
      }
    }
  },
  jsxFramework: 'react',
  outdir: "styled-system",
});
