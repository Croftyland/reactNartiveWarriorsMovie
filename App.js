import React from "react";
import { Provider} from "mobx-react";
import Movie from "./src/components/Movie";
import {moviesPageStore} from "./src/stores/moviesPageStore";


class App extends React.Component {
    render() {
        return (
            <Provider moviesPageStore={moviesPageStore}>
                <Movie />
            </Provider>
        );
    }
}

export default App;