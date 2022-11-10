import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const ORANGE = '#FD6B03';


export default function Home({ navigation }) {

  const [projectsLength, setProjectsLength] = useState(0);

  const [DSLength, setDSLength] = useState(0);
 
  const [ContLength, setContsLength] = useState(0);
 
  const [InvLength, setInvsLength] = useState(0);


  useEffect(() => {

    const urlprojects =
      'https://dsms0-7e9f.restdb.io/rest/data-scientist-projects';
 const urlDS='https://dsms0-7e9f.restdb.io/rest/data-scientist';
 const urlCont='https://dsms0-7e9f.restdb.io/rest/contributors';
 const urlInv='https://dsms0-7e9f.restdb.io/rest/invites';
    var options = {
      method: 'GET',
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': 'Your Api key',
      },
    };

    getprojects()

    async function getprojects() {
      let response = await fetch(urlprojects, options);
      let res = await response.json();
      let response1 = await fetch(urlDS, options);
      let res1 = await response1.json();
      let response2 = await fetch(urlCont, options);
      let res2 = await response2.json();
      let response3 = await fetch(urlInv, options);
      let res3 = await response3.json();
      

      setProjectsLength(res.length);
      setDSLength(res1.length)
      setContsLength(res2.length)
      setInvsLength(res3.length)



    }
  });
  return (
    <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={1}>
      <View style={styles.mainview}>
        <View style={{alignItems:"center"}}>
        <View style={styles.vi}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Projects')
        }}><Text style={styles.tx}>Project : {projectsLength}</Text></TouchableOpacity></View>
        <View style={styles.vi}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('DS')
        }}><Text style={styles.tx}>DataScientist : {DSLength}</Text></TouchableOpacity></View>
        <View style={styles.vi}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Cont')
        }}><Text style={styles.tx}>Contributors : {ContLength}</Text></TouchableOpacity></View>
        <View style={styles.vi}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Inv')
        }}><Text style={styles.tx}>Invites : {InvLength}</Text></TouchableOpacity></View>
     
        </View>
            <Image
            style={{  width: 300,
    height: 300,marginTop:-150,marginLeft:55,
    }}
            source={require('./photo/dash.png')}
          />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
vi:{height:"15%",width:"90%" ,borderRadius:20,borderWidth:5,backgroundColor:ORANGE,marginBottom:10,marginTop:10},
tx:{fontSize:40,margin:10,textAlign:"center" , color:"black"},
  mainview: {
    height: '100%',
    width: '100%',
    alignContent:"center",
    backgroundColor:"#ffff",
    marginTop:5

  },
  
});
