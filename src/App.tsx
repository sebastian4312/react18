import ListGroup from "./components/ListGroup";
function App() {
  return (
    <div>
      <ListGroup
        heading="Cities"
        items={["Tokio", "San Francisco", "New York", "Berlin"]}
      />
    </div>
  );
}

export default App;
