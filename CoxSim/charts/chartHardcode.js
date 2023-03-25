var xValues = ["Set1", "Set2"];
var yValues = [55, 49 ];
var barColors = ["red", "green"];

var chartData = {
  labels: xValues,
  datasets: [{
      label: 'Count',
      backgroundColor: 'rgba(255, 255, 0, 0.75)',
      borderColor: 'rgba(200, 200, 200, 0.75)',
      hoverBackgroundColor: 'rgba(255, 255, 0, 1)',
      hoverBorderColor: 'rgba(200, 200, 200, 1)',
      data: yValues,
    }
  ]
};

var barGraph = new Chart("myChart", {
  type: 'bar',
  data: chartData,
  options: {
    scales: {
      y: {
          beginAtZero: true
      }
    }
  },
});