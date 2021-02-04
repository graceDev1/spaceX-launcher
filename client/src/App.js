import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import logo1 from './logo1.png'
import Launches from './components/Launches';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className="App">
      <img 
      src={logo1}
      alt="spacex"
      style={{
        width:300,
        display:'block',
        margin:'auto'
      }}
      />
      <Route exact path='/' component={Launches}/>
      <Route exact path='/launch/:flight_number' component={Launch}/>

    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
