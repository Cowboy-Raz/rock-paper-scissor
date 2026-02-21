import { combineUsers } from '../index.js';

describe('combineUsers', () => {
  test('merges two arrays of usernames into one object', () => {
    const result = combineUsers(['Alice', 'Bob'], ['Charlie', 'Dave']);
    expect(result.users).toEqual(['Alice', 'Bob', 'Charlie', 'Dave']);
  });

  test('includes a merge_date property', () => {
    const result = combineUsers(['Alice'], ['Bob']);
    expect(result).toHaveProperty('merge_date');
  });

  test('returns invalid input when called with no arguments', () => {
    const result = combineUsers();
    expect(result).toBe('invalid input');
  });

  test('handles more than two arrays', () => {
    const result = combineUsers(['Alice'], ['Bob'], ['Charlie']);
    expect(result.users).toEqual(['Alice', 'Bob', 'Charlie']);
  });
});