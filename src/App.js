import { Route, Switch, Redirect } from 'react-router-dom';

// import AllQuotes from './pages/AllQuotes';
// import QuotesDetail from './pages/QuoteDetail';
// import NewQuote from './pages/NewQuote';
// import NotFound from './pages/NotFound';

// lazy loading
import Layout from './components/layout/Layout'; 
import React, { Suspense } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuotesDetail = React.lazy(() => import('./pages/QuoteDetail'))
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centered'>
            <LoadingSpinner />
          </div>
        }>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuotesDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
