import React from 'react';
import {Text , View} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import EditForm from '../components/EditForm';


const EditScreen = (props)=>{
    return(
        <View style={{flex:1 }}>
            <HomeHeader {...props} title="EDIT NOTE"/>
            <EditForm {...props}/>
        </View>
    )
}

export default EditScreen;