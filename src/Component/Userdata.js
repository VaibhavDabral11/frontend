import React, { Component } from "react";
import axios from "axios";
class Userdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readusers: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/readusers")
      .then((response) => {
        this.setState({ readusers: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { readusers } = this.state;
    return (                
      <div>
        user data
        {
          readusers.map(readusers=><div key={readusers.id}>{readusers.email}</div>)
        }
      </div>
    )
  }
}

export default Userdata;
