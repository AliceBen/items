import TodoItem from "./todoItem";
import React,{ Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      list:[]
    }
  }

  handleInputChange(e) {
    this.setState({
      inputValue:e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index,1)
    this.setState({
      list:list
    })
  }

  render() {
    const { inputValue, list } = this.state
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea"
                  className='input'
                  value={inputValue}
                  onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {list.map((item,index) => {
            return (
              <div key={index}>
                <TodoItem
                  content={item}
                  index={index}
                  deleteItem= {this.handleItemDelete.bind(this)}
                 />
              </div>
            )
          })}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList;