let testCase = [];
let onlyCase = [];
let beforeAllCase = [];
let beforeEachCase = [];
let afterAllCase = [];
let afterEachCase = [];

export const test = (name, callback) => {
  testCase.push({ name, callback });
};

test.only = (name, callback) => {
  onlyCase.push({ name, callback });
};

export const it = test;

export const expect = (act) => {
  return {
    toBe: function (exp) {
      if (exp === act) {
        console.log("ok");
      } else {
        throw new Error(`expect:${exp} but actually:${act}`);
      }
    },
    toEqual: function () {},
  };
};

export const beforeAll = (callback) => {
  beforeAllCase.push(callback);
};
export const beforeEach = (callback) => {
  beforeEachCase.push(callback);
};
export const afterAll = (callback) => {
  afterAllCase.push(callback);
};
export const afterEach = (callback) => {
  afterEachCase.push(callback);
};
export const describe = (name, callback) => {
  callback();
};

export const run = () => {
  for (const beforeAllCallBack of beforeAllCase) {
    beforeAllCallBack();
  }

  const suit = onlyCase.length > 0 ? onlyCase : testCase;

  for (const test of suit) {
    for (const beforeEachCallBack of beforeEachCase) {
      beforeEachCallBack();
    }

    try {
      test.callback();
      console.log(`success:${test.name}`);
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
