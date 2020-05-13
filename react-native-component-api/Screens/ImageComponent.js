//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component

//Display different kind of images (network images, local images, camera roll)

//NOTE: Note that for network and data images, you will need to manually specify the dimensions of your image!

//PROPS
//style -for styling
//source

const ImageComponent = () => {

    const loaded = (props) => {
        console.log('props', props)
    }
    return (
        <View style={styles.container}>
            {/* Local Image */}
            {/* <Image source={require('../assets/img1.jpg')}
                style={{ height: 400, marginTop: 90 }} /> */}

            <Image source={{ uri: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg' }}

                style={{ height: 300 }}

                blurRadius={8}
                accessibilityLabel='Image for the president'

                onLoad={loaded}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#2c3e50',
    // },
});

//make this component available to the app
export default ImageComponent;
