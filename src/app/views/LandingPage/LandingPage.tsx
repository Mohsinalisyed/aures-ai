import React from "react";
import HeroSection from "./HeroSection";
import WhyAureus from "./WhyAureus";
import KeyFeatures from "./KeyFeatures";
import AiAgents from "./AiAgents";
import UsersSection from "./UsersSection";
import FuturePlans from "./FuturePlans";
import Testimonials from "./Testimonials";
const LandingPage = () => {
  return (
    <>
      {/* Ai Agent animation need to be stick so overflow hidden  for that section */}
      <div className="container overflow-hidden max-w-full">
        <HeroSection />
        <WhyAureus />
        <KeyFeatures />
        <UsersSection />
        <AiAgents />
        <FuturePlans />
        <Testimonials />
      </div>
    </>
  );
};

export default LandingPage;
