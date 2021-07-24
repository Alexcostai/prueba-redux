import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, Button, StyleSheet, TextInput } from 'react-native';

import { addSubject, createSubject } from '../SubjectsActions';

export default function Subjects() {

  const navigation = useNavigation();
  const [subject, setSubject] = useState('');
  const dispatch = useDispatch();
  const allSubjects = useSelector((state) => state.all_subjects);

  function create() {
    if (subject.length < 3) {
      alert('The subject need to have almost 3 caracters!');
      return;
    } else {
      dispatch(createSubject(subject));
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Select Subjects Below!</Text>
      {
        allSubjects.map((subject, index) => (
          <Button
            key={subject}
            title={`Add ${subject}`}
            onPress={() => dispatch(addSubject(index))}
          />
        ))
      }
      <Button
        title="Back to home"
        onPress={() => navigation.navigate('Home')}
        color="gray"
      />
      <Text style={styles.title}>Create your own Subjects!</Text>
      <TextInput
        placeholder="Subject Name..."
        maxLength={30}
        onChangeText={(text) => setSubject(text)}
        value={subject}
        style={styles.input}
        placeholderTextColor="gray"
      />
      <Button
        title="Create"
        onPress={create}
        color="green"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 16,
    alignSelf: "center",
    margin: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    marginHorizontal: 20,
    padding: 10,
    marginBottom: 20,
    color: "black"
  }
})