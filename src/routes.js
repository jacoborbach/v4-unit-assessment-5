import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth'
import Dash from './Components/Dash/Dash'
import Form from './Components/Form/Form'
import Post from './Components/Post/Post'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/info' component={Info} />
        <NotFound />
    </Switch>
)

export default Routes;

const Routes = () => {
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/dash" component={Dash} />
        <Route path="/post/:id" component={Post} />
        <Route path="/form" component={Form} />
    </Switch>
}