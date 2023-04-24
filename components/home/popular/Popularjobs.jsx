import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {

  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  const { data, isLoading, error }  = useFetch(
    'search', {
      query : 'Experienced Software Developer Jobs India',
      num_pages:5,
    }
  )

  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Professional Jobs</Text>
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
            data={data}
            renderItem={
              ({ item }) => (
                <PopularJobCard 
                    item={item}   
                    selectedJob={selectedJob}
                    handleCardPress={handleCardPress}
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