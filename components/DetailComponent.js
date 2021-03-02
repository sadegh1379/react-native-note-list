import React from 'react'
import { Text , View , StyleSheet } from 'react-native';
import {Title} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';

const DetailComponent = (props)=>{
    const note = props.route.params.item;
    const {colors} = useTheme();
    return(
        <View style={styles.container}>
           
            <View style={styles.head}>
                <Title style={{color : colors.text}}>{note.title}</Title>
            </View>
            <View style={styles.body}>
                <Text style={{color : colors.text}}>{note.body}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    head:{
        width : '90%',
        textAlign : 'center',
        justifyContent :'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop : 30,
        borderBottomWidth:1,
        borderColor:'#333',
        padding : 10
    },
    body:{
        width : '90%',
        justifyContent :'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop : 50,

    }

})
export default DetailComponent;