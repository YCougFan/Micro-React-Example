import React, { Component } from 'react'

import Senator from './Senator'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            senate: [],
            url: "https://micro-example-tbcyrywnrw.now.sh/" + this.props.match
        }
    }

    async componentWillMount () {
        const response = await fetch(this.state.url, {method: 'GET'});
        console.log(this.state.url);
        const responseJSON = await response.json();
        const senators = responseJSON.map(senator => <Senator senator={senator}/>)
        this.setState({senate: senators})
    }

    render(){
        return (
            <div>
                {this.state.senate}
            </div>
        )
    }
}