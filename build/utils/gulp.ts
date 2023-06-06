import type { TaskFunction } from 'gulp'
import { spawn } from 'child_process'
import { projectRoot } from './path'
export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
    Object.assign(fn, { displayName: name })


export const run = async (command: string) => {
    return new Promise((resolve) => {
        const [cmd, ...args] = command.split(" ");
        console.log(cmd,args)
        const app = spawn(cmd, args, {
            cwd: projectRoot,
            stdio: "inherit",  //直接将这个子进程的输出贡献给父进程
            shell: true
        })
        app.on("close", resolve)
    })
}