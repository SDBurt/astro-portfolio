import * as React from "react"

import { cn } from "@/lib/utils"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, style, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("text-sm font-medium", className)}
    style={{
      fontSize: "var(--font-size-sm)",
      fontWeight: "var(--font-weight-medium)",
      lineHeight: "1",
      ...style,
    }}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }