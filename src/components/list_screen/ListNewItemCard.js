import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListNewItemCard extends Component {
    constructor(props) {
        super(props);

    }

    getKey() {
        let keys = this.props.todoList.items.map(a => a.key);
        for(let i = 0; i < this.props.todoList.items.length; i++) {
            if(!(keys.includes(i))) {
                return i
            }
        }
        return this.props.todoList.items.length
    }

    newItem = (event) => {
        let l = this.getKey();
        let item = {
                "key": l,
                "description": "",
                "due_date": "",
                "assigned_to": "",
                "completed": false
            };
        this.props.goEditItem(item, true)
    };

    render() {
        return (
            <div className='list_item_card' onClick={this.newItem.bind(this)}>
                <div className='list_item_add_card'>
                    &#43;
                </div>


            </div>
        );
    }
}

ListNewItemCard.propTypes = {};

export default ListNewItemCard;