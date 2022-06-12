import './x.styl'
import x from './x.js'
import png from './assets/file-loader.png'

const img = document.querySelector('.img')
img.innerHTML = `<img src='${png}'>`
console.log(x);
console.log('hi');
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy.js')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => { })
}
document.body.appendChild(button)