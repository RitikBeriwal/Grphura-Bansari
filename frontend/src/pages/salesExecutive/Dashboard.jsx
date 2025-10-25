import React, { useState } from "react";
import clientData from "../../assets/salesExecutive/Dashboard/clientData.png";
import payout from "../../assets/salesExecutive/Dashboard/payout.png";
import prospectNumber from "../../assets/salesExecutive/Dashboard/prospectNumber.png";
import totalSales from "../../assets/salesExecutive/Dashboard/totalSales.png";
import "../../style/salesExecutive/dashboard.css";
// import { Button } from "bootstrap";

const Dashboard = () => {
  const [showPopup, setShowpopup] = useState(false);

  const openPopup = () => setShowpopup(true);
  const closePopup = () => setShowpopup(false);

  return (
    <main>
      <div id="dashboard">
        <div id="dashboard-container">
          <section id="dashboard-data">
            <h1>Dashboard</h1>
            <div id="data-wrap">
              <div id="data">
                <h3>TOTAL CLIENT'S DATA</h3>
                <div id="num-vector">
                  <p>300</p>
                  <img src={clientData} alt="" />
                </div>
              </div>
              <div id="data">
                <h3>TOTAL SALES</h3>
                <div id="num-vector">
                  <p>7</p>
                  <img src={totalSales} alt="" />
                </div>
              </div>
              <div id="data">
                <h3>LAST MONTH PAYOUT</h3>
                <div id="num-vector">
                  <p>8000</p>
                  <img src={payout} alt="" />
                </div>
              </div>
              <div id="data">
                <h3>PROSPECT NUMBER</h3>
                <div id="num-vector">
                  <p>16</p>
                  <img src={prospectNumber} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section id="hot-clients">
            <div id="container">
              <div id="clients">
                <h1>Hot Clients</h1>
                <div id="client-list">
                  <table>
                    <thead>
                      <th> </th>
                      <th>Company Name</th>
                      <th>Client Name</th>
                      <th>Email_id</th>
                      <th>Contact no.</th>
                      <th>Reminder Date</th>
                      <th>Activity</th>
                      <th>Last Update</th>
                    </thead>
                    <tr>
                      <td>1</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openPopup}>Update</button>
                      </td>
                      <td>
                        <button>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openPopup}>Update</button>
                      </td>
                      <td>
                        <button>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openPopup}>Update</button>
                      </td>
                      <td>
                        <button>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openPopup}>Update</button>
                      </td>
                      <td>
                        <button>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openPopup}>Update</button>
                      </td>
                      <td>
                        <button>View</button>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Graphura India</td>
                      <td>Vivek Kumar</td>
                      <td>vivek@gmail.com</td>
                      <td>0123456789</td>
                      <td>10/10/25</td>
                      <td>
                        <button onClick={openPopup}>Update</button>
                      </td>
                      <td>
                        <button>View</button>
                      </td>
                    </tr>
                  </table>
                  {showPopup && (
                    <div id="popup-overlay" onClick={closePopup}>
                      <div id="popup-box" onClick={(e) => e.stopPropagation()}>
                        <div id="popup-header">
                          <h3>Last Update</h3>
                          <button id="close-btn" onClick={closePopup}>
                            Close
                          </button>
                        </div>

                        <div id="popup-content">
                          <div className="update-row">
                            <p className="date">25/06/2025 07:04 PM</p>
                            <p className="desc">
                              I cannot directly generate HTML and CSS from an
                              image of a dashboard. My capabilities do not
                              extend to converting visual layouts into code.
                            </p>
                          </div>

                          <div className="update-row">
                            <p className="date">25/06/2025 07:04 PM</p>
                            <p className="desc">
                              I cannot directly generate HTML and CSS from an
                              image of a dashboard. My capabilities do not
                              extend to converting visual layouts into code.
                            </p>
                          </div>

                          <div className="update-row">
                            <p className="date">25/06/2025 07:04 PM</p>
                            <p className="desc">
                              I cannot directly generate HTML and CSS from an
                              image of a dashboard. My capabilities do not
                              extend to converting visual layouts into code.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
