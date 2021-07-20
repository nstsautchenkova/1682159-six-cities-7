import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Success, Error } from './comment-alert.jsx';

describe('Component: comment-alert', () => {
  it('should render "Success"', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Success />
      </Router>,
    );
    const successElement = screen.getByTestId('Success');
    expect(successElement).toBeInTheDocument();
  });

  it('should render "Error"', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Error />
      </Router>,
    );
    const errorElement = screen.getByTestId('ERROR');
    expect(errorElement).toBeInTheDocument();
  });
});