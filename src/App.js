import Layout from './components/Layout';
import TodoPage from './pages/TodoPage';
import FollowersPage from './pages/FollowersPage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route exact path='/' component={TodoPage} />
          <Route exact path='/followers' component={FollowersPage} />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
