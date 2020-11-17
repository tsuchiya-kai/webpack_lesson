import _ from 'lodash';

function component() {
  const el = document.createElement('div');
  const array = ['hello', 'webpack'];
  el.innerHTML = _.join(array, ' ');
  return el;
}

document.body.appendChild(component());
