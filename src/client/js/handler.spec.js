import {validURL} from './formHandler';

test('test handler', () => {
    expect(validURL('submit')).toBe(false);
});

