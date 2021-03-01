import React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Caption } from "react-native-paper";
import { useSelector } from "react-redux";
import * as Animatable from 'react-native-animatable';


const HomeBody = (props) => {
  const redux_notes = useSelector((state) => state.addNote.notes);
  return (
    <Animatable.View animation="fadeInUpBig" style={styles.container}>
      <ScrollView>
        {redux_notes.map((note , index) => (
          <View key={index} style={styles.item}>
            <Pressable onPress={() => alert("title")}>
              <View style={{ overflow: "hidden" }}>
                <Text style={{ fontWeight: "bold" }}>{note.title}</Text>
                <Caption>{note.body}</Caption>
              </View>
            </Pressable>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Pressable
                style={{ marginRight: 20 }}
                onPress={() => alert("edit")}
                style={styles.press}
              >
                <Entypo name="edit" size={24} color="#f06292" />
              </Pressable>
              <Pressable onPress={() => alert("delete")} style={styles.press}>
                <AntDesign name="delete" size={24} color="#f06292" />
              </Pressable>
            </View>
          </View>
        ))}
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
    elevation: 10,
    width: "100%",
  },
  press: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default HomeBody;
