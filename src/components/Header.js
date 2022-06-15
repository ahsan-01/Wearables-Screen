import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../Assets/Colors/Index'
import Icons from '../Assets/Icons/Index'

const Header = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{'Calories Burned'}</Text>
            <Image source={Icons.leftArrow} style={styles.leftIcon} resizeMode='contain' />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 64,
        backgroundColor: colors.azure,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.41,
        color: 'white'
    },
    leftIcon: {
        width: 22,
        height: 22,
        tintColor: 'white',
        position: 'absolute',
        left: 16
    }

})