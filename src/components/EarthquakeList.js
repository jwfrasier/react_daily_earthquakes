import React, { Component } from 'react';
import moment from 'moment'
import earthquakes from '../data/earthquakes.js'
class EarthquakeList extends Component {
  render() {
    const actualInfo = earthquakes.features.map(actualDataForEachEarthquake =>{
      return(
        <div className="col-sm-6" key={actualDataForEachEarthquake.id}>
          <div className="card" >
            <div className="card-block">
      <h4 className="card-title">{actualDataForEachEarthquake.properties.place}</h4>
      <h6 className="card-subtitle mb-2 text-muted">Magnitude: {actualDataForEachEarthquake.properties.rmag}</h6>
      <h6 className="card-subtitle mb-2 text-muted">Time: {moment(actualDataForEachEarthquake.time).format('llll')}</h6>
      <p className="card-text">Coordinates: {actualDataForEachEarthquake.geometry.coordinates}</p>

      <a href={actualDataForEachEarthquake.properties.url} className="card-link">USGS Event Link</a>

    </div>
  </div>
</div>
)}
)
    return (
      <div className="quake-list">
        <div className="row">
      {actualInfo}
        </div>
      </div>
    );
  }
}
export default EarthquakeList
