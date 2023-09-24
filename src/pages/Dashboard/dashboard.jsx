import { Stack } from "@chakra-ui/react"
import DashboardLayout from "../../components/dashboardLayout"
import PortfolioSec from "./portfolioSec"
import PricingSec from "./pricingSec"
import CoinTracker from "../../components/coinTracker"

function Dashboard() {

  return (
    <DashboardLayout title="Dashboard">
      <Stack>
      <PortfolioSec/>
      <PricingSec/>
      <CoinTracker/>
      </Stack>
    </DashboardLayout>
  )
}

export default Dashboard