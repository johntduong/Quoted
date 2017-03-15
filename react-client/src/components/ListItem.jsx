import ReactDOM from 'react-dom';
import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  handleChange(e) {
    this.setState({input: e.target.value});
    console.log(e.target.value);
  }

  render() {
    return (            
      <div className="listItem container-fluid">
        <div> Name: {this.props.name}</div>
        <div> Phone: {this.props.phone}</div>
      </div> 
    )
  }
}

export default ListItem;