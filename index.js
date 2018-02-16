function takeANumber(katzDeliLine, name) {
  var katzDeliLine = [];
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${position} in line.`;
}
