import React from 'react';
import {Text , View , StyleSheet} from 'react-native';
import HomeBody from '../components/HomeBody';
import HomeHeader from '../components/HomeHeader';



const HomeScreen = (props)=>{
    
    return(
        <View style={StyleSheet.container}>
            <HomeHeader title="NOTE LIST" {...props}/>
            <HomeBody {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1
    }
})

export default HomeScreen;