# todo-next: understanding test-driven-developlment with react best practices

## todo-next: our best practices 101 project

A to-do list app is a great way to explore single-page application (SPA) best practices. By building a to-do list app with Next and React, you can learn how to manage application state, handle user interactions, and create dynamic interfaces. Hopefully an emphasis on best practice will offer guidance on not only the features which make SPA applications but how to build them to be safe, secure, and behaving as expected.

1.**setting up the environment**

- This project assumes that [vs code](<[vs](https://code.visualstudio.com)>), [git](https://git-scm.com), and [node/npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) are already installed and that we'll be developing on mac hardware–though this is largely irrelevant.

verifiy node, git, npm:

```zsh
john@$ %: node -v
v18.7.0
john@$ %: npm -v
8.18.0
john@$ %: git --version
git version 2.32.1 (Apple Git-133)
```

2.**initialize our first next app**

```zsh
mkdir todo-next && cd todo-next
git init
npx create-next-app . --ts --eslint --src-dir
```

you can see the placeholder application if you run: `npm run dev`

for now let's pair it down to this:

```tsx
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code>
            <h2>todo-next</h2>
            <br />
            <strong>welecome</strong> to the to-do list app.
            <br />
            <br />
            with simple HMTL markup
            <br />
            we can be begin to present
            <br />
            data for the web.
          </code>
        </p>
        <Image
              className={styles.logo}
              src="/laptop.svg"
              alt="laptop"
              fill={true}
            />
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </main>
  );
}
```
