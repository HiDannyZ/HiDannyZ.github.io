import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/styles.css'
import '../styles/stylesStars.scss'
import image from '../assets/illustrations/best.jpg'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <div className="background">
        <div className="stars">
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
                  <div className="star"></div>
        </div>
        <div className="navBar">
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Thoughts">Thoughts</a></li>
          <li><a href="#Experimental">Experimental</a></li>
        </div>
        <div className="block glow">            
          <img src={image} />
          <h1>About</h1>
          <h4> Hey, I am Danny Zhu, a software engineer currently based in "NYC Icon" NYC and work at "JPMC Icon" JPM as a Software Engineer</h4>
          <h4> Outside of programming, you will find me enjoying new foods, traveling, music, anime, gaming, and in general exploring new things.</h4>

          <h4> Find me on Github or Linkedln  </h4>
          <h4> Mail me at chdannyzhu@gmail.com</h4>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>


