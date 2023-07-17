import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/proj2.png"
import proj3 from "../assets/img/proj3.png"
import proj4 from "../assets/img/proj4.png"
import proj5 from "../assets/img/proj5.png"
import proj6 from "../assets/img/proj6.jpg"


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PROSHOP",
      description: "Ecommerce Website.",
      imgUrl: proj1,
    },
    {
      title: "COVID-19 Tracker",
      description: "Real Time Covid Tracker With Map.",
      imgUrl: proj2,
    },
    {
      title: "DRUM-KIT",
      description: "With Sound Effect.",
      imgUrl: proj3,
    },
    {
      title: "RPS Game",
      description: "You vs Computer, Tracks live score.",
      imgUrl: proj4,
    },
    {
      title: "TO-DO List",
      description: "Tasks are created on current dates.",
      imgUrl: proj5,
    },
    {
      title: "SUNNYSIDE",
      description: "Just For Fun.",
      imgUrl: proj6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Soon...</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Soon...</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Soon...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
