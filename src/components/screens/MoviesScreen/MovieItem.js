import React from "react";
import {StyleSheet, Text, View, Image, Animated, PanResponder} from "react-native";

class MovieItem extends React.Component {

    componentWillMount() {
        this.pan = new Animated.ValueXY()

        this.cardPanResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                {dx: this.pan.x, dy: this.pan.y},
            ]),
            onPanResponderRelease: (e, {dx}) => {
                const absDx = Math.abs(dx)
                const direction = absDx / dx

                if (absDx > 120) {
                    Animated.decay(this.pan, {
                        velocity: {x: 3 * direction, y: 0},
                        deceleration: 0.995,
                    }).start()
                } else {
                    Animated.spring(this.pan, {
                        toValue: {x: 0, y: 0},
                        friction: 4.5,
                    }).start()
                }
            },
        })
    }

    render() {
        const {item} = this.props;

        const rotateCard = this.pan.x.interpolate({
            inputRange: [-200, 0, 200],
            outputRange: ['10deg', '0deg', '-10deg'],
        })
        const animatedStyle = {
            transform: [
                {translateX: this.pan.x},
                {translateY: this.pan.y},
                {rotate: rotateCard},
            ],
        }

        return (
            <Animated.View
                {...this.cardPanResponder.panHandlers}
                style={[styles.container, animatedStyle]}>
                <Image
                    style={styles.image}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path ||
                        item.poster_path}`
                    }}
                />
                <Text style={styles.title}>{item.title}</Text>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        marginBottom: 20,
        padding: 20,
        flex: 1,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8,
    },
    image: {
        width: 300,
        height: 400,
        alignSelf: "stretch"
    },
    title: {
        marginTop: 15
    }
});

export default MovieItem;
