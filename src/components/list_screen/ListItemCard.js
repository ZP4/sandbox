import React, { Component } from 'react'

export class ListItemCard extends Component {

    render() {
        return (
            <div className='list_item_card'>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className='list_item_card_completed' style={this.props.listItem.completed ? completedRed : completedGreen}>
                    {this.props.listItem.completed ? "Completed" : "Pending"}
                </div>

                <div className=''>
                    <input
                        type= 'image'
                        src= ''
                        onClick= ''
                    />

                    <inputgit
                        type= 'image'
                        src= ''
                        onClick= ''
                    />

                    <input
                        type= 'image'
                        src= ''
                        onClick= ''
                    />
                </div>
            </div>
        )
    }
}

const completedRed = {
    color: "#FF0000"
};

const completedGreen = {
    color: "#E6E6E6"
};

export default ListItemCard
