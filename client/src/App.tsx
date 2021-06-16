import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Items from "./pages/Items/Items";
import style from "./App.module.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <main className={style.root}>
        <Switch>
          <Route exact path="/items">
            <Items />
          </Route>
          <Route exact path="/items/:id">
            <ItemDetail />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
