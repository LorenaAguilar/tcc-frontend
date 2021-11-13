import stringAvatar from './StringToAvatar';

describe('StringToAvatar', () => {
  it('should return correctly', () => {
    const result = stringAvatar('name', 'lastname');

    expect(result.children).toBe('nl');
  });
});
