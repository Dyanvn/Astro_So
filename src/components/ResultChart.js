import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ResultChart({ lifePathNumber }) {
  const years = Array.from({ length: 10 }, (_, i) => 2025 + i);
  const dataPoints = years.map(() => lifePathNumber);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Số chủ đạo qua các năm',
        data: dataPoints,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chu kỳ vận số'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 22
      }
    }
  };

  return <Line data={data} options={options} />;
}

export default ResultChart;