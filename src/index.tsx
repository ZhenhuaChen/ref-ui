import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Wrapper from './components/wrapper';
import WalletContainer from './container/WalletContainer';

ReactDOM.render(
  <WalletContainer.Provider>
    <Wrapper>
      <App />
    </Wrapper>
  </WalletContainer.Provider>,
  document.querySelector('#root')
);

new Worker('./worker.ts');
