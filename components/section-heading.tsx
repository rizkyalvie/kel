import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode,
}

//A heading text for every section
function SectionHeading({ children,}: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 scroll-mt-28">{children}</h2>
  )
}

export default SectionHeading