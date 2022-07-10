import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function SkillCard({skill}){
    return(
        <TouchableOpacity style={styles.buttonSkill}  >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
    </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    textSkill:{
        color: '#FFF',
        backgroundColor: '#1F1E25',
        fontSize: 22,
        fontWeight:'bold',
    },
    buttonSkill:{
      backgroundColor: '#1F1E25',
      padding: 20,
      borderRadius: 50,
      alignItems: "center",
      marginVertical: 7
    }
})