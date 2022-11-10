import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  FlatList,
} from 'react-native';

const BLUESH = '#3185FC';
const BACKGROUND = '#F5FAFF';
const MILK = '#e7dddcff';
const ORANGE = '#FD6B03';
const SHADOWGREY = '#E8E8E8';
const ALMOSTBLACK = '#020044';

export default function Project({ navigation }) {
  const [searched_projects, set_search_projects] = useState(null);
  const [projects, setprojects] = useState(null);

  useEffect(() => {
 const urlCont='https://dsms0-7e9f.restdb.io/rest/contributors';

    var options = {
      method: 'GET',
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': 'your api key',
      },
    };

    getprojects();

    async function getprojects() {
      let response = await fetch(urlCont, options);
      let res = await response.json();

      setprojects(res);
    }
  }, []);
  return (
    <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={1}>
      <View styles={styles.mainview}>
        <TextInput
          style={{    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'white',
    height: 55,
    borderRadius: "30%",
    
    borderWidth: 3,  
    color: ALMOSTBLACK,
    borderColor: ORANGE,
    shadowColor: SHADOWGREY,
    shadowOpacity: 1,}}
          onChangeText={(searching) => {
            const url =
              'https://dsms0-7e9f.restdb.io/rest/contributors?q={ "user_name": {"$regex" :"' +
              searching +
              '"}}';

            var options = {
              method: 'GET',
              headers: {
                'cache-control': 'no-cache',
                'x-apikey': 'your api key',
              },
            };
            function allgetdata() {
              fetch(
                'https://dsms0-7e9f.restdb.io/rest/contributors',
                options
              )
                .then((res) => res.json())
                .then((resjson) => {
                  setprojects(resjson);
                });


            }
            if (searching.length != '') {
              getdata();
            } else {
              allgetdata();
            }

            async function getdata() {
              let res = await fetch(url, options);

              let data = await res.json();
              setprojects(data);
              console.log(searched_projects);
            }
          }}
          placeholderTextColor="grey"
          placeholder="Search For a contributors . ."></TextInput>

        <FlatList
          data={projects}
          style={styles.flatliststyle}
          horizontal={false}
          inverted={false}
          renderItem={({ item }) => (
            <View style={styles.flatlistusers}
            >
              <View style={styles.flatlistusersL}>
              <Text style={styles.projectsinfo}>
                Contributor Name : {item.user_name} 
             </Text>
              <Text style={styles.projectsinfo}>
                Contributor Email : {item.email}
              </Text>
              <Text style={styles.projectsinfo}>
                Last Projects Joined  : {item.joined_projects[0]}
              </Text>
              </View>
              <TouchableOpacity style={styles.flatlistusersR}      onPress={() => {
                const url =
                  'https://dsms0-7e9f.restdb.io/rest/contributors/' +
                  item._id;
                console.log(item);
                var options = {
                  method: 'DELETE',
                  headers: {
                    'cache-control': 'no-cache',
                    'x-apikey': 'your api key',
                    'content-type': 'application/json',
                  },
                };
                del();
                async function del() {
                  console.log(url);
                  let req = await fetch(url, options);
                  if (req.ok) {
                    alert('The contributor ' + item.user_name + ' Deleted');
                  }
                }
              }}>
        <Text style={{fontSize: 15,fontWeight: 'bold',color:"white"}}>DELETE</Text>
              </TouchableOpacity>
              </View>
             
            
          )}>

    </FlatList>
      </View >
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({

  flatlistusers: {
    backgroundColor: "white",
    flexDirection: 'row',
    width: "93%",
    height: 100,
    borderWidth: 1.5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
  },
  flatlistusersL: {
    backgroundColor: ORANGE,
    color:"white",
    flexDirection: 'column',
    width: "80%",
    height: 100,
    borderWidth: 1.5,
    borderColor: 'white',
    shadowOpacity: 1,
    shadowColor: SHADOWGREY,
    borderRadius: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  },
  flatlistusersR: {
    backgroundColor: "#75ae9d",
    flexDirection: 'row',
    width: "20%",
    height: 100,
    borderWidth: 1.5,
    borderColor: 'white',
    shadowOpacity: 1,
    shadowColor: SHADOWGREY,
    borderRadius: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
   
  },

  flatliststyle: {
    height: '90%',
    backgroundColor: "white",
    width: '100%',
    borderBottomRightRadius: '30%',
    borderBottomLeftRadius: '30%',
    borderWidth: 1.5,
    borderColor: SHADOWGREY,
    shadowColor: SHADOWGREY,
    shadowOpacity: 1,
    alignItems: 'center',
  },
 
  projectsinfo: {
    color: ALMOSTBLACK,

    fontSize: 15,
    fontWeight: 'bold',
  },

  
  mainview: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
