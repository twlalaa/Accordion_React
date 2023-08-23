import React from "react";

//Components

import Container from "./components/Container";

import Header from "./components/Header";

import FAQ from "./components/FAQ";

//Hooks

import { useState } from "react";

//Data

import { Data as data } from "./data";

const App = () => {
  const [questions, setQuestions] = useState(data);

  const showAnswerFunc = (index) => {
    const faqs = [...questions];
    faqs[index].show = !faqs[index].show;
    setQuestions(faqs);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
      <Container>
        <Header />
        <FAQ showAnswer={showAnswerFunc} questions={questions} />
      </Container>
    </div>
  );
};

export default App;
