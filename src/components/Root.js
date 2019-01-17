import React from "react";
import { Provider } from "mobx-react";
import { moviesPageStore } from "../stores/moviesPageStore";
import MoviesScreen from "./screens/MoviesScreen/MoviesScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { Router, Stack, Scene } from "react-native-router-flux";

class Root extends React.Component {
    render() {
        return (
            <Provider moviesPageStore={moviesPageStore}>
                <Router>
                    <Stack key="root">
                        <Scene key="login" component={LoginScreen} title="Login" />
                        <Scene key="movies" component={MoviesScreen} title="Movies" />
                    </Stack>
                </Router>
            </Provider>
        );
    }
}

export default Root;
