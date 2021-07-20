import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFoundPage from '../not-found-page/not-found-page.jsx';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <NotFoundPage />
      </Router>,
    );
    const headerElement = getByText('404 Not Found');

    expect(headerElement).toBeInTheDocument();
  });
});
