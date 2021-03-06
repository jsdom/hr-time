"use strict";

require("./utils/inaccurate-clock")("Date.now");

const { clockIsAccurate } = require("../");

beforeAll(() => {
  expect(clockIsAccurate).toBe(false);
});

require("./primitives/global-monotonic-clock")();
require("./primitives/performance-common")();
require("./primitives/performance-integers")();
