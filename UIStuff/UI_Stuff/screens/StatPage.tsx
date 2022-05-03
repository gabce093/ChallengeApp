/* Kräver react-native-chart-kit och react-native-svg*/
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar, ImageBackground } from 'react-native';
import statStyles from '../styles/statPage.style';
import { data, contributionData, pieChartData, progressChartData, totalDistance } from '../components/statPageData'
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import styles from '../styles/Page.style';

export default function StatPageScreen() {

  const width = Dimensions.get('window').width-16
  const height = Dimensions.get('window').height/3
  const topMargin = Dimensions.get('window').height/5;

  //Properties för graferna
  const chartConfig = {
    backgroundColor: "fff",
    backgroundGradientFrom: "#868383",
    backgroundGradientTo: "#868383",
    backgroundGradientFromOpacity: 0.9, //1 sätter 100%
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`, //Graph color
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //texten axlarna
    strokeWidth: 3, // defaultar till 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
  };
  //Stylen på chartDiv wrappern
  const style = {
    marginVertical: 5,
    borderRadius: 7,
  }
  //Dagens datum ska användas i contribution graph broken för tillfället
  // const [date, setDate] = useState(null);
  // useEffect(() => {
  //   let today = new Date();
  //   let date = '"'+today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'"';
  //   setDate(date);
  // }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover"></ImageBackground>
      {/* <ImageBackground source={require('../Graphics/banan.png')} style={statStyles.bgTrack} resizeMode="stretch"> */}
      <View style={statStyles.largeInfoTextContainer}>
        <View>
          <Text style={statStyles.infoDist}>{totalDistance}km</Text>
          <Text style={statStyles.descriptionText}>Total distance</Text>
        </View>
        {/* <Text>Hejsan</Text>
        <Text>Hejsan</Text>
        <Text>Hejsan</Text> */}
      </View>
      <ScrollView>
        {/* <Text style={styles.headertext}>Linjediagram</Text> */}
        <h1></h1>
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

        {/* Contribution graph är den minst dynamiska */}
        {/* <Text style={styles.headertext}>Contribution graph</Text>
        <ContributionGraph
          values={contributionData}
          endDate={new Date("2017-01-01")}//react-native funktion för dagens datum
          numDays={122}
          width={width}
          height={height}
          chartConfig={chartConfig}
          style={style}
        /> */}
        {/* <Text style={styles.headertext}>Stapeldiagram</Text> 
        <BarChart
          data={data}
          width={width}
          height={height}
          yAxisLabel=""
          yAxisSuffix="km"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          style={style}
        /> */}
        {/* <Text style={styles.headertext}>Pajdiagram</Text>
        <PieChart
          data={pieChartData}
          width={width}
          height={height}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          style={style}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        /> */}
        {/* <Text style={styles.headertext}>Progress ringar</Text> */}
        <ProgressChart
          data={progressChartData}
          width={width}
          height={height}
          chartConfig={chartConfig}
          style={style}
          hideLegend={false} //optional default false
          radius={height/10} //default 32
          strokeWidth={height/10} //optional default 16
        />
      </ScrollView>

      {/* </ImageBackground> */}
      {/* </ImageBackground> */}
    </View>
  );
}