import React, { Component } from 'react'
import { Link } from 'react-router'
import Stops from './stops'

class SignageStop extends React {
    
    constructor(props) {
        super(props)
        this.state = {
            stopId: props.stop_id
        }
    }

    render() {

        const id = this.state.stopId
        
        return (
            <div>
                <Stops stopId={} />
            </div>
        )
    }
}