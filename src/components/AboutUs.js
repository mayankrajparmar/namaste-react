import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component DidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>This Project is developed by Mayank Raj Parmar</h1>
        <UserClass name={"Mayank Raj (Class)"} location={"Bangalore"} />
      </div>
    );
  }
}

export default AboutUs;
