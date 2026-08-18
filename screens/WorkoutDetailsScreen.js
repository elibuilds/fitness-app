import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const WorkoutDetailsScreen = ({route}) => {
  const navigation = useNavigation()
  const {workout}= route.params;

  const [isCompleted, setIsCompleted] = useState(false);
  const handleToggleStatus = () => {
      setIsCompleted((prev) => !prev);
    };

  return (
    <View style={styles.main}>
      <View>
        <View style={styles.hero}>
          <Text style={styles.title}>{workout.title}</Text>
          <Image source={workout.imageUrl} style={styles.heroImage} />
        </View> 
        

        <View style={styles.detailsBox}>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Ionicons name="time-outline" size={20}  />
              <Text style={styles.statValue}>{workout.duration}</Text>
              <Text style={styles.statLabel}>Duration</Text>
            </View>

            <View style={styles.statCard}>
              <Ionicons name="flame-outline" size={20} />
              <Text style={styles.statValue}>{workout.calories}</Text>
              <Text style={styles.statLabel}>Burn</Text>
            </View>

            <View style={styles.statCard}>
              <Ionicons name="fitness-outline" size={20}  />
              <Text style={styles.statValue}>{workout.exercisesCount}</Text>
              <Text style={styles.statLabel}>Exercises</Text>
            </View>
          </View>

          <Text style={styles.sectionHeader}>Description</Text>
          <Text style={styles.description}>{workout.description}</Text>
        </View>
      </View>

     
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.actionButton, isCompleted && styles.completedButton]}
          onPress={handleToggleStatus}
          activeOpacity={0.8}
        >
          <Ionicons
            name={isCompleted ? 'checkmark-circle' : 'play'}
            size={20}
           
            style={styles.buttonIcon}
          />
          <Text style={styles.actionButtonText}>
            {isCompleted ? 'Completed' : 'Start Workout'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  hero: {
    paddingTop: 60,
    paddingBottom: 50,
    backgroundColor: '#fd98a7'

  },
  heroImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
  detailsBox: {
    padding: 24,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 19,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 20,
    textAlign: 'center'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    padding: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2D3436',
    marginTop: 6,
  },
  statLabel: {
    fontSize: 11,
    color: '#B2BEC3',
    marginTop: 2,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#636E72',
    lineHeight: 22,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F2F6',
  },
  actionButton: {
    backgroundColor: '#fd98a7',
    height: 54,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedButton: {
    backgroundColor: '#00B894',
  },
  buttonIcon: {
    marginRight: 8,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default WorkoutDetailsScreen