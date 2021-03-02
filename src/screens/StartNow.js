
import { Button } from 'native-base';
import React from 'react'
import { StatusBar,View,Text ,Dimensions, TouchableOpacity,Image} from 'react-native';
var {height, width} = Dimensions.get('window');
const StartNow = () =>{

    return(
        <>
        <StatusBar backgroundColor="tomato" />
        <View style={{flex:1,backgroundColor: 'tomato',alignItems:'center'}}>
            
            <View style={{position:'absolute',top:100,height:'70%',width:'80%'}}>

            <View>
            <Image  source={require('../../assests/images/study1.jpg')} resizeMode="contain"  style={{height:"90%",width:'100%',borderRadius:20,}}/>
        </View>
           <View style={{height:'10%',width:'100%',borderRadius:100,backgroundColor:'#2D2926',}} >
           <TouchableOpacity style={{height:"100%",flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
               <Text style={{color:"#FFFF",fontSize:16}}>Get Started</Text>
           </TouchableOpacity>
         
           </View>
            </View>
        
        </View>
        </>
    );
}

export default StartNow;