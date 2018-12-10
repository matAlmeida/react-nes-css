import React, { Component, MouseEvent } from "react";
import classnames from "classnames";

type buttonType = "is-primary" | "is-success" | "is-warning" | "is-error";

type buttonAction =
  | ((event: MouseEvent<HTMLButtonElement>) => void)
  | undefined;

interface IProps {
  type?: buttonType;
  label: string;
  onClick?: buttonAction;
}

export default class Button extends Component<IProps> {
  render() {
    const { type, label, onClick } = this.props;
    const buttonClasses = classnames("btn", type);

    return (
      <button type="button" onClick={onClick} className={buttonClasses}>
        {label}
      </button>
    );
  }
}
