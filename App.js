
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

// Os componentes são classes que extends Component
export default class App extends Component {
  // Método obg render
  render() {
    return (
      // Retornando um JSX (Renderizar um html dentro do JS)
      <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Bla bla bla</Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Bla bla bla</Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Bla bla bla</Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Bla bla bla</Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Bla bla bla</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Bla bla bla</Text>
        </View>

      </ScrollView>
    );
  }
}

// Todos os componentes trabalhar com display:flex (do flexbox)
// Os styles são tratados como object do JS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 3
  },

  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  postDescription: {
    color:"#666"
  }
});
