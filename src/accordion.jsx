import { useState } from "react";
import './App.css'

export default function Accordiondiv({title, text}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="maindiv">
        <p>{title}</p>
        <div className="open" onClick={() => setIsOpen(true)}>+</div>
      </div>
      {isOpen && <div className="supDiv">{text} <div className="close" onClick={() => setIsOpen(false)}>-</div></div>}
    </>
  );
}

export const divQuestions = [
  {
    title: "Do you accept refunds?",
    answer: "No, we don't accept any refunds. Continue at your own risk.",
  },
  {
    title: "How much monthly subscription costs?",
    answer: "The cost for TO is 50 dollars per month.",
  },
  {
    title: "Can 13 year-olds enter to this organization?",
    answer:
      "Yes they can, in fact we have lots of underage customers inside TO. Make sure to get permission from your parents. ",
  },
];
