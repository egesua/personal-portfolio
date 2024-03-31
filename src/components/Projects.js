import React from "react";
import {
  Col,
  Container,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Recommendator",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "ContactApp",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Redux-Todo",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <NavItem>
                  <NavLink eventKey="first">Tab One</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="second">Tab Two</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="third">Tab Three</NavLink>
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

export default Projects;
