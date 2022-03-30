import { useRef, useState, useEffect } from "react";

function Accordion(props) {
  const accordion = useRef(null);
  const {
    expandable,
    sections,
    width,
    textColor,
    bgColor,
    innerMargin,
    startBy,
    openAll,
  } = props;

  const [active, setActive] = useState(startBy);

  useEffect(() => () => collapseAll(!openAll), [openAll]);
  useEffect(() => () => openAccordion(startBy), [startBy]);

  const openAccordion = (i) => {
    if (!expandable && active !== i) collapseAll(false);
    setActive(i);
    let items = accordion.current.children;
    const button = items[i].children[0];
    const content = items[i].children[1];
    button.classList.toggle("k-accordion-open");
    content.style.maxHeight =
      content.style.maxHeight !== "0px"
        ? "0px"
        : content.children[0].clientHeight + "px";
  };

  const collapseAll = (open) => {
    let items = accordion.current.children;
    for (var i = 0; i < items.length; i++) {
      const button = items[i].children[0];
      const content = items[i].children[1];
      if (open) {
        content.style.maxHeight = content.children[0].clientHeight + "px";
        button.classList.add("k-accordion-open");
      } else {
        content.style.maxHeight = "0px";
        button.classList.remove("k-accordion-open");
      }
    }
  };

  return (
    <div
      style={{ width: width + "%", margin: "auto" }}
      ref={accordion}
      className="k-accordion"
    >
      {sections.map((item, i) => (
        <div
          key={i}
          className="k-accordion-wrapper"
          style={{ margin: innerMargin + "px 0px" }}
        >
          <button
            onClick={() => openAccordion(i)}
            className={"k-accordion-button"}
            style={{
              color: textColor,
              backgroundColor: bgColor,
            }}
          >
            <div className="k-accordion-label">{item.label}</div>
            <i className="k-icon-arrow-down-bold k-icon-strokes icon-open-accordion"></i>
          </button>
          <div style={{ maxHeight: "0px" }} className="k-accordion-content">
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;