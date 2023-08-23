//Components

import ListItem from "./ListItem";

const FAQ = (props) => {
  return (
    <div className="p-10">
      <ul>
        {props.questions.map((q, index) => (
          <ListItem
            showAnswer={props.showAnswer}
            key={index}
            index={index}
            question={q.question}
            answer={q.answer}
            show={q.show}
          />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
