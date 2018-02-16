function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(deliLine){
  let i = 0;
  while (i < deliLine.length){
      return `Currently serving ${deliLine[0]}.`;
    i++;
  }
  return "There is nobody waiting to be served!"
}
