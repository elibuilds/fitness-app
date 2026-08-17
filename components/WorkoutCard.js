import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const WorkoutCard = ({ workout, onPress }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>{workout.title}</Text>

        <TouchableOpacity 
          style={styles.favouriteButton} 
          onPress={toggleFavourite}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons 
            name={isFavourite ? 'heart' : 'heart-outline'} 
            size={25} 
            color={isFavourite ? '#FF5252' : '#573939'} 
          />
        </TouchableOpacity>
        
        <View style={styles.textRow}>
          <View style={styles.textItem}>
            <Ionicons name="time-outline" size={14} color="#666666" />
            <Text style={styles.subText}>{workout.duration}</Text>
          </View>
          <Text style={styles.textDot}>•</Text>
          <View style={styles.textItem}>
            <Ionicons name="flame-outline" size={14} color="#FF6B6B" />
            <Text style={styles.subText}>{workout.calories}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
  },
  favouriteButton: {
    position: 'absolute',
    top: 20,
    right: 12, 
    borderRadius: 20,
    padding: 8,
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2D3436',
    marginBottom: 8,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subText: {
    fontSize: 13,
    color: '#636E72',
    marginLeft: 4,
  },
  textDot: {
    marginHorizontal: 8,
    color: '#B2BEC3',
  },
});