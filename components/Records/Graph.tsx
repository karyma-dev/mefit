import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import useToggle from '../../hooks/useToggle'

import Modal from './Modal'

const Graph = ({ data }) => {
  const [isOpen, setIsOpen] = useToggle()
  const [exercise, setExercise] = useState(false)

  const sortedData = data
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map((record) => {
      const d = new Date(record.date)
      const mm = d.toLocaleString('default', { month: 'short' }),
        dd = d.getDate(),
        yy = d.getFullYear().toString().substr(-2)
      return { ...record, date: `${mm} ${dd}/${yy}` }
    })

  const chartData = {
    datasets: [
      {
        data: sortedData,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        pointRadius: 5,
      },
    ],
  }
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      // tooltip: {
      //   callbacks: {
      //     label: function (context) {
      //       // console.log(context)
      //       // return 'hello'
      //     },
      //   },
      // },
    },
    parsing: {
      xAxisKey: 'date',
      yAxisKey: 'totalVolume',
    },
    onClick: (a, b) => {
      if (b.length > 0) {
        setExercise(sortedData[b[0].index])
        setIsOpen()
      }
    },
  }

  return (
    <div>
      <Line data={chartData} options={options} width={500} height={500} />
      {isOpen ? <Modal exercise={exercise} setIsOpen={setIsOpen} /> : null}
    </div>
  )
}

export default Graph
