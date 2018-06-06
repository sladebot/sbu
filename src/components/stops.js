import React, { Component } from 'react';
import { Link } from 'react-router';
import * as _ from 'lodash';

class Stops extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stops: []
        }
    }


    componentDidMount() {
        // fetch(`https://...`)
        //     .then(res => {
        //         this.setState({
        //             stops: res
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err.message)
        //     })
        this.setState({
            stops: ["A", "B", "C"]
        })
    }
    
    render(){
        console.log("Got props with count - " + this.state.stops)
        return (
            <ul className="list-group">
                {_.each(this.state.stops, (stop) => {
                    <li className="list-group-item"> {stop} </li>
                })}
            </ul>
        )
        
    }
}

export default Stops
