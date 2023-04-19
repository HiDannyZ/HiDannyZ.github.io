import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '../styles/styles.css'
import '../styles/stylesStars.scss'
import image from '../assets/illustrations/greatnewyear.jpg'

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
          <ul>
            <li><a href="Home ">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Projects">Projects</a></li>
            <li><a href="Thoughts">Thoughts</a></li>
            <li><a href="Experimental">Experimental</a></li>
          </ul>
          <div className="block glow">
            <img src={image}/>
            <h1>Hey,</h1>
            <h4> I am Danny Zhu, a software engineer currently based in "NYC Icon" NYC and work at "JPMC Icon" JPM as a Software Engineer</h4>
            <h4> Dreaming up ideas and making them come true is where my passion lies. You can find my full projects list here. I also do some experiments with the website under the Experimental tab located on the top right</h4>
            <h4> Outside of programming, you will find me enjoying new foods, traveling, music, anime, and in general exploring new things. Feel free to add me on Beli for food recs in the NYC area @Hidanny </h4>

            <h4> Find me on Github, Linkedln or Anilist if you enjoy anime as well haha </h4>
            <h4> Mail me at chdannyzhu@gmail.com</h4>
          </div>
        </div>
      </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>


