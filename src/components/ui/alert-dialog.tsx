import * as React from "react"
import { 
  Modal, 
  ModalOverlay, 
  Dialog, 
  DialogTrigger, 
  Button as AriaButton,
  Heading,
  Text
} from "react-aria-components"

import { Button } from "@/components/ui/button"

const AlertDialog = DialogTrigger

const AlertDialogTrigger = AriaButton

const AlertDialogPortal = React.Fragment

const AlertDialogBackdrop = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      position: "fixed",
      inset: 0,
      zIndex: "var(--z-modal-backdrop)",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      transition: "opacity 200ms ease-in-out",
      ...style,
    }}
    className={className}
    {...props}
  />
))
AlertDialogBackdrop.displayName = "AlertDialogBackdrop"

const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Dialog>
>(({ className, style, children, ...props }, ref) => (
  <ModalOverlay
    style={{
      position: "fixed",
      inset: 0,
      zIndex: "var(--z-modal)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
    }}
  >
    <Modal>
      <Dialog
        ref={ref}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "32rem",
          display: "grid",
          gap: "1rem",
          border: "1px solid var(--color-border)",
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
          padding: "1.5rem",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-lg)",
          outline: "none",
          ...style,
        }}
        className={className}
        {...props}
      >
        {children}
      </Dialog>
    </Modal>
  </ModalOverlay>
))
AlertDialogContent.displayName = "AlertDialogContent"

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      textAlign: "center",
      ...style,
    }}
    className={className}
    {...props}
  />
))
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      display: "flex",
      flexDirection: "column-reverse",
      gap: "0.5rem",
      ...style,
    }}
    className={className}
    {...props}
  />
))
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof Heading>
>(({ className, style, ...props }, ref) => (
  <Heading
    ref={ref}
    level={2}
    style={{
      fontSize: "var(--font-size-lg)",
      fontWeight: "var(--font-weight-semibold)",
      ...style,
    }}
    className={className}
    {...props}
  />
))
AlertDialogTitle.displayName = "AlertDialogTitle"

const AlertDialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof Text>
>(({ className, style, ...props }, ref) => (
  <Text
    ref={ref}
    style={{
      fontSize: "var(--font-size-sm)",
      color: "var(--color-muted-foreground)",
      ...style,
    }}
    className={className}
    {...props}
  />
))
AlertDialogDescription.displayName = "AlertDialogDescription"

const AlertDialogAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    className={className}
    {...props}
  />
))
AlertDialogAction.displayName = "AlertDialogAction"

const AlertDialogCancel = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, style, ...props }, ref) => (
  <Button
    ref={ref}
    variant="outline"
    style={{
      marginTop: "0.5rem",
      ...style,
    }}
    className={className}
    {...props}
  />
))
AlertDialogCancel.displayName = "AlertDialogCancel"

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}