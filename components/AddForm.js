import React,{useState} from 'react';
import {Pressable, Text , TextInput , View , StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {add_note} from '../redux/actions/Action';
import * as Animatable from 'react-native-animatable';


const AddForm  = (props)=>{
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const Dispatch = useDispatch();

    const handleTitleChange = (text)=>{
        setTitle(text);
    }
    const handleBodyChange = (text)=>{
        setBody(text);
    }

    const handle_add_note = ()=>{
        const newNote = {
            title : title,
            body : body
        }
        Dispatch(add_note(newNote));
    }
    return(
        <Animatable.View animation="fadeInUpBig" style={styles.container}>
            <View style={{width:'100%'}}>
                <TextInput  onChangeText={(text)=>handleTitleChange(text)} style={styles.myInput}  keyboardType="default" placeholder="Title..."/>
            </View>
            <View style={{width:'100%' , marginTop : 20}}>
                <TextInput onChangeText={(text)=>handleBodyChange(text)} style={styles.myInput} multiline numberOfLines="5"  placeholder="Note..."/>
            </View>
            <View style={{width:'100%' , marginTop : 22}}>
                <Pressable style={styles.addButton}
                    onPress={handle_add_note}
                >
                    <View>
                        <Text>ADD</Text>
                    </View>
                </Pressable>
            </View>
        </Animatable.View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        width  : '90%',
        justifyContent : 'center',
        alignItems:'center',
        alignSelf:'center'
    },
    myInput:{
        borderWidth : 1,
        width:'100%',
        padding:10,
        borderRadius : 10,
        backgroundColor : '#fce4ec'
    },
    addButton : {
        alignItems:'center',
        padding :10,
        backgroundColor :'#e91e63',
        elevation : 10,
        borderRadius: 10,

    }
})

export default AddForm;