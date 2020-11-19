import _ from 'lodash';
import style from './style.css'
console.log(style)

function component() {
  const el = document.createElement('div');
  const array = ['hello', 'webpack','!!!!'];
  el.innerHTML = _.join(array, ' ');
  return el;
}

document.body.appendChild(component());
document.body.classList.add('haikei');
