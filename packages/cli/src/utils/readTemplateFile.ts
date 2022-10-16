import path from "path";
import fs from "fs-extra";

export default function readTemplateFile(fileName: string) {
  let result = "";

  const filePath = path.resolve(__dirname, "../templates", fileName);
  if (fs.existsSync(filePath)) {
    result = fs.readFileSync(filePath, {
      encoding: "utf8",
    });
  }

  return result;
}
