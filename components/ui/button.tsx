import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

const variants = {
  primary: "bg-foreground text-background hover:bg-accent hover:text-background px-5 py-2.5",
  secondary:
    "border border-border bg-surface hover:bg-surface-2 hover:border-accent/40 px-5 py-2.5 text-foreground",
  ghost: "hover:bg-surface px-3 py-2 text-muted hover:text-foreground",
};

type Variant = keyof typeof variants;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
  )
);
Button.displayName = "Button";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <a ref={ref} className={cn(base, variants[variant], className)} {...props} />
  )
);
LinkButton.displayName = "LinkButton";
