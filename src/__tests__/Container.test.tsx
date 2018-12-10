import React from "react";
import renderer from "react-test-renderer";

import Container from "../lib/Container";

describe("Container", () => {
  describe("renders", () => {
    it("without crashing", () => {
      const component = <Container />;
      const rendered = renderer.create(component).toJSON();

      expect(rendered).toBeTruthy();
    });

    it("with title", () => {
      const component = <Container title="Test" />;
      const rendered = renderer.create(component).toJSON();

      expect(rendered).toBeTruthy();
    });

    it("with children", () => {
      const component = <Container title="Test">Test</Container>;
      const rendered = renderer.create(component).toJSON();

      expect(rendered).toBeTruthy();
    });

    it("with style", () => {
      const component = (
        <Container title="Test" style={{ background: "#e2e2e2" }} />
      );
      const rendered = renderer.create(component).toJSON();

      expect(rendered).toBeTruthy();
    });

    describe("renders with flags", () => {
      describe("one", () => {
        it("center", () => {
          const component = <Container title="Test" center />;
          const rendered = renderer.create(component).toJSON();

          expect(rendered).toBeTruthy();
        });

        it("rounded", () => {
          const component = <Container title="Test" rounded />;
          const rendered = renderer.create(component).toJSON();

          expect(rendered).toBeTruthy();
        });

        it("dark", () => {
          const component = <Container title="Test" dark />;
          const rendered = renderer.create(component).toJSON();

          expect(rendered).toBeTruthy();
        });
      });

      describe("two", () => {
        it("center rounded", () => {
          const component = <Container title="Test" center rounded />;
          const rendered = renderer.create(component).toJSON();

          expect(rendered).toBeTruthy();
        });

        it("center dark", () => {
          const component = <Container title="Test" center dark />;
          const rendered = renderer.create(component).toJSON();

          expect(rendered).toBeTruthy();
        });

        it("rounded dark", () => {
          const component = <Container title="Test" rounded dark />;
          const rendered = renderer.create(component).toJSON();

          expect(rendered).toBeTruthy();
        });
      });

      describe("three", () => {
        it("center rounded dark", () => {
          const component = <Container title="Test" center rounded dark />;
          const rendered = renderer.create(component).toJSON();

          expect(rendered).toBeTruthy();
        });
      });
    });
  });
});
