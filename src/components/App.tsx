import React, { useState } from "react"

type Props = {
  height: number
  children: React.ReactNode
}

const ReactExpander = ({ height, children }: Props) => {
  const predefinedHeight = height + 100
  const [visibleHeight, setVisibleHeight] = useState(`${predefinedHeight}px`)
  const [isExpanded, setIsExpanded] = useState(false)

  React.useEffect(() => {
    if (isExpanded) {
      setVisibleHeight("auto")
    } else {
      setVisibleHeight(`${predefinedHeight}px`)
    }
  }, [isExpanded, predefinedHeight])

  return (
    <div style={{ height: `${visibleHeight}px` }}>
      {children}
      <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Less" : "More"}</button>
    </div>
  )
}

export default ReactExpander
