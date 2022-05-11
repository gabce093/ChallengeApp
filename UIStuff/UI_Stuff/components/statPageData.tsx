import { getTotalDistance } from "../PlayerData";
/**
 * This page contains dummy data for representation of how data from a sever would be formatted for the statPage
 * @author Fredrik Håkansson
 */

//linechart dummy data
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      data: [
        50,
        20,
        2,
        86,
        71,
        120,
        50
      ],
      color: (opacity = 0.1) => `rgba(144, 255, 90, ${opacity})` // optional
    },
  ]
}
var totalDistance = 0.0;
totalDistance = getTotalDistance(); //get function från playerData
const avgPace = 3.5;
const totalRunTime = 10;

  // Contribution grah dummy data

  const contributionData = [
    { date: '2016-01-02', count: 1 },
    { date: '2016-01-03', count: 2 },
    { date: '2016-01-04', count: 3 },
    { date: '2016-01-05', count: 4 },
    { date: '2016-01-06', count: 20 },
    { date: '2016-01-30', count: 2 },
    { date: '2016-01-31', count: 3 },
    { date: '2016-03-01', count: 2 },
    { date: '2016-04-02', count: 4 },
    { date: '2016-03-05', count: 2 },
    { date: '2016-02-30', count: 4 }
  ]

  // Paj diagram data

  const pieChartData = [
    { name: 'Himmel', population: 4, color: '#80DAEB', legendFontColor: 'white', legendFontSize: 15 },
    { name: 'Pyramid', population: 2, color: '#E2AB68', legendFontColor: 'white', legendFontSize: 15 },
    { name: 'Skuggad pyramid', population: 1, color: 'black', legendFontColor: 'white', legendFontSize: 15 },
    { name: 'Himmel', population: 4, color: '#80DAEB', legendFontColor: 'white', legendFontSize: 15 }
  ]

  // Progress bar data minst 3 värden annars ser den dum ut

  const progressChartData = {
    labels: ["Run distance", "Steps", "Time active"],
    data: [0.5, 0.6, 0.9]
  };

  const completedRuns = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '3k Challenge',
      date: '2022-04-29',
      pace: '4,40',
      time: '00:14:04',
      cadence: '176',
      winLoss: 'W',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '3k Challenge',
      date: '2022-04-29',
      pace: '4,40',
      time: '00:14:04',
      cadence: '176',
      winLoss: 'W',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3k Challenge',
      date: '2022-04-29',
      pace: '4,40',
      time: '00:14:04',
      cadence: '176',
      winLoss: 'L',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3k Challenge',
      date: '2022-04-29',
      pace: '4,40',
      time: '00:14:04',
      cadence: '176',
      winLoss: 'W',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3k Challenge',
      date: '2022-04-29',
      pace: '4,40',
      time: '00:14:04',
      cadence: '176',
      winLoss: 'W',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3k Challenge',
      date: '2022-04-29',
      pace: '4,40',
      time: '00:14:04',
      cadence: '176',
      winLoss: 'L',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3k Challenge',
      date: '2022-04-29',
      pace: '4,40',
      time: '00:14:04',
      cadence: '176',
      winLoss: 'L',
    },
  ];

  export { data, contributionData, pieChartData, progressChartData, totalDistance, totalRunTime, completedRuns }