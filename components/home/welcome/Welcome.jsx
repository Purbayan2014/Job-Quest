import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const workTypes = ["Professional SDE Jobs India", "Fresher SDE JOBS India", "Intern SDE Jobs India", "Fresher Full Stack SDE Jobs India", "Remote SDE Jobs India",
        "Fresher Machine learning Jobs India", "Frontend Developer Jobs India", "Web Developer Jobs India", "Cyber Security Jobs India"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Professional SDE JOBS");

  return (
    <View>
      {/* user title and welcome message */}
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Purbayan</Text>
        <Text style={styles.welcomeMessage}>What kind of job are you looking today ? </Text>
      </View>

      {/* search input box */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        {/* search button */}
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* rendering the jobs based on the work types */}
      <View style={styles.tabsContainer}>
        <FlatList
          data={workTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
