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
