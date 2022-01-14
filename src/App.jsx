import { createSignal } from 'solid-js';
import styles from './App.module.scss';
import One from '../componenets/one';
import Two from '../componenets/two';

function App() {
  const [count, setCount] = createSignal(0);

  function up() {
    setCount(count() + 1);
  }

  function down() {
    setCount(count() - 1);
  }

  return (
    <div>
      <One count={count} />
      <Two count={count} />
      <button onClick={up}>up</button>
      <button onClick={down}>down</button>
    </div>
  );
}

export default App;
