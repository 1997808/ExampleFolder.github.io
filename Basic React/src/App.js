import React from 'react'
import {createStore} from "redux"
import { Provider } from 'react-redux'

import Number from "./components/Number"
import Button from "./components/Button"

const defaultState = {
  num: 0
}
const reducer = (state = defaultState) => {
  return {
    num: Math.ceil(Math.random() * 10)
  }
}
const store = createStore(reducer)

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     number: 9
  //   }
  // }
  // changeNumber = () => {
  //   var a = Math.ceil(Math.random() * 1000)
  //   this.setState({
  //     number: a
  //   })
  // }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <h2>Random 1 to 10</h2>
          <div id="main">
            <Number/>  {/*number = {this.state.number} */}
            <Button/>  {/*changeNumber = {this.changeNumber}*/}
          </div>
        </React.Fragment>
      </Provider>
    )
  }
}

export default App;
