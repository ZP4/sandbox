import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListNewItemCard extends Component {
    constructor(props) {
        super(props);

    }
    newItem = (event) => {
        let l;
        for(let i = 0; i <= this.props.list.length+1; i++) {
            if(!Object.keys(this.props.list).includes(i)) {
                l = i;
                break;
            }
        }
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