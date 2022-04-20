/* Kräver react-native-chart-kit och react-native-svg*/
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView, StatusBar } from 'react-native';
import { data, contributionData, pieChartData, progressChartData } from '/Users/fredrikhakansson/forkDev/Kandidat/kandidat/UIStuff/UI_Stuff/components/tmpStatPageData'
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import styles from '../styles/Page.style';


export default function StatPageScreen() {

  const width = Dimensions.get('window').width-16
  const height = Dimensions.get('window').height/3

  //Properties för graferna
  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#DF5C12",
    backgroundGradientTo: "#DF5C12",
    backgroundGradientFromOpacity: 1, //1 sätter 100%
    backgroundGradientToOpacity: 0.9,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //texten axlarna
    strokeWidth: 2, // defaultar till 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  //Stylen på chartDiv wrappern
  const style = {
    marginVertical: 1,
    borderRadius: 10,
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
      <ScrollView>
        <Text style={styles.headertext}>Linjediagram</Text>
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
        <Text style={styles.headertext}>Contribution graph</Text>
        <ContributionGraph
          values={contributionData}
          endDate={new Date("2017-01-01")}//react-native funktion för dagens datum
          numDays={122}
          width={width}
          height={height}
          chartConfig={chartConfig}
          style={style}
        />
        <Text style={styles.headertext}>Stapeldiagram</Text> 
        <BarChart
          data={data}
          width={width}
          height={height}
          yAxisLabel=""
          yAxisSuffix="km"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          style={style}
        />
        <Text style={styles.headertext}>Pajdiagram</Text>
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
        />
        <Text style={styles.headertext}>Progress ringar</Text>
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
    </View>
  );
}