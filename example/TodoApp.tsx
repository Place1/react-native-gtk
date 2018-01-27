import * as React from 'react';
import {
  View,
  ListBox,
  ListBoxRow,
  Label,
  TextInput,
  Button,
  StyleSheet,
  render,
} from '../src';

interface Todo {
  title: string;
}

interface State {
  draftTodo: string;
  todos: Todo[],
}

class App extends React.Component<{}, State> {

  state = {
    draftTodo: '',
    todos: [{ title: 'hello' }],
  };

  onDraftTodoChanged = (value: string) => {
    this.setState({ draftTodo: value });
  }

  createTodo = () => {
    const { draftTodo, todos } = this.state;
    if (draftTodo !== '') {
      const newTodo = {
        title: draftTodo,
      };
      this.setState({
        todos: [...todos, newTodo],
      });
    }
  }

  removeTodo = (index: number) => {
    const todos = this.state.todos.slice();
    todos.splice(index, 1);
    this.setState({ todos });
  }

  componentDidUpdate() {
    console.log(JSON.stringify(this.state, undefined, 2));
  }

  render() {
    return (
      <View style={styles.container}>
        <ListBox>
          {this.state.todos.map((todo, i) => (
            <ListBoxRow key={i}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Label text={todo.title} />
                <Button
                  title="X"
                  onPress={() => this.removeTodo(i)}
                />
              </View>
            </ListBoxRow>
          ))}
        </ListBox>
        <View style={styles.controls}>
          <TextInput
            style={{ height: 50, width: 200 }}
            value={this.state.draftTodo}
            onTextChanged={this.onDraftTodoChanged}
            onSubmitEditing={this.createTodo}
          />
          <Button
            style={{ height: 50, width: 70, marginLeft: 10 }}
            title="Add Todo"
            onPress={this.createTodo}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: 600,
    height: 500,
  },
  controls: {
    flexDirection: 'row',
  }
});

render(<App />);
