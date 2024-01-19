import { Children, useEffect, useRef, useState } from "react";
import "./App.css";
import autoAnimate from "@formkit/auto-animate";

export default function Accordiondiv({ title, text, indexVal }) {
  //indexVal is for grouping 2 accordions together.
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef(null);
  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [Children]);

  return (
    <div className="bigDiv" ref={parentRef}>
      <div className={`maindiv m${indexVal}`}>
        <p>{title}</p>
        <div
          className="open"
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
          <span className="material-symbols-outlined">
            {isOpen ? "expand_less" : "expand_more"}
          </span>
        </div>
      </div>
      {isOpen && <div className={`supDiv m${indexVal}`}>{text}</div>}
    </div>
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
