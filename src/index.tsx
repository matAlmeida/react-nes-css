import React from "react";
import { render } from "react-dom";
import { Text, Container, Button, Field, Balloon } from "./lib";

const App = () => (
  <div>
    <Container title="Texts" style={{ margin: "1em" }}>
      <Text style={{ margin: "1em" }}>Normal</Text>
      <Text primary style={{ margin: "1em" }}>
        Primary
      </Text>
      <Text success style={{ margin: "1em" }}>
        Success
      </Text>
      <Text warning style={{ margin: "1em" }}>
        Warning
      </Text>
      <Text error style={{ margin: "1em" }}>
        Error
      </Text>
      <Text disabled style={{ margin: "1em" }}>
        Disabled
      </Text>
    </Container>

    <Container title="Buttons" style={{ margin: "1em" }}>
      <Button label="Normal" style={{ margin: "1em" }} />
      <Button label="Primary" primary style={{ margin: "1em" }} />
      <Button label="Success" success style={{ margin: "1em" }} />
      <Button label="Warning" warning style={{ margin: "1em" }} />
      <Button label="Error" error style={{ margin: "1em" }} />
      <Button label="Disabled" disabled style={{ margin: "1em" }} />
    </Container>

    <Container title="Containers" style={{ margin: "1em" }}>
      <Container title="Container.is-center" center style={{ margin: "1em" }}>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
      <Container title="Container.is-dark" dark style={{ margin: "1em" }}>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
      <Container rounded style={{ margin: "1em" }}>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
      <Container rounded dark style={{ margin: "1em" }}>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
    </Container>

    <Container title="Form" style={{ margin: "1em" }}>
      <Field label="Your Name" />
      <Field label=".input.is-success" placeholder="NES.css" success inline />
      <Field label=".input.is-warning" placeholder="8bit.css" warning inline />
      <Field label=".input.is-error" placeholder="awesome.css" error inline />
      <Field label=".input.is-dark" placeholder="dark.css" dark inline />
    </Container>

    <Container title="Balloons" style={{ margin: "1em" }}>
      <Balloon left>Hello NES.css</Balloon>
      <Balloon>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Balloon>
    </Container>
  </div>
);

render(<App />, document.getElementById("root"));
