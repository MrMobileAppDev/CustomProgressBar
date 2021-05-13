import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView, Text, View ,StyleSheet} from 'react-native'
import ProgressBar from './src/ChildComponent'

const CustomBar = () => {
    const [index,setIndex] = useState(0)
    useEffect(()=>{
        const interval  = setInterval(() => {
            setIndex((index+1) % (10+1))
        }, 500);
        return  ()=>{
            clearInterval(interval)
        }
    })
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <ProgressBar step={index} steps={10} height={20} barWidth={'100%'}/>
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
        justifyContent:'center',
        padding:20
    }
})
export default CustomBar