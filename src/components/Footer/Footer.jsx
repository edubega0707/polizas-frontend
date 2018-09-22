import React from 'react'
import {Row, Col} from 'antd';
import fafacebook from '../../images/iconos/Facebook.svg'
import faInstagram from '../../images/iconos/Instagram.svg'
import faTwiteer from '../../images/iconos/Twitter.svg'

export const Footer=()=>{
    return(
        <div className="footer">
            <Row gutter={48} type="flex" justify="space-around" align="top" >
                <Col xs={24} sm={12} md={5} lg={3} xl={3} >
                    <div className="footer_nav">
                        <ul>
                            <li>Home</li>
                            <li>Productos</li>
                            <li>Beneficios</li>
                            <li>Precios</li>
                         </ul>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                    <div className="footer_seccion_dos">
                        <p>
                           El sistema de polizas  te beneficiara
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={10} lg={10} xl={10}>
                    <div className="footer_seccion_tres">
                        <h4>Politica de Privacidad</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro facilis culpa, animi perspiciatis, nulla quasi ipsum est eligendi, vero adipisci nobis. Voluptatibus ipsam velit, autem necessitatibus sed ex eum culpa.
                        </p>
                    </div>
                </Col>
               
            </Row>
            <Row  type="flex" justify="center" align="center" >
                <div className="footer_follow">
                    <ul>
                        <li>Siguenos:</li>
                        <li><img src={fafacebook} alt=""/></li>
                        <li><img src={faTwiteer} alt=""/></li>
                        <li><img src={faInstagram} alt=""/></li>       
                    </ul>
                    <p>Derechos Reservados</p>
                </div>
            </Row>
            
        </div>
    )
}