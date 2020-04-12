import { Layout } from "../../components/layout"
import { useRouter } from "next/router"
import cookie from 'next-cookies'
import { Row } from "../../components/row"
import { Toolbar } from "../../components/toolbar"
import { ALayout } from "../../components/admin-layout"

const AdminPage = ({}) => {

    return (
        <ALayout>
            <div className="admin">
                <Toolbar />
            </div>
        </ALayout>
    )
}

export default AdminPage