import React from 'react'
import { Bar } from 'react-chartjs-2'

const Graph = ({ data }) => {
  const datasets = data
  const labels = data.map(({ date }) => {
    const d = new Date(date)
    const mm = d.getMonth(),
      dd = d.getDay(),
      hr = d.getHours(),
      min = d.getMinutes()

    console.log(`${mm}/${dd} - ${hr}:${min}`)
  })

  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Red Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'a',
      },
      {
        label: '# of Blue Votes',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
        stack: 'a',
      },
      {
        label: '# of Green Votes',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'a',
      },
    ],
  }
  const options = {
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  }
  return (
    <>
      <div className="header">
        <h1 className="title">Stacked Bar Chart</h1>
      </div>
      <Bar data={chartData} options={options} width={500} height={500} />
    </>
  )
}

export default Graph
