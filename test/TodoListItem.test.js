import { expect } from 'chai';
import { getBorderByDate } from '../src/todos/TodoListItem';

describe('TodoListItem getBorderByDate', () => {
    it('Returns none when the date is less than 5 days ago', () => {
        const today = Date.now();
        const itemDate = new Date(Date.now() - 8640000 * 3);
        const expected = 'none';
        const actual = getBorderByDate(today, itemDate);

        expect(actual).to.equal(expected);
    });

    it('Returns a border when the date is more than 5 days ago', () => {
        const today = Date.now();
        const itemDate = new Date(Date.now() - 8640000 * 7);
        const expected = '2px solid red';
        const actual = getBorderByDate(itemDate, today);

        expect(actual).to.equal(expected);
    });
});