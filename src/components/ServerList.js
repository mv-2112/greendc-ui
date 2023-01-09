import React from 'react';
import axios from 'axios';

export default class ServerView extends React.Component {
  state = {
    servers: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/greendc/servers`)
      .then(res => {
        const servers = res.data;
        this.setState({ servers });
      })
  }

  render() {
    return (
      <table>
      <tbody>
        <tr>
          <th>Count</th>
          <th>Manufacturer</th>
          <th>Model</th>
          <th>Location</th>
          <th>Total Power Consumption (W)</th>
          <th>Total Perf/W</th>
        </tr>
        {this.state.servers
          .map(server => (
            <tr key={server.id}>
              <td>{server.count}</td>
              <td>{server.servertype.manufacturer}</td>
              <td>{server.servertype.model}</td>
              <td>{server.datacentre.name}</td>
              <td>{Math.round((server.servertype.power_consumption * server.count))}</td>
              <td>{Math.round((server.servertype.perf_rating / server.servertype.power_consumption) * server.count)}</td>      
            </tr>
          ))}
      </tbody>
    </table>
    )
  }
}
