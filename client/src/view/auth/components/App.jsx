import { Route, Switch, Redirect } from 'react-router-dom' // eslint-disable-line
import MainMenu from './MainMenu' // eslint-disable-line
import UserMenu from './auth/UserMenu' // eslint-disable-line
import HomePage from './HomePage' // eslint-disable-line
import AdminPage from './AdminPage' // eslint-disable-line
import PublicPage from './PublicPage' // eslint-disable-line
import Profile from './Profile' // eslint-disable-line
import Signin from './auth/Signin' // eslint-disable-line
import Signup from './auth/Signup' // eslint-disable-line
import Page404 from './Page404' // eslint-disable-line

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {userName: ''}
    this.changeUser = this.changeUser.bind(this)
  }

  componentDidMount () {
    fetch('/api/auth/check', {
      method: 'get',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        if (DEV) console.log(res)
        this.changeUser(res.arg.username)
      })
      .catch(err => console.log(err))
  }

  changeUser (userName) {
    this.setState({userName: userName})
  }

  render () {
    let userName = this.state.userName
    return (
      <div className="wrapper">
        <div className="main-header">
          <h1>Site name</h1>
        </div>
        <MainMenu />
        <UserMenu changeUser={this.changeUser} userName={userName} />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/admin" component={AdminPage} />

            <Route path="/profile" component={Profile} />

            <Route path="/public-page" component={PublicPage} />

            <Route path="/signin" render={() => (
              !userName ? (
                <Signin channgeUser={this.changeUser} />
              ) : (
                <Redirect to="/"/>
              )
            )} />

            <Route path="/signup" render={() => (
              !userName ? (
                <Signup channgeUser={this.changeUser} />
              ) : (
                <Redirect to="/"/>
              )
            )} />

            <Route component={Page404}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
