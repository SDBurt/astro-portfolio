import type * as React from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  title?: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({ children, title, language }: CodeBlockProps) => {
  return (
    <div
      style={{
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        backgroundColor: "var(--color-muted)",
      }}
    >
      {title && (
        <div
          style={{
            padding: "0.75rem 1rem",
            backgroundColor: "var(--color-background)",
            borderBottom: "1px solid var(--color-border)",
            fontSize: "var(--font-size-sm)",
            fontWeight: "var(--font-weight-medium)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{title}</span>
          {language && (
            <span
              style={{
                fontSize: "var(--font-size-xs)",
                color: "var(--color-muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {language}
            </span>
          )}
        </div>
      )}
      <div
        style={{
          padding: "1rem",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-sm)",
          lineHeight: "1.6",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CodeBlock;
