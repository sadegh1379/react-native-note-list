import React,{useState} from 'react';
import {Pressable, Text , TextInput , View , StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {add_note} from '../redux/actions/Action';
import * as Animatable from 'react-native-animatable';
import { Caption } from 'react-native-paper';


const AddForm  = (props)=>{
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [titleErr , setTitleErr] = useState('');
    const [bodyErr , setBodyErr] = useState('');
    const Dispatch = useDispatch();

    const handleTitleChange = (text)=>{
        setTitle(text);
    }
    const handleBodyChange = (text)=>{
        setBody(text);
    }

    const handle_add_note = ()=>{
        if(title == ''){
            setTitleErr('please enter title');
        }else if(body == ''){
            setBodyErr('please enter body');
        }else{
            const newNote = {
                title : title,
                body : body
            }
            Dispatch(add_note(newNote));
            setTitle('');
            setBody('');
            props.navigation.navigate('Home')
        }
    }
    return(
        <Animatable.View animation="fadeInUpBig" style={styles.container}>
            <View style={{width:'100%'}}>
                <TextInput maxLength={22} value={title}  onChangeText={(text)=>handleTitleChange(text)} style={styles.myInput}  keyboardType="default" placeholder="Title..."/>
                {
                    titleErr && ( <View><Text style={{fontSize:12 , color:'red' , opacity:0.6}}>{titleErr}</Text></View>)
                }
               
            </View>
            <View style={{width:'100%' , marginTop : 20}}>
                <TextInput  value={body} onChangeText={(text)=>handleBodyChange(text)} style={styles.myInput} multiline numberOfLines="5"  placeholder="Note..."/>
                {
                    bodyErr && (  <View><Text style={{fontSize:12 , color:'red' , opacity:0.6}}>{bodyErr}</Text></View>)
                }
            </View>
            <View style={{width:'100%' , marginTop : 22}}>
                <Pressable style={styles.addButton}
                    onPress={handle_add_note}
                >
                    <View>
                        <Text style={{fontWeight : 'bold'}}>ADD</Text>
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
        borderColor : 'grey',
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