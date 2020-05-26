// Substituia RESPOSTA pela resposta correta

describe("Arrays", function () {
  it("should create arrays", function () {
    var emptyArray = [];
    expect(emptyArray.length).toEqual(RESPOSTA);

    var multiTypeArray = [0, 1, "two", function () {
        return 3;
      }, {
        value1: 4,
        value2: 5
      },
      [6, 7]
    ];
    expect(multiTypeArray[0]).toEqual(RESPOSTA);
    expect(multiTypeArray[2]).toEqual(RESPOSTA);
    expect(multiTypeArray[3]()).toEqual(RESPOSTA);
    expect(multiTypeArray[4].value1).toEqual(RESPOSTA);
    expect(multiTypeArray[4]["value2"]).toEqual(RESPOSTA);
    expect(multiTypeArray[5][0]).toEqual(RESPOSTA);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, RESPOSTA]);

    array.push(3);
    expect(array).toEqual(RESPOSTA);
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toEqual(RESPOSTA);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toEqual(RESPOSTA);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toEqual(RESPOSTA);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toEqual(RESPOSTA);
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(RESPOSTA);
    expect(array.slice(0, 2)).toEqual(RESPOSTA);
    expect(array.slice(2, 2)).toEqual(RESPOSTA);
    expect(array.slice(2, 20)).toEqual(RESPOSTA);
    expect(array.slice(3, 0)).toEqual(RESPOSTA);
    expect(array.slice(3, 100)).toEqual(RESPOSTA);
    expect(array.slice(5, 1)).toEqual(RESPOSTA);
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual(RESPOSTA);

    var poppedValue = array.pop();
    expect(poppedValue).toEqual(RESPOSTA);
    expect(array).toEqual(RESPOSTA);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual(RESPOSTA);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(RESPOSTA);
    expect(array).toEqual(RESPOSTA);
  });
});
