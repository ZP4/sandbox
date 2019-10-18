import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ListScreen from "../list_screen/ListScreen";

export class ItemScreen extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            item: this.props.todoItem,
            desc: this.props.todoItem.description,
            assigned: this.props.todoItem.assigned_to,
            date: this.props.todoItem.due_date,
            checked: this.props.todoItem.completed
        })
    }


    cancelItem = (value) => {
        this.props.itemEditCheck(this.props.todoItem, false)
    };

    submitItem = (value) => {
        this.state.item.description = this.state.desc;
        this.state.item.assigned_to = this.state.assigned;
        this.state.item.due_date = this.state.date;
        this.state.item.completed = this.state.checked;
        this.props.itemEditCheck(this.state.item, true)
    };


    render() {
        return (
            <div id="todo_edit">
                <strong >Item</strong>
                <br/><br/>
                <strong>Description:</strong>
                <input id="edit_description_textfield" ref="desc" type="text" value={this.state.desc} onChange={(e) => {this.setState({desc: e.target.value})}}/>
                <br/><br/>
                <strong>Assigned To:</strong>
                <input id="edit_assigned_to_textfield" ref="assign"  type="text" value={this.state.assigned} onChange={(e) => {this.setState({assigned: e.target.value})}}/>
                <br/><br/>
                <strong>Due Date:</strong>
                <input id="edit_due_date_datefield" ref="date" type="date" value={this.state.date} onChange={(e) => {this.setState({date: e.target.value})}}/>
                <br/><br/>
                <strong>Completed:</strong>
                <input id="edit_completed_checkbox" ref="check"  type="checkbox" defaultChecked={this.state.checked} onClick={(e) => {this.setState({checked: e.target.checked})}}/>
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
