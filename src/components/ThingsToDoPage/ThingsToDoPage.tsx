import React, { FC } from 'react';
import './ThingsToDoPage.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { thingsToDo, IBusiness, IThingsToDo } from '../../data';

const ThingsToDoPage: FC<({ isMobile: boolean })> = (props) => {

    const generateList = (itemList: IBusiness[]) => {
        return itemList.map((item: IBusiness, index) =>
            <div className="thing-to-do" key={index}>
                <div className="title">{item.name}</div>
                {item.googleSearch ?
                    <a className="color-corrected-link" href={item.googleSearch} target="_blank" rel="noopener noreferrer">{item.address.split('\n').map(text => <div>{text}</div>)}</a>
                    :
                    item.address.split('\n').map(text => <div>{text}</div>)
                }

            </div>
        )
    }

    const generateCol = (thingToDo: IThingsToDo) => {
        return (
            <div className="thing-to-do-section" style={{ paddingTop: '34px' }}>
                <div className="headline">{thingToDo.headline}</div>
                {generateList(thingToDo.businessList)}
            </div>
        )
    }
    return (
        <Container id="thingsToDoPage-container" fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <Row>
                <div>9 Bridge St, Montgomery, NY 12549</div>
                <div className="horizontal-divider divider"></div>
                <div className="title-heading">THINGS</div>
                <div style={{ marginTop: '-10px' }}>to do. see. & eat.</div>
            </Row>
            <Row>
                <Col xs={12} md={6} style={!props.isMobile ? { textAlign: 'left' } : {}}>
                    {generateCol(thingsToDo[0])}
                </Col>
                <Col xs={12} md={6} style={!props.isMobile ? { textAlign: 'right' } : {}}>
                    <Row>
                        {generateCol(thingsToDo[1])}
                    </Row>
                    <Row>
                        {generateCol(thingsToDo[2])}
                    </Row>
                </Col>
            </Row>


        </Container >
    )
}

export default ThingsToDoPage;