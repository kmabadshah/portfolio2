import React from "react";

// export default function Wrapper({ children }) {
//   return <div className="h-100 w-100">{children}</div>;
// }

export default class Wrapper extends React.Component {
  componentDidMount() {
    console.log("mounted");
  }
  componentWillUnmount() {
    console.log("will unmount");
  }

  render() {
    return <div className="h-100 w-100">{this.props.children}</div>;
  }
}
