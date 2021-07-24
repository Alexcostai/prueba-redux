import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home() {

  const navigation = useNavigation();
  const currentSubjects = useSelector((state) => state.current);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You have {currentSubjects.length} subjects.</Text>
      <Button
        title="Select more subjects"
        onPress={() => navigation.navigate('Subjects')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 16,
    alignSelf: "center",
    margin: 20
  }
})