import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/40 hover:text-foreground",
        className
      )}
      {...props}
    />
  );
}
