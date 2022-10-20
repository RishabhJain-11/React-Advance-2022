import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import { reducer } from './reducer';

const defaultSize = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, setState] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime.toString(), name };

      dispatchEvent({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatchEvent({ type: "CLOSE_MODAL" });
    };
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}

      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>

            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>
              Remove
            </button>
          </div>
        );
      })}
    </>
  )
};

export default Index;
