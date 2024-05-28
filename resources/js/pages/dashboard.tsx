import Authenticated from "@/layouts/authenticated";
import { Fragment } from "react";

const Dashboard = () => {
    return (
        <Fragment>
            <h1>Dashboard</h1>
        </Fragment>
    );
}

Dashboard.layout = (page: any) => <Authenticated>{page}</Authenticated>
export default Dashboard;