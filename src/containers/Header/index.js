import React, { Component } from 'react';
import "./index.css"

import email from 'assets/images/email.png';
import logoCropped from 'assets/images/logo-cropped.png';
import codewarsIcon from 'assets/images/codewars.png'
import devIcon from 'assets/images/devto.png'
import githubIcon from 'assets/images/github.png'
import linkedinIcon from 'assets/images/linkedin.png'

class Header extends Component {

  state = {
    showEmail: false
  }

  displayEmail = event => {
    this.setState(prevState => ({
      showEmail: !prevState.showEmail
    }))
  }

  render() {
    return (
      <div className="header">
        <a className="logo" href="/">
          <img src={logoCropped} alt="logo" width="100px" />
        </a>

        <div className="email">
          <a href="mailto: brinkman.spenser@gmail.com">
            <img src={email} alt="email me at brinkman.spenser@gmail.com" width="25px" height="25px" />
          </a>
          <p>brinkman.spenser@gmail.com</p>
        </div>

        <div className="badges">
          <a href="https://dev.to/spenser6131" >
            <img src={devIcon} alt="Dev.to: spenser6131" width="25px" height="25px" />
          </a>

          <a href="https://github.com/spenser6131">
            <img src={githubIcon} alt="GitHub: spenser6131" width="25px" height="25px" />
          </a>

          <a href="https://www.linkedin.com/in/spenser-brinkman/">
            <img src={linkedinIcon} alt="LinkedIn: Spenser Brinkman" width="25px" height="25px" />
          </a>

          <a href="https://www.codewars.com/users/spenser6131">
            <img src={codewarsIcon} alt="Codewars: spenser6131" width="25px" height="25px" />
          </a>
        </div>

      </div>
    )
  }
}

export default Header
