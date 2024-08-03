import Authenticated from '@/layouts/authenticated'
import { Fragment } from 'react'
import BlockEditor from "@/components/editor/block-editor";

const Dashboard = () => {
  return (
    <Fragment>
        <BlockEditor/>
    </Fragment>
  )
}

Dashboard.layout = (page: any) => <Authenticated>{page}</Authenticated>
export default Dashboard
