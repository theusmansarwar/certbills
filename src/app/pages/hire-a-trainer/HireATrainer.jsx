import DomainsWeCover from "@/app/Components/DomainsWeCover/DomainsWeCover";
import HireATrainerHero from "@/app/Components/HireATrainerHero/HireATrainerHero";
import HowItWorks2 from "@/app/Components/HowItWorks/HowItWorks2";
import WhyChoose2 from "@/app/Components/WhyChoose2/WhyChoose2";
import React from "react";

const HireATrainer = () => {
  return (
    <div>
      <HireATrainerHero />
      <WhyChoose2/>
      <HowItWorks2/>
      <DomainsWeCover/>
    </div>
  );
};

export default HireATrainer;
