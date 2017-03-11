var React = require('react');
var Home = require('./Home');

var HomeCaller = React.createClass({
  getInitialState: function() {
    return {
      name: 'world'
    };
  },

  handleChange: function(e){
    this.setState({name: e.target.value});
  },

  render: function() {
    return( 
      <div className="hello-form">
         <input type="text" onChange={this.handleChange} />
         <Home name={this.state.name} />
      </div>);
  }

});

module.exports = HomeCaller;
