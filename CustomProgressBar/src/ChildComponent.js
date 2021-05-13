import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, Animated } from 'react-native';
const Progress = ({ step, steps, height,barWidth }) => {
    const [width, setWidth] = useState(0)
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const reactive = useRef(new Animated.Value(-1000)).current
    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true
        }).start()
    }, [])

    useEffect(() => {
        reactive.setValue(-width + (width * step) / steps)
    }, [step, width])

    return (
        <>
            <Text style={styles.textStyle}>
                {step}/{steps}
            </Text>
            <View
                onLayout={e => {
                    const newWidth = e.nativeEvent.layout.width
                    setWidth(newWidth)
                }}
                style={[
                    {
                        height,
                        borderRadius: height,
                        width:barWidth
                    },
                    styles.progressBackView
                ]}>
                <Animated.View 
                style={[
                    {
                        height,
                        borderRadius: height,
                        width:barWidth,
                        backgroundColor:'rgba(0,43,66,0.8)',
                        position: 'absolute',
                        transform:[{
                            translateX:animatedValue
                        }],
                        left:0,
                        top:0

                    },
                    styles.progressBackView
                ]} />
            </View>
        </>
    )

}


const styles = StyleSheet.create({
    progressBackView: {
        backgroundColor: 'rgba(0,43,66,0.3)',
        overflow:'hidden'
    },
    textStyle: {
        marginBottom: 10,
        fontFamily: 'Menlo',
        fontSize: 12,
        fontWeight: '900'
    }


})
export default Progress