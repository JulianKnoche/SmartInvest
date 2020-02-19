import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class PortfolioChart extends React.Component {
    render () {
        const data = [{date: '2020-02-11', price: 400}, {date: '2020-02-12', price: 300}, {date: '2020-02-13', price: 300}, {date: '2020-02-14', price: 800}];

        return (
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
      </LineChart>
        )
    }
}

export default PortfolioChart;