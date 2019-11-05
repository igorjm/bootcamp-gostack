import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techs: [
      'Node.js',
      'React.js',
      'React Native'
    ]
  };

  render() {
    return (
      <ul>
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;