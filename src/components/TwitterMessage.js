import React from "react";

class TwitterMessage extends React.Component {

    state = {
      message: ''
    };

     handleChange = (eve) => {
      this.setState({
        message: eve.target.value
      })
    }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.message} />
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
