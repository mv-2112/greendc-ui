import React from 'react';
import axios from 'axios';

export default class DatacentreView extends React.Component {
  state = {
    datacentres: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/greendc/datacentres`)
      .then(res => {
        const datacentres = res.data;
        this.setState({ datacentres });
      })
  }

  render() {
    return (
      <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Year built</th>
          <th>Green Electricity %-age</th>
        </tr>
        {this.state.datacentres
            .map(datacentre => (
            <tr key={datacentre.id}>
              <td>{datacentre.name}</td>
              <td><a href="{datacentre.location}">{datacentre.location}</a></td>
              <td>{datacentre.built}</td>
              <td>{datacentre.greenElecPercentage}</td>
            </tr>
          ))}
      </tbody>
    </table>
    )
  }
}
