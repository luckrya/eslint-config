import type { ProjectType } from "../enum";

export interface InjectArgsAlias {
  t: ProjectType /* alias：当前操作目标项目类型 */;
  g: boolean /* alias：Git 提交日志校验配置 */;
  s: boolean /* alias：Git 暂存区文件格式化配置 */;
  i: boolean /* alias：TS 类型声明检查配置 */;
  c: boolean /* alias：配置元素是否可组合 */;
}

export interface InjectArgs {
  type: ProjectType /* 当前操作目标项目类型 */;
  gitCommitLog: boolean /* Git 提交日志校验配置 */;
  gitStaged: boolean /* Git 暂存区文件格式化配置 */;
  inspectTsType: boolean /* TS 类型声明检查配置 */;
  composable: boolean /* 配置元素是否可组合 */;
}
