import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types';

export class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: this.props.todoList.name,
            listOwner: this.props.todoList.owner
        }
    }
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            return this.props.todoList.owner;
        }
    }

    setListName(event) {
        this.setState({
            listName: event.target.value
        });
        this.props.setCurrentListName(event.target.value)
    }

    setListOwner(event) {
        this.setState({
            listOwner: event.target.value
        });
        this.props.setCurrentListOwner(event.target.value)
    }


    render() {
        return (
            <div id="todo_list">
                <div>
                    <ListHeading goHome={this.props.goHome} />
                    <ListTrash />
                </div>


                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            value={this.state.listName}
                            type="text" 
                            id="list_name_textfield"
                            onChange={this.setListName.bind(this)}
                        />
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            value={this.state.listOwner}
                            type="text" 
                            id="list_owner_textfield"
                            onChange={this.setListOwner.bind(this)}
                        />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} />
            </div>
        )
    }
}

export default ListScreen
