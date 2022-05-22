import Ethers from "@typechain/ethers-v5";
import { Config, FileDescription } from "typechain";
import {join, resolve, dirname} from "path";

export default class EthersSentio extends Ethers {
  override transformAbiOrFullJsonFile(file: FileDescription): FileDescription[] | void {
    const files = super.transformAbiOrFullJsonFile(file);
    if (files != null) {
      return [...files, {
        path: join(dirname(files[0].path), `sentio.ts`),
        contents: "export class HelloWorld { }",
      }];
    }
  }
}
