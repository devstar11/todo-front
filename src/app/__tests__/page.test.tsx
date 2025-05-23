import { render } from '@testing-library/react';
import Home from '../page';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />);
    // Add your test assertions here
  });
}); 