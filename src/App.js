const list = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

function App() {
  const listItems = list.map((item) => <li>{item}</li>);
  return (
    <div className="py-10 flex flex-col items-center justify-center">
      <ul className="list-disc">{listItems}</ul>
    </div>
  );
}

export default App;
