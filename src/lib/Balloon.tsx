import React, { Component, ReactNode } from "react";
import classnames from "classnames";

interface IProps {
  left?: boolean;
  children: ReactNode;
}

export default class Checkbox extends Component<IProps> {
  render() {
    const { left, children } = this.props;

    const balloonClasses = classnames(
      "balloon",
      { "from-left": left },
      { "from-right": !left }
    );

    return <div className={balloonClasses}>{children}</div>;
  }
}
