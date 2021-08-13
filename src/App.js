import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">

        <h1><img src={`${process.env.PUBLIC_URL}/favicon.ico`} />To Do リスト</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
