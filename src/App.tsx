import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import StoreDashboard from "./StoreDashboard"


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <StoreDashboard />
    </QueryClientProvider>
  )
}

export default App
