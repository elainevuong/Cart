import Header from "./header/Header";
import ProductListing from "./main/ProductListing";
import AddForm from "./main/AddForm";

const App = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <ProductListing />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
