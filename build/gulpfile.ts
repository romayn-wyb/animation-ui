import { series, parallel } from 'gulp';
import { withTaskName, run } from './utils/gulp';

//1.打包样式 2.打包所有组件 3.打包每个组件 4.生成一个组件库  5.发布组件
export default series(
    // 1.移除dist
    withTaskName("clean", async () => run('rimraf ./dist')),
    //2.打包样式
    withTaskName("buildPackages", async () => run("pnpm run --parallel build --filter ./packages  "))
    //2.
   // withTaskName("create", async () => run('rimraf ./dist'))
)