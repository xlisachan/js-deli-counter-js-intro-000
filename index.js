function takeANumber(katzDeliLine, name) {
  var katzDeliLine = [];
  var position = katzDeliLine.length + 1;
  katzDeliLine = Object.assign({}, name);

  return `Welcome, ${name}. You are number ${position} in line.`;
}
