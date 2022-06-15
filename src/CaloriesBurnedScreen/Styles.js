import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../Assets/Colors/Index'

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    innerContainer: {
        paddingHorizontal: 20
    },
    timeContainer: {
        height: 44,
        width: '100%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.silver,
        marginTop: 24,
        flexDirection: 'row'
    },
    left: {
        width: '12%',
        height: '100%',
        borderRightWidth: 1,
        borderRightColor: colors.silver,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mid: {
        width: '76%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        width: '12%',
        height: '100%',
        borderLeftWidth: 1,
        borderLeftColor: colors.silver,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moveIcons: {
        height: 12,
        width: 12
    },
    timeTitle: {
        fontSize: 14,
        fontWeight:'700',
        color: colors.charcoalGrey,
        letterSpacing: -0.8

    },
    statsContainer:{
        height:350,
        // backgroundColor:'pink',
        marginTop:100
    },
    statNumber:{
        fontSize:12,
        color:colors.slateGrey,
        height:60,
    },
    horizontalLine:{
        width:'95%',
        height:0.8,
        marginTop:6,
        backgroundColor:colors.paleGrey
    },
    dayStat:{
        height:169,
        width:18,
        borderRadius:50,
        backgroundColor: colors.orangish
    },
    day:{
        fontSize:13,
        color:colors.slateGrey,
    }

})

export default styles;