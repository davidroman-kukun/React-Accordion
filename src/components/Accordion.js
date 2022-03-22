import { useRef } from "react";

function Accordion(props) {
  const accordion = useRef(null);
  const { expandable, sections, width, textColor, bgColor, innerMargin } = props;

  const openAccordion = ({ target }) => {
    //if (!multi) collapseAll(false);
    target.classList.toggle("k-accordion-open");
    const content = target.parentElement.children[1];
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
            onClick={openAccordion}
            className="k-accordion-button"
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

Accordion.defaultProps = {
  expandable: false,
  sections: [],
  width: 100,
  innerMargin: 18,
  innerScroll: false,
  bgColor: "#FFFFFF",
  textColor: "#CCCCCC",
};

export default Accordion;
