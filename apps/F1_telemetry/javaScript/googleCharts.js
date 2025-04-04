/* 
    src="https://www.gstatic.com/charts/loader.js
    https://developers.google.com/chart/interactive/docs
*/

// Load in the chart packages
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Basic example of pie chart build
function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.addRows([
        ['Example 1', 0.78],
        ['Example 2', 0.21],
        ['Example 3', 0.01]
    ]);

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
    chart.draw(data, null);
}