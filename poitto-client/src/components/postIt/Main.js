import React from 'react';
import Room from './Room';
import TeamList from './TeamList';

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <TeamList />
        <Room />
      </div>
    );
  }
}

