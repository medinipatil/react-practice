import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Mumbai", "London", "China", "Japan"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
export default App;
