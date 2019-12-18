import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import { TouchableOpacity } from 'react-native-gesture-handler'


class FilmItem extends React.Component {

    _displayFavoriteImage() {
        if (this.props.isFilmFavorite) {
            return (
                <Image
                style={styles.favorite_image}
                source={require('../images/ic_favorite.png')}
                />
            )
        }
    }

    render() {
        const { films, displayDetailForFilm } = this.props
        return (
            <TouchableOpacity 
                style={styles.main_container}
                onPress={() => displayDetailForFilm(films.id)}>
                <Image
                    style={styles.image}
                    source={{ uri: getImageFromApi(films.poster_path) }}
                />
                <View
                    style={styles.content_container}>
                    <View
                        style={styles.header_container}>
                            {this._displayFavoriteImage()}
                        <Text
                            style={styles.title_text}>{films.title}</Text>
                        <Text
                            style={styles.vote_text}>{films.vote_average}</Text>
                    </View>
                    <View
                        style={styles.description_container}>
                        <Text
                            style={styles.description_text}
                            numberOfLines={6}>{films.overview}</Text>
                    </View>
                    <View
                        style={styles.date_container}>
                        <Text
                            style={styles.date_text}>{films.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    favorite_image: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default FilmItem