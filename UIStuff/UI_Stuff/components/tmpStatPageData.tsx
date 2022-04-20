// En template med dummy data för att testa statsidans grapher

//linechart data
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
      color: (opacity = 1) => `rgba(144, 255, 90, ${opacity})` // optional
    },
  ]
}

  // Contribution grah data

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
    labels: ["Spring", "Steg", "Aktivitet"],
    data: [0.5, 0.6, 0.9]
  };

  export { data, contributionData, pieChartData, progressChartData }