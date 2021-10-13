const app = require('../src/Zlog');
test('app test', () => {
  expect(app.log('test')).toBeUndefined();
  expect(app.success('test')).toBeUndefined();
  expect(app.warning('test')).toBeUndefined();
  expect(app.info('test')).toBeUndefined();
  expect(app.force('force')).toBeUndefined();
  expect(app.error('test')).toBeUndefined();
});
