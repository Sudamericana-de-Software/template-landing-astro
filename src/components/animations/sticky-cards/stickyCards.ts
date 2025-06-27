import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

interface HorizontalLoopConfig {
  repeat?: number;
  speed?: number;
  paddingRight?: number;
}

function horizontalLoop(items: HTMLElement[], config: HorizontalLoopConfig) {
  const tl = gsap.timeline({ repeat: config.repeat, defaults: { ease: "none" } });
  const widths: number[] = [];
  const xPercents: number[] = [];
  const pixelsPerSecond = (config.speed ?? 1) * 100;

  gsap.set(items, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string));
      xPercents[i] =
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
        (gsap.getProperty(el, "xPercent") as number);
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

  const totalWidth =
    items[items.length - 1].offsetLeft +
    (xPercents[items.length - 1] / 100) * widths[items.length - 1] -
    items[0].offsetLeft +
    items[items.length - 1].offsetWidth *
      (gsap.getProperty(items[items.length - 1], "scaleX") as number) +
    (config.paddingRight ?? 0);

  items.forEach((item, i) => {
    const curX = (xPercents[i] / 100) * widths[i];
    const distanceToStart = item.offsetLeft + curX - items[0].offsetLeft;
    const distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);

    tl.to(
      item,
      {
        xPercent: ((curX - distanceToLoop) / widths[i]) * 100,
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    ).fromTo(
      item,
      {
        xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
      },
      {
        xPercent: xPercents[i],
        duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
        immediateRender: false,
      },
      distanceToLoop / pixelsPerSecond
    );
  });

  tl.progress(1, true).progress(0, true);
  return tl;
}

export function setupStickyCardsAnimation(): void {
    console.log("Setting up sticky cards animation...");
    
  gsap.registerPlugin(SplitText, ScrollTrigger);

  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const cards = gsap.utils.toArray<HTMLElement>(".card");
  const introCard = cards[0];
  if (!introCard) return;

  const titles = gsap.utils.toArray<HTMLElement>(".card-title h1");
  titles.forEach((title) => {
    const split = new SplitText(title, {
      type: "chars",
      charsClass: "char",
      tag: "div",
    });
    split.chars.forEach((char: Element) => {
      char.innerHTML = `<span>${char.textContent}</span>`;
    });
  });

  const cardImgWrapper = introCard.querySelector<HTMLElement>(".card-img");
  const cardImg = introCard.querySelector<HTMLElement>(".card-img img");
  const marquee = introCard.querySelector<HTMLElement>(".card-marquee .marquee");
  const titleChars = introCard.querySelectorAll<HTMLElement>(".char span");
  const description = introCard.querySelector<HTMLElement>(".card-description");

  if (!cardImgWrapper || !cardImg || !marquee || !description) return;

  gsap.set(cardImgWrapper, { scale: 0.5, borderRadius: "400px" });
  gsap.set(cardImg, { scale: 1.5 });

  function animateContentIn(chars: NodeListOf<HTMLElement>, desc: HTMLElement) {
    gsap.to(chars, { x: "0%", duration: 0.75, ease: "power4.out" });
    gsap.to(desc, { x: 0, opacity: 1, duration: 0.75, delay: 0.1, ease: "power4.out" });
  }

  function animateContentOut(chars: NodeListOf<HTMLElement>, desc: HTMLElement) {
    gsap.to(chars, { x: "100%", duration: 0.5, ease: "power4.out" });
    gsap.to(desc, { x: "40px", opacity: 0, duration: 0.5, ease: "power4.out" });
  }

  ScrollTrigger.create({
    trigger: introCard,
    start: "top top",
    end: "+=300vh",
    onUpdate: (self) => {
      const progress = self.progress;
      const imgScale = 0.5 + progress * 0.5;
      const borderRadius = 400 - progress * 375;
      const innerImgScale = 1.5 - progress * 0.5;

      gsap.set(cardImgWrapper, { scale: imgScale, borderRadius: borderRadius + "px" });
      gsap.set(cardImg, { scale: innerImgScale });

      if (imgScale >= 0.5 && imgScale <= 0.75) {
        const fadeProgress = (imgScale - 0.5) / (0.75 - 0.5);
        gsap.set(marquee, { opacity: 1 - fadeProgress });
      } else {
        gsap.set(marquee, { opacity: imgScale < 0.5 ? 1 : 0 });
      }

      const cardElement = introCard as any;
      if (progress >= 1 && !cardElement.contentRevealed) {
        cardElement.contentRevealed = true;
        animateContentIn(titleChars, description);
      }
      if (progress < 1 && cardElement.contentRevealed) {
        cardElement.contentRevealed = false;
        animateContentOut(titleChars, description);
      }
    },
  });

  cards.forEach((card, index) => {
    const isLast = index === cards.length - 1;
    ScrollTrigger.create({
      trigger: card,
      start: "top top",
      end: isLast ? "+=100vh" : "top top",
      endTrigger: isLast ? null : cards[cards.length - 1],
      pin: true,
      pinSpacing: isLast,
    });
  });

  cards.forEach((card, index) => {
    if (index < cards.length - 1) {
      const wrapper = card.querySelector<HTMLElement>(".card-wrapper");
      if (!wrapper) return;
      ScrollTrigger.create({
        trigger: cards[index + 1],
        start: "top bottom",
        end: "top top",
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(wrapper, { scale: 1 - p * 0.25, opacity: 1 - p });
        },
      });
    }
  });

  cards.forEach((card, index) => {
    if (index > 0) {
      const img = card.querySelector<HTMLElement>(".card-img img");
      const container = card.querySelector<HTMLElement>(".card-img");
      if (!img || !container) return;
      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
        end: "top top",
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(img, { scale: 2 - p });
          gsap.set(container, { borderRadius: `${150 - p * 125}px` });
        },
      });
    }
  });

  cards.forEach((card, index) => {
    if (index === 0) return;
    const desc = card.querySelector<HTMLElement>(".card-description");
    const chars = card.querySelectorAll<HTMLElement>(".char span");
    if (!desc || chars.length === 0) return;

    ScrollTrigger.create({
      trigger: card,
      start: "top top",
      onEnter: () => animateContentIn(chars, desc),
      onLeaveBack: () => animateContentOut(chars, desc),
    });
  });

  const marqueeItems = gsap.utils.toArray<HTMLElement>(".marquee h1");
  if (marqueeItems.length > 0) {
    horizontalLoop(marqueeItems, { repeat: -1, paddingRight: 30 });
  }
}
