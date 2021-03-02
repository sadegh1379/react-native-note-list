import React from 'react';
import {Text , View} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SettingComponent from '../components/SettingComponent';


const SettingScreen = (props)=>{
    return(
        <View style={{flex:1 }}>
            <HomeHeader {...props} title="SETTING"/>
            <SettingComponent {...props}/>
        </View>
    )
}

export default SettingScreen;