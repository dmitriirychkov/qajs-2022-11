// app.test.js

describe('nameIsValid', () => {
  test.each([
    ['John', true],
    ['a', false],
    ['', false],
    ['ab', true],
    ['john123', false],
  ])('проверяет, что имя %s является %s', (name, expected) => {
    expect(nameIsValid(name)).toBe(expected);
  });

  test('должно возвращать false для имени с пробелами', () => {
    expect(nameIsValid('John Doe')).toBe(false);
  });

  test('должно возвращать false для имени с символами', () => {
    expect(nameIsValid('John@')).toBe(false);
  });
});

describe('fullTrim', () => {
  test('должно удалить пробелы из строки', () => {
    expect(fullTrim('  Hello World  ')).toBe('HelloWorld');
  });

  test('должно вернуть пустую строку для пустой строки', () => {
    expect(fullTrim('')).toBe('');
  });

  test('должно вернуть строку без изменений, если пробелов нет', () => {
    expect(fullTrim('HelloWorld')).toBe('HelloWorld');
  });
});

describe('getTotal', () => {
  test('должно корректно считать общую сумму без скидки', () => {
    const items = [{ price: 10, quantity: 10 }];
    expect(getTotal(items)).toBe(100);
  });

  test('должно корректно применять скидку', () => {
    const items = [{ price: 100, quantity: 1 }];
    expect(getTotal(items, 10)).toBe(90);
  });

  test('должно выбрасывать ошибку для некорректных скидок', () => {
    expect(() => getTotal([], -10)).toThrow('Процент скидки не может быть отрицательным');
    expect(() => getTotal([], 110)).toThrow('Процент скидки не может быть больше 100');
    expect(() => getTotal([], '10')).toThrow('Скидка должна быть числом');
  });
});

