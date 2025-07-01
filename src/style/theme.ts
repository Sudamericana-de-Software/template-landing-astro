import { defineAnimationStyles, defineKeyframes, defineTokens } from "@pandacss/dev"

export const colorsTokens = {
    colors: {
        ui: {
            tag: {
                neutral: {
                    border: { value: "var(--tag-neutral-border)" },
                    icon: { value: "var(--tag-neutral-icon)" },
                    text: { value: "var(--tag-neutral-text)" },
                    bg: {
                        DEFAULT: { value: "var(--tag-neutral-bg)" },
                        hover: { value: "var(--tag-neutral-bg-hover)" },
                    },
                },
                red: {
                    text: { value: "var(--tag-red-text)" },
                    border: { value: "var(--tag-red-border)" },
                    icon: { value: "var(--tag-red-icon)" },
                    bg: {
                        DEFAULT: { value: "var(--tag-red-bg)" },
                        hover: { value: "var(--tag-red-bg-hover)" },
                    },
                },
                blue: {
                    text: { value: "var(--tag-blue-text)" },
                    border: { value: "var(--tag-blue-border)" },
                    icon: { value: "var(--tag-blue-icon)" },
                    bg: {
                        DEFAULT: { value: "var(--tag-blue-bg)" },
                        hover: { value: "var(--tag-blue-bg-hover)" },
                    },
                },
                orange: {
                    text: { value: "var(--tag-orange-text)" },
                    border: { value: "var(--tag-orange-border)" },
                    icon: { value: "var(--tag-orange-icon)" },
                    bg: {
                        DEFAULT: { value: "var(--tag-orange-bg)" },
                        hover: { value: "var(--tag-orange-bg-hover)" },
                    },
                },
                green: {
                    text: { value: "var(--tag-green-text)" },
                    border: { value: "var(--tag-green-border)" },
                    icon: { value: "var(--tag-green-icon)" },
                    bg: {
                        DEFAULT: { value: "var(--tag-green-bg)" },
                        hover: { value: "var(--tag-green-bg-hover)" },
                    },
                },
                purple: {
                    text: { value: "var(--tag-purple-text)" },
                    border: { value: "var(--tag-purple-border)" },
                    icon: { value: "var(--tag-purple-icon)" },
                    bg: {
                        DEFAULT: { value: "var(--tag-purple-bg)" },
                        hover: { value: "var(--tag-purple-bg-hover)" },
                    },
                },
            },
            bg: {
                switch: {
                    off: {
                        DEFAULT: { value: "var(--bg-switch-off)" },
                        hover: { value: "var(--bg-switch-off-hover)" },
                    },
                },
                subtle: {
                    DEFAULT: { value: "var(--bg-subtle)" },
                    hover: { value: "var(--bg-subtle-hover)" },
                    pressed: { value: "var(--bg-subtle-pressed)" },
                },
                field: {
                    DEFAULT: { value: "var(--bg-field)" },
                    hover: { value: "var(--bg-field-hover)" },
                    component: {
                        DEFAULT: { value: "var(--bg-field-component)" },
                        hover: { value: "var(--bg-field-component-hover)" },
                    },
                },
                base: {
                    DEFAULT: { value: "var(--bg-base)" },
                    hover: { value: "var(--bg-base-hover)" },
                    pressed: { value: "var(--bg-base-pressed)" },
                },
                highlight: {
                    DEFAULT: { value: "var(--bg-highlight)" },
                    hover: { value: "var(--bg-highlight-hover)" },
                },
                component: {
                    DEFAULT: { value: "var(--bg-component)" },
                    hover: { value: "var(--bg-component-hover)" },
                    pressed: { value: "var(--bg-component-pressed)" },
                },
                interactive: {
                    DEFAULT: { value: "var(--bg-interactive)" },
                },
                disabled: {
                    DEFAULT: { value: "var(--bg-disabled)" },
                },
                overlay: {
                    DEFAULT: { value: "var(--bg-overlay)" },
                },
            },
            border: {
                menu: {
                    top: { value: "var(--border-menu-top)" },
                    bot: { value: "var(--border-menu-bot)" },
                },
                strong: { value: "var(--border-strong)" },
                interactive: { value: "var(--border-interactive)" },
                base: { value: "var(--border-base)" },
                danger: { value: "var(--border-danger)" },
                error: { value: "var(--border-error)" },
                transparent: { value: "var(--border-transparent)" },
            },
            contrast: {
                fg: {
                    primary: { value: "var(--contrast-fg-primary)" },
                    secondary: { value: "var(--contrast-fg-secondary)" },
                },
                bg: {
                    base: {
                        DEFAULT: { value: "var(--contrast-bg-base)" },
                        hover: { value: "var(--contrast-bg-base-hover)" },
                        pressed: { value: "var(--contrast-bg-base-pressed)" },
                    },
                    subtle: { value: "var(--contrast-bg-subtle)" },
                },
                border: {
                    base: { value: "var(--contrast-border-base)" },
                    top: { value: "var(--contrast-border-top)" },
                    bot: { value: "var(--contrast-border-bot)" },
                },
            },
            button: {
                inverted: {
                    DEFAULT: { value: "var(--button-inverted)" },
                    hover: { value: "var(--button-inverted-hover)" },
                    pressed: { value: "var(--button-inverted-pressed)" },
                },
                transparent: {
                    DEFAULT: { value: "var(--button-transparent)" },
                    hover: { value: "var(--button-transparent-hover)" },
                    pressed: { value: "var(--button-transparent-pressed)" },
                },
                danger: {
                    DEFAULT: { value: "var(--button-danger)" },
                    hover: { value: "var(--button-danger-hover)" },
                    pressed: { value: "var(--button-danger-pressed)" },
                },
                neutral: {
                    DEFAULT: { value: "var(--button-neutral)" },
                    hover: { value: "var(--button-neutral-hover)" },
                    pressed: { value: "var(--button-neutral-pressed)" },
                },
            },
            fg: {
                on: {
                    color: { value: "var(--fg-on-color)" },
                    inverted: { value: "var(--fg-on-inverted)" },
                },
                interactive: {
                    DEFAULT: { value: "var(--fg-interactive)" },
                    hover: { value: "var(--fg-interactive-hover)" },
                },
                error: { value: "var(--fg-error)" },
                subtle: { value: "var(--fg-subtle)" },
                base: { value: "var(--fg-base)" },
                disabled: { value: "var(--fg-disabled)" },
                muted: { value: "var(--fg-muted)" },
            },
            alpha: {
                250: { value: "var(--alpha-250)" },
                400: { value: "var(--alpha-400)" },
            },
        },
    },
}

export const shadowsTokens = defineTokens({
    shadows: {
        "borders-interactive-with-active": { value: "var(--borders-interactive-with-active)" },
        "buttons-danger-focus": { value: "var(--buttons-danger-focus)" },
        "details-contrast-on-bg-interactive": { value: "var(--details-contrast-on-bg-interactive)" },
        "borders-interactive-with-focus": { value: "var(--borders-interactive-with-focus)" },
        "borders-error": { value: "var(--borders-error)" },
        "borders-focus": { value: "var(--borders-focus)" },
        "borders-interactive-with-shadow": { value: "var(--borders-interactive-with-shadow)" },
        "buttons-danger": { value: "var(--buttons-danger)" },
        "buttons-inverted-focus": { value: "var(--buttons-inverted-focus)" },
        "elevation-card-hover": { value: "var(--elevation-card-hover)" },
        "details-switch-handle": { value: "var(--details-switch-handle)" },
        "buttons-neutral": { value: "var(--buttons-neutral)" },
        "borders-base": { value: "var(--borders-base)" },
        "elevation-card-rest": { value: "var(--elevation-card-rest)" },
        "buttons-neutral-focus": { value: "var(--buttons-neutral-focus)" },
        "details-switch-background-focus": { value: "var(--details-switch-background-focus)" },
        "details-switch-background": { value: "var(--details-switch-background)" },
        "elevation-flyout": { value: "var(--elevation-flyout)" },
        "elevation-tooltip": { value: "var(--elevation-tooltip)" },
        "elevation-modal": { value: "var(--elevation-modal)" },
        "elevation-code-block": { value: "var(--elevation-code-block)" },
        "buttons-inverted": { value: "var(--buttons-inverted)" },
        "elevation-commandbar": { value: "var(--elevation-commandbar)" },
    }
})

export const keyframes = defineKeyframes({
    fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
    },
    fadeOut: {
        from: { opacity: "1" },
        to: { opacity: "0" },
    },
    zoomIn: {
        from: { transform: "scale(0.95)", opacity: "0" },
        to: { transform: "scale(1)", opacity: "1" },
    },
    zoomOut: {
        from: { transform: "scale(1)", opacity: "1" },
        to: { transform: "scale(0.95)", opacity: "0" },
    },
    accordionDown: {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
    },
    accordionUp: {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
    },
    slideInFromRight: {
        from: { transform: "translateX(100%)", opacity: "0" },
        to: { transform: "translateX(0)", opacity: "1" },
    },
    slideOutToRight: {
        from: { transform: "translateX(0)", opacity: "1" },
        to: { transform: "translateX(100%)", opacity: "0" },
    },
    slideInBottom: {
        from: { transform: 'translateY(100%)', opacity: '0' },
        to: { transform: 'translateY(0)', opacity: '1' },
    },
    slideOutBottom: {
        from: { transform: 'translateY(0)', opacity: '1' },
        to: { transform: 'translateY(100%)', opacity: '0' },
    },
    promptOpen: {
        "0%": {
            opacity: "0",
            transform: "scale(0.95) translate(-50%, -48%)",
        },
        "100%": {
            opacity: "1",
            transform: "scale(1) translate(-50%, -50%)",
        },
    },
    promptClose: {
        "0%": {
            opacity: "1",
            transform: "scale(1) translate(-50%, -50%)",
        },
        "100%": {
            opacity: "0",
            transform: "scale(0.95) translate(-50%, -48%)",
        },
    },
})

export const animationStyles = defineAnimationStyles({
    "fade-in": {
        value: {
            animationName: "fadeIn",
            animationDuration: "200ms",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
        },
    },
    "fade-out": {
        value: {
            animationName: "fadeOut",
            animationDuration: "200ms",
            animationTimingFunction: "ease-in",
            animationFillMode: "forwards",
        },
    },
    "zoom-in": {
        value: {
            animationName: "zoomIn",
            animationDuration: "150ms",
            animationTimingFunction: "ease-out",
        },
    },
    "zoom-out": {
        value: {
            animationName: "zoomOut",
            animationDuration: "150ms",
            animationTimingFunction: "ease-in",
        },
    },
    "accordion-down": {
        value: {
            animationName: "accordionDown",
            animationDuration: "0.2s",
            animationTimingFunction: "ease-out",
        },
    },
    "accordion-up": {
        value: {
            animationName: "accordionUp",
            animationDuration: "0.2s",
            animationTimingFunction: "ease-out",
        },
    },
    "slide-in-from-right": {
        value: {
            animationName: "slideInFromRight",
            animationDuration: "200ms",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
        },
    },
    "slide-out-to-right": {
        value: {
            animationName: "slideOutToRight",
            animationDuration: "200ms",
            animationTimingFunction: "ease-in",
            animationFillMode: "forwards",
        },
    },
    'slide-in-bottom': {
        value: {
            animationName: 'slideInBottom',
            animationDuration: '200ms',
            animationTimingFunction: 'ease-out',
        },
    },
    'slide-out-bottom': {
        value: {
            animationName: 'slideOutBottom',
            animationDuration: '200ms',
            animationTimingFunction: 'ease-in',
        },
    },
    "prompt-open": {
        value: {
            animationName: "promptOpen",
            animationDuration: "200ms",
            animationTimingFunction: "ease-out",
        },
    },
    "prompt-close": {
        value: {
            animationName: "promptClose",
            animationDuration: "200ms",
            animationTimingFunction: "ease-in",
        },
    },
})