import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faEllipsis, faBorderAll, faGear, faImage, faRectangleList, 
  faTableColumns, faBahai, faChartSimple, faArrowUpRightFromSquare, faChevronRight, faAngleDown, faSun } from '@fortawesome/free-solid-svg-icons';
import myImage from './skydashlogo.png';
import dp from './dp.jpg';

export default function Skydash(){
  return(
    <div className='container-fluid'>
      <div className='navbar bg-light fixed-top shadow'>
        <div className="d-flex w-100"> 
          <img className='me-5' src={myImage} alt="Logo" width="200" height="50" />
          <button className='btn header ms-5'><FontAwesomeIcon icon={faBars} /></button>
          <button className="btn header ms-5"><FontAwesomeIcon icon={faSearch} /></button>
          <input type="search" placeholder="Search now" className="form-control me-5 w-75" aria-label="Search" /> 
          <button className="btn header ms-5 position-relative"><FontAwesomeIcon icon={faBell} />
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2'>3</span>
          </button>
          <img src={dp} className='rounded-circle ms-3' alt='profile' width="50" height="50"/>
          <button className='btn header ms-3' ><FontAwesomeIcon icon={faEllipsis} /></button>
        </div>
      </div>
      <div className='row mt-4 pt-5'>
        <div className="nav flex-column sideitems col-md-2">
          <div className='main'>
            <div className='item'><a className="nav-link" href='/'><i class="fa-duotone fa-light fa-grid-2"></i> Dashboard</a></div>
            <div className='arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
          <div className='main'>
            <div className='item'><a className="nav-link" href='/'><FontAwesomeIcon icon={faGear} /> widgets</a></div>
            <div className='arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
          <div className='main'>
            <div className='item'><a className="nav-link" href='/'><FontAwesomeIcon icon={faTableColumns} /> UI Elements</a></div>
            <div className='arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
          <div className='main'>
            <div className='item'><a className="nav-link" href='/'><FontAwesomeIcon icon={faImage} /> Advanced UI</a></div>
            <div className='arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
          <div className='main'>
            <div className='item'><a className='nav-link' href='/'><FontAwesomeIcon icon={faRectangleList} /> Form elements</a></div>
            <div className='arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
          <div className='main'>
            <div className='item'><a className="nav-link" href='/'><FontAwesomeIcon icon={faBahai} /> Editors</a></div>
            <div className='arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
          <div className='main'>
            <div className='item'><a className="nav-link" href='/'><FontAwesomeIcon icon={faChartSimple} /> Charts</a></div>
            <div className='arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
          <div className='main'>
            <div className='item'><a className="nav-link" href='/'><FontAwesomeIcon icon={faBorderAll} /> Tables</a></div>
            <div className='arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
          <div className='main'>
            <div className='item'><a className="nav-link" href='/'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Popups</a></div>
            <div className='arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
        </div>
        <div className='container col-md-10 py-5'>
          <div className='welcome'>
            <h1>Welcome Aamir</h1>
            <div className='row ms-2'>
              <div className='col-md-10'><h5>All systems are running smoothly! You have <span style={{color:"blue"}}>3 unread alerts!</span></h5></div>
              <div className='date col-md-2'><h5>Today (25 Nov 2024) <FontAwesomeIcon icon={faAngleDown} /></h5></div>
            </div>
            <div className='row content mt-5'>
              <div className='image ms-5 col-md-6 position-relative'>
                <div className='position-absolute top-0 start-50 m-3 text-black text-end d-flex '> 
                    <div className='me-2'><h1><FontAwesomeIcon icon={faSun} /> 31°C</h1></div>
                    <div>
                      <h3>Bangalore</h3>
                      <h4>India</h4>
                    </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='ms-4 box' style={{backgroundColor:"rgb(62, 166, 214)"}}>
                      <ul>
                        <li>Today's Bookings</li>
                        <li><h1>4006</h1></li>
                        <li>10.00% (30 days)</li>
                      </ul>
                    </div>
                    <div className='ms-4 box' style={{backgroundColor:"rgb(123, 105, 167)"}}>
                      <ul>
                        <li>Total Bookings</li>
                        <li><h1>61344</h1></li>
                        <li>22.00% (30 days)</li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='ms-3 box' style={{backgroundColor:"rgb(36, 8, 104)"}}>
                      <ul>
                        <li>Number of Meetings</li>
                        <li><h1>34040</h1></li>
                        <li>2.00% (30 days)</li>
                      </ul>
                    </div>
                    <div className='ms-3 box' style={{backgroundColor:"rgb(255, 0, 106)"}}>
                      <ul>
                        <li>Number of Clients</li>
                        <li><h1>4006</h1></li>
                        <li>10.00% (30 days)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}