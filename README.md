# todo-next: understanding test-driven-developlment with react best practices

## todo-next: our best practices 101 project

a to-do list app is a great way to explore single-page application (SPA) best practices. by building a to-do list app with Next and React, you can learn how to manage application state, handle user interactions, and create dynamic interfaces. hopefully an emphasis on best practice will offer guidance on not only the features which make SPA applications but how to build them to be safe, secure, and behaving as expected.

# Table of Contents

- [setting up the environment](#environment)
- [our first next app](#our-first-next-app)
- [enforcing code style on commit with husky](#static-analysis)
- [unit testing](#section-4)
- [github workflows for deployment](#section-5)

  1.**setting up the environment**
  <a name="environment"></a>

  software prequisites:

  - [vs code](<[vs](https://code.visualstudio.com)>),
  - [git](https://git-scm.com),
  - [node/npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) are already installed and that we'll be developing on mac hardware–though this is largely irrelevant.

verifiy node, git, npm:

```zsh
john@$ %: node -v
v18.7.0
john@$ %: npm -v
8.18.0
john@$ %: git --version
git version 2.32.1 (Apple Git-133)
```

**important note:** node is an extremely popular js runtime that is used create backend applications of all sizes, with its package manager node hosts one of the richest ecosystems for developers to jump-in and begin coding. (The sever-side magic of next is powered by node "under the hood")

2.**initialize our first next app**
<a name="our-first-next-app"></a>

```bash
mkdir todo-next && cd todo-next
git init
npx create-next-app . --example --ts --eslint --src-dir
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

**important note:** in the source code the next placeholder image is replaced with [this laptop guy](https://github.com/john-gangi-dialexa/todo-next/blob/master/public/laptop.svg). that src path is rather laconic you say, static files can easily be served this by adding them to the /public directory of our next application!

3.**enforcing code style**
<a name="static-analysis"></a>

we added eslint for basic "static code analysis" when we initiated the project.

you can check that it is working now by running:

`npx eslint --ext .tsx --ext .ts src/**`

We want to automate all this ASAP so we use a tool called `husky` which enables us to run all our tests on commit (or at other hooks).

the process to install husky looks something like this:

```
Install
npm install husky --save-dev
Usage
Edit package.json > prepare script and run it once:
```

```
npm pkg set scripts.prepare="husky install"
npm run prepare
Add a hook:
```

```
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
Make a commit:
```

don't forget to add this line to your package.json
`   "test": "npx eslint --ext .tsx --ext .ts src/**"`

Add a bug for a quick sanity check (a `;` halfway through a method name or w.e.).

And now when you try to make the following commit, you'll see an error.

```
git commit -m "tests(v0): adds first husky hook"
# `npm test` will run
```

4.**Jest**

configure jest... then write our first test

```tsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoList } from '../../src/app/components/TodoList';
import { debug } from 'console';

describe('TodoTests', () => {
  it('renders without error', () => {
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
  it('renders a list of goals', () => {
    const goals = [
      { value: 'goal 1', id: 1 },
      { value: 'goal 2', id: 2 },
    ];
    const { getByText } = render(<TodoList goals={goals} />);
    goals.forEach((goal) => {
      const goalItem = getByText(goal.value);
      expect(goalItem).toBeInTheDocument();
    });
  });
});
```
