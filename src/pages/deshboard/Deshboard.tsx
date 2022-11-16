import { Col, Row } from "react-bootstrap"
import "./Deshboard.css"
import { ProductCards } from "../../shared/components";

export const Deshboard = () => {
    return (
        <>
            <Row>
                <Col className="background-dashborad text-dashboard" sm={12} md={12} lg={12} xl={12}>
                    <h1>Welcome</h1>
                    <p>This is for you, here you can buy a lot of products</p>

                </Col>
            </Row>
            <Row>
                <ProductCards
                    cardTitle="Card Title"
                    cardDescription="Description"
                    altImg="Image description"
                    img=""
                />
            </Row>
        </>
    )
}