import React from "react";
import ReactDOM from "react-dom";
import './mystyle.scss';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }
    render() {
        const { name } = this.state;
        return (
            <>
                <input type="text" value={name} onChange={
                    (e) => this.setState({name: e.target.value })
                } />
                <span>{name}</span>
            </>
        );
    }

}

export default MyComponent;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<MyComponent name='hitesh' />, wrapper) : false;

