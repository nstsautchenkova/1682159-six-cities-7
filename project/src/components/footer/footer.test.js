import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Footer from './footer.jsx';

describe('Component: Footer', () => {
  it('should render "Footer"', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Footer />
      </Router>,
    );
  });
});