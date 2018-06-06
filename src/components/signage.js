import React, { Component } from 'react';
import { Link } from 'react-router';
import Stops from './stops'

const apiBase = "https://smarttransitsbu.cewit.stonybrook.edu"


class Signage extends Component {
    render(){
        return (
            <div>
                <Stops />
            </div>
        )
        
    }
}

export default Signage
