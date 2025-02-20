import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Child Constructor");
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log("Child Component DidMount");
  }

  componentDidUpdate() {
    console.log("Child Component DidUpdate");
  }

  componentWillUnmount() {
    console.log("Child Component Unmount");
  }
  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : @mayankrajparmar</h4>
      </div>
    );
  }
}

export default UserClass;
