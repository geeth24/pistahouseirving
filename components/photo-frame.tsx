import type { ReactNode } from "react"

export function PhotoFrame({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div className={"photo-mount " + className}>
      <div className="mounted-photo">{children}</div>
    </div>
  )
}
