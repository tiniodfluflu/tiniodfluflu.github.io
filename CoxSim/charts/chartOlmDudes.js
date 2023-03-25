var xValues = ["DWH BRing", "DWH LB", "BGS BRing", "BGS LB"];
var maxIter = 2;
/*
var yValues7575minreq = [
  olmHitter.averageTicks(olmHitter.DoTrioOlm_4dwh_minreq_tent(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_6dwh_minreq_tent_lb(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_4bgs_minreq_tent(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_6bgs_minreq_tent_lb(maxIter)),
];

var yValues9999minreq = [
  olmHitter.averageTicks(olmHitter.DoTrioOlm_4dwh_minreq_max_stats_tent(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_6dwh_minreq_max_stats_tent_lb(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_4bgs_minreq_max_stats_tent(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_6bgs_minreq_max_stats_tent_lb(maxIter)),
];

var yValues8585medgearlance = [
  olmHitter.averageTicks(olmHitter.DoTrioOlm_4dwh_medgear_medstats_lance(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_6dwh_medgear_medstats_lance(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_4bgs_medgear_medstats_lance(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_6bgs_medgear_medstats_lance(maxIter)),
];*/

var yValues999948scy = [
  olmHitter.averageTicks(olmHitter.DoTrioOlm_4dwh_48scy_maxstats_scy(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_6dwh_48scy_maxstats_scy(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_4bgs_48scy_maxstats_scy(maxIter)),
  olmHitter.averageTicks(olmHitter.DoTrioOlm_6bgs_48scy_maxstats_scy(maxIter)),
];
/*
var chartData7575minreq = {
  labels: xValues,
  datasets: [{
    label: `75 Attack 75 Strength Min Req ${maxIter} iteration${maxIter>1?'s':''}`,
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
    data: yValues7575minreq,
  }
  ]
};

var barGraph7575minreq = new Chart("7575minreq", {
  type: 'bar',
  data: chartData7575minreq,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

var chart9999minreq = {
  labels: xValues,
  datasets: [{
    label: `99 Attack 99 Strength Min Req ${maxIter} iteration${maxIter>1?'s':''}`,
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
    data: yValues9999minreq,
  }
  ]
};

var barGraph9999minreq = new Chart("9999minreq", {
  type: 'bar',
  data: chart9999minreq,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});

var chart8585medgearlance = {
  labels: xValues,
  datasets: [{
    label: `85 Attack 85 Strength Med Setup ${maxIter} iteration${maxIter>1?'s':''}`,
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
    data: yValues8585medgearlance,
  }
  ]
};

var barGraph8585medgearlance = new Chart("8585medgearlance", {
  type: 'bar',
  data: chart8585medgearlance,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});
*/

var chart999948scy = {
  labels: xValues,
  datasets: [{
    label: `99 Attack 99 Strength 48 scy setup ${maxIter} iteration${maxIter>1?'s':''}`,
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
    data: yValues999948scy,
  }
  ]
};

var barGraph999948scy = new Chart("999948scy", {
  type: 'bar',
  data: chart999948scy,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
});