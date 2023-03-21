import React from "react";
import Container from "../../shared-components/container/Container";
import HomeCard from "./HomeCard/HomeCard";
import WelcomeOrange from "./WelcomeOrange/WelcomeOrange";
import TopCards from "./HomeTopCards/TopCards";
import WhyOrange from "./WhyOrange/WhyOrange";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="showcase-area">
        <div className="dark-overlay">
          <div className="showcase-content p-5">
            <Container>
              <HomeCard />
            </Container>
          </div>
        </div>
      </section>
      {/* Top Cards */}
      <section id="top-cards">
        <Container>
          <TopCards />
        </Container>
      </section>
      {/* Welcome To Orange App */}
      <section id="welcome-orange" className="p-5 ">
        <Container>
          <WelcomeOrange />
        </Container>
      </section>
      {/* Why Orange app */}
      <section id="why-orange" className="py-5">
        <Container>
          <WhyOrange />
        </Container>
      </section>
      {/* Some cards */}
      <section id="some-cards" className="py-5">
        <h1 className="text-center">We will show some latest offers here...</h1>
      </section>
    </>
  );
};

export default Home;
