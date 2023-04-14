import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/styles2.css'

const IndexPage: React.FC<PageProps> = () => {
  return (
      <div>
        <div className="block glow"></div>
      </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
