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
  {
    label: "prueba",
    content: `sdfsdfsdfsdfsdf`,
  },
];

function App() {
  const [expandable, setExpandable] = useState(false);
  const [width, setWidth] = useState(100);
  const [innerMargin, setInnerMargin] = useState(18);
  const [openAll, setOpenAll] = useState(false);
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#CCCCCC");
  const [startBy, setStartBy] = useState(0);

  //const [label, setLabel] = useState("");
  //const [content, setContent] = useState("");
  const [sections, setSections] = useState(data);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Accordion
              expandable={expandable}
              width={width}
              innerMargin={innerMargin}
              openAll={openAll}
              bgColor={bgColor}
              textColor={textColor}
              startBy={0}
              sections={sections}
            />
          </Col>
          <Col md={4}>
            <Tabs defaultActiveKey="options" className="my-3">
              <Tab eventKey="options" title="Options">
                <h2>Options:</h2>
                <Row className="my-2">
                  <Col>
                    <Form.Check
                      className="py-2"
                      type="switch"
                      checked={expandable}
                      onChange={({ target }) => setExpandable(target.checked)}
                      label={"Expandable - " + expandable}
                    />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col xs="auto">
                    <Form.Label>Width: {width}%</Form.Label>
                  </Col>
                  <Col>
                    <Form.Range
                      value={width}
                      onChange={({ target }) => setWidth(target.value)}
                    />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <Form.Label>innerMargin: {innerMargin}px</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      min="0"
                      max="80"
                      value={innerMargin}
                      type="number"
                      onChange={({ target }) => setInnerMargin(target.value)}
                    />
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col xs="auto">
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
                <Row sm="auto" className="my-2">
                  <Col className="py-2">
                    <Form.Label>startBy: </Form.Label>
                  </Col>
                  <Col>
                    <Form.Select
                      value={startBy}
                      onChange={({ target }) => setStartBy(target.value)}
                      label="startBy"
                    >
                      {sections.map((_, i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Check
                      className="py-2"
                      type="switch"
                      checked={openAll}
                      onChange={({ target }) => setOpenAll(target.checked)}
                      label={"openAll - " + openAll}
                    />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="code" title="Code">
                <div className="bg-dark text-white p-2">
                  <pre>
                    <code>
                      {`<Accordion`} <br />
                      {`  sections={ JSON }`} <br />
                      {`  expandable={ ${expandable} }`} <br />
                      {`  width={ ${width} }`} <br />
                      {`  innerMargin={ ${innerMargin} }`} <br />
                      {`  bgColor={ ${bgColor} }`} <br />
                      {`  textColor={ ${textColor} }`} <br />
                      {`  startBy={ 0 }`} <br />
                      {`  openAll={ ${openAll} }`} <br />
                      {`></Accordion>`} <br />
                    </code>
                  </pre>
                </div>
              </Tab>
              <Tab eventKey="json" title="JSON">
                <div style={{ backgroundColor: "#001f3f" }}>
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
