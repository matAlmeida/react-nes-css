import React, { Component } from "react";
import classnames from "classnames";

interface IProps {
  label?: string;
  name?: string;
  placeholder?: string;
  inline?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  dark?: boolean;
}

export default class Field extends Component<IProps> {
  render() {
    const {
      label,
      name,
      placeholder,
      success,
      warning,
      error,
      dark,
      inline
    } = this.props;

    const fieldClasses = classnames("field", { "is-inline": inline });
    const inputClasses = classnames(
      "nes-input",
      { "is-success": success },
      { "is-warning": warning },
      { "is-error": error },
      { "is-dark": dark }
    );

    return (
      <div
        className={fieldClasses}
        style={
          dark
            ? { backgroundColor: "#212529", padding: "1em" }
            : { padding: "1em" }
        }
      >
        <label style={dark ? { color: "#FFF" } : {}} htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          id={name}
          className={inputClasses}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
