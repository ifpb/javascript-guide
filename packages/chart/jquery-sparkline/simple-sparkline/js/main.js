const data = [0, 5, 6, 10, 9, 12, 4, 9]
const config = {
  type: 'bar',
  height: '50',
  barWidth: '10',
  resize: true,
  barSpacing: '5',
  barColor: '#7ace4c'
}
$('#sparklinedash').sparkline(data, config)