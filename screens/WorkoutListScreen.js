import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { WorkoutCard } from '../components/WorkoutCard'



const workouts =[
    {
    id: '1',
    title: 'Full Body HIIT',
    category: 'Gym',
    duration: '30 min',
    calories: '320 kcal',
    imageUrl: require('../assets/workout.png'),
    description: 'High-intensity interval training designed to burn fat and build endurance across all major muscle groups.',
    exercisesCount: 12,
  },
  {
    id: '2',
    title: 'Morning Yoga Flow',
    category: 'Yoga',
    duration: '20 min',
    calories: '150 kcal',
    imageUrl: require('../assets/workout.png'),    description: 'Gentle morning stretch routine to improve flexibility, posture, and core stability for your day.',
    exercisesCount: 8,
  },
  {
    id: '3',
    title: 'Core Blast & Abs',
    duration: '15 min',
    calories: '180 kcal',
    imageUrl: require('../assets/workout.png'),
    description: 'Targeted abdominal workout focused on strengthening the deep core muscles and stabilizing lower back.',
    exercisesCount: 10,
  },
  {
    id: '4',
    title: 'Power Dumbbell Upper',
    category: 'Gym',
    duration: '45 min',
    calories: '410 kcal',
    imageUrl: require('../assets/workout.png'),
    description: 'Hypertrophy-focused upper body strength routine targeting chest, shoulders, arms, and upper back.',
    exercisesCount: 14,
  },
  {
    id: '5',
    title: 'Vinyasa Stress Relief',
    category: 'Yoga',
    duration: '25 min',
    calories: '130 kcal',
    imageUrl: require('../assets/workout.png'),
    description: 'Calming breath-to-movement flow aimed at releasing physical tension and improving mental focus.',
    exercisesCount: 9,
  },
  {
    id: '6',
    title: 'Leg Day Essentials',
    category: 'Gym',
    duration: '40 min',
    calories: '380 kcal',
    imageUrl: require('../assets/workout.png'),
    description: 'Comprehensive lower body workout focusing on quads, hamstrings, glutes, and calf development.',
    exercisesCount: 11,
  },
]

const WorkoutListScreen = () => {
    const navigation = useNavigation()

  return (
    <View style={styles.main}>
      <View style={styles.topContainer}>
        <Text style={{fontSize: 25, fontWeight: '400'}}>Your Workout List</Text>
      </View>
      <View style={styles.listContainer}>
         <FlatList
            data={workouts}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <WorkoutCard workout={item} 
                    onPress={() => navigation.navigate('Details', {workout: item})}
                />
            )}
        />
      </View>
    </View>
  )
}

export default WorkoutListScreen

const styles = StyleSheet.create({
  main: { 
    height: '100%',
    marginBottom: 150,
    backgroundColor: '#fd98a7'

  },
  listContainer: {
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
    height: '100%' 
  },
  topContainer: {
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
    
  }

})