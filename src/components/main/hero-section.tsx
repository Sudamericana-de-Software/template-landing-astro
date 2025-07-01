import { css } from "../../../styled-system/css";
import { container } from "../../../styled-system/patterns";
import { ClipCard } from "../common/clip-card";
import { Heading } from "../ui/heading";

type Content = {
    heading: string;
    description: string;
};

const heroStyles = container({
    position: "relative",
    width: "100svw",
    minHeight: "100svh",
    pt: "5rem",
    pb: '1.5rem',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
});


export default function HeroSection(contenido: Content) {
    return (
        <section className={heroStyles}>

          <section className={css({md:{display:'block'}, display:'none' ,position: 'absolute', top:'5rem', left:'0', width:'57%',  })}>
            <Heading className={css({fontSize:{base:'clamp(2rem, 4vw + 1rem, 7rem)', sm:'clamp(2rem, 4vw + 1rem, 7rem)', md:'clamp(2rem, 5.5vw + 1rem, 7rem)', xl:'clamp(2rem, 6vw + 1rem, 7rem)', '2xl':'clamp(2rem, 6.5vw + 1rem, 7rem)'}, textAlign:'left', lineHeight:'1', fontWeight:'bold',  letterSpacing:'.2rem'})}>Sudamericana<br/><span className={css({fontSize:{base:'clamp(2rem, 4vw, 7rem)', sm:'clamp(2rem, 4vw, 7rem)', md:'clamp(2rem, 5.5vw, 7rem)', xl:'clamp(2rem, 6vw, 7rem)', '2xl':'clamp(2rem, 6.5vw, 7rem)'}})}>de Software</span>
              </Heading>
          </section>
          <ClipCard
            src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?_gl=1*1ahus7v*_ga*MTQ4NDYwMzY2Mi4xNzQ3MDc5MjQ1*_ga_8JE65Q40S6*czE3NTEzOTI5MDEkbzEzJGcxJHQxNzUxMzkyOTAxJGo2MCRsMCRoMA.."
            path="
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
            "
            className={css({ shadow: 'lg'})}
          />

        </section>
    )
}

