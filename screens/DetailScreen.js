import React from 'react';
import {Text , View} from 'react-native';
import DetailComponent from '../components/DetailComponent';
import HomeHeader from '../components/HomeHeader';

const DetailScreen = (props)=>{
    const note = props.route.params.item;
    
    return(
        <View>
           <HomeHeader {...props} title="NOTE" />
           <DetailComponent {...props}/>
        </View>
    )
}

export default DetailScreen;