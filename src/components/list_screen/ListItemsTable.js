import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import ListNewItemCard from "./ListNewItemCard";

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
            list: this.props.todoList.items
        };
        this.sortItem = this.sortItem.bind(this);
        this.compare = this.compare.bind(this);
    }

    sortItem = (category) => {
        let array = this.state.list;
        if (category === sortCategory.TASK) {
            //this.compare(a.description, b.description, this.state.currentTaskSortingCriteria)
            array = array.sort((a, b) => this.compare(a.description, b.description, this.state.currentTaskSortingCriteria));
            console.log(array);
            if (this.state.currentTaskSortingCriteria === sortingCriteria.SORT_TASK_INCREASING) {
                this.setState({currentTaskSortingCriteria: sortingCriteria.SORT_TASK_DECREASING})
            }
            else {
                this.setState({currentTaskSortingCriteria: sortingCriteria.SORT_TASK_INCREASING})
            }
        }

        else if (category === sortCategory.DATE) {
            array = array.sort((a, b) => this.compare(a.due_date, b.due_date, this.state.currentDateSortingCriteria));
            console.log(array);
            this.state.currentDateSortingCriteria === sortingCriteria.SORT_DATE_INCREASING
                ? this.setState({currentDateSortingCriteria: sortingCriteria.SORT_DATE_DECREASING})
                : this.setState({currentDateSortingCriteria: sortingCriteria.SORT_DATE_INCREASING})
        }
        else if (category === sortCategory.STATUS) {
            array = array.sort((a, b) => this.compare(a.completed, b.completed, this.state.currentStatusSortingCriteria));
            console.log(array);
            this.state.currentStatusSortingCriteria === sortingCriteria.SORT_STATUS_INCREASING
                ? this.setState({currentStatusSortingCriteria: sortingCriteria.SORT_STATUS_DECREASING})
                : this.setState({currentStatusSortingCriteria: sortingCriteria.SORT_STATUS_INCREASING})
        }
        this.setState({list: array});
    }

    compare = (item1, item2, criteria) => {
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
            return item1-item2;
        }

        else if (criteria === sortingCriteria.SORT_DATE_INCREASING ||
                 criteria === sortingCriteria.SORT_DATE_DECREASING
        ) {
            item1 = new Date(item1);
            item2 = new Date(item2);
            return item1-item2
        }
        else {
            return item1.localeCompare(item2)
        }

    }

    itemUp = (value) => {
        let count = -1;
        let arr = this.state.list;
        for (let i = 0;i<this.state.list.length;i++) {
            if(this.state.list[i].key === value.key) {
                count = i
            }
        }
        let temp = arr[count];
        arr[count] = arr[count-1];
        arr[count-1] = temp;

        this.setState({
            list: arr
        })
    };

    itemDown = (value) => {
        let count = -1;
        let arr = this.state.list;
        for (let i = 0;i<this.state.list.length;i++) {
            if(this.state.list[i].key === value.key) {
                count = i
            }
        }
        let temp = arr[count];
        arr[count] = arr[count+1];
        arr[count+1] = temp;

        this.setState({
            list: arr
        })
    };

    itemDelete = (value) => {
        let count = -1;
        let arr = this.state.list;
        for (let i = 0;i<this.state.list.length;i++) {
            if(this.state.list[i].key === value.key) {
                count = i
            }
        }
        arr.splice(count, 1);

        this.setState({
            list: arr
        })
    };

    render() {
        return (
            <div className= "list_item_header_card" id="list_items_container">
                <div className="list_item_header_card"> </div>
                <div className="list_item_task_header" onClick={() => (this.sortItem(sortCategory.TASK))} >Task</div>
                <div className="list_item_due_date_header"onClick={() => (this.sortItem(sortCategory.DATE))}>Due Date</div>
                <div className="list_item_status_header"onClick={() => (this.sortItem(sortCategory.STATUS))}>Status</div>
                {
                    this.state.list.map((todoItem, i)=>(
                        <ListItemCard
                            index={i}
                            key={todoItem.key}
                            listItem={todoItem}
                            todoList={this.state.list}
                            goEditItem={this.props.goEditItem}
                            itemEditCheck={this.props.itemEditCheck}
                            itemUpFunc={this.itemUp.bind(this)}
                            itemDownFunc={this.itemDown.bind(this)}
                            itemDeleteFunc={this.itemDelete.bind(this)}

                        />
                    ))
                }

                    <ListNewItemCard
                        list={this.state.list}
                        goEditItem={this.props.goEditItem}
                    />

            </div>
        )
    }
}

export default ListItemsTable
