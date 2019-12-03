function barChart(idGraph,marks)
{
    if(idGraph!='')
    {
        var PreOrPostNeed = [];
        var values = [];
        var data = [];
        
        $.each(JSON.parse(marks), function( index, value ) {
           PreOrPostNeed.push(value.label);
            values.push(value.data);
           
        });
       
        
        
       var mixedChart = new Chart(idGraph, {
            type: 'doughnut',
            data: {
                labels: PreOrPostNeed,
                datasets: [{
                    label: 'Data Set',
                    data: values,
                     backgroundColor : [
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex()
                  ],
                    order: 1
                }],
               
            },
            options: {}
        });
    }
    else
    {
        //Show Error Message 
    }
}

function lineChar(idGraph, marks)
{
    var label        = [];
    var values          = [];
    var value            = [];
    
    
        
    $.each(JSON.parse(marks), function( index, value ) {
       label.push(value.label);
        values.push(value.data);
    });
    
    if(idGraph!='')
    {
       
        var chart = new Chart(idGraph, {
        // The type of chart we want to create
        type: 'bar',   

            // The data for our dataset
            data: {
                labels: label,
                datasets: [{
                    label: 'My First dataset',
                    
                    backgroundColor : [
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex()
                  ],
                    borderColor: 'rgb(255, 99, 132)',
                    data:values 
                },
                {
                    label: 'Line Dataset',
                    data: [10, 10, 10, 10],
                    type: 'line',
                    // this dataset is drawn on top
                    order: 2
                },
                
                 {
                    label: 'Line Dataset',
                    data: [100,0,30,10 ,50],
                    backgroundColor : [
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex()
                  ],
                    borderColor: '#80C38C',
                    hoverBackgroundColor: '#80C38C',
                    hoverBorderColor: '#80C38C',
                    type: 'line',
                    order: 2
                }
            ]
            },
            options: {}
        });
    }
    else
    {
        //Show Error Message 
    }
}


function testChart(idGraph,marks)
{
    if(idGraph!='')
    {
        var PreOrPostNeed = [];
        var values = [];
        var data = [];
        
        $.each(JSON.parse(marks), function( index, value ) {
           PreOrPostNeed.push(value.label);
            values.push(value.data);
           
        });
       
       var mixedChart = new Chart(idGraph, {
            type: 'pie',
            data: {
                labels: PreOrPostNeed,
                datasets: [{
                    label: 'Data Set',
                    data: values,
                     backgroundColor : [
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex(),
                    getRandomColorHex()
                  ],
                    order: 1
                }],
               
            },
            options: {}
        });
    }
    else
    {
        //Show Error Message 
    }
}


function doubledonatChart(idGraph, marks)
{
   
    var lable = [];
    var values = [];
    var color = [];
    $.each(JSON.parse(marks), function( index, value ) {
           lable.push(value.label);
           color.push(value.color);
           values.push(value.value);
    });
    
    var mixedChart = new Chart(idGraph, {
         type: 'doughnut',
         data: {
             labels: ['Test', 'TEst2'],
             backgroundColor:color,
             datasets: [{
                    label: lable,
                    data: values,
                     backgroundColor : color,
                    order: 1
                },
                {
                    label: lable,
                    data: values,
                     backgroundColor : color,
                    order: 1
                },
                {
                    label: lable,
                    data: values,
                     backgroundColor : color,
                    order: 1
                },
            
            
            ],
         },
         options: {}
     });
}

function isStatck(idGraph,stackData)
{
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [
                {
                  label: 'Low',
                  data: [67.8],
                  backgroundColor: '#D6E9C6' // green
                },
                {
                  label: 'Moderate',
                  data: [20.7],
                  backgroundColor: '#FAEBCC' // yellow
                },
                {
                  label: 'High',
                  data: [11.4],
                  backgroundColor: '#EBCCD1' // red
                }
              ]
        },
        options: {}
    });
}

function getRandomColorHex() {
    var hex = "0123456789ABCDEF",
        color = "#";
    for (var i = 1; i <= 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

