import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListNewItemCard extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className='list_item_card' onClick={this}>
                <div>
                    &#43;
                </div>


            </div>
        );
    }
}

ListNewItemCard.propTypes = {};

export default ListNewItemCard;