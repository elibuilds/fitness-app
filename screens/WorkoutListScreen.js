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
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop',
    description: 'High-intensity interval training designed to burn fat and build endurance across all major muscle groups.',
    exercisesCount: 12,
  },
  {
    id: '2',
    title: 'Morning Yoga Flow',
    category: 'Yoga',
    duration: '20 min',
    calories: '150 kcal',
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600&auto=format&fit=crop',
    description: 'Gentle morning stretch routine to improve flexibility, posture, and core stability for your day.',
    exercisesCount: 8,
  },
  {
    id: '3',
    title: 'Core Blast & Abs',
    category: 'Gym',
    duration: '15 min',
    calories: '180 kcal',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    description: 'Targeted abdominal workout focused on strengthening the deep core muscles and stabilizing lower back.',
    exercisesCount: 10,
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