import React from 'react';
import axios from 'axios';

export default class ServerTypeView extends React.Component {
  state = {
    servertypes: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/greendc/servertypes`)
      .then(res => {
        const servertypes = res.data;
        this.setState({ servertypes });
      })
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Performance Rating</th>
            <th>Power Consumption (W)</th>
            <th>Perf/W</th>
          </tr>
          {this.state.servertypes
            .map(servertype => (
              <tr key={servertype.id}>
                <td>{servertype.manufacturer}</td>
                <td>{servertype.model}</td>
                <td>{servertype.perf_rating}</td>
                <td>{servertype.power_consumption}</td>
                <td>{servertype.perf_rating / servertype.power_consumption}</td>                
              </tr>
            ))}
        </tbody>
      </table>
    )
  }
}
