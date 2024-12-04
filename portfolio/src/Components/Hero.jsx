import React from 'react'
import "../CSS/Custom.css"

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js,python",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=react,next",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=materialui,bootstrap",
    id: 4,
  },
  {
    img: "https://skillicons.dev/icons?i=nodejs,express",
    id: 5,
  },
  {
    img: "https://skillicons.dev/icons?i=mysql,mongodb",
    id: 6,
  },

];

export default function Hero() {

  return (
    <div>
      <section id="Home" className="hero">
        <div className="container">
          <div className="content">
            <div className='wrapper'>
              <div className="hero-main">

                <div className="hero-text TEXT">
                  <h1 style={{color:"white"}}>.</h1>
                  <h1 style={{color:"white"}}>.</h1>
                  <h1>MERN Stack Developer</h1>
                  {/* <img src={Waving} alt="waving_hand" /> */}
                  <p>
                    Hi, I'm Muhammad Ezaan. A passionate MERN Stack
                    Developer based in Islamabad, Pakistan.📍
                  </p>
                  <span>
                    <a
                      aria-label="linkedin"
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/muhammad-ezaan-ali/"
                    >
                      {/* <IconBrandLinkedin width={32} height={32} /> */}
                    </a>
                    <a
                      aria-label="github"
                      rel="noreferrer"
                      target="_blank"
                      href="https://github.com/ezaanCodes"
                    >
                      {/* <IconBrandGithub width={32} height={32} /> */}
                    </a>
                  </span>
                </div>

                <div className="hero-img Pic">
                  <img src="" alt="picture Area" />
                  <p>picture</p>
                </div>
              </div>



              <div className="skills ">

                <p>Tech Stack </p>
                <div className='logos'>
                  <ul style={{ "list-style-type": "none" }}>
                    {skillsIcons.map((icon) => (
                      <li key={icon.id}>
                        <img src={icon.img} alt="skill-icon" />
                      </li>
                    ))}

                  </ul>
                </div>

              </div>


            </div>

          </div>
        </div>
      </section>
    </div >
  )
}
