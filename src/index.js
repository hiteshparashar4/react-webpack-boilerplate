import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/header';
import Body from './components/Body/body';
import Footer from './components/Footer/footer';
import './styles/global.scss';

const App = () => {
  return (
    <div className='main-container'>
      <Header text='Hi there' />
      <Body text='If you are reading this it means your setup works correctly' />
      <Footer text='' />
    </div>
  );
};

const wrapper = document.getElementById('container');
ReactDOM.render(<App />, wrapper);
