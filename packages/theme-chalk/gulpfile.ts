// 打包样式
import { src, dest, series } from "gulp";
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import path from 'path'
function compile() {
    const sass = gulpSass(dartSass)
    return src(path.resolve(__dirname, './src/*.scss')).pipe(sass.sync()).pipe(autoprefixer())
        .pipe(cleanCSS()).pipe(dest('./dist/css'))

}
// function copyfont() {
//     return src(path.resolve(__dirname, './src/fonts/**')).pipe(dest('./dist/fonts'))
// }
function copuFullStyle(){
    return src(path.resolve(__dirname,'./dist/**')).pipe(dest(path.resolve(__dirname,'./../../dist/theme_chalk')))
}
export default series( 
    compile,
    // copyfont,
    copuFullStyle
)