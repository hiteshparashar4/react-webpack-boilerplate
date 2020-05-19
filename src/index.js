import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header/header';
import Body from './components/Body/body';
import Footer from './components/Footer/footer';
import './mystyle.scss';

class MyComponent extends React.Component {

    // comment
    
    render() {
        console.log('test')
        return (
            <>
                <Header text="If you are reading this" />
                <Body text="it means" />
                <Footer text="you setup works correctly" />
            </>
        );
    }

}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<MyComponent />, wrapper) : false;

