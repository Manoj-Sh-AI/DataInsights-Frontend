import React from 'react'
import "./CrimeSecond.css"
import { Link } from 'react-router-dom';

const CrimeSecond = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Please Selelect the <a className='Type'>Type</a> of Crime</h2>
      <div className="years">
        <div className="year">
          <h3>Crime Against <br />Women</h3>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsa corporis sequi aliquid cupiditate reiciendis quas debitis
          </p>
          <Link to="https://app.powerbi.com/reportEmbed?reportId=a29cdce9-e858-4d22-9031-41ef552869e6&autoAuth=true&ctid=5e6e043f-b14f-4f58-9b38-939a1393e404" className="new_btn">Open Dashboard</Link>
          <p><br /></p>
        </div>
        <div className="year">
          <h3>Crime By Place of Occurrence</h3>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsa corporis sequi aliquid cupiditate reiciendis quas debitis
          </p>
          <Link to="https://app.powerbi.com/reportEmbed?reportId=9add3c82-8f7f-455e-a957-127f99cacd89&autoAuth=true&ctid=5e6e043f-b14f-4f58-9b38-939a1393e404" className="new_btn">Open Dashboard</Link>
          <p><br /></p>
        </div>
        <div className="year">
          <h3>Indian Penal Code (IPC) Crimes</h3>
          <p className='para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            ipsa corporis sequi aliquid cupiditate reiciendis quas debitis
          </p>
          <Link to="https://app.powerbi.com/reportEmbed?reportId=c40e8054-8079-46a7-9316-f39f56c5c061&autoAuth=true&ctid=5e6e043f-b14f-4f58-9b38-939a1393e404" className="new_btn">Open Dashboard</Link>
          <p><br /></p>
        </div>
      </div>
    </div>
  )
}

export default CrimeSecond
