import React from "react"
import Fade from "react-reveal/Fade"
import HeaderImage from "../../images/header-main.jpg"
import Commvault from "../../images/Commvault.jpg"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Fade>
        <div className="flex flex-row space-x-96">
          <div className="mr-5">
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-20 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
            I deliver premium creative solution
          </h2>
          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
            Change starts with <br></br> a{" "}
            <span class="text-gradient bg-gradient-to-r from-pink-400 to-purple-500">
              Software Developer.
            </span>
          </h1>
          </div>
          <div className="rounded-xl w-56 h-12 ml-55 mt-32 flex flex-col content-center justify-center align-middle text-center bg-gradient-to-r bg-white bg-opacity-10 hover:from-purple-400 hover:to-pink-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-xl"> <Link
                  className="text-white cursor-pointer font-poppins"
                  to="https://drive.google.com/file/d/1NyuGHdzTCH6wDG_vj0SgVnYM0Voj1NqE/view?usp=drive_link"
                >
                  Download Resume
                </Link></h1>
          </div>
        </div>
        
      </Fade>
      <div className="flex flex-row space-x-96">
          <div className="mr-5">
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-20 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
            Expert Software Developer/Front End Developer with a passion for crafting visually stunning and highly functional websites and applications. I bring a deep understanding of modern web development techniques and trends. Proven track record of delivering high-quality, on-time results through efficient problem-solving and strong attention to detail. Committed to staying up-to-date with industry advancements and continuously improving my skills. Ready to bring my expertise and creativity to your next web development project.
            <br />
            <br />
            Learn more about me...
          </h2>
          </div>
          </div>

      {/* <div className="max-w-7xl mx-auto mt-10">
        <div className="w-full h-auto overflow-hidden rounded-xl">
          <img height="200px" width="400px" className="w-full h-full" src={Commvault} alt="Header"></img>
        </div>
      </div> */}
      <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r bg-white bg-opacity-10 hover:from-purple-400 hover:to-pink-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-4xl">
              {" "}
              <Link
                className="text-white cursor-pointer font-poppins"
                to="/about"
              >
                About
              </Link>
            </h1>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r bg-white bg-opacity-10 hover:from-purple-400 hover:to-pink-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-4xl"> <Link
                  className="text-white cursor-pointer font-poppins"
                  to="/education"
                >
                  Education
                </Link></h1>
            
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r bg-white bg-opacity-10 hover:from-purple-400 hover:to-pink-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-4xl"> <Link
                  className="text-white cursor-pointer font-poppins"
                  to="/work"
                >
                  Work
                </Link></h1>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r bg-white bg-opacity-10 hover:from-purple-400 hover:to-pink-300 transition duration-500 ease-in-out">
            <h1 className="text-white text-4xl"> <Link
                  className="text-white cursor-pointer font-poppins"
                  to="/projects"
                >
                  Projects
                </Link></h1>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Header
