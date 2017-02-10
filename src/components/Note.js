import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
  }

  highlight() {
    if(this.props.selected) {
      return "note-selected";
    }
    else {
      return "note";
    }
  }

  shortName() {
    this.props.body.substring(30);
  }

  render() {
    return (
      <div className={this.highlight()} onClick={this.props.handleClick}>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
};

export default Note;
