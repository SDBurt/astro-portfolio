import type * as React from "react";

interface CalloutProps {
  type?: "note" | "warning" | "tip" | "danger";
  title?: string;
  children: React.ReactNode;
}

const Callout = ({ type = "note", title, children }: CalloutProps) => {
  const getCalloutStyles = () => {
    return {
      padding: "1rem",
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
      borderLeft: "3px solid var(--color-muted-foreground)",
      paddingLeft: "1.5rem",
      backgroundColor: "var(--color-muted)",
      color: "var(--color-foreground)",
    };
  };

  const getPrefix = () => {
    switch (type) {
      case "warning":
        return "Warning:";
      case "tip":
        return "Tip:";
      case "danger":
        return "Important:";
      default:
        return "Note:";
    }
  };

  return (
    <div style={getCalloutStyles()}>
      {title && (
        <div
          style={{
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "0.5rem",
          }}
        >
          {getPrefix()} {title}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Callout;