import React from 'react';
import {Text , View} from 'react-native';
import AddForm from '../components/AddForm';
import HomeHeader from '../components/HomeHeader';


const AddTodoScreen = (props)=>{
    return(
        <View style={{flex:1 }}>
            <HomeHeader {...props} title="ADD NOTE"/>
            <AddForm {...props}/>
        </View>
    )
}

export default AddTodoScreen;