# vitest 

## 实现 mini-vitest

> mini 版 vitest 框架，主要是在学习过程中通过简单实现其 api 来加深理解。

### 实现目标

- [x] test it
- [x] expect toBe
- [x] test.only
- [x] 提示是否通过/报错
- [x] beforeAll beforeEach afterAll afterEach
- [x] describe
- [x] 自动执行所有的测试脚本 *.spec.js
  - 例如使用 npm run test 就执行所有符合条件的测试用例

## 常用的 API

- it 执行测试的最小单元
  - 最先来自 BDD 行为驱动开发
  - it should xxx xxx
- test 执行测试的最小单元
  - 来源于 Jest
- discribe 描述一个测试，可以包含多个测试单元
- expect 期望断言
- toBe 相当于全等
- toEqual 判断对象是否相等
- toBeFalsy 判断是否 false
- toBeTruthy 判断是否 true

- beforeEach setup 之前
- afterEach 销毁之后
- beforeAll 在所有执行之前，只执行一次
- afterAll 在所有执行之后，只执行一次
