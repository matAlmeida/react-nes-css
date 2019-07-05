import React, { Component, CSSProperties, MouseEvent } from "react";
import classnames from "classnames";

type textType = "is-primary" | "is-success" | "is-warning" | "is-error";

type buttonAction =
  | ((event: MouseEvent<HTMLButtonElement>) => void)
  | undefined;

interface IProps {
  children: string;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  disabled?: boolean;
  onClick?: buttonAction;
  style?: CSSProperties;
}

export default class Text extends Component<IProps> {
  render() {
    const {
      children,
      primary,
      success,
      warning,
      error,
      disabled,
      style
    } = this.props;
    const buttonClasses = classnames(
      "nes-text",
      { "is-primary": primary },
      { "is-success": success },
      { "is-warning": warning },
      { "is-error": error },
      { "is-disabled": disabled }
    );

    return (
      <span className={buttonClasses} style={{ ...style }}>
        {children}
      </span>
    );
  }
}
