import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero";
import { usePageTitle } from "../../hooks/usePageTitle";

const Home = () => {
  const dispatch = useDispatch();
  const [setCurrentTitle] = usePageTitle();
  useEffect(() => {
    setCurrentTitle("Home");
  }, []);
  return (
    <section className="page__bg">
      <Hero />
    </section>
  );
};

export default Home;
