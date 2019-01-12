import React from "react";
import {inject, observer} from "mobx-react";
import MoviesScreen from "./screens/MoviesScreen";
import {View, Text, StyleSheet} from "react-native";

@inject("moviesPageStore")
@observer
class Movie extends React.Component {

    componentDidMount() {
        this.props.moviesPageStore.getMovies();
    }

    render() {
        const {
            moviesPageStore: {isLoading, movies}
        } = this.props;
        return (
            <View style={styles.container}>
                {isLoading ? (
                    <Text>...loading</Text>
                ) : (
                    movies.map(movie => <MoviesScreen key={movie.id} movie={movie}/>)
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: "#fff"
    }
});

export default Movie;
