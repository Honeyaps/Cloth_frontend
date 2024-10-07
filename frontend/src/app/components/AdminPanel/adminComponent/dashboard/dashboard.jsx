import React from 'react';
import CountUp from 'react-countup'; // Import CountUp
import './dashboard.css'; // Optional for additional styling

export const Dashboard = () => {
  // Mocked data. Replace these values with data fetched from your backend.
  const totalUsers = 12;
  const totalOrders = 45;
  const averageOrderQuantity = 8;
  const totalRevenue = 1245.00;
  const totalProductsSold = 1200;

  return (
    <div className="container-fluid">
      {/* Row for the Dashboard title */}
      <div className="row">
        <div className="col-md-12 card shadow p-3">
          <h3 className="dashboard-title">Dashboard</h3>
        </div>
      </div>

      {/* Row for dashboard cards */}
      <div className="row mt-2">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <p className="card-title">Total Users</p>
              <h5 className="card-text">
                <CountUp start={0} end={totalUsers} duration={3} easing="easeOutQuint" />
              </h5>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <p className="card-title">Total Orders</p>
              <h5 className="card-text">
                <CountUp start={0} end={totalOrders} duration={3} easing="easeOutQuint" />
              </h5>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <p className="card-title">Average Order Quantity</p>
              <h5 className="card-text">
                <CountUp start={0} end={averageOrderQuantity} duration={3} easing="easeOutQuint" />
              </h5>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <p className="card-title">Total Revenue</p>
              <h5 className="card-text">
                <CountUp start={0} end={totalRevenue} duration={3} easing="easeOutQuint" prefix="$" />
              </h5>
            </div>
          </div>
        </div> 
      </div>

      <div className="row mt-2">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card shadow">
            <div className="card-body">
              <p className="card-title">Total Products Sold</p>
              <h5 className="card-text">
                <CountUp start={0} end={totalProductsSold} duration={3} easing="easeOutQuint" useEasing={true} separator=","  />
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Row for additional dashboard content */}
      <div className="row mt-2">
        {/* Recent Activities */}
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Sold Count</th> 
                    <th scope="col">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product 1</td>
                    <td>10</td>
                    <td>$100.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* System Alerts */}
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">System Alerts</h5>
              <p className="card-text">No critical alerts at the moment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
