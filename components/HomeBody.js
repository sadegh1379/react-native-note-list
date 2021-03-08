import React ,{useState , useEffect} from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Caption , Title } from "react-native-paper";
import { useSelector } from "react-redux";
import * as Animatable from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import {delete_note } from '../redux/actions/Action';
import {useTheme}  from '@react-navigation/native';


const HomeBody = (props) => {
  const redux_notes = useSelector((state) => state.addNote.notes);
  const [change , setChange] = useState(false);
  const Dispatch = useDispatch();
  const {colors} = useTheme();

  const handle_delete_note = (id)=>{
    Dispatch(delete_note(id));
    setChange(!change);
    
  }
  

  return (
    <Animatable.View animation="fadeInUpBig" style={styles.container}>
      <ScrollView>
        { redux_notes.length > 0 ?  redux_notes.map((note , index) => (
          <View key={index} style={styles.item}>
            <Pressable onPress={() => props.navigation.navigate('Detail' , {item : note})}>
              <View style={{ overflow: "hidden" }}>
                <Text style={{ fontWeight: "bold" }}>{note.title}</Text>
                <Caption >{note.body.slice(0 , 10)}...</Caption>
              </View>
            </Pressable>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Pressable
                style={{ marginRight: 20 }}
                onPress={() => props.navigation.navigate('Edit', {item : note})}
                style={styles.press}
              >
                <Entypo name="edit" size={24} color="#f06292" />
              </Pressable>
              <Pressable onPress={() => handle_delete_note(note.id)} style={styles.press}>
                <AntDesign name="delete" size={24} color="#f06292" />
              </Pressable>
            </View>
          </View>
        )) : (
          <View style={styles.noNote}>
              <AntDesign name="frowno" size={100} color={colors.text} />
              <Title style={{marginTop : 10 , color:colors.text}}>No Note Yet...</Title>
          </View>
        )}
      </ScrollView>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    alignSelf: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f06292",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
  },
  press: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  noNote:{
    // flex  : 1,
    justifyContent :'center',
    alignItems :'center',
    width : '100%',
    alignSelf:'center',
    padding : 10,
    marginTop : 100,
  }
});

export default HomeBody;
