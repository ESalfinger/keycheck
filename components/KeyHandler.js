import {Key} from '../components/Key'
import { useState, useEffect } from 'react';

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

  return (
    <Key keyVal={key} location={location}/>
  );
}
