function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(deliLine){
  for (let i = 0; i < deliLine.length; i++){
    if (deliLine.length == 0) {
      return 'There is nobody waiting to be served!';
    } else {
      return `Currently serving ${deliLine[0]}.`;
    }
}
}
