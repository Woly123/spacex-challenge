function toonReserves(canvasDom) {
    new Chart(canvasDom, {
        type: 'horizontalBar',
        data: {
          labels: ["NO", "H20", "C02", "CO"],
          datasets: [
            {
              label: "Cubic Metres",
              backgroundColor: ["#012A36", "#5082A0","#74BCAF","#E8E8E8","#D8453A"],
              data: [2478,5267,734,784,433]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: false
          }
        }
    })
}

function toonTemperatuur(canvasDom) {
    new Chart(canvasDom, {
      type: 'line',
      data: {
        labels: ["01-11", "01-12", "01-13","01-14","01-15","01-16","01-17"],
        datasets: [{ 
            data: [15, 15, 15,18,16,17,19],
            label: "Commando module",
            borderColor: "#012A36",
            fill: false
          }, { 
            data: [22, 14, 47,21,35,17,19],
            label: "Derde trap",
            borderColor: "#5082A0",
            fill: false
          }, { 
            data: [27, 12, 11,38,23,15,28],
            label: "Tweede trap",
            borderColor: "#74BCAF",
            fill: false
          }, { 
            data: [40,20,10,16,24,38,42],
            label: "Eerste trap",
            borderColor: "#E8E8E8",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: false
        }
      }
    })
}

function toonVoer(canvasDom) {
  new Chart(canvasDom, {
    type: 'doughnut',
    data: {
    labels: [
        "Vlees",
        "Water",
        "Groente"
    ],
    datasets: [
        {
            data: [80, 200, 100],
            backgroundColor: [
                "#D8453A",
                "#5082A0",
                "#74BCAF"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#43BCA6"
            ],
            borderWidth: 0
        }]
  },
    options: {
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI
    }
  })
}

function run() {
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#FFFFFF';

    toonReserves(document.getElementsByClassName("B1")[0].getElementsByTagName("canvas")[0])
    toonVoer(document.getElementsByClassName("B2")[0].getElementsByTagName("canvas")[0])
    toonTemperatuur(document.getElementsByClassName("B3")[0].getElementsByTagName("canvas")[0])
}

window.onload = run