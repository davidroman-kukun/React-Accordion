import React, { useState } from "react";
import "./App.css";

const data = [
  {
    label: "Section One",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
      accusantium atque consequuntur cupiditate distinctio fugit
      inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus
      eaque explicabo laboriosam molestias rem reprehenderit tempore!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  },
  {
    label: "Section Two",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
      accusantium atque consequuntur cupiditate distinctio fugit
      inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus
      eaque explicabo laboriosam molestias rem reprehenderit tempore!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  },
  {
    label: "Section Tree",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
      accusantium atque consequuntur cupiditate distinctio fugit
      inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus
      eaque explicabo laboriosam molestias rem reprehenderit tempore!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  },
];

const openAccordion = (index) => {
  let items = document.querySelectorAll(".k-accordion-content");
  for (var i = 0; i < items.length; i++) {
    index === i
      ? items[i].classList.toggle("k-accordion-show")
      : items[i].classList.remove("k-accordion-show");
  }
};

function App() {
  const [multi, setMulti] = useState(false);
  const [label, setLabel] = useState("");
  const [content, setContent] = useState("");
  const [sections, setSections] = useState(data);

  return (
    <>
      <div className="k-accordion">
        {sections.map((item, i) => (
          <div key={i} className="k-accordion-wrapper">
            <button
              onClick={({ target }) => {
                target.classList.toggle("k-accordion-open");
                // if multiple
                !multi
                  ? openAccordion(i)
                  : target.parentElement.childNodes[1].classList.toggle(
                      "k-accordion-show"
                    );
              }}
              className="k-accordion-button"
            >
              <div className="k-accordion-label">Section {item.label}</div>
              <i className="k-icon-arrow-down-bold k-icon-strokes icon-open-accordion"></i>
            </button>
            <div id={"item" + i} className="k-accordion-content">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <hr></hr>
      <h2>Options:</h2>
      <div className="row">
        <div>
          <input
            id="multi"
            type="checkbox"
            checked={multi}
            onChange={({ target }) => setMulti(target.checked)}
          />
          <label htmlFor="multi">Multiple - {multi ? "Yes" : "No"}</label>
        </div>
        <input
          onChange={({ target }) => setLabel(target.value)}
          value={label}
          placeholder="label"
        />
        <textarea
          onChange={({ target }) => setContent(target.value)}
          value={content}
          placeholder="content"
        ></textarea>
        <button
          onClick={() => {
            const newSections = sections.concat({ label, content });
            setSections(newSections);
            setLabel("");
            setContent("");
          }}
          disabled={content === "" || label === ""}
        >
          Add Section
        </button>
      </div>
    </>
  );
}

export default App;
