import * as React from 'react';
import { render, Button, View } from '../src';

class App extends React.Component<{}, any> {

  state = {
    flexDirection: 'row',
  };

  private interval: NodeJS.Timer | undefined;

  componentDidMount() {
    this.interval = setInterval(() => {
      const currentFlexDirection = this.state.flexDirection;
      this.setState({
        flexDirection: currentFlexDirection === 'row' ? 'column' : 'row',
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  componentDidUpdate() {
    console.log('current state: ' + JSON.stringify(this.state, undefined, 2));
  }

  render() {
    const buttonSize: any = {
      width: 140,
      height: 50,
    };
    const viewStyle: any = {
      flex: 1,
      flexDirection: this.state.flexDirection,
      justifyContent: 'space-between',
      width: 500,
      height: 500,
    };
    return (
      <View style={viewStyle}>
        <Button style={buttonSize} label="hello world!" />
        <Button style={buttonSize} label="another button!" />
        <Button style={buttonSize} label="and 1 more!" />
      </View>
    );
  }
}

render(<App />);
