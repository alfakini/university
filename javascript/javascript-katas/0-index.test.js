function hello(name) {
  // IMPLEMENTE
}

describe('hello', function() {
  it('deve retornar Hello, Marvin!', function() {
    expect(hello('Marvin')).toEqual('Hello, Marvin!');
  });
});
