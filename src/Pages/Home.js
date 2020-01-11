import React, { Component } from "react";
import Sidebar from "../Components/Sidebar";

export default class Home extends Component {
  render() {
    const query = new URLSearchParams(this.props.location.search);
    let pages = query.get("page");
    return (
      <div>
        <Sidebar page={pages} />
      </div>
    );
  }
}
