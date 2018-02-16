function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(deliLine){
  var name = deliLine[0];
    if (deliLine.length == 0) {
      return 'There is nobody waiting to be served!';
    } else {
      return `Currently serving ${name}.`;
      deliLine = deliLine.shift();
    }

}


  it('returns an announcement about the person it is serving, and shifts the line', () => {
    const deliLine = ["Steven", "Blake", "Avi"]
    expect(nowServing(deliLine)).toEqual("Currently serving Steven.");
    expect(deliLine).toEqual(["Blake", "Avi"]);
  });
});

describe('currentLine(line)', () => {
  it('returns "The line is currently empty." if no one is in line', () => {
    expect(currentLine([])).toEqual("The line is currently empty.");
  });

  it('says who is in line when there are people waiting', () => {
    expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
  });
});
})
