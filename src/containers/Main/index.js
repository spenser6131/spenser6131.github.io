import React, { Component } from 'react';

import ProjectList from 'components/ProjectList';

import "./index.css"
import me from 'assets/images/me.JPG'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="me">
          <img src={me} width="600px" />
        </div>
        
        <div className="name">
          <p strong="true">spenser brinkman</p>
        </div>

        <div className="resume" hidden>
          resume: <a href="/Spenser Brinkman Resume.pdf">view</a> || <a href="/Spenser Brinkman Resume.pdf" download>download</a>
        </div>

        <ProjectList />
      </div>
    )
  }
}

export default Main
