import React, { Component } from 'react';
import { Link } from 'react-router';
import * as _ from 'lodash';

const apiUri = `https://smarttransit.cewit.stonybrook.edu:8443/stops`

class Stops extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stops: []
        }
    }


    componentDidMount() {
        fetch(`${apiUri}`)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    stops: res
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    
    render(){
        console.log("Got count - " + JSON.stringify(this.state.stops))
        return (
            <ul className="list-group list-group-flush">
                {_.map(this.state.stops, (stop) => {
                    return <li key={stop["stopName"]} className="list-group-item"> {stop["stopName"]} </li>
                })}
            </ul>
        )
        
    }
}

export default Stops
