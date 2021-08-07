import { render, screen } from '@testing-library/react';
import PageHeader from '../PageHeader';

test('should render the same text as the passed prop', () => {
  render(<PageHeader title='test title' />);

  const titleElm = screen.getByText(/test title/i);

  expect(titleElm).toBeInTheDocument();
});
