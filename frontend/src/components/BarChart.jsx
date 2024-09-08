import { Bar } from "react-chartjs-2";
import {Chart as Chartjs,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from "chart.js";
import { BarData } from "./ChartData";
Chartjs.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)

const BarChart = () => {
    const options = {
        responsive:true
    }

  return (
    <Bar options={options} data={BarData}/>
  )
}

export default BarChart
