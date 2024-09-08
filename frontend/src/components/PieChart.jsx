import { Pie } from "react-chartjs-2";
import {Chart as Chartjs,CategoryScale,LinearScale,ArcElement,Title,Tooltip,Legend} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { PieData } from "./ChartData";
Chartjs.register(CategoryScale,LinearScale,ArcElement,Title,Tooltip,Legend,ChartDataLabels)

const PieChart = () => {
    const options = {
        responsive:true,
        plugins: {
            legend: {
                position: 'right',
            },
            
    }}

  return (
    <Pie options={options} data={PieData}/>
  )
}

export default PieChart
