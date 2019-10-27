import React, { Component } from "react"; 
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title : ''});
  }

  onChange = (e) => this.setState( { title : e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit}  style={{ display: 'flex' }}>
        <input 
          type="text" 
          style={{ flex : '10', padding : '5px'}}
          name="title" 
          placeholder="Add To Do..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit"
          className="btn"
          style={{ flex : '1'}} 
        />
      </form>
    );
  }
}

//PropTypes
AddTodo.propTypes = {
  addTodo : PropTypes.func.isRequired,
}

export default AddTodo;