import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'dummy/tests/helpers';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  test('we can access the test service correctly', async function (assert) {
    await visit('/');

    assert.dom('#test-target').hasText('hello there');
  });
});
