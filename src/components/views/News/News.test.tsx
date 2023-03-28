import { BrowserRouter as Router } from 'react-router-dom';
import renderWithProviders from 'src/utils/test-utils';
import News from './News';

test('Should render News component without crashing', () => {
  const { container } = renderWithProviders(
    <Router>
      <News />
    </Router>
  );

  expect(container).toBeInTheDocument();
});
