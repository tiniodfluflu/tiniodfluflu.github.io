var xValues = ["Set1", "Set2"];
var yValues = [55, 49, ];
var barColors = ["red", "green"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {} 
});