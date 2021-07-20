import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Preloader } from './preloader.jsx';

describe('Component: Preloader', () => {
  it('should render "Preloader"', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Preloader />
      </Router>,
    );
  });
});