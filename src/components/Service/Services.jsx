import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">Services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={FaLaptopCode}
            title={"Software Developer"}
            disc={`Results-oriented full-stack developer with 3 years of experience building scalable web applications. Proven ability to design, develop, and deploy robust solutions using Springboot. Skilled in Java Developer | Spring Boot | Microservices | Cloud Computing | Agile | DevOps | BSS/OSS Telecom | React Web Development. Passionate about crafting intuitive user experiences and delivering high-quality software.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"AI & ML"}
            disc={`As an AI & ML Enthusiast, I possess a deep understanding of Langchain and its applications in building sophisticated language models. My expertise lies in Python, natural language processing, machine learning. I have successfully implemented chatbots, question answering systems, document summarization using Langchain's powerful components and techniques. My passion for innovation drives me to explore new ways to leverage AI and ML to create cutting-edge solutions that address real-world challenges..`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
