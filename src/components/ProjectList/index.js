import React, { Component } from "react";

import "./index.css";

class ProjectList extends Component {

  state = {
    showList: false
  }

  toggleList = event => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }))
  }

  render() {
    return (
      <div className="project-list">
        <button className="project-button" onClick={this.toggleList}>
          Projects
        </button>
        <div className={this.state.showList ? "project-selections" : "project-selections hidden"}>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
        </div>
      </div>
    )
  }
}

export default ProjectList;
