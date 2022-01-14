## first solidjs project

### learned

#### reactivity

##### signals

- Signals are the simplest primitive. They contain value, and get and set functions so we can intercept when they are read and written to.
- const [count, setCount] = createSignal(0);

##### effects

- Effects are functions that wrap reads of our signal and re-execute whenever a dependent Signal's value changes. This is useful for creating side effects, like rendering.
- createEffect(() => console.log("The latest count is", count()));

##### memos

- Finally, Memos are cached derived values. They share the properties of both Signals and Effects. They track their own dependent Signals, re-executing only when those change, and are trackable Signals themselves.
- const fullName = createMemo(() => `${firstName()} ${lastName()}`);
