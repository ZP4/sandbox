import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    render() {
        return (
            <div>
                <strong >Item</strong>
                <br/><br/>
                <strong>Description:</strong>
                <input id="edit_description_textfield" type="text"/>
                <br/><br/>
                <strong>Assigned To:</strong>
                <input id="edit_assigned_to_textfield" type="text"/>
                <br/><br/>
                <strong>Due Date:</strong>
                <input id="edit_due_date_datefield" type="date"/>
                <br/><br/>
                <strong>Completed:</strong>
                <input id="edit_completed_checkbox" type="checkbox" />
                <br/><br/>
                <div>
                    <button id="edit_submit_button">Submit</button>
                    <button id="edit_cancel_button">Cancel</button>
                </div>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
