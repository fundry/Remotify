import React from 'react';

//react-context api config
export const StateContext = React.createContext();

export class StateProvider extends React.Component {
  state = {
    authenticated: false,
  };

  authenticate = () => {
    this.setState({
      authenticated: true,
    });
  };

  render() {
    return (
      <StateContext.Provider
        value={{ ...this.state, authenticate: this.authenticate }}
      >
        {this.props.children}
      </StateContext.Provider>
    );
  }
}
