    var myConfig = {

  "globals":{
    "font-family":"Roboto",
  },
  "graphset":[
        {
            "type":"piano",
            "theme":"classic",
            "title":{
                "text":"Tygodniowy indeks PM2.5",
                "background-color":"none",
                "font-color":"#000",
                "font-size":"24px",
                "adjust-layout":true,
                "padding-bottom":25
            },
            "backgroundColor":"#fff",
            "plotarea":{
                "margin":"dynamic"
            },
            "scaleX":{
                "placement":"opposite",
                "lineWidth":0,
                "item":{
                    "border-color":"none",
                    "size":"13px",
                    "font-color":"#000"
                },
                "guide":{
                    "visible":false
                },
                "tick":{
                    "visible":false
                },
                "values":"0:23:1",
                "zooming":true,
                "zoom-snap": true,
                //"zoomTo": [2,5]
            },
            "zoom" : {
                  "preserve-zoom" : true,
                  "background-color":"#e5e8ea",
                  "border-color":"#009",
                  "border-width":2,
                  "alpha":0.75
                },
            "scroll-x": {
              "bar":{
                "border-radius":3,
                "background-color":"#000",
                "alpha":.5
              },
              "handle":{
                "border-radius":5,
                "background-color":"#000",
                "border-top":"none",
                "border-right":"none",
                "border-bottom":"none",
                "border-left":"none"
              }
            },
            "scroll-y": {
              "bar":{
                "border-radius":3,
                "background-color":"#000",
                "alpha":.5
              },
              "handle":{
                "border-radius":5,
                "background-color":"#01579B",
                "border-top":"none",
                "border-right":"none",
                "border-bottom":"none",
                "border-left":"none"
              }
            },
            "scaleY":{
                "zooming":true,
                "lineWidth":0,
                "mirrored":true,
                "tick":{
                    "visible":false
                },
                "guide":{
                    "visible":false
                },
                "item":{
                    "border-color":"none",
                    "size":"13px",
                    "font-color":"#000"
                },
                "values":["Mo","Tu","We","Th","Fr","Sa","Su"]
            },
            "legend":{
                "layout":"x6",
                "width":"80%",
                "shadow":false,
                "border-width":0,
                "align":"center",
                "vertical-align":"bottom",
                "toggle-action":"none",
                "item":{
                    "border-color":"none",
                    "size":"13px",
                    "font-color":"#000"
                },
                "marker":{
                    "type":"square",
                    "border-radius":"8",
                    "border-color":"none",
                    "size":"13px"
                },
                "footer":{
                    "border-color":"none",
                    "background-color":"none",
                    "text-align":"center",
                    "font-size":"14px",
                    "font-color":"#05636c"
                }
            },
            "plot":{
                "aspect":"none",
                "borderWidth":2,
                "borderColor":"#eeeeee",
                "borderRadius":7,
                "tooltip":{
                    "font-size":"14px",
                    "font-color":"white",
                    "text":"%v \xB5g/m\xB3.",
                    "text-align":"left"
                },
                "rules":[
                    {
                        "rule":"%node-value < 13",
                        "backgroundColor":"#55B016",
                        "font-color":"#55B016"
                    },
                    {
                        "rule":"%node-value >= 13 && %node-value < 37",
                        "backgroundColor":"#AEDC20",
                        "font-color":"#05636c"
                    },
                    {
                        "rule":"%node-value >= 37 && %node-value < 61",
                        "backgroundColor":"#FED821",
                        "font-color":"#05636c"
                    },
                    {
                        "rule":"%node-value >= 61 && %node-value < 85",
                        "backgroundColor":"#E4800B",
                        "font-color":"#05636c"
                    },
                    {
                        "rule":"%node-value >= 85 && %node-value < 121",
                        "backgroundColor":"#E40201",
                        "font-color":"#05636c"
                    },
                    {
                        "rule":"%node-value >= 121",
                        "backgroundColor":"#980100",
                        "font-color":"#05636c"
                    }
                ]
            },
                  "refresh":{
    "type":"feed",
    "transport":"js",
    "url":"feed()",
    "interval":500000
},
            "series":[
                {
                    "values":[1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1,1],
                    "text":"Bardzo dobrze",
                    "legend-marker":{
                        "backgroundColor":"#55B016"
                    }
                },
                {
                    "values":[2,2,2,2,2,2,3,300,3,2,2,3,3,66,3,2,2,2,2,1,2,3],
                    "text":"Dobrze",
                    "legend-marker":{
                        "backgroundColor":"#AEDC20"
                    }
                },
                {
                    "values":[2,2,2,2,3,3,3,3,3,3,84,4,4,4,4,4,4,4,3,3,3,2],
                    "text":"Umiarkowanie",
                    "legend-marker":{
                        "backgroundColor":"#FED821"
                    }
                },
                {
                    "values":[2,3,3,2,3,3,3,4,5,20,4,5,4,4,5,4,4,3,3,3,3,3],
                    "text":"Dostatecznie",
                    "legend-marker":{
                        "backgroundColor":"#E4800B"
                    }
                },
                {
                    "values":[3,2,3,2,3,3,4,4,4,5,5,5,5,4,4,5,4,3,2,3,4,4],
                    "text":"Źle",
                    "legend-marker":{
                        "backgroundColor":"#E40201"
                    }
                },
                {
                    "values":[2,3,5,6,5,6,5,6,5,6,6,6,6,5,6,5,6,4,5,4,4,4],
                    "text":"Bardzo źle",
                    "legend-marker":{
                        "backgroundColor":"#980100"
                    }
                },
                {
                    "values":[3,2,3,2,3,3,4,4,4,5,5,5,5,4,4,5,4,3,2,3,4,4],
                    "text":"1-2 Ft",
                    "legend-marker":{
                        "backgroundColor":"#fff"
                    },
                    "legend-item":{
                        "visible":false
                    }
                }
            ]
        }
        ]
        };
 
zingchart.render({ 
  id : 'myChart', 
  data : myConfig, 
  height: 500, 
  width: '100%' 
});
 
window.feed = function(callback) {
    var tick;
    tick.plot0 = parseInt(9*Math.random());
    /*for (i=0;i<24;i++){
      tick[i].plot0 = parseInt(9*Math.random());
    }
    console.info(tick);*/
    callback(JSON.stringify(tick));
}