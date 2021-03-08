import React ,{useEffect} from 'react';
import {Text , View , StyleSheet} from 'react-native';
import HomeBody from '../components/HomeBody';
import HomeHeader from '../components/HomeHeader';
import {get_store } from '../redux/actions/Action';
import {useDispatch} from 'react-redux';



const HomeScreen = (props)=>{
  const Dispatch = useDispatch();

    useEffect(() => {
        Dispatch(get_store());
    }, [])
    return(
        <View style={styles.container}>
            <HomeHeader title="NOTE LIST" {...props}/>
            <HomeBody {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex :1,
    }
})

export default HomeScreen;