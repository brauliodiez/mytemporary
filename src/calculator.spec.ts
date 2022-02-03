import * as calculator from './calculator';
import * as business from './calculator.business';

describe('Calculator tests', () => {
  describe('add', () => {
    it('should return 4 when passing A eq 2 and B eq 2', () => {
      // Arrange
      const a = 2;
      const b = 2;
      const isLowerThanFive = jest
        .spyOn(business, 'isLowerThanFive')
        .mockImplementation((result) =>
          console.log('Hello from the mocked function')
        );
      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(isLowerThanFive).toHaveBeenCalled();
      expect(isLowerThanFive).toHaveBeenCalledWith(4);
      expect(result).toEqual(4);
    });
  });
});
