import React, {Fragment} from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavAdmin({logout}) {
    /*<Nav.Link><Link to='/admin/dashboard'>Admin</Link></Nav.Link>*/

  return (
    <Fragment>

      <Nav.Link><span onClick={()=>{logout()}}>Salir</span></Nav.Link>
      {/* todos los Link que yo necesite */}
    </Fragment>
  )
}
