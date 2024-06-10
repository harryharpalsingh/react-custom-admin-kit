import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Dashboard from './dashboard';
import Comments from './comments';
import StocksData from "./StockAPI/stockAPI";

function Sidebar() {
    return (
        <BrowserRouter>
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky pt-3">
                    <ul class="nav flex-column">
                        <li class="nav-item d-flex">
                            <Link to="/" className="nav-link" aria-current="page">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" aria-hidden="true">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                <span className="sidebarNavigationTitle">Dashboard</span>
                            </Link>
                        </li>
                        <li class="nav-item d-flex">
                            <Link to="/Stocks" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
                                </svg>
                                <span className="sidebarNavigationTitle">Stocks</span>
                            </Link>
                        </li>
                        <li class="nav-item d-flex">
                            <Link to="/Comments" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                <span className="sidebarNavigationTitle">Comments</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='page-wrapper'>
                <div className='page-content'>
                    <Routes>
                        <Route path="/Dashboard" element={<Dashboard />} />
                        <Route path="/Stocks" element={<StocksData />} />
                        <Route path="/Comments" element={<Comments />} />
                        <Route path="/" element={<Navigate to="/Dashboard" />} />
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default Sidebar;