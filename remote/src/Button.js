
const {store, increment } = await import("host/Store");

export default function Button({count, onIncrement}){
  // const count = store.getState().counter.value;
  //  const dispatch = store.dispatch

  return (
    <div>
      <button onClick={onIncrement}>
        increment from remote
      </button>
      <p>Current count (from remote) : {count}</p>
    </div>
  )



}