import 'node-fetch';
import { expect } from 'chai';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';

import { loadTodos } from '../src/todos/thunks';

describe('loadTodos thunk', () => {
    it('Dispatches the correct actions in success scenario', async () => {
        const fakeDispatch = sinon.spy();
        const fakeTodos = [ { text: '1' }, { text: '2' } ];
        
        fetchMock.get('http://localhost:8080/todos', fakeTodos);
        
        const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' };
        const expectedSecondAction = { type: 'LOAD_TODOS_SUCCESS', payload: { todos: fakeTodos } };

        await loadTodos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

        fetchMock.reset();
    });
});