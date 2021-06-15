import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Items from "./pages/Items/Items";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/items">
          <Items />
        </Route>
        <Route path="/items/:id">
          <ItemDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
