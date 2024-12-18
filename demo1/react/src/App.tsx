import ListGroup from "./Components/ListGroup";

function App() {
  const items = ["Dhaka", "Mymensingh", "Chittagong", "Sylhet"]; 

  // Callback to handle selected item
  const handleSelectItem = (item: string) => {
    console.log("Selected city:", item);
  };

  return (
    <div>
      <h1>Cities</h1>
      <ListGroup items={items} heading="City List" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
