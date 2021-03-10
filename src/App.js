import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/header';
import Verbs from './verbs';
import Category from './Category';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App" >
      <Header/>
      <Switch>
        <Route path="/" exact component={Category} />
        <Route path="/verbs/:category/:tense/:ending" component={Verbs} />
      </Switch>
     

    </div>
    </Router>
  );
}

export default App;
