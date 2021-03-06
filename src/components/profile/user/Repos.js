import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

class Repos extends Component {
  renderRepos(repos) {
    return repos.map((repo) =>
      <li key={repo.id}>
        <h4><a href={repo.html_url}>{repo.name}</a></h4>
        { repo.description && repo.description }
      </li>
    );
  }

  render() {
    const { repos } = this.props;

    return (
      <div>
        <h2>Repos</h2>
        <ul>
          {this.renderRepos(repos)}
        </ul>
      </div>
    );
  }
}

Repos.propTypes = {
  repos: React.PropTypes.array.isRequired
};

export default Repos;
