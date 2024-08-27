import React, { useContext, useState } from "react";
import "./FAQAccordion.css";
import { data } from "../constants/data.js";
import { Button } from "react-bootstrap";
import MyContext from "../context/MyContext.jsx";

const FAQAccordion = () => {
  const [accordionIndex, setAccordionIndex] = useState(null);

  const handleAccordionOpen = (index) => {
    setAccordionIndex(accordionIndex === index ? null : index);
  };

  const { isMobile } = useContext(MyContext);

  return (
    <div className="acc-container">
      <div className="acc-div">
        <p className="acc-heading">Frequently Asked Questions</p>
        <hr style={{ color: "white" }} />
        {data &&
          data.map((items, index) => (
            <React.Fragment key={index}>
              <p
                className="acc-question"
                onClick={() => handleAccordionOpen(index)}
              >
                <button className="acc-button">
                  {/* O = Open and C = Close beacuse when I am using > and ^ it is showing
                  the different icon which is coming from bootstrap and if I am downloading
                  the icon from internet that is no looking good. */}
                  {accordionIndex === index ? "O" : "C"}
                </button>
                {items.question}
              </p>
              {accordionIndex === index ? (
                <>
                  <p className="acc-answer">{items.answer}</p>
                </>
              ) : null}
              <hr style={{ color: "white" }} />
            </React.Fragment>
          ))}
        {isMobile ? (
          <div className="button-div">
            <Button variant="danger" className="get-started-btn rounded-4">
              Get started
            </Button>
            <p className="note-text">
              MARCUS MVP is only available for use in our Mobile App
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FAQAccordion;
