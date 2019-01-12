import React from "react";
import {StyleSheet, Text, View, Button, Picker, Card, Image, FlatList} from "react-native";
import {inject, observer} from "mobx-react";
import {toJS} from "mobx";

// @inject(({ moviesPageStore }) => ({
//   moviesPageStore
// }))
@inject("moviesPageStore")

@observer
class MoviesScreen extends React.Component {
    static defaultProps = {
        optionsSortBy: [
            {
                label: "Популярные по убыванию",
                value: "popularity.desc"
            },
            {
                label: "Популярные по возростанию",
                value: "popularity.asc"
            },
            {
                label: "Рейтинг по убыванию",
                value: "vote_average.desc"
            },
            {
                label: "Рейтинг по возростанию",
                value: "vote_average.asc"
            }
        ]
    };


    render() {
        // const {
        //     moviesPageStore: {movies, filters, onChangeFilters},
        //     optionsSortBy
        // } = this.props;
        const { movie } = this.props;
        return (
            <View style={styles.card}>

                    <Image
                        style={{width: 100, height: 100,}}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                            movie.poster_path}`
                        }}
                    />
                    <Text>{movie.title}</Text>
                    <Text>Рейтинг:{movie.vote_average}</Text>

            </View>
        )
    }
}


//
// })
{/*
        <Picker
          selectedValue={filters.sort_by}
          style={{ height: 10, width: 100 }}
          onValueChange={(itemValue, itemindex) => {
            onChangeFilters({
              target: {
                name: "sort_by",
                value: itemValue
              }
            });
          }}
          mode="dropdown"
        >
          {optionsSortBy.map(option => (
            <Picker.Item label={option.label} value={option.value} />
          ))}
        </Picker>
        */
}


const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        width: 120,
        height:120,
        top: (10 * 0.3) / 2,
        overflow: 'hidden',
        backgroundColor: 'white',
        margin: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
    }
});

export default MoviesScreen;
