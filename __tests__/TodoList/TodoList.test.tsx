import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import  { TodoList }  from '../../src/app/components/TodoList';
import { debug } from 'console';

describe('TodoTests', () => {
  it('renders a heading', () => {
      const { asFragment } = render(<TodoList />);
  });


  //  Here's a failing test. I wrote this test **before** 
  //  having a goals property on the TodoList component.
  //
  //  Because the failing test points 
  //  towards functionality I'd like to implement
  //  we can call it TDD (test driven development)
  //
  //  TODO: reimplement TodoList to take a property goals which is goal[]
  //
  // THE TEST:
  // it('renders a list of goals', () => {
  //   const goals = [    { value: 'goal 1', id: 1 },    { value: 'goal 2', id: 2 }  ];
  //   const { getByText } = render(<TodoList goals={goals} />);
  //   goals.forEach((goal) => {
  //     const goalItem = getByText(goal.value);
  //     expect(goalItem).toBeInTheDocument();
  //   });
  // });


});