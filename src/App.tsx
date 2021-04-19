import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import ListNotes from './components/ListNotes';
import CreateNote from './components/CreateNote';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ListNotes />
        </Route>
        <Route path="/new" exact>
          <CreateNote />
        </Route>
        <Route path="/edit/:id" exact>
          <CreateNote />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
