import React from 'react';
import {Text , View} from 'react-native';
import AddForm from '../components/AddForm';
import HomeHeader from '../components/HomeHeader';


const AddTodoScreen = (props)=>{
    return(
        <View style={{flex:1 }}>
            <HomeHeader title="ADD NOTE"/>
            <AddForm/>
        </View>
    )
}

export default AddTodoScreen;