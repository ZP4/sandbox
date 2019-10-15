import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    currentItem: null,
    newOrNah: null
  };

  setCurrentListName = (value) => {
    this.state.currentList.name = value;
  };

  setCurrentListOwner = (value) => {
    this.state.currentList.owner = value;
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

  loadNewItemEdit = (value) => {
    this.setState({
      currentItem: value,
      currentScreen: AppScreen.ITEM_SCREEN
    })
  };

  newItemEditCheck = (value, submit) => {
    if(submit) {
      this.setState({
        currentList: this.state.currentList.push(value)
      });
    }
    else {
      this.setState({
        currentScreen: AppScreen.LIST_SCREEN,
        currentItem: null
      })
    }

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
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  };

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList}
          setCurrentListName={this.setCurrentListName.bind(this)}
          setCurrentListOwner={this.setCurrentListOwner.bind(this)}
          goEditItem={this.loadItemEdit.bind(this)}
          itemEditCheck={this.itemEditCheck.bind(this)}
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