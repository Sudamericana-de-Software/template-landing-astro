import { css } from "../../../styled-system/css";
import { container, stack } from "../../../styled-system/patterns";
import FlipCard from "../animations/flip-card";
import { CardContent, CardDescription } from "../ui/card";

type Content = {
    heading: string;
    description: string;
};

const heroStyles = container({
    width: "100svw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    "& .heroVideo": {
        position: "fixed",
        top: 0,
        right: 0,
        width: "100svw",
        height: "100svh",
        objectPosition: "center",
        objectFit: "cover",
        zIndex: -2,
    },
});

export default function HeroSection(contenido: Content) {
    return (
        <section className={heroStyles}>
            {/* <div
                className={stack({
                    flexDir: { base: "column", md: "row" },
                    alignItems: { base: "", md: "center" }
                })}
            >
                <h1
                    className={css({
                        w: { base: "full", md: "1/2" },
                        fontSize: { base: "3xl", md: "6xl" },
                        fontWeight: 500,
                        color: "text",
                        transition: "all 0.2s",
                    })}
                >
                    {contenido.heading}
                </h1>
                <div className={css({ display: { base: "none", md: "block" }, w: { base: "full", md: "1/2" } })}>
                    <FlipCard front={
                        <CardContent className={css({ width: "full", display: "flex", flexDir: "column", gap: "5", py: "6" })}>
                            <img src="/hero.svg" alt="hero image" />
                        </CardContent>
                    } back={
                        <CardContent className={css({ width: "full", display: "flex", flexDir: "column", gap: "5", py: "6" })}>
                            <CardDescription>
                                <p className={css({
                                    color: "text",
                                    fontSize: "2xl"
                                })}>
                                    {contenido.description}
                                </p>
                            </CardDescription>
                        </CardContent>
                    } />
                </div>
                <div className={css({ display: { base: "block", md: "none" } })}>
                    <img src="hero.svg" alt="hero.img" className={css({ w: "full" })} />
                </div>
                <p className={css({ display: { base: "block", md: "none" }, color: "text", transition: "all 0.2s" })}>
                    {contenido.description}
                </p>
            </div> */}

        <div
        className={css({
          width: "100%",
          height: "70vh",
          bg: "blue",
        })}
        style={{ clipPath: "url(#myClip)" }}
      >
        HOLA
      </div>

      {/* SVG hidden pero accesible */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip" clipPathUnits="objectBoundingBox">
            <path d="
                    M0.534164 0.178333
    C0.545263 0.178333 0.55426 0.159679 0.55426 0.136667
    V0.041667
    C0.55426 0.018655 0.563258 0 0.574357 0
    H0.598473
    H0.78274
    H0.979904
    C0.991005 0 1 0.018655 1 0.041667
    V0.958333
    C1 0.981345 0.991005 1 0.979904 1
    H0.020096
    C0.008998 1 0 0.981345 0 0.958333
    V0.5
    V0.399167
    C0 0.376155 0.008998 0.3575 0.020096 0.3575
    H0.404341
    C0.41544 0.3575 0.424437 0.338845 0.424437 0.315833
    V0.22
    C0.424437 0.196988 0.433435 0.178333 0.444534 0.178333
    H0.534164
    Z
            " />
          </clipPath>
        </defs>
      </svg>
      
        </section>
    )
}

