import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Landing extends Component {
  constructor() {
    super();

    this.goToProject = this.goToProject.bind(this);
  }

  goToProject(e) {
    e.preventDefault();

    const project = {
      title: this.textInput.value
    };

    if (project.title.length === 0) {
      alert('Please name your project before moving forward');
    } else this.context.router.history.push(`/project/${project.title}`);
  }

  render() {
    return (
      <div className="landing-page-wrapper">
        <h1>Name your project</h1>
        <form onSubmit={this.goToProject}>
          <input
            type="text"
            placeholder="My Project Name"
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

Landing.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
};

export default Landing;
