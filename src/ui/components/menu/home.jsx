import React, { useState, useEffect, useRef } from 'react';
import '../../pages/menu/menu.css';
import { Chart, registerables } from 'chart.js'; // Importar Chart.js
import {
  BsBoxSeam,
  BsPeopleFill,
  BsListCheck,
} from 'react-icons/bs';

Chart.register(...registerables);

function Home() {
  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);

  // Estado inicial para los conteos
  const [dataCounts, setDataCounts] = useState({
    products: 0,
    categories: 0,
    users: 0,
  });

  // Simulación de datos obtenidos desde un API
  useEffect(() => {
    const fetchData = async () => {
      // Simula la obtención de datos (reemplázalo con tu API real)
      setTimeout(() => {
        setDataCounts({
          products: 120,
          categories: 10,
          users: 50,
        });
      }, 1000);
    };

    fetchData();
  }, []);

  // Configuración de los gráficos
  useEffect(() => {
    const barData = {
      labels: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
      datasets: [
        {
          label: 'Productos por Categoría',
          data: [30, 20, 25, 15, 10],
          backgroundColor: '#188353',
          borderColor: '#10442f',
        },
      ],
    };

    const barOptions = {
      plugins: {
        title: {
          display: true,
          text: 'Productos por Categoría',
          font: {
            size: 18,
          },
        },
      },
      scales: {
        x: {
          stacked: false,
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    const lineData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          label: 'Usuarios Registrados',
          data: [10, 20, 15, 30, 25],
          borderColor: '#136944',
          fill: false,
        },
        {
          label: 'Nuevos Productos',
          data: [5, 8, 12, 7, 10],
          borderColor: '#49be83',
          fill: false,
        },
      ],
    };

    const lineOptions = {
      plugins: {
        title: {
          display: true,
          text: 'Crecimiento Mensual',
          font: {
            size: 18,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    };

    const barChart = new Chart(barChartRef.current, {
      type: 'bar',
      data: barData,
      options: barOptions,
    });

    const lineChart = new Chart(lineChartRef.current, {
      type: 'line',
      data: lineData,
      options: lineOptions,
    });

    return () => {
      barChart.destroy();
      lineChart.destroy();
    };
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>PANEL DE GESTIÓN</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTOS</h3>
            <BsBoxSeam className="card_icon" />
          </div>
          <h3>{dataCounts.products}</h3>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CATEGORÍAS</h3>
            <BsListCheck className="card_icon" />
          </div>
          <h3>{dataCounts.categories}</h3>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>USUARIOS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h3>{dataCounts.users}</h3>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>USUARIOS</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h3>{dataCounts.users}</h3>
        </div>
      </div>
      <div className="charts">
        <div className="chart-container">
          <canvas ref={barChartRef} />
        </div>
        <div className="chart-container">
          <canvas ref={lineChartRef} />
        </div>
      </div>
    </main>
  );
}

export default Home;
