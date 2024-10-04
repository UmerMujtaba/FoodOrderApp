import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { hp } from '../constants/dimensions'
const StarComponenet = () => {

    const [starRating, setStarRating] = useState(null);
    return (
        <View style={styles.stars}>
            <TouchableOpacity onPress={() => setStarRating(1)}>
                <Icons
                    name={starRating >= 1 ? 'star' : 'star-border'}
                    size={32}
                    style={starRating >= 1 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(2)}>
                <Icons
                    name={starRating >= 2 ? 'star' : 'star-border'}
                    size={32}
                    style={starRating >= 2 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(3)}>
                <Icons
                    name={starRating >= 3 ? 'star' : 'star-border'}
                    size={32}
                    style={starRating >= 3 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(4)}>
                <Icons
                    name={starRating >= 4 ? 'star' : 'star-border'}
                    size={32}
                    style={starRating >= 4 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setStarRating(5)}>
                <Icons
                    name={starRating >= 5 ? 'star' : 'star-border'}
                    size={32}
                    style={starRating >= 5 ? styles.starSelected : styles.starUnselected}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    stars: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: hp(3),
        marginBottom: hp(5)

    },
    starUnselected: {
        color: '#aaa',
    },
    starSelected: {
        color: '#ffb300',
    },
})
export default StarComponenet