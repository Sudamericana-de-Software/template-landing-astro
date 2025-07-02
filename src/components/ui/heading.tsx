import { cva, cx, type RecipeVariantProps } from "../../../styled-system/css";

const headingVariants = cva({
  base: {
    fontFamily: "sans",
    fontWeight: "medium",
    padding: "0px",
    marginBlockStart: '0',
    marginBlockEnd: '1rem',
  },
  variants: {
    level: {
      h1: {
        fontSize: "4xl",
        lineHeight: "short",
      },
      h2: {
        fontSize: "3xl",
        lineHeight: "short",
      },
      h3: {
        fontSize: "2xl",
        lineHeight: "short",
      },
    },
  },
  defaultVariants: {
    level: "h1",
  },
})

type HeadingProps = RecipeVariantProps<typeof headingVariants> & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * This component is based on the heading element (`h1`, `h2`, etc...) depending on the specified level
 * and supports all of its props
 */
const Heading = ({
  /**
   * The heading level which specifies which heading element is used.
   */
  level = "h1",
  className,
  ...props
}: HeadingProps) => {
  const Component = level || "h1"

  return (
    <Component
      className={cx(headingVariants({ level }), className)}
      {...props}
    />
  )
}

export { Heading, headingVariants }