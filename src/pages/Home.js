import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, Platform, FlatList, StatusBar} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function hadleAddNewSkills(){
    setMySkills(oldSkill => [...oldSkill, newSkill]);
  }

  useEffect(() => {
    const currentHours = new Date().getHours();
    if(currentHours < 12){
      setGretting('Bom Dia!');
    }else if(currentHours >= 12 && currentHours <= 18){
      setGretting('Boa Tarde!');
    }else{
      setGretting('Boa Noite!');
    }
    
  }, []);

  return(
    <View style={styles.container}> 
      <Text style={styles.title}> 
        Welcome, Ewerton Neves 
      </Text>

      <Text style={styles.greetings}> 
        {gretting}
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      
      <Button onPress={hadleAddNewSkills} />

      <Text style={[styles.title, { marginVertical: 50}]}>
          My Skills
      </Text>
        <FlatList 
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <SkillCard skill={item} />
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#121015',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    title:{
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input:{
        backgroundColor:'#1F1E25',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 14,
        marginTop: 30,
        borderRadius: 10,
        color:"#FFF"
    },
    greetings:{
      color:"#FFF"
    }
})