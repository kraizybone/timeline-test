import React, { Component } from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.onChangeNote = this.onChangeNote.bind(this);
  }
  onChangeNote(e) {
    const { updateNote } = this.props;
    const value = e.target.value;
    updateNote(value);
  }
  render() {
    const { text } = this.props;
    return (
      <textarea
        className="note"
        placeholder="Add notes"
        onChange={this.onChangeNote}
        defaultValue={text ? text : ''}
      />
    );
  }
}

export default Note;
