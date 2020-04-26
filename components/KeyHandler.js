import { Key } from '../components/Key'
import { useState, useEffect } from 'react';
import styles from './Key.module.css'

export function KeyHandler() {
  const [key, setKey] = useState('');
  const [location, setLocation] = useState();

  useEffect(() => {
      document.addEventListener('keydown', function(e) {
        e.preventDefault();
        setKey(e.key);
        setLocation(e.location);
      });
  });

  let keys = [];
  let numkeys = 15;
  for (let i = 0; i < numkeys; i++) {
      keys.push(
          <Key keyVal={key} location={location} className={styles.key_word}/>
      );
  }

  let rows = [];
  let numrows = 5;
  for (let i = 0; i < numrows; i++) {
      rows.push(
          <div className={styles.keyboard_row}>
              {keys}
          </div>
      );
  }

  return (
      <div className={styles.keyboard_container}>
        <div className={styles.keyboard}>
            {rows}
        </div>
      </div>
  );
}
