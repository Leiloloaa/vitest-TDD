import {
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  test,
  it,
  run,
  expect,
  describe,
} from "./core.js";

beforeAll(() => {
  // 只执行一次
  console.log("beforeAll");
});

beforeEach(() => {
  // 每次都执行
  console.log("beforeEach");
});

afterAll(() => {
  // 只执行一次
  console.log("afterAll");
});

afterEach(() => {
  // 每次都执行
  console.log("afterEach");
});

test("test first case", () => {
  console.log("test first case");
  //   expect(2).toBe(2);
  //   expect(2).toBe(3);
});

test("test two case", () => {
  console.log("test two case");
});

// test.only("test only case", () => {
//   console.log("test only case");
// });

// describe("describe", () => {
//   test("test first case", () => {
//     console.log("test first case");
//     //   expect(2).toBe(3);
//   });

//   it("test two case", () => {
//     console.log("test two case");
//   });
// });

run();
