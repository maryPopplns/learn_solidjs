import { createSignal, createEffect } from 'solid-js';

export default function Two(props) {
  const [count, setCount] = createSignal(props.count * 2);

  // function incoming () {
  //   console.log()
  // }

  // createEffect(incomint, pros.count));
  return <div>{count}</div>;
}
