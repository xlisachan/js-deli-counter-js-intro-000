function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(){
  var name;
  for (let i = 0; i < deliLine.length; i++) {
    if (i < deliLine.length){
      console.log(`Currently serving ${name}.`)
    deliLine.shift();
  } else {
    return 'There is nobody waiting to be served!'
  }
}
