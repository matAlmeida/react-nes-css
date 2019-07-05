import React, { Component, CSSProperties, ReactNode } from "react";
import classnames from "classnames";

interface IProps {
  center?: boolean;
  rounded?: boolean;
  dark?: boolean;
  title?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export default class Container extends Component<IProps> {
  render() {
    const { center, rounded, dark, title, style, children } = this.props;
    const containerClasses = classnames(
      "nes-container",
      { "with-title": title },
      { "is-center": center },
      { "is-rounded": rounded },
      { "is-dark": dark }
    );

    const textStyle = { color: dark ? "white" : "black" };

    return (
      <div className={containerClasses} style={{ ...style }}>
        {title && <p className="title">{title}</p>}
        <div style={textStyle}>{children}</div>
      </div>
    );
  }
}
