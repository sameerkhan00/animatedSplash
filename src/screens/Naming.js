import React from 'react';

import { StatusBar,View,Text ,Dimensions, TouchableOpacity,Image,TextInput} from 'react-native';
var {height, width} = Dimensions.get('window');
const Naming = () =>{
 const [value, onChangeText] = React.useState('Useless Placeholder');

    return(
        <>
        <StatusBar backgroundColor="tomato" />
        <View style={{flex:1,backgroundColor: 'tomato',alignItems:'center',justifyContent:'center'}}>
      
           <Text style={{fontSize:18,marginVertical:30}}> Minutes to Win It</Text>
  
            <View style={{justifyContent:'center',alignItems:'center',borderWidth:1,width:'90%',height:'30%'}}>
           
           
           
         
          
    </View>
            
           
           
        
        </View>
        </>
    );
}

export default Naming;