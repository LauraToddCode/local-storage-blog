import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props)
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