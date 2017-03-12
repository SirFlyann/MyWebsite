const React = require('react');
const Home = require('./Home.jsx');
require('../style/components/_HomeCaller.scss');

class HomeCaller extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'world',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="hello-form">
        <input type="text" onChange={this.handleChange} />
        <Home name={this.state.name} />
      </div>);
  }

}

module.exports = HomeCaller;
