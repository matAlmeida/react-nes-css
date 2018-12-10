import React, { Component, MouseEvent } from "react";
import classnames from "classnames";

type buttonType = "is-primary" | "is-success" | "is-warning" | "is-error";

type buttonAction =
  | ((event: MouseEvent<HTMLButtonElement>) => void)
  | undefined;

interface IProps {
  label: string;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  onClick?: buttonAction;
}

export default class Button extends Component<IProps> {
  render() {
    const { label, primary, success, warning, error, onClick } = this.props;
    const buttonClasses = classnames(
      "btn",
      { "is-primary": primary },
      { "is-success": success },
      { "is-warning": warning },
      { "is-error": error }
    );

    return (
      <button type="button" onClick={onClick} className={buttonClasses}>
        {label}
      </button>
    );
  }
}
