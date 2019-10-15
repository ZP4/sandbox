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

    trashModal() {
        document.getElementById("dialog").classList.add("is_visible");
    }

    modalNo() {
        document.getElementById("dialog").classList.remove("is_visible");
    }

    modalYes() {
        let key = this.props.todoList.key;
        this.props.deleteList(key)
    }


    render() {
        return (
            <div id="todo_list">
                <div>
                    <ListHeading goHome={this.props.goHome} />
                    <ListTrash show={this.trashModal.bind(this)}/>
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
                <ListItemsTable
                    todoList={this.props.todoList}
                    goEditItem={this.props.goEditItem}
                    itemEditCheck={this.props.itemEditCheck}
                />
                <div id="dialog" className="wrap">
                    <div  className="modal modal_dialog">
                        Delete List?
                        <br/><br/>
                        <strong>Are you sure you want to delete this list?</strong>
                        <br/><br/><br/><br/>
                        <button
                            onClick={this.modalYes.bind(this)}
                        >Yes</button>
                        <button
                            onClick={this.modalNo}
                        >No</button>
                        <br/><br/><br/><br/>
                        This list will not be retrievable
                    </div>
                </div>
            </div>
        )
    }
}

export default ListScreen
