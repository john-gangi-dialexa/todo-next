'use client';
import { useState } from "react";
import Image from 'next/image';
import { json, text } from "stream/consumers";

import  generateID  from "./generateID"
import styles from './page.module.css';


export default function Home() {
  const [goals, setGoals] =; useState([]);
  const [input, setInput] = useState('');
  const [shaking, setShaking] = useState(false);

  const handleAddGoal = (event) => {
    if (input.length < 1) {
      setShaking(true); 
      setTimeout(() => {
        setShaking(false);
      }, 500);

      return;
    }
    if (event.type === 'click' || event.keyCode === 13 ) {
      const newGoal = { value: input, id: generateID() };
      setGoals([...goals, newGoal]);
      setInput('');
    }
  }
  
  const handleRemoveGoal = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.card}>
        <div><span>todo-next:</span></div>
        <hr></hr>
          <div className={styles.code}  style={{maxWidth: "20vw"}}>
            <strong>welecome</strong> to the to-do list app.
            with some simple HMTL + CSS + TS
            we can be begin to create interactive web pages.
          </div>
          </div>
          <div className={styles.card}>
          <span>reminders:</span>
          <hr></hr>
          {goals.map((todo, index) => (
            <div key={todo.id}>
            <li  >
              {todo.value} 
              <div className={styles.cancel} onClick={() => handleRemoveGoal(todo.id)}>
                <Image
                alt="remove todo item"
                width={12}
                height={12}
                src="/close.svg"
                />
              </div>
            </li>
          </div>
          ))}
          <input 
            id={shaking ? 'shake' : ''}
            value={input} 
            onChange={handleInputChange}
            onKeyUp={handleAddGoal} 
            type='text' />
        <div className={styles.button} onClick={handleAddGoal}>Add to list</div>
        </div>
      </div>
    </main>
  );
}
