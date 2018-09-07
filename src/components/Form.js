import React from "react"
import axios from 'axios';
import "bulma";

class Form extends React.Component {
    state = { username: "" }
    handleSubmit = (event) => {

        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.username}/repos`)
            .then(res => {
                this.props.onSubmit(res.data)
            })
    }
    render() {
        return (
           
            <form style={{ marginTop: 20 , textAlign:"center"}} onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.username}
                    onChange={(event) => this.setState({ username: event.target.value })}
                    placeholder="Github username"
                    required />
               

                <button type="submit">SEARCH</button>
            </form>
        )
    }
}

export default Form