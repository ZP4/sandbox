import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

const sortingCriteria = {
    SORT_TASK_DECREASING: 'SORT_TASK_DECREASING',
    SORT_DATE_DECREASING: 'SORT_DATE_DECREASING',
    SORT_STATUS_DECREASING: 'SORT_STATUS_DECREASING',
    SORT_TASK_INCREASING: 'SORT_TASK_INCREASING',
    SORT_DATE_INCREASING: 'SORT_DATE_INCREASING',
    SORT_STATUS_INCREASING: 'SORT_STATUS_INCREASING'
};

const sortCategory = {
    TASK: 'TASK',
    DATE: 'DATE',
    STATUS: 'STATUS'
};

export class ListItemsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTaskSortingCriteria: sortingCriteria.SORT_TASK_INCREASING,
            currentDateSortingCriteria: sortingCriteria.SORT_DATE_INCREASING,
            currentStatusSortingCriteria: sortingCriteria.SORT_STATUS_INCREASING,
            list: [].concat(this.props.todoList.items)
        };

    }

    sortItem(category) {
        let array = this.state.list;
        if (category === sortCategory.TASK) {
            array = array.sort((a, b) => this.compare(a.description, b.description, this.state.currentTaskSortingCriteria));

            if (this.state.currentTaskSortingCriteria === sortingCriteria.SORT_TASK_INCREASING) {
                this.setState({currentTaskSortingCriteria: sortingCriteria.SORT_TASK_DECREASING})
            }
            else {
                this.setState({currentTaskSortingCriteria: sortingCriteria.SORT_TASK_INCREASING})
            }
        }

        else if (category === sortCategory.DATE) {
            array = array.sort((a, b) => this.compare(a.due_date, b.due_date, this.state.currentDateSortingCriteria));
            this.state.currentDateSortingCriteria === sortingCriteria.SORT_DATE_INCREASING
                ? this.setState({currentDateSortingCriteria: sortingCriteria.SORT_DATE_DECREASING})
                : this.setState({currentDateSortingCriteria: sortingCriteria.SORT_DATE_INCREASING})
        }
        else if (category === sortCategory.STATUS) {
            array = array.sort((a, b) => this.compare(a.completed, b.completed, this.state.currentStatusSortingCriteria));
            this.state.currentStatusSortingCriteria === sortingCriteria.SORT_STATUS_INCREASING
                ? this.setState({currentStatusSortingCriteria: sortingCriteria.SORT_STATUS_DECREASING})
                : this.setState({currentStatusSortingCriteria: sortingCriteria.SORT_STATUS_INCREASING})
        }
        this.setState({list: array});
    }

    compare(item1, item2, criteria) {
        if (criteria === sortingCriteria.SORT_TASK_DECREASING ||
            criteria === sortingCriteria.SORT_DATE_DECREASING ||
            criteria === sortingCriteria.SORT_STATUS_DECREASING
        ) {
            let temp = item1;
            item1 = item2;
            item2 = temp;
        }

        if (criteria === sortingCriteria.SORT_STATUS_DECREASING ||
            criteria === sortingCriteria.SORT_STATUS_INCREASING
        ) {
            if (item1 > item2) {
                return -1
            }
            else if (item2 < item1) {
                return 1
            }
            else {
                return 0
            }
        }

        else {
            if (item1.toLowerCase() > item2.toLowerCase()) {
                return -1
            }
            else if (item2.toLowerCase() < item1.toLowerCase()) {
                return 1
            }
            else {
                return 0
            }
        }

    }

    render() {
        return (
            <div className= "list_item_header_card" id="list_items_container">
                <div className="list_item_header_card"> </div>
                <div className="list_item_task_header" onClick={() => (this.sortItem(sortCategory.TASK))}>Task</div>
                <div className="list_item_due_date_header"onClick={() => (this.sortItem(sortCategory.DATE))}>Due Date</div>
                <div className="list_item_status_header"onClick={() => (this.sortItem(sortCategory.STATUS))}>Status</div>
                {
                    this.state.list.map((todoItem)=>(
                        <ListItemCard
                            key={todoItem.key}
                            listItem={todoItem} />
                    ))
                }
            </div>
        )
    }
}

export default ListItemsTable
