import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { setName, setAge } from './userSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <button onClick={() => dispatch(setName('John Doe'))}>Set Name</button>
      <button onClick={() => dispatch(setAge(30))}>Set Age</button>
    </div>
  );
};

export default Counter
