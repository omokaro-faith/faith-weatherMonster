import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "regenerator-runtime/runtime";
import WeatherUiContainer from './containers/WeatherUiContainer';
import './styles/index.scss';
import configureStore from './store/configureStore';

const store = configureStore();

const Wrapper = () => {
  return (
    <Provider store={store}>
      <WeatherUiContainer />
    </Provider>
  );
};


ReactDOM.render(<Wrapper />, document.getElementById('monster-app'))