import React from 'react'
import Modals from './Modals'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Footer() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="bg-primary text-center p-3">
            <div className="wrapper pb-3" id="socialicons">
                <a href="#"><i className='fab fa-facebook' style={{ fontSize: "30px", color: 'white' }}></i></a>
                <a href="#"><i className='fab fa-instagram' style={{ fontSize: "30px", color: 'white' }}></i></a>
                <a href="#"><i className='fab fa-twitter' style={{ fontSize: "30px", color: 'white' }}></i></a>
            </div>
            <div className="bg-primary" >
            <div  style={{ width: 100, height: 50 }}>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="tmdb-logo" />
            </div>
             <p className="text-light fs-5">We live and breathe community and that's precisely what makes us different.</p>
             <a className="text-light" href="https://www.themoviedb.org/privacy-policy" target="_blank">Privacy Policy</a>
             <span className="text-light ">|</span>
             <a className="text-light  my-4" href="https://www.themoviedb.org/terms-of-use" target="_blank">Terms of use</a>
             <span className="text-light ">|</span>
             <a className="text-light  my-4" href="#" onClick={() => setModalShow(true)}>
                Contact us
             </a>
             <Modals
                show={modalShow}
                onHide={() => setModalShow(false)}
             />
         </div>
        </div>
    )
}

export default Footer