import React from 'react'
import "./CrimeThird.css"
import { Link } from 'react-router-dom';

const CrimeThird = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>World Crime Index <a className='HeatMap'>Heat Map</a></h2>
        <div className="year">
          <h3>World Crime Index</h3>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsa corporis sequi aliquid cupiditate reiciendis quas debitis
          </p>
          <a href="https://app.powerbi.com/reportEmbed?reportId=f3990e94-ee3e-4be8-8e72-b5d439d41063&autoAuth=true&ctid=5e6e043f-b14f-4f58-9b38-939a1393e404" target="_blank" rel="noopener noreferrer" class="new_btn" data-hidden-link>Open Dashboard</a>
          <p><br /></p>
        </div>
    </div>
  )
}

export default CrimeThird
