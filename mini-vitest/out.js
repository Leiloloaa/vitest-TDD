(() => {
  // core.js
  var testCase = [];
  var onlyCase = [];
  var beforeAllCase = [];
  var beforeEachCase = [];
  var afterAllCase = [];
  var afterEachCase = [];
  var test = (name, callback) => {
    testCase.push({ name, callback });
  };
  test.only = (name, callback) => {
    onlyCase.push({ name, callback });
  };
  var beforeAll = (callback) => {
    beforeAllCase.push(callback);
  };
  var beforeEach = (callback) => {
    beforeEachCase.push(callback);
  };
  var afterAll = (callback) => {
    afterAllCase.push(callback);
  };
  var afterEach = (callback) => {
    afterEachCase.push(callback);
  };
  var run = () => {
    for (const beforeAllCallBack of beforeAllCase) {
      beforeAllCallBack();
    }
    const suit = onlyCase.length > 0 ? onlyCase : testCase;
    for (const test2 of suit) {
      for (const beforeEachCallBack of beforeEachCase) {
        beforeEachCallBack();
      }
      try {
        test2.callback();
        console.log(`success:${test2.name}`);
      } catch (error) {
        console.log(`fail:${error}`);
      }
      for (const afterEachCallBack of afterEachCase) {
        afterEachCallBack();
      }
    }
    for (const afterAllCallBack of afterAllCase) {
      afterAllCallBack();
    }
  };

  // <stdin>
  beforeAll(() => {
    console.log("beforeAll");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });
  afterAll(() => {
    console.log("afterAll");
  });
  afterEach(() => {
    console.log("afterEach");
  });
  test("test first case", () => {
    console.log("test first case");
  });
  test("test two case", () => {
    console.log("test two case");
  });
  run();
})();
