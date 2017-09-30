import * as React from 'react';
import {
  render,
  Button,
  View,
  TextInput,
  ListBox,
  ListBoxRow,
  Label,
} from '../src';

class App extends React.Component<{}, any> {

  state = {
    flexDirection: 'row',
    buttonLabel: 'RNG button',
    textInputValue: '',
  };

  componentWillUnmount() {
    console.log('App unmounted!');
  }

  componentDidUpdate() {
    console.log('current state: ' + JSON.stringify(this.state, undefined, 2));
  }

  onTextInputChange = (newValue: string) => {
    console.log(`text input changed! value = "${newValue}"`);
    this.setState({ textInputValue: newValue });
  }

  render() {
    const viewStyle: any = {
      flex: 1,
      flexDirection: this.state.flexDirection,
      justifyContent: 'space-between',
      width: 700,
      height: 500,
    };
    const buttonStyle: any = {
      height: 50,
      width: 75,
    }
    const inputStyle = buttonStyle;
    return (
      <View style={viewStyle}>
        <Button
          style={buttonStyle}
          label={this.state.buttonLabel}
          onClick={() => this.setState({ buttonLabel: String(Math.random()) })}
        />
        <Button
          style={buttonStyle}
          label="Flex Button"
          onClick={() => this.setState({ flexDirection: this.state.flexDirection === 'row' ? 'column' : 'row' })}
        />
        <TextInput
          style={inputStyle}
          value={this.state.textInputValue}
          onTextChanged={this.onTextInputChange}
        />
        <ListBox style={{ height: 400, width: 100 }}>
          <ListBoxRow>
            <Label text="hello world 1" />
          </ListBoxRow>
          <ListBoxRow>
            <Label text="hello world 2" />
          </ListBoxRow>
          <ListBoxRow>
            <Label text="hello world 3" />
          </ListBoxRow>
          <ListBoxRow>
            <Label text="hello world 4" />
          </ListBoxRow>
        </ListBox>
      </View>
    );
  }
}

render(<App />);
