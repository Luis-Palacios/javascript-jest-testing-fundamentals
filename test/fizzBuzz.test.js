import { fizzBuzz, fizzOrBuzz } from '../utils/fizzBuzz'

test('fizzBuzz should return a result with the right values', () => {
    // Arrange
    const limit = 15;
    // Act
    const result = fizzBuzz(limit);
    // Assert
    expect(result.length).toBe(limit);

    expect(result[0]).toBe(1)
    expect(result[1]).toBe(2)
    expect(result[2]).toBe('fizz')
    expect(result[3]).toBe(4)
    expect(result[4]).toBe('buzz')
});

describe('fizzOrBuzz should', () => {
    test('return 1 when value is 1', () => {
        // Arrange
        const value = 1;
        // Act
        const result = fizzOrBuzz(value);
        // Assert
        expect(result).toBe(value);
    });

    test('return fizz when value is 3', () => {
        // Arrange
        const value = 3;
        // Act
        const result = fizzOrBuzz(value);
        // Assert
        expect(result).toBe('fizz');
    });

    test('return buzz when value is 5', () => {
        // Arrange
        const value = 5;
        // Act
        const result = fizzOrBuzz(value);
        // Assert
        expect(result).toBe('buzz');
    });

    test('return fizzbuzz when value is 15', () => {
        // Arrange
        const value = 15;
        // Act
        const result = fizzOrBuzz(value);
        // Assert
        expect(result).toBe('fizzbuzz');
    });
});

