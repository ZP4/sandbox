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
                <div className='list_item_card_completed' style={this.props.listItem.completed ? completedGreen : completedRed}>
                    {this.props.listItem.completed ? "Completed" : "Pending"}
                </div>

                <div className='list_item_buttons'>
                    <div
                        className='list_item_card_move_up'
                        onClick= ''
                    >&#8679;</div>

                    <div
                        className='list_item_card_move_down'
                        onClick= ''
                    >&#8681;</div>

                    <div
                        className='list_item_card_delete'
                        onClick= ''
                    >&#10006;</div>
                </div>
            </div>
        )
    }
}

const completedRed = {
    color: "red"
};

const completedGreen = {
    color: "green"
};

export default ListItemCard
