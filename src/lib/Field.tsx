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
      inline
    } = this.props;

    const fieldClasses = classnames("field", { "is-inline": inline });
    const inputClasses = classnames(
      "input",
      { "is-success": success },
      { "is-warning": warning },
      { "is-error": error }
    );

    return (
      <div className={fieldClasses}>
        <label htmlFor={name}>{label}</label>
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
