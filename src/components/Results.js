import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

import colors from '../Assets/Colors/Index'

export default function Results(props) {

    const { image, title, desc, unit,onPress } = props
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
            <Image source={image} style={styles.icon} resizeMode='contain' />
            <View style={{marginLeft:15}}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems:'center', marginTop:4 }}>
                    <Text style={styles.desc}>{desc}</Text>
                    <Text style={styles.descTwo}>{unit}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 79,
        width: '100%',
        borderRadius:4,
        borderWidth: 1,
        borderColor: colors.silver,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:24
    },
    icon: {
        height: 40,
        width: 40
    },
    title: {
        fontSize: 13,
        color: colors.slateGrey
    },
    desc: {
        fontSize: 18,
        color: colors.darkGrey,
        // marginTop:4
    },
    descTwo: {
        fontSize: 14,
        color: colors.darkGrey,
        marginLeft:4
    }
})