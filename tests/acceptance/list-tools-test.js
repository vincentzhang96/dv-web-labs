import { test } from 'qunit';
import moduleForAcceptance from 'dv-web-labs/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list tools');

test('visiting / should redirect to tools route', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/tools', 'Should redirect automatically');
  });
});


