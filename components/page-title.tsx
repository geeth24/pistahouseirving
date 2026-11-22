type TitleLine = string | { emphasis: string }

export function PageTitle({ lines }: { lines: TitleLine[] }) {
  return (
    <h1 className="page-title">
      {lines.map((line) => {
        const text = typeof line === "string" ? line : line.emphasis
        return (
          <span className="title-window" key={text}>
            <span className="title-line">
              {typeof line === "string" ? line : <em>{text}</em>}
            </span>{" "}
          </span>
        )
      })}
    </h1>
  )
}
