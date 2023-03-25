var xValues = ["DWH BRing", "DWH LB", "BGS BRing", "BGS LB"];
var maxIter = 1;

var strat1 = olmHitter.DoTrioOlm_4dwh_minreq_tent(maxIter);
var strat2 = olmHitter.DoTrioOlm_6dwh_minreq_tent_lb(maxIter);
var strat3 = olmHitter.DoTrioOlm_4bgs_minreq_tent(maxIter);
var strat4 = olmHitter.DoTrioOlm_6bgs_minreq_tent_lb(maxIter);

console.log(strat1, strat2, strat3, strat4);

var yValues = [
  olmHitter.averageTicks(strat1),
  olmHitter.averageTicks(strat2),
  olmHitter.averageTicks(strat3),
  olmHitter.averageTicks(strat4),
];

var chartData = {
  labels: xValues,
  datasets: [{
    label: `75 Attack 75 Strength Min Req ${maxIter} iterations`,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
    ],
    borderWidth: 1,
    data: yValues,
  }
  ]
};

var barGraph = new Chart("7575minreq", {
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