const MAX_POINTS = 360;

function createChart(id,label,color){

    return new Chart(
        document.getElementById(id),
        {

            type:'line',

            data:{
                labels:[],
                datasets:[{

                    label:label,

                    data:[],

                    borderColor:color,

                    borderWidth:2,

                    tension:0.3,

                    fill:false

                }]
            },

            options:{

                responsive:true,

                maintainAspectRatio:false,

                animation:false,

                plugins:{
                    legend:{
                        labels:{
                            color:'white'
                        }
                    }
                },

                scales:{

                    x:{
                        ticks:{
                            color:'white',
                            maxTicksLimit:8
                        },
                        grid:{
                            color:'#333'
                        }
                    },

                    y:{
                        ticks:{
                            color:'white'
                        },
                        grid:{
                            color:'#333'
                        }
                    }
                }
            }
        }
    );
}

const phChart =
createChart("phChart","pH","#00FF88");

const ecChart =
createChart("ecChart","EC","#00AAFF");

const ntuChart =
createChart("ntuChart","NTU","#FFAA00");

const wtChart =
createChart("wtChart","WT","#FF4444");

const doChart =
createChart("doChart","DO","#00FFFF");

function addPoint(chart,time,value){

    chart.data.labels.push(time);

    chart.data.datasets[0].data.push(value);

    if(chart.data.labels.length > MAX_POINTS){

        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();
}

async function updateData(){

    try{

        const response =
        await fetch('/data');

        const d =
        await response.json();

        document.getElementById("phValue").innerText =
        d.PH.toFixed(2);

        document.getElementById("ecValue").innerText =
        d.EC.toFixed(1);

        document.getElementById("ntuValue").innerText =
        d.NTU.toFixed(1);

        document.getElementById("wtValue").innerText =
        d.WT.toFixed(2) + " °C";

        const now =
        new Date();

        document.getElementById("lastUpdate").innerText =
        now.toLocaleTimeString();

        const label =
        now.getHours().toString().padStart(2,'0')
        + ':'
        + now.getMinutes().toString().padStart(2,'0')
        + ':'
        + now.getSeconds().toString().padStart(2,'0');

        addPoint(phChart,label,d.PH);
        addPoint(ecChart,label,d.EC);
        addPoint(ntuChart,label,d.NTU);
        addPoint(wtChart,label,d.WT);
        addPoint(doChart,label,d.DO);

        document.getElementById("status").innerText =
        "Arduino Connected";
    }

    catch(err){

        document.getElementById("status").innerText =
        "Connection Lost";
    }
}

setInterval(updateData,5000);

updateData();