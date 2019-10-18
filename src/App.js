import JsTPS from './JsTPS/JsTPS';
import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'


//import JsTPS from "./JsTPS/JsTPS";
//import {Num, AddToNum_Transaction, AndMask_Transaction, OrMask_Transaction} from "./JsTPS/Demo";

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
};

class App extends Component {

  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    currentItem: null,
    newOrNah: null,
    transactionArray: new JsTPS()
  };

  setCurrentListName = (value) => {
    //this.state.currentList.name = value;
    let list = this.state.currentList;
    list.name = value;
    this.setState({
        currentList: list
    })
  };

  setCurrentListOwner = (value) => {
    //this.state.currentList.owner = value;
      let list = this.state.currentList;
      list.owner = value;
      this.setState({
          currentList: list
      })
  };

  loadItemEdit = (value, boolean) => {
    this.setState({
      currentItem: value,
      currentScreen: AppScreen.ITEM_SCREEN,
      newOrNah: boolean
    })
  };

  itemEditCheck = (value, submit) => {
    if(submit) {
      if(this.state.newOrNah) {
        let te = this.state.currentList;
        te.items.push(value);
        this.setState({
          currentList: te
        });
      }
      this.setState({
        currentItem: value,
        currentScreen: AppScreen.LIST_SCREEN
      })

    }
    else {
      this.setState({
        currentScreen: AppScreen.LIST_SCREEN,
        currentItem: null
      })
    }
  };

  getKey() {
    let keys = this.state.todoLists.map(a => a.key);
    for(let i = 0; i < this.state.todoLists.length; i++) {
      if(!(keys.includes(i))) {
        return i
      }
    }
    return this.state.todoLists.length
  }

  deleteList = (value) => {
    let count = -1;
    for(let i = 0;i<this.state.todoLists.length;i++) {
      if(this.state.todoLists[i].key === value) {
        count = i
      }
    }

    this.state.todoLists.splice(count, 1);
    this.goHome()
  };

  newList = () => {
    let l = this.getKey();
    let list = {
      "key": l,
      "name": "Unknown",
      "owner": "Unknown",
      "items": []
    };
    this.state.todoLists.push(list);
    this.setState({
      currentList: list
    });
    this.loadList(list)
  };

  goHome = () => {
    console.log("currentList: " + this.state.currentList.toString());
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
    console.log("currentList: " + this.state.currentList);
  };

  loadList = (todoListToLoad) => {
    console.log("currentList: " + this.state.currentList);
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log(todoListToLoad);
    let tps = this.state.transactionArray;
    tps.addTransaction(todoListToLoad);
    console.log(tps.toString());
    this.setState({
      transactionArray: tps
    })
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  };

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists}
        newList={this.newList.bind(this)}
        />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList}
          setCurrentListName={this.setCurrentListName.bind(this)}
          setCurrentListOwner={this.setCurrentListOwner.bind(this)}
          goEditItem={this.loadItemEdit.bind(this)}
          itemEditCheck={this.itemEditCheck.bind(this)}
          deleteList={this.deleteList.bind(this)}
        />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen
                  loadList={this.loadList.bind(this)}
                  todoList={this.state.currentList}
                  todoItem={this.state.currentItem}
                  currentScreen={this.state.currentScreen}
                  itemEditCheck={this.itemEditCheck.bind(this)}
        />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;