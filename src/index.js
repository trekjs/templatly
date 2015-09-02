import vm from 'vm';

export default function render(context = '', locals = Object.create(null)) {
  return vm.runInNewContext(`\`${context}\``, locals);
};