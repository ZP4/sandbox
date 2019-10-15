import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ListScreen from "../list_screen/ListScreen";

export class ItemScreen extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.todoItem.key)
        this.state = ({
            item: this.props.todoItem
        })
    }


    cancelItem = (value) => {
        this.props.itemEditCheck(this.props.todoItem, false)
    };

    submitItem = (value) => {
        this.props.itemEditCheck(this.state.item, true)
    };
    render() {
        return (
            <div id="todo_edit">
                <strong >Item</strong>
                <br/><br/>
                <strong>Description:</strong>
                <input id="edit_description_textfield" type="text" value={this.state.item.description}/>
                <br/><br/>
                <strong>Assigned To:</strong>
                <input id="edit_assigned_to_textfield" type="text" value={this.state.item.assigned_to}/>
                <br/><br/>
                <strong>Due Date:</strong>
                <input id="edit_due_date_datefield" type="date" value={this.state.item.due_date}/>
                <br/><br/>
                <strong>Completed:</strong>
                <input id="edit_completed_checkbox" type="checkbox" checked={this.state.item.completed}/>
                <br/><br/>
                <div>
                    <button id="edit_submit_button"
                            onClick={this.submitItem.bind(this)}
                    >Submit</button>
                    <button id="edit_cancel_button"
                            onClick={this.cancelItem.bind(this)}
                    >Cancel</button>
                </div>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
};

export default ItemScreen
