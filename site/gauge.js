      var g1 = new JustGage({
        id: 'g1',
        value: 100,
        min: 0,
        minTxt: "Dobrze",
        max: 121,
        maxTxt: "Źle",
        hideMinMax: false,
        symbol: " \xB5g/m\xB3",
        label: "Indeks PM2.5",
        pointer: true,
         customSectors: {
          length: true,
          ranges: [{
          color : "#55B016",
          lo : 0,
          hi : 12
        },{
          color : "#AEDC20",
          lo : 13,
          hi : 36
        },{
          color : "#FED821",
          lo : 37,
          hi : 60
        },{
          color : "#E4800B",
          lo : 61,
          hi : 84
        },{
          color : "#E40201",
          lo : 85,
          hi : 120
        },{
          color : "#980100",
          lo : 121,
          hi : 1000
        }],
    },
     /*   textRenderer: function(val) {
                if (val <= 12) {
                  valueFontColor: "blue";
                    return 'Bardzo dobry';
                } else if (val > 12 && val < 37) {
                    return 'Dobry';
                } else if (val >= 37 && val < 61) {
                    return 'Umiarkowany';
                }else if (val >= 61 && val < 85) {
                    return 'Dostateczny';
                }else if (val >= 85 && val < 121) {
                    return 'Zły';
                }else if (val >= 121) {
                    return 'Bardzo zły'
                } 
            }, onAnimationEnd: function() {
                console.log('f: onAnimationEnd()');
            },*/


        pointerOptions: {
          toplength: -10,
          bottomlength: 8,
          bottomwidth: 8,
          color: '#8e8e93',
          stroke: '#fff',
          stroke_width: 2,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.5,
        counter: true,
        relativeGaugeSize: true
      });
      var g2 = new JustGage({
        id: 'g2',
        value: 100,
        min: 0,
        minTxt: "Dobrze",
        max: 201,
        maxTxt: "Źle",
        hideMinMax: false,
        symbol: " \xB5g/m\xB3",
        label: "Indeks PM10",
        pointer: true,
         customSectors: {
          length: true,
          ranges: [{
          color : "#55B016",
          lo : 0,
          hi : 20
        },{
          color : "#AEDC20",
          lo : 21,
          hi : 60
        },{
          color : "#FED821",
          lo : 61,
          hi : 100
        },{
          color : "#E4800B",
          lo : 101,
          hi : 140
        },{
          color : "#E40201",
          lo : 141,
          hi : 200
        },{
          color : "#980100",
          lo : 201,
          hi : 1000
        }],
    },
     /*   textRenderer: function(val) {
                if (val <= 12) {
                  valueFontColor: "blue";
                    return 'Bardzo dobry';
                } else if (val > 12 && val < 37) {
                    return 'Dobry';
                } else if (val >= 37 && val < 61) {
                    return 'Umiarkowany';
                }else if (val >= 61 && val < 85) {
                    return 'Dostateczny';
                }else if (val >= 85 && val < 121) {
                    return 'Zły';
                }else if (val >= 121) {
                    return 'Bardzo zły'
                } 
            }, onAnimationEnd: function() {
                console.log('f: onAnimationEnd()');
            },*/


        pointerOptions: {
          toplength: -10,
          bottomlength: 8,
          bottomwidth: 8,
          color: '#8e8e93',
          stroke: '#fff',
          stroke_width: 2,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.5,
        counter: true,
        relativeGaugeSize: true
      });

      var g3 = new JustGage({
        id: 'g3',
        value: 10,
        min: 0,
        minTxt: "Mało",
        max: 100,
        maxTxt: "Dużo",
        hideMinMax: false,
        symbol: " \xB5g/m\xB3",
        label: "Indeks PM1.0",
        pointer: true,
 /*       customSectors: {
          length: true,
          ranges: [{
          color : "#55B016",
          lo : 0,
          hi : 20
        },{
          color : "#AEDC20",
          lo : 21,
          hi : 60
        },{
          color : "#FED821",
          lo : 61,
          hi : 100
        },{
          color : "#E4800B",
          lo : 101,
          hi : 140
        },{
          color : "#E40201",
          lo : 141,
          hi : 200
        },{
          color : "#980100",
          lo : 201,
          hi : 1000
        }],
    },*/
        pointerOptions: {
          toplength: -10,
          bottomlength: 8,
          bottomwidth: 8,
          color: '#8e8e93',
          stroke: '#fff',
          stroke_width: 2,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.5,
        counter: true,
        relativeGaugeSize: true
      });

      var g4 = new JustGage({
        id: 'g4',
        value: 1,
        min: -50,
        minTxt: "-50",
        max: 50,
        maxTxt: "50",
        symbol: " \xB0C",
        label: "Temperatura",
        pointer: true,
        customSectors: {
          length: true,
          ranges: [{
          color : "#0090ff",
          lo : -50,
          hi : 0
        },{
          color : "#ed0e0e",
          lo : 0,
          hi : 50
        }],
    },
        pointerOptions: {
          toplength: -10,
          bottomlength: 8,
          bottomwidth: 8,
          color: '#8e8e93',
          stroke: '#fff',
          stroke_width: 2,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.5,
        counter: true,
        relativeGaugeSize: true
      });
      var g5 = new JustGage({
        id: 'g5',
        value: 60,
        min: 0,
        minTxt: "0%",
        max: 100,
        maxTxt: "100%",
        symbol: " %",
        label: "Wilgotność",
        pointer: true,
        customSectors: {
          length: true,
          ranges: [{
          color : "#0090ff",
          lo : 0,
          hi : 100
        }],
    },
        pointerOptions: {
          toplength: -10,
          bottomlength: 8,
          bottomwidth: 8,
          color: '#8e8e93',
          stroke: '#fff',
          stroke_width: 2,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.5,
        counter: true,
        relativeGaugeSize: true
      });