import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react';
import {FlatList,
  StyleSheet, Text, View, TouchableOpacity, TextInput, Button
} from 'react-native';

export default function App() {
  const DATA = [{id : 0, name : 'A'},
    {id : 1, name : 'B'},
    {id : 2, name : 'C'},
    {id : 3, name : 'D'},
    {id : 4, name : 'E'}];

  const [duLieu,setDuLieu] = useState([]);

  useEffect(()=>{
    setDuLieu(DATA);
  },[])
  return (
    <View style={styles.container}>
      <Button title='Push' onPress={()=>{
      
       const item = {id : Math.floor(Math.random() * 1000), name : 'F'};
       setDuLieu(oldArray => [...oldArray,item] );

      }}/>
      <FlatList style={{flex : 1}}
      data={duLieu}
      renderItem={({item,index})=><View 
      style ={{borderWidth : 1, margin : 2, padding : 2,
       flexDirection: 'row', width : 300, justifyContent : 'space-between'}}>
         <Text>{item.name}</Text>
         <Text>{item.id}</Text>
         <Button title='Delete' onPress={()=>{
         
         let filterArr = duLieu.filter(data => data !== item);
         setDuLieu(filterArr)

  
         }}/>
         <Button title='Update' onPress={()=>{

           var arr = [...duLieu]
           arr[index].name = 'AA'
           arr[index].id =  Math.floor(Math.random() * 10000)
           setDuLieu(arr)
         
  
         }}/>
      </View>
    }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
