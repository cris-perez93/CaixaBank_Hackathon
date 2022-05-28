import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Heading } from '../../Atoms/Heading'
import styled, { css } from 'styled-components'

const containerGraphic = css`
   padding:20px;
   display: flex; 
   flex-direction:column;
   justify-content:space-evenly;
   width:844px;
   max-width:80%;
   
   border-radius:10px ;
   border: solid 1px #e8e8e8 ;
  `

export const ContainerGraphic = styled.div`
  ${containerGraphic}
`

export const Graphic = () => {
  const options = {
    chart: {
      type: 'area'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        enabled: true
      }
    },
    yAxis: {
      categories: ['0', '$10k', '$20k', '$30k', '$40k'],
      labels: {
        enabled: true
      }
    },
    series: [
      {
        type: 'area',
        data: [0, 0.3, 2, 3, 2, 1, 0.6]

      }
    ],
    chartWidth: 300

  }

  return (
       <ContainerGraphic>
         <Heading title>Weekly expenses</Heading>
         <HighchartsReact highcharts={Highcharts} options={options} />
         <div>
         <Heading secondary>Total revenue</Heading>
         <Heading title>$100k</Heading>
         <Heading tertiary>7,00%</Heading>
         </div>
       </ContainerGraphic>

  )
}

export const GraphicPie = () => {
  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Screens',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Phones',
        y: 11.84
      }, {
        name: 'Pcs',
        y: 10.85
      }, {
        name: 'Electronics',
        y: 4.67
      }]
    }],
    xAxis: {
      categories: ['Screens', 'Pcs', 'Phones'],
      labels: {
        enabled: true
      }
    }

  }

  return (

        <HighchartsReact highcharts={Highcharts} options={options} />

  )
}
