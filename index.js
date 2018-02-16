function takeANumber(katzDeli, name) {
  var katzDeli = [];
  katzDeli = Object.assign({}, name);
  var position = katzDeli.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${position} in line.`;
}
