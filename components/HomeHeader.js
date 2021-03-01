import React from 'react';
import {Text , View , StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';


const HomeHeader = (props)=>{
    const {colors} = useTheme();
    return(
        <View style={styles.container}>
            <View>
              <Ionicons name="menu" size={24} color={colors.text} />
            </View>
            <View>
                <Text style={{fontWeight : 'bold' , fontSize : 18 , color:colors.text}}>{props.title}</Text>
            </View>
            <View>
             <AntDesign name="user" size={24} color={colors.text} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
        padding : 10,
        
    }
})

export default HomeHeader;