import * as React from "react"
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from "react-aria-components"

interface ButtonProps extends AriaButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  render?: React.ReactElement
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", render, style, ...props }, ref) => {
    const buttonStyles: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "var(--font-weight-medium)",
      transition: "all var(--transition-normal)",
      outline: "none",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      whiteSpace: "nowrap",
      userSelect: "none",
      ...style,
    }
    
    // Variant styles
    const variantStyles: Record<string, React.CSSProperties> = {
      default: {
        backgroundColor: "var(--color-primary)",
        color: "var(--color-primary-foreground)",
      },
      destructive: {
        backgroundColor: "var(--color-destructive)",
        color: "var(--color-destructive-foreground)",
      },
      outline: {
        border: "1px solid var(--color-border)",
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
      },
      secondary: {
        backgroundColor: "var(--color-secondary)",
        color: "var(--color-secondary-foreground)",
      },
      ghost: {
        backgroundColor: "transparent",
        color: "var(--color-foreground)",
      },
      link: {
        backgroundColor: "transparent",
        color: "var(--color-primary)",
        textDecoration: "underline",
        textUnderlineOffset: "4px",
      },
    }
    
    // Size styles
    const sizeStyles: Record<string, React.CSSProperties> = {
      default: {
        height: "2.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        fontSize: "var(--font-size-sm)",
        borderRadius: "var(--radius-lg)",
      },
      sm: {
        height: "2.25rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        fontSize: "var(--font-size-sm)",
        borderRadius: "var(--radius-lg)",
      },
      lg: {
        height: "2.75rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        fontSize: "var(--font-size-sm)",
        borderRadius: "var(--radius-lg)",
      },
      icon: {
        height: "2.5rem",
        width: "2.5rem",
        borderRadius: "var(--radius-lg)",
      },
    }
    
    const combinedStyles = {
      ...buttonStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
    }
    
    if (render) {
      return React.cloneElement(render, {
        className: [className, (render.props as any)?.className].filter(Boolean).join(" "),
        style: { ...combinedStyles, ...(render.props as any)?.style },
        ref,
        ...props,
        ...(render.props as any),
      })
    }
    
    return (
      <AriaButton
        className={className}
        style={combinedStyles}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

// Legacy function for backward compatibility
function buttonVariants(props: { variant?: string; size?: string; className?: string } = {}) {
  return [
    props.className
  ].filter(Boolean).join(" ")
}

export { Button, type ButtonProps, buttonVariants }