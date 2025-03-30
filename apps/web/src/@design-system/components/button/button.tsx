import { type VariantProps, tv } from "tailwind-variants";

const buttonVariants = tv({
  base: `inline-flex items-center justify-center gap-2
         bg-(--btn-bg)
         whitespace-nowrap rounded-md
         text-sm font-medium text-(--btn-fg)
         ring-offset-background transition-colors
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
         disabled:pointer-events-none disabled:opacity-50
         [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
  variants: {
    color: {
      primary: "[--btn-bg:theme(--color-red-500/95%)] [--btn-fg:var(--color-blue-500)]",
      secondary: "[--btn-bg:theme(--color-secondary/95%)] [--btn-fg:var(--color-secondary-fg)]",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonVariantsProps = VariantProps<typeof buttonVariants>;
type ButtonProps = React.ComponentProps<"button"> & ButtonVariantsProps;

export function Button({ className, color, ...props }: ButtonProps) {
  return <button className={buttonVariants({ color })} {...props} />;
}
