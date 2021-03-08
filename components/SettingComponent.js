import React , {useState} from 'react'
import { Text , View , StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';


const SettingComponent = (props)=>{
    const {colors} = useTheme();
    const [dark , setDark] = useState(false);

    const onToggleSwitch = ()=>{
        setDark(!dark);
        props.themeToggle();
    }
    return(
        <Animatable.View animation="fadeInUpBig" style={styles.container}>
            <View style={styles.item}>
                <View>
                 <Switch style={{height : 25}} value={props.theme} color="#e91e63" onValueChange={onToggleSwitch} />
                </View>
                <View style={{flexDirection:'row'}}>
                     <Text style={[styles.text ,{color : colors.text}]}>Dark Mode</Text>
                     <MaterialCommunityIcons name="theme-light-dark" size={24} color={colors.text} />
                </View>
            </View>
           
            
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        marginTop : 20,
    },
    text : {
        
        fontWeight:'bold',
        fontSize:18,
        marginRight : 10
    },
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding : 20,
        borderWidth:0.5,
        borderColor : '#ad1457',
        borderRadius : 10,
        margin : 5,
        

    }
})

export default SettingComponent;