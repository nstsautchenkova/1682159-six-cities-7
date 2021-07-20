import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Logo from './logo.jsx';

describe('Component: Logo', () => {
  it('should render "Logo"', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Logo />
      </Router>,
    );
  });
});