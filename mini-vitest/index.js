import glob from "glob";
import fs from "fs/promises";
import { build } from "esbuild";
// 执行所有的测试用例
// 1. 获取到所有 *.spec.js 文件
// 2. 执行这些脚本
//   - 直接执行 *.spec.js 文件的话，需要解决 import 的问题
//   - 所以需要使用 esbuild 的 build 将 core 和 *.spec.js 结合成一个 IIFE

const files = glob.sync("*.spec.js");

for (const file of files) {
  const fileContent = await fs.readFile(file, "utf-8");
  await runModule(fileContent);
}

async function runModule(fileContent) {
  const result = await build({
    // 标准化输入（stdin）读取单个输入文件
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd(),
    },
    write: false,
    bundle: true,
    target: "esnext",
    // outfile: './out.js',
  });

  console.log("result.outputFiles[0].text", result.outputFiles[0].text);

  new Function(result.outputFiles[0].text)();
}
