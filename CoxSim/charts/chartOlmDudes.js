var xValues = ["DWH BRing", "DWH LB", "BGS BRing", "BGS LB"];


var yValues = [
  olmHitter.DoTrioOlm_4dwh_minreq_tent,
  olmHitter.DoTrioOlm_4dwh_minreq_tent,
  olmHitter.DoTrioOlm_4dwh_minreq_tent,
  olmHitter.DoTrioOlm_4dwh_minreq_tent,
];

var chartData = {
  labels: xValues,
  datasets: [{
      label: 'Count',
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

var barGraph = new Chart("75 Attack 75 Strength Min Req", {
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