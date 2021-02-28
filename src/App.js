import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            username: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleNameChange = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleFormSubmit = () => {
        const {name, username} = this.state;
        localStorage.setItem("name", name);
        localStorage.setItem("username", username);
    }

    componentDidMount() {
        const name = localStorage.getItem("name");
        const username = localStorage.getItem("username");
        this.setState({ name, username });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label>
                <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                <label>Username:</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}


export default App;