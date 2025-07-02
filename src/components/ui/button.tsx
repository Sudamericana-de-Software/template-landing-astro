import * as React from "react"
import { cva, cx, type RecipeVariantProps } from "../../../styled-system/css"

const buttonStyle = cva({
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2",
        whiteSpace: "nowrap",
        rounded: "md",
        fontSize: "sm",
        fontWeight: "medium",
        transition: 'background-color .15s ease, color .15s ease',
        _focusVisible: {
            outline: "none",
            boxShadow: "shadows.borders-focus",
        },
        _disabled: {
            pointerEvents: "none",
            opacity: "0.5",
        },
        "& svg": {
            pointerEvents: "none",
            width: "4",
            height: "4",
            flexShrink: "0",
        },
    },
    variants: {
        variant: {
            default: {
                bg: "colors.ui.bg.interactive",
                color: "colors.ui.fg.on.color",
                boxShadow: "shadows.elevation-card-rest",
                _hover: {
                    bg: "color-mix(in srgb, var(--bg-interactive) 92%, white 8%)",
                },
            },
            destructive: {
                bg: "colors.ui.button.danger",
                color: "colors.ui.fg.on.color",
                boxShadow: "shadows.elevation-card-rest",
                _hover: {
                    bg: "colors.ui.button.danger.hover",
                },
            },
            outline: {
                border: "1px solid",
                borderColor: "colors.ui.border.base",
                bg: "colors.ui.bg.highlight",
                boxShadow: "shadows.elevation-card-rest",
                color: 'colors.ui.fg.base',
                _hover: {
                    bg: "colors.ui.bg.highlight.hover",
                    color: "colors.ui.fg.interactive",
                },
            },
            secondary: {
                bg: "colors.ui.button.neutral",
                color: "colors.ui.fg.base",
                boxShadow: "shadows.elevation-card-rest",
                _hover: {
                    bg: "colors.ui.button.neutral.hover",
                },
            },
            ghost: {
                bg: "transparent",
                color: "colors.ui.fg.base",
                _hover: {
                    bg: "colors.ui.bg.highlight",
                    color: "colors.ui.fg.interactive",
                },
            },
            link: {
                bg: "transparent",
                color: "colors.ui.fg.interactive",
                textUnderlineOffset: "4",
                _hover: {
                    textDecoration: "underline",
                },
            },
        },
        size: {
            default: {
                h: "9",
                px: "4",
                py: "2",
            },
            sm: {
                h: "8",
                rounded: "md",
                px: "3",
                fontSize: "xs",
            },
            lg: {
                h: "10",
                rounded: "md",
                px: "8",
            },
            icon: {
                h: "9",
                w: "9",
            },
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

type ButtonPropsBase = RecipeVariantProps<typeof buttonStyle>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonPropsBase & {
        ref?: React.RefObject<HTMLButtonElement>;
    };

const Button = ({ className, variant, size, ref, ...props }: ButtonProps) => {
    return <button className={cx(buttonStyle({ variant, size }), className)} ref={ref} {...props} />
}
Button.displayName = "Button"

export { Button, buttonStyle }
