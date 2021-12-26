import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../database/firebase';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payments from './Payments';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

function App() {
  const [{ }, dispatch] = useStateValue();

  const promise = loadStripe('pk_test_51JucDFSJVsm3XF4N2qn64xePxFmQ6rEd59RSYo0oJYPrvvq7GALrABRUDlhkXMvEPEUXpNezOpNCICe3E3mFqLzz00ODJpX7v4')

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <div>
      <Router>
        <Switch>
          <Route
            path='/' exact>
            <Header />
            <Home />
          </Route>
          <Route
            path='/checkout' exact>
            <Header />
            <Checkout />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route
            path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payments />
            </Elements>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;