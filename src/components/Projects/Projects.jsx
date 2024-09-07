import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider";
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Container id="project">
      <div>
        <h1>
          Recent <span className="green">Projects</span>
        </h1>
        <p>
          As a dedicated Telecom Professional with 2 years of experience, I have
          honed my skills in developing innovative solutions that drive
          efficiency and growth within the industry. My expertise lies in
          leveraging Java to build robust and scalable applications that meet
          the unique demands of the telecom sector..
        </p>
        <p>
          I have a proven track record of optimizing network performance,
          reducing operational costs, improving customer satisfaction. My
          ability to troubleshoot complex issues, collaborate effectively, and
          stay up-to-date with industry trends has enabled me to consistently
          deliver high-quality results.
        </p>
        <Zoom>
          <h2>Project 1: T-Mobile Netherlands</h2>
          <ProjectDetails>
            <li>
              Successfully led the implementation of a comprehensive BSS/OSS
              solution, resulting in specific improvements or benefits.
            </li>
            <li>
              Spearheaded a team in the development of innovative features or
              modules, enhancing the overall capabilities of the telecom
              infrastructure.
            </li>
            <li>
              Developed REST APIs and implemented authentication protocols, such
              as OAuth, to securely expose data to clients.
            </li>
            <li>
              Developed and maintained software in multiple programming
              languages, such as Java, Python, and JavaScript.
            </li>
            <li>
              Implemented automated testing that increased code coverage to 80%,
              reducing the number of production issues by 75%.
            </li>
            <li>
              Led a team of developers to successfully complete a major software
              project on time and within budget.
            </li>
          </ProjectDetails>
        </Zoom>
        <Zoom>
          <h2>Project 2: Odido Netherlands</h2>
          <ProjectDetails>
            <li>BSS/OSS Architecture Design.</li>
            <li>Plan & build Implementation.</li>
            <li>Service Provisioning Optimization.</li>
            <li>Data Management and Analytics.</li>
            <li>Integration Solutions.</li>
            <li>Led a team of developers to successfully complete a major</li>
          </ProjectDetails>
        </Zoom>
        <Zoom>
          <h2>Project 3: Cycle Rental Solutions</h2>
          <ProjectDetails>
            <li>**Core Features:**</li>
            <li>User Registration and Login</li>
            <li>Bike Catalog</li>
            <li>Rental Process</li>
            <li>Payment Gateway Integration</li>
            <li>Location-Based Search</li>
            <li>Real-time Availability</li>
            <li>**Additional Features:**</li>
            <li>Bike Tracking</li>
            <li>Mobile App</li>
            <li>Customer Support</li>
            <li>Reviews and Ratings</li>
            <li>Loyalty Program</li>
          </ProjectDetails>
        </Zoom>
        <Zoom>
          <h2>Project 4: AI BOT- News Research Tool </h2>
          <ProjectDetails>
            <li>**Core Functionality:**</li>
            <li>Upload URLs or text files containing article content.</li>
            <li>
              Process article content using LangChain's UnstructuredURL Loader.
            </li>
            <li>Construct embedding vectors using OpenAI's embeddings.</li>
            <li>Leverage FAISS for efficient similarity search.</li>
            <li>
              Interact with LLM (ChatGPT) for query-based information retrieval.
            </li>
          </ProjectDetails>
        </Zoom>
      </div>
      {/* <Slide>
            <SliderComp/>
        </Slide> */}
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    font-size: 2rem;
    line-height: 1.5;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
const ProjectDetails = styled.ul`
  list-style-type: none; /* Remove default bullet points */
  padding: 1rem; /* Remove default padding */
  margin: 0; /* Remove default margin */

  li {
    margin-bottom: 1rem; /* Add spacing between bullet points */
  }
`;

const Slide = styled.div``;
