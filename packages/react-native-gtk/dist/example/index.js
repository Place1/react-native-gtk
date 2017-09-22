"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const src_1 = require("../src");
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            flexDirection: 'row',
        };
    }
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
        const buttonSize = {
            width: 140,
            height: 50,
        };
        const viewStyle = {
            flex: 1,
            flexDirection: this.state.flexDirection,
            justifyContent: 'space-between',
            width: 500,
            height: 500,
        };
        return (React.createElement(src_1.View, { style: viewStyle },
            React.createElement(src_1.Button, { style: buttonSize, label: "hello world!" }),
            React.createElement(src_1.Button, { style: buttonSize, label: "another button!" }),
            React.createElement(src_1.Button, { style: buttonSize, label: "and 1 more!" })));
    }
}
src_1.render(React.createElement(App, null));
