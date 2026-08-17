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
      <Image source={{ uri: workout.imageUrl }} style={styles.image} />
      
      {/* Favourite Button */}
      <TouchableOpacity 
        style={styles.favouriteButton} 
        onPress={toggleFavourite}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons 
          name={isFavourite ? 'heart' : 'heart-outline'} 
          size={22} 
          color={isFavourite ? '#FF5252' : '#FFFFFF'} 
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.category}>{workout.category.toUpperCase()}</Text>
        <Text style={styles.title} numberOfLines={1}>{workout.title}</Text>
        
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color="#666666" />
            <Text style={styles.metaText}>{workout.duration}</Text>
          </View>
          <Text style={styles.metaDot}>•</Text>
          <View style={styles.metaItem}>
            <Ionicons name="flame-outline" size={14} color="#FF6B6B" />
            <Text style={styles.metaText}>{workout.calories}</Text>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: '#E1E4E8',
  },
  favouriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 8,
  },
  infoContainer: {
    padding: 16,
  },
  category: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6C5CE7',
    marginBottom: 4,
    letterSpacing: 0.8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 13,
    color: '#636E72',
    marginLeft: 4,
  },
  metaDot: {
    marginHorizontal: 8,
    color: '#B2BEC3',
  },
});