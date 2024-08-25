import Authenticated from '@/layouts/authenticated'
import React, { Fragment } from 'react'

const Dashboard = () => {
  return <Fragment></Fragment>
}

Dashboard.layout = (page: React.ReactNode) => (
  <Authenticated children={page} title={'Header'} />
)
export default Dashboard
