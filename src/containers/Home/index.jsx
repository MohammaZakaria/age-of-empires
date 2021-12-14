import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import { usePageTitle } from "../../hooks/usePageTitle";

const Home = () => {
  const [setCurrentTitle] = usePageTitle();
  useEffect(() => {
    setCurrentTitle("Home");
    // eslint-disable-next-line
  }, []);
  return (
    <section className="page__bg">
      <Hero />
    </section>
  );
};

export default Home;
