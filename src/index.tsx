import React from "react";
import { render } from "react-dom";
import { Container, Button, Field, Balloon } from "./lib";

const App = () => (
  <div>
    <Container title="Buttons">
      <Button label="Normal" />
      <Button label="Primary" primary />
      <Button label="Success" success />
      <Button label="Warning" warning />
      <Button label="Error" error />
    </Container>
    <Container title="Containers">
      <Container title="Container.is-center" center>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
      <Container title="Container.is-dark" dark>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
      <Container rounded>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
      <Container rounded dark>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
    </Container>
    <Container title="Form">
      <Field label="Your Name" />
      <Field label=".input.is-success" placeholder="NES.css" success inline />
      <Field label=".input.is-warning" placeholder="8bit.css" warning inline />
      <Field label=".input.is-error" placeholder="awesome.css" error inline />
    </Container>
    <Container title="Balloons">
      <Balloon left>Hello NES.css</Balloon>
      <Balloon>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Balloon>
    </Container>
  </div>
);

render(<App />, document.getElementById("root"));
