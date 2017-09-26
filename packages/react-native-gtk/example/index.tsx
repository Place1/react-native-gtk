import * as React from 'react';
import { render, Button, View } from '../src';

class App extends React.Component<{}, any> {

  state = {
    flexDirection: 'row',
    buttonLabel: 'RNG button',
  };

  private interval: NodeJS.Timer | undefined;

  componentWillUnmount() {
    console.log('App unmounted!');
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
        <Button
          style={buttonSize}
          label={this.state.buttonLabel}
          onClick={() => this.setState({ buttonLabel: String(Math.random()) })}
        />
        <Button
          style={buttonSize}
          label="Flex Button"
          onClick={() => this.setState({ flexDirection: this.state.flexDirection === 'row' ? 'column' : 'row' })}
        />
        <Button style={buttonSize} label="Hello world!" />
      </View>
    );
  }
}

render(<App />);
