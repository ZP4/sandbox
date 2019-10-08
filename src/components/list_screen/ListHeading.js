import React, { Component } from 'react'

export class ListHeading extends Component {
    render() {
        return (
            <div id="list_heading" style={listHeader}
                onClick={this.props.goHome}>
                @todo
            </div>
        )
    }
}

const listHeader = {

}


export default ListHeading
