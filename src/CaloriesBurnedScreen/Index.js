import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image,ActivityIndicator } from 'react-native'
import React ,{useEffect,useState}from 'react'

// ----------------------
import Header from '../components/Header'
import styles from './Styles'
import colors from '../Assets/Colors/Index'
import Icons from '../Assets/Icons/Index'
import Results from '../components/Results'
import {getHealthKit} from '../Utils/healthfunction'



const CaloriesBurned = () => {

    const stats = [
        {
            id: '1',
            stat: '4k'
        },
        {
            id: '2',
            stat: '3k'
        },
        {
            id: '3',
            stat: '2k'
        },
        {
            id: '4',
            stat: '3k'
        },
        {
            id: '5',
            stat: '0'
        },
    ]
    const days = [
        {
            id: '1',
            day: 'Sun'
        },
        {
            id: '2',
            day: 'Mon'
        },
        {
            id: '3',
            day: 'Tue'
        },
        {
            id: '4',
            day: 'Wed'
        },
        {
            id: '5',
            day: 'Thu'
        },
        {
            id: '6',
            day: 'Fri'
        },
        {
            id: '7',
            day: 'Sat'
        },
    ]

    const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        getHealthKit()
    },[])

    const hitAPi = async () =>{
        setIsLoading(true)
        try {
            const response = await fetch('https://postman-echo.com/get?test=123',{
                method:'GET'
            })
            setIsLoading(false)
            console.log('Api response=>',JSON.stringify(response.status))
           alert('Api Response Status: '+JSON.stringify(response.status))
        } catch (error) {
            setIsLoading(false)
            console.log('Api Error=> ',error)
        }
    }

   
    return (
        
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar backgroundColor={colors.azure} />
            <Header />

            <View style={styles.innerContainer}>
                <View style={styles.timeContainer}>
                    <View style={styles.left}>
                        <Image source={Icons.previous} style={styles.moveIcons} resizeMode='contain' />
                    </View>
                    <View style={styles.mid}>
                        <Text style={styles.timeTitle}>{'Last Week'}</Text>
                        <Image source={Icons.down} style={[styles.moveIcons, { marginLeft: 10 }]} resizeMode='contain' />
                    </View>
                    <View style={styles.right}>
                        <Image source={Icons.next} style={styles.moveIcons} resizeMode='contain' />
                    </View>
                </View>

                <View style={styles.statsContainer}>

                    {
                        stats.map((item) => {
                            return (
                                <View id={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Text style={styles.statNumber} >{item.stat}</Text>
                                    <View style={styles.horizontalLine}>

                                    </View>
                                </View>
                            )
                        })
                    }

                    <View style={{
                        flexDirection: 'row',
                        width: '85%',
                        marginLeft: '10%',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        position: 'absolute',
                        bottom: 100,
                        zIndex: 999,
                    }}>
                        {
                            days.map((item, index) => {
                                return (
                                    <View style={[styles.dayStat,
                                    ]}>

                                    </View>
                                )
                            })
                        }
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        width: '85%',
                        marginLeft: '10%',
                        justifyContent: 'space-between',
                        position: 'absolute',
                        bottom: 70,
                        zIndex: 999,
                    }}>
                        {
                            days.map((item) => {
                                return (

                                    <Text style={styles.day}>{item.day}</Text>
                                )
                            })
                        }
                    </View>
                    <View style={[styles.horizontalLine, { width: '100%', marginTop: 25 }]}></View>
                </View>

                <Results
                    image={Icons.inActive}
                    title={'In-Active Calories Burned'}
                    desc={'1793'}
                    unit={'BPM'}
                    onPress={()=>hitAPi()}
                />

                <Results
                    image={Icons.workout}
                    title={'Workout Calories Burned'}
                    desc={'587'}
                    onPress={()=>hitAPi()}
                />
            </View>
            { isLoading && <ActivityIndicator size="large" color="#00ff00" />}
        </SafeAreaView>
        
          
    )
}
export default CaloriesBurned;