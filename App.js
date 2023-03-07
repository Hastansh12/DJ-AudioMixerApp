import * as React from 'react';
import { View,Text,Button,StyleSheet} from 'react-native';
import {Audio} from 'expo-av';

export default class App extends React.Component {

lmly= async () => {
        await Audio.Sound.createAsync(
          { uri: 'https://www.pagalworld.com.se/files/download/id/6511' },
          { shouldPlay: true }
        );
  }
omw= async () => {
        await Audio.Sound.createAsync(
          { uri: 'https://www.pagalworld.com.se/files/download/id/5763' },
          { shouldPlay: true }
        );
  }

st= async () => {
        await Audio.Sound.createAsync(
          { uri: 'https://www.pagalworld.com.se/files/download/id/3947' },
          { shouldPlay: true }
        );
  }

sya = async () => {
        await Audio.Sound.createAsync(
          { uri: 'https://www.pagalworld.com.se/files/download/id/3265' },
          { shouldPlay: true }
        );
  }

ct = async () => {
        await Audio.Sound.createAsync(
          { uri: 'https://www.pagalworld.com.se/files/download/id/4250' },
          { shouldPlay: true }
        );
  }

  render(){
    return(
      <View>
      <View style={{backgroundColor : 'red'}}>
      <Text style = {{
          color : 'white',
          padding : 5,
          fontSize : 22,
          fontWeight : 'bold',
          textAlign : 'center'}}>
          DJ Audio Mixer App
     </Text>
     </View>

     <View>
        <Text style={{
          paddingLeft : 120 , 
          paddingTop : 30 , 
          fontWeight : 'bold', 
          fontSize : 30 ,
          fontfamily: 'Yusei Magic'}}>
          Songs:-
     </Text>
     </View>

     <View style ={{paddingTop : 40}}>
          <Button
          title='Let me love you- Justin Bieber'
          color='blue'
          onPress={this.lmly}
          >
     </Button>
     </View>

     <View style={{paddingTop : 20}}>
          <Button
          title = 'On My Way-Alan Walker'
          color = 'purple'
          onPress={this.omw}
          >
     </Button>
     </View>

     <View style={{paddingTop : 20}}>
          <Button
          title = 'STAY-Kid Laroi'
          color = 'green'
          onPress={this.st}
          >
     </Button>
     </View>

     <View style={{paddingTop : 20}}>
          <Button
          title = 'See You Again- Wiz Khalifa ft.Charlie Puth'
          color = 'black'
          onPress={this.sya}
          >
     </Button>
     </View>

     <View style={{paddingTop : 20}}>
          <Button
          title = 'Cheap Thrills-Sia'
          color = 'magenta'
          onPress={this.ct}
          >
     </Button>
     </View>

      </View>
    );
  }
}

