import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { inject, observer } from "mobx-react";
import MovieItem from "./MovieItem";
import { Filters } from "./Filters";

@inject("moviesPageStore","userStore")
@observer
class MoviesScreen extends React.Component {

    render() {
        const {
            moviesPageStore: { isLoading, movies },
            userStore: {
                toggleLoginButton,
            },
        } = this.props;
        return (
            <View style={styles.container}>
                <Filters />
                <Button
                    onPress={toggleLoginButton}
                    title="Login"
                    color="red"
                />
                {isLoading ? (
                    <Text>...loading</Text>
                ) : (
                    <FlatList
                        data={movies}
                        renderItem={({ item }) => <MovieItem item={item} />}
                        keyExtractor={item => String(item.id)}
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    }
});

export default MoviesScreen;