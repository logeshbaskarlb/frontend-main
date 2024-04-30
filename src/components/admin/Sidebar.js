import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

export default function Sidebar () {

    const navigate = useNavigate();

    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                <li className='my-4'>
                    <Link to="/admin/dashboard"><i className="fas fa-tachometer-alt"></i> <i className="fa-solid fa-d"></i>ashboard</Link>
                </li>
        
                <li className='my-4'>
                    <NavDropdown title={
                        <i className='fa fa-product-hunt'> Product</i>
                    }>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products')} > <i className='fa fa-shopping-basket'> All</i></NavDropdown.Item>
                        <NavDropdown.Item  onClick={() => navigate('/admin/products/create')} > <i className='fa fa-plus'> Create </i></NavDropdown.Item>
                    </NavDropdown>
                </li>

                <li className='my-4'>
                    <Link to="/admin/orders"><i className="fa fa-shopping-basket"></i> Orders</Link>
                </li>

                <li className='my-4'>
                    <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
                </li>

                <li className='my-4 fw-bold'>
                    <Link to="/admin/reviews"><i className="fa fa-users"></i> Reviews</Link>
                </li>
        
            </ul>
            </nav>
        </div>
    )
}