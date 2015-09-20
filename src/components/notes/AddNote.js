import React, { Component } from 'react';
import { ENTER_KEY_CODE } from '../../constants/Constants';

class AddNote extends Component {
  onKeyDown(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this.onAddNote();
    }
  }

  onAddNote() {
    const { addNote } = this.props;
    const { value: note } = this.refs.note.getDOMNode();

    if (note) {
      addNote(note);
    }
    
    this.refs.note.getDOMNode().value = '';
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" ref="note" placeholder="Add New Note..." onKeyDown={this.onKeyDown.bind(this)} />
        <span className="input-group-btn">
          <button className="btn btn-default" onClick={this.onAddNote.bind(this)}>Add</button>
        </span>
      </div>
    );
  }
}

AddNote.propTypes = {
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;
