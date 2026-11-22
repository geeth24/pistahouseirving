import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "button-primary",
      outline: "button-outline",
      light: "button-light",
      icon: "button-icon",
    },
  },
  defaultVariants: { variant: "default" },
})
export function Button({
  asChild = false,
  variant,
  className,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "button"
  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  )
}
