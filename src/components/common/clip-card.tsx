import { useId, type ReactNode } from "react"
import { css, cva, cx } from "../../../styled-system/css"


/* ---------- Props ---------- */
interface ClipCardProps {
  /** URL de la imagen de fondo */
  src: string
  /** SVG path en formato `d="..."`  (opcional) */
  path?: string
  /** Si quieres desenfoque extra (px) mientras carga la imagen */
  blur?: number
  /** Contenido interior */
  children?: ReactNode
  /** Clase extra para ajustes (opcional) */
  className?: string
}

/* ---------- Estilos ---------- */
const cardBase = cva({
  base: {
    position: 'relative',
    w: 'full',
    h: 'full',
    bgPosition: 'center',
    bgSize: 'cover',
    overflow: 'hidden',
  },
  variants: {
    state: {
      blurred: { filter: 'blur(var(--blur,8px)) brightness(0.7)' },
      clear: { filter: 'none' },
    },
  },
})



const heroBg = css({
    w: '100%',
    h: '100%',
    position: 'relative',
    transition: 'filter 0.6s ease',
    bgSize: 'cover',
    filter: 'blur(2px) brightness(0.5) contrast(1.2)',
    bgPosition: 'center',
})

export function ClipCard({
  src,
  path = /* default shape */ `
    M0.5 0 C0.6 0 0.65 0.12 0.65 0.25 V0.75
    C0.65 0.88 0.6 1 0.5 1 H0.1 C0.04 1 0 0.88 0 0.75 V0.25
    C0 0.12 0.04 0 0.1 0 Z
  `,
  blur = 4,
  children,
  className,
}: ClipCardProps) {
  const id = useId()

  return (
    <>
        <div
        className={cx(css({
            w: '100%',
            h: 'calc(100svh - 5rem)',
            position: 'relative',
            transition: 'filter 0.6s ease',
            bgSize: 'cover',
            bgPosition: 'center',
        }), className)}
        style={{
            clipPath: `url(#clip-${id})`,
            }}
            >
        {/* Slot de contenido (texto, iconos, etc.) */}
        <div style={{backgroundImage: `url(${src})`}} className={heroBg}></div>

        <section className={css({z:'1'})}>
            {children}
        </section>

        {/* Definición del clipPath – oculto en el mismo nodo */}
        <svg width="0" height="0">
            <defs>
            <clipPath id={`clip-${id}`} clipPathUnits="objectBoundingBox">
                <path d={path} />
            </clipPath>
            </defs>
        </svg>
        </div>
    </>
  )
}