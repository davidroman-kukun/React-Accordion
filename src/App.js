import React, { useState } from "react";
import { Container, Row, Col, Form, Tab, Tabs } from "react-bootstrap";
import Accordion from "./components/Accordion";

const data = [
  {
    label: "Section One",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
    accusantium atque consequuntur cupiditate distinctio fugit
    inventore ipsum mollitia quisquam rem! Aspernatur cumque delectus
    eaque explicabo laboriosam molestias rem reprehenderit tempore!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
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
      inventore ipsum mollitia <strong>content: </strong> rem! Aspernatur cumque delectus
      eaque explicabo laboriosam molestias rem reprehenderit tempore!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
  },
];

function App() {
  const [expandable, setExpandable] = useState(false);
  const [width, setWidth] = useState(100);
  const [innerMargin, setInnerMargin] = useState(18);
  const [innerScroll, setInnerScroll] = useState(false);
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#CCCCCC");

  const [label, setLabel] = useState("");
  const [content, setContent] = useState("");
  const [sections, setSections] = useState(data);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Accordion
              width={width}
              bgColor={bgColor}
              innerMargin={innerMargin}
              textColor={textColor}
              innerScroll={innerScroll}
              multi={expandable}
              sections={sections}
            />
          </Col>
          <Col md={4}>
            <Tabs defaultActiveKey="options" className="my-3">
              <Tab eventKey="options" title="Options">
                <h2>Options:</h2>
                <Form.Label>Width: {width}%</Form.Label>
                <Form.Range
                  value={width}
                  onChange={({ target }) => setWidth(target.value)}
                />
                <Form.Label>innerMargin: {innerMargin}px</Form.Label>
                <Form.Control
                  min="0"
                  max="80"
                  value={innerMargin}
                  type="number"
                  onChange={({ target }) => setInnerMargin(target.value)}
                />
                <Form.Check
                  className="py-2"
                  type="switch"
                  value={innerScroll}
                  onChange={({ target }) => setInnerScroll(target.checked)}
                  label={"innerScroll - " + innerScroll}
                />
                <Row className="my-2">
                  <Col md="auto">
                    <Form.Control
                      type="color"
                      value={bgColor}
                      onChange={({ target }) => setBgColor(target.value)}
                      title="bgColor"
                    />
                  </Col>
                  <Col>
                    <Form.Label>bgColor: {bgColor}</Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col md="auto">
                    <Form.Control
                      type="color"
                      value={textColor}
                      onChange={({ target }) => setTextColor(target.value)}
                      title="textColor"
                    />
                  </Col>
                  <Col>
                    <Form.Label>textColor: {textColor}</Form.Label>
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="code" title="Code">
                <div className="bg-dark text-white p-2">
                  <pre>
                    <code>
                      {`<Accordion`} <br />
                      {`  width={ ${width} }`} <br />
                      {`  innerMargin={ ${innerMargin} }`} <br />
                      {`  innerScroll={ ${innerScroll} }`} <br />
                      {`  sections={ JSON }`} <br />
                      {`  bgColor={ ${bgColor} }`} <br />
                      {`  textColor={ ${textColor} }`} <br />
                      {`  startBy={ 0 }`} <br />
                      {`></Accordion>`} <br />
                    </code>
                  </pre>
                </div>
              </Tab>
              <Tab eventKey="json" title="JSON">
                <div style={{backgroundColor: "#001f3f"}}>
                  <code>{JSON.stringify(sections)}</code>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
