import meter1 from "../assets/skills/icons8-c++-64.png";
import meter2 from "../assets/skills/icons8-c-programming-64.png";
import meter3 from "../assets/skills/icons8-css3-64.png";
import meter4 from "../assets/skills/icons8-django-64.png";
import meter5 from "../assets/skills/icons8-git-64.png";
import meter6 from "../assets/skills/icons8-github-64.png";
import meter7 from "../assets/skills/icons8-html-5-64.png";
import meter8 from "../assets/skills/icons8-bootstrap-64.png";
import meter9 from "../assets/skills/icons8-javascript-64.png";
import meter10 from "../assets/skills/icons8-jquery-64.png";
import meter11 from "../assets/skills/icons8-mongodb-64.png";
import meter12 from "../assets/skills/icons8-nodejs-64.png";
import meter13 from "../assets/skills/icons8-react-64.png";



import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>DJango</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="Image" />
                  <h5>Jquery</h5>
                </div>
                <div className="item">
                  <img src={meter11} alt="Image" />
                  <h5>mongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter12} alt="Image" />
                  <h5>nodeJS</h5>
                </div>
                <div className="item">
                  <img src={meter13} alt="Image" />
                  <h5>React</h5>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
