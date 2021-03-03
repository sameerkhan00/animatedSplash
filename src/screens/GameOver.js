import React, {Component} from 'react';
import {StatusBar, Text, View, TouchableOpacity, Image} from 'react-native';

export class GameOver extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="tomato" />
        <View
          style={{
            flex: 1,
            backgroundColor: 'tomato',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{height: '50%', width: '80%'}}>
            <Image
              source={require('../../assests/images/gameover.jpg')}
              style={{width: '100%', height: '80%', borderRadius: 10}}
            />
          </View>
          <View
            style={{
              width: '90%',
              height: '20%',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                height: '40%',
                width: '100%',
                backgroundColor: '#2d2926',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text style={{fontSize: 16, color: '#FFF'}}>Play Again</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '40%',
                width: '100%',
                backgroundColor: '#2d2926',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text style={{fontSize: 16, color: '#FFF'}}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default GameOver;
