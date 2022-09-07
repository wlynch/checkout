const core = require('@actions/core');

try {
  console.log(`please don't run this`);
} catch (error) {
  core.setFailed(error.message);
}
