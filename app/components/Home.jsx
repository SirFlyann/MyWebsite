const React = require('react');


const Home = props => <h1> Hello {props.name}</h1>;

Home.propTypes = {
  name: React.PropTypes.string.isRequired,
};

module.exports = Home;
