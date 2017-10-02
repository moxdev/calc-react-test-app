import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Landing extends Component {
  constructor() {
    super();
    this.goToProject = this.goToProject.bind(this);
  }

  goToProject(e) {
    e.preventDefault();

    const pageID = this.textInput.value;

    this.context.router.history.push(`/project/${pageID}`);
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
          <input tagline="static tagline" type="text" placeholder="My Project Tagline" />

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
