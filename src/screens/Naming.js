import React from 'react'
import { StatusBar,View,Text ,Dimensions, TouchableOpacity,Image,TextInput} from 'react-native';
var {height, width} = Dimensions.get('window');
const Naming = () =>{
 const [value, onChangeText] = React.useState('Useless Placeholder');

    return(
        <>
        <StatusBar backgroundColor="tomato" />
        <View style={{flex:1,backgroundColor: 'tomato',alignItems:'center'}}>
        <View>
           <Text style={{fontSize:18}}> Minutes to Win It</Text>
        </View>
            <View style={{position:'absolute',top:100,height:'70%',width:'80%',borderWidth:1}}>
            <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
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

export default Naming;