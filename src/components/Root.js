import React from 'react';
import { Provider } from 'mobx-react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { moviesPageStore } from '../stores/moviesPageStore';
import { userStore } from '../stores/userStore';
import { loginStore } from '../stores/loginStore';
import MoviesScreen from './screens/MoviesScreen/MoviesScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import FiltersScreen from './screens/FiltersScreen/FiltersScreen';

class Root extends React.Component {
  render() {
    return (
        <Provider
            moviesPageStore={moviesPageStore}
            loginFormStore={loginFormStore}
            userStore={userStore}
        >
          <Router>
            <Stack key="root">
              <Scene key="login" component={LoginScreen} title="Login" initial />
              <Scene
                  key="movies"
                  component={MoviesScreen}
                  title="Movies"
                  gesturesEnabled={false}
                  hideNavBar={true}
              />
            </Stack>
          </Router>
        </Provider>
    );
  }
}

export default Root;
