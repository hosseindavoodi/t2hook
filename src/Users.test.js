
import {Ali, Ali1} from './pages/Users';

test('renders learn react link', () => {
 const res = Ali(9,10)
  expect(res).toBe(true)
});

test('renders learn react linkfd', () => {
  const res1 = Ali1()
  expect(res1).toContain("fasdf")
 });
 