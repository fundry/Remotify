import React from "react"

//react-context api config
export const StateContext = React.createContext()

export class StateProvider extends React.Component {
  state = {
    test: "testing context api",
  }

  render() {
    return (
      <StateContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </StateContext.Provider>
    )
  }
}
