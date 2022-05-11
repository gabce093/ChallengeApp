/* Kräver react-native-chart-kit och react-native-svg*/
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, ImageBackground } from 'react-native';
import statStyles from '../styles/statPage.style';
import { data, contributionData, pieChartData, progressChartData, totalDistance, completedRuns } from '../components/statPageData'
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import styles from '../styles/Page.style';

/**
 * This function contains the Statpage and renders data from statPage data to be displayed
 * 
 * @author Fredrik Håkansson
 */

export default function StatPageScreen() {

  const width = Dimensions.get('window').width*0.9
  const height = Dimensions.get('window').height/3
  const topMargin = Dimensions.get('window').height/5;

  //Properties for the charts
  const chartConfig = {
    backgroundColor: "fff",
    backgroundGradientFrom: "#868383",
    backgroundGradientTo: "#868383",
    backgroundGradientFromOpacity: 0.9, //1 sätter 100%
    backgroundGradientToOpacity: 0.9,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, //Graph color
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //texten axlarna
    strokeWidth: 3, // defaultar till 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
  };
  //Chart style
  const style = {
    marginVertical: 5,
    borderRadius: 5,
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover"></ImageBackground>
      <View style={statStyles.largeInfoTextContainer}>
        <View>
          <Text style={statStyles.infoDist}>{totalDistance}km</Text>
          <Text style={statStyles.descriptionText}>Total distance</Text>
        </View>
      </View>

      <ScrollView>
        <View style={statStyles.row}>

              <View>
                <Text style={statStyles.itemText}>null</Text>
                <Text style={statStyles.descriptionText}>Battles Won</Text>
              </View>

              <View>
                <Text style={statStyles.itemText}>null</Text>
                <Text style={statStyles.descriptionText}>Avrage runtime</Text>
              </View>

              <View>
                <Text style={statStyles.itemText}>null</Text>
                <Text style={statStyles.descriptionText}>Avrage length</Text>
              </View>

              <View>
                <Text style={statStyles.itemText}>null</Text>
                <Text style={statStyles.descriptionText}>Total Steps</Text>
              </View>

        </View>

        <LineChart
          data={data}
          width={width}
          height={height}
          yAxisLabel=""
          yAxisSuffix="km"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          bezier //används för bezier kurvor på graphen
          style={style}
        />

        {/* Renders data from previous challenges */}
        <FlatList
        data={completedRuns}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) =>
        <View style={statStyles.challengeItem}>

          <Text style={statStyles.descriptionText}>{item.date}</Text>
          <View style={statStyles.ChallengeRow}>
            <Text style={statStyles.challengeTitleText}>{item.title}</Text>
            {/* <Text style={statStyles.descriptionText}>{item.winLoss}</Text> */}
          </View>
          <View style={statStyles.ChallengeRow}>
            <View>
              <Text style={statStyles.itemText}>{item.time} min</Text>
              <Text style={statStyles.descriptionText}>Time</Text>
            </View>
            <View>
              <Text style={statStyles.itemText}>{item.pace}</Text>
              <Text style={statStyles.descriptionText}>Avg. Pace</Text>
            </View>
            <View>
              <Text style={statStyles.itemText}>{item.cadence}</Text>
              <Text style={statStyles.descriptionText}>Cadence</Text>
            </View>
          </View>

        </View>
        }
      />
      </ScrollView>
    </View>
  );
}