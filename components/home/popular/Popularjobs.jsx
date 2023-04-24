import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
const Popularjobs = () => {

  const router = useRouter();
  const isLoading = false;
  const error = false;


  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>Show all</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {/* showing the spinner if the screen is loading */}
        {/* if got any error then show an error message */}
        {/* and if everyting is find then render the flatlist */}
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong while loading the Page !! </Text>
        ) : (
          <FlatList 
            data={[1,2,3]}
            renderItem={
              ({ item }) => (
                <PopularJobCard 
                    item={item}   
                />
              )
            }
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap : SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs