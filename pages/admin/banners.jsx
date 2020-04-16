import { ALayout } from "../../components/admin-layout"
import { Row, Col } from "../../components/row";
import { Input } from "../../components/input";
import { useState } from "react";
import { BItem } from "../../components/banners";

const AdminPage = ({}) => {

    const [active, setActive] = useState(null)

    return (
        <ALayout>
            <Row>
                <Col cols="8">
                    {!!active && 
                    <BItem 
                        title={active.title} 
                        anons={active.anons} 
                        rubric={active.rubric} 
                    />
                    }
                </Col>
                <Col cols="4">
                    <Input placeholder="Поиск по названию" />
                </Col>
            </Row>
        </ALayout>
    )
}

export default AdminPage