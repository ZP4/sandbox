import React, { Component } from 'react'

export class ListItemCard extends Component {

    constructor(props) {
        super(props);
        console.log("Helloooooooooooooooo")
        // let arr = this.props.todoList;
        // let x = -1;
        // let disableUpButton, disableDownButton;
        // //console.log("start");
        // for (let i = 0 ; i < Object.keys(arr).length ; i++) {
        //     // console.log("index: "+i);
        //     // console.log("d "+Object.keys(arr)[i] + "    dsd    " + this.props.listItem.key);
        //     // console.log(Object.keys(arr)[i] == this.props.listItem.key)
        //     if (Object.keys(arr)[i] == this.props.listItem.key) {
        //         //console.log("pass key check")
        //         if (i === 0) {
        //             //console.log("UP");
        //             disableUpButton = true
        //         }
        //         else {
        //             disableUpButton = false
        //         }
        //         disableDownButton = (i === Object.keys(arr).length - 1);
        //     }
        // }
        // this.state = {
        //     index: x,
        //     disableUp: disableUpButton,
        //     disableDown: disableDownButton
        // }

    }


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
                        disabled={this.props.index == 0}
                        style={this.props.index == 0 ? disabled : null }

                    >&#8679;</div>

                    <div
                        className='list_item_card_move_down'
                        onClick= ''
                        disabled={this.props.index == this.props.todoList.length-1}
                        style={this.props.index == this.props.todoList.length-1 ? disabled : null }
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

const disabled = {
    backgroundColor: '#929292'
};

export default ListItemCard
