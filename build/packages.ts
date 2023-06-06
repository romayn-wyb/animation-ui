import { parallel, series, src, dest } from "gulp"
import { buildConfig } from './utils/config'
import path from 'path'
import { outDir, projectRoot } from "./utils/path"
import ts from 'gulp-typescript'
import { withTaskName, run } from './utils/gulp';

export const buildPackages = (driname: string, name: string) => {
    const tasks = Object.entries(buildConfig).map(([module, config]) => {
        const output = path.resolve(driname, config.output.name)
        return series(
            withTaskName(`build:${driname}`, () => {
                const tsConfig = path.resolve(projectRoot, 'tsconfig.json');
                const inputs = ['**/*.ts', "!gulpfile.ts", "!node_modules"];
                return src(inputs).pipe(ts.createProject(tsConfig, {
                    declaration: true,  //需要生成配置文件
                    strict: false,
                    module: config.module
                })()).pipe(dest(output))
            }),
            withTaskName(`copy:${driname}`,()=>{
                return  src(`${output}/**`).pipe(dest(path.resolve(outDir,config.output.name,name)))
            })
        )

    });
    return parallel(...tasks)
}
