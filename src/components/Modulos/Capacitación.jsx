import React from 'react'

export const Capacitacion = () => {
    return (
        <div className="layout_home">

            <Row gutter={48} type="flex" justify="space-around" align="top" >
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="div_reclutamiento">
                        <h3>
                            CARACTERISTICAS
                        </h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam laudantium
                            similique voluptas cum tenetur aperiam perspiciatis! Eaque esse ratione, unde
                            aliquam iusto odio. Aspernatur exercitationem illo nam dolorem voluptatibus
                            quos?
                        </p>
                    </div>
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    <Card hoverable={true}>
                        <div className="div_reclutamiento_card">
                            <li><FontAwesomeIcon icon={faWrench} size="3x" mask={['far', 'circle']} /></li>
                            <h3>Hola que hace</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quas, in, debitis modi omnis ipsam, neque obcaecati aliquam libero corrupti recusandae rerum impedit vitae est natus animi beatae voluptatibus eveniet.</p>
                            <a className="button_reclutamiento" href="">Learn More</a>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    <Card hoverable={true}>
                        <div className="div_reclutamiento_card">
                            <li><FontAwesomeIcon icon={faWrench} size="3x" mask={['far', 'circle']} /></li>
                            <h3>Hola que hace</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quas, in, debitis modi omnis ipsam, neque obcaecati aliquam libero corrupti recusandae rerum impedit vitae est natus animi beatae voluptatibus eveniet.</p>
                            <a className="button_reclutamiento" href="">Learn More</a>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} xl={8}>
                    <Card hoverable={true}>
                        <div className="div_reclutamiento_card">
                            <li><FontAwesomeIcon icon={faWrench} size="3x" mask={['far', 'circle']} /></li>
                            <h3>Hola que hace</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quas, in, debitis modi omnis ipsam, neque obcaecati aliquam libero corrupti recusandae rerum impedit vitae est natus animi beatae voluptatibus eveniet.</p>
                            <a className="button_reclutamiento" href="">Learn More</a>
                        </div>
                    </Card>
                </Col>
            </Row>

            <div className="div_background_color_reclutamiento" >
                <Row gutter={48} type="flex" justify="space-around" >
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <div className="div_info_home">
                            <img src={imagen_reclutamiento} alt="" />
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>

                        <div className="div_background_color_reclutamiento_info">

                            <h3>Hola que hace</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quas, in, debitis modi omnis ipsam, neque obcaecati aliquam libero corrupti recusandae rerum impedit vitae est natus animi beatae voluptatibus eveniet.</p>

                            <a className="button_reclutamiento" href="" >Learn More</a>
                        </div>

                    </Col>
                </Row>
            </div >
            <div className="div_contacto">
                <Row gutter={48} type="flex" justify="center" >
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <div >
                            <p className="div_contacto_reclutamiento_text1">Listo para registrarte?</p>
                            <p className="div_contacto_text2">Contacta o crea una cuenta</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                        <div className="div_contacto_boton">
                            <a className="button_reclutamiento" href="" >Learn More</a>
                            <a className="button_reclutamiento" href="" >Learn More</a>
                        </div>

                    </Col>
                </Row>

            </div>

        </div>

    )
}