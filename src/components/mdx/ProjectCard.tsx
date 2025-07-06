
interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  demoURL?: string;
  repoURL?: string;
  tags?: string[];
}

const ProjectCard = ({ title, description, href, demoURL, repoURL, tags = [] }: ProjectCardProps) => {
  return (
    <div
      style={{
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
        paddingBottom: "1rem",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <h3
          style={{
            fontSize: "var(--font-size-xl)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "0.5rem",
            color: "var(--color-foreground)",
          }}
        >
          {href ? (
            <a
              href={href}
              style={{
                color: "var(--color-primary)",
                textDecoration: "none",
              }}
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p
          style={{
            color: "var(--color-muted-foreground)",
            fontSize: "var(--font-size-sm)",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>

      {tags.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.25rem 0.5rem",
                backgroundColor: "var(--color-muted)",
                color: "var(--color-muted-foreground)",
                fontSize: "var(--font-size-xs)",
                borderRadius: "var(--radius-sm)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {(demoURL || repoURL) && (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "var(--font-size-sm)" }}>
          {demoURL && (
            <a
              href={demoURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--color-primary)",
                textDecoration: "underline",
              }}
            >
              Demo
            </a>
          )}
          {repoURL && (
            <a
              href={repoURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--color-primary)",
                textDecoration: "underline",
              }}
            >
              Code
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;