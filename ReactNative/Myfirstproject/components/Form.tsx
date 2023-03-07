import React,{FC,useState,useCallback} from 'react';
import {TextInput,ScrollView, View, Pressable,Text, StyleSheet, TouchableOpacity } from 'react-native'

interface FormType{

  navigation:any
}
interface user{
  name:string,
  email:string,
}
export const Form :FC<FormType> = (props) => {
  const [name, setName]=useState('')
  const [email, SetEmail]=useState('')

  const [item, setItem]=useState<user[]>([])

  const addData =useCallback(()=> {
    let copy=[...item,{name, email}]
    setItem(copy)
    setName('')
    SetEmail('')
   
    props.navigation.navigate("FormList",{
      item:copy
    })

  },
  [name,email,item, props.navigation]);
 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.border}>
        <View style={{marginBottom:60}}>
        <Text textNameID='name' style={styles.containerText}>Name</Text>
        <TextInput textInputID='namePlaceholder' value={name} onChangeText={n=>setName(n)} style={{ borderWidth:1, borderRadius:7, paddingLeft:10, marginTop:5}} placeholder='Enter your Name'/>
        </View>
        <View style={{marginBottom:60, }}>
        <Text textEmailID='email'  style={styles.containerText}>Email address</Text>
        <TextInput textInputEmailID='emailPlaceholder' value={email} onChangeText={n=>SetEmail(n)} style={{ borderWidth:1, borderRadius:7, paddingLeft:10, marginTop:5 }} placeholder='email@gmail.com'/>
        </View>

        <View style={styles.fixToText}>
        <TouchableOpacity style={styles.button} 
         onPress={()=>{
          props.navigation.navigate('FormList',{item:item})
         }}
        >
        <Text>Cancel</Text>
      </TouchableOpacity>
      
    <Pressable onPress={addData} style={styles.button1}>
      <Text>Add</Text>
    </Pressable>
        </View>
     
      </View>
   
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
       flex:1,
      padding:'5%',
     
      borderWidth:1,
     
      margin:10,
  },
  containerText: {
     
      fontSize: 23,
      fontWeight: 'bold',
      
      
  },
  centerView: {
  
    justifyContent: 'center',
    alignItems: 'center',
},
border:{
  borderWidth:1, 
  padding:'10%',
  borderRadius:7,

},

fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
 
},
button: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 10,
  width:'35%',
  borderRadius:7,
},
button1: {
  alignItems: 'center',
  backgroundColor: 'skyblue',
  padding: 10,
  width:'35%',
  borderRadius:7,
},
});
