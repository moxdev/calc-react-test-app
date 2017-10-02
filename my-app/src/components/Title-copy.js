import React, { Component } from 'react';

class Title extends Component {
  getProjectName(e) {
    e.preventDefault;
  }
  render() {
    return (
      <div className="main-title" onSubmit={e => this.getProjectName(e)}>
        <form className="name-project-form">
          <h1>Please name your project</h1>
          <input
            type="text"
            placeholder="My Project Name Here"
            ref={input => {
              this.textInput = input;
            }}
          />
          <button type="submit">Next &raquo;</button>
        </form>
      </div>
    );
  }
}

export default Title;
