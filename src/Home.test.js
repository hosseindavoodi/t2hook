
import {Home} from './pages/Home';

test('the data is peanut butter', async () => {
  const data = Home();
  expect(data).toContain('id labore ex et quam laborum');
});