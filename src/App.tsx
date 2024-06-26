import { Layout, Header, Hero } from "./components";
import AccountAssistance from "./components/AccountAssistance";
import SetupProcess from "./components/SetupProcess";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <SetupProcess completedSteps={1} totalSteps={6} />
      <AccountAssistance />
    </Layout>
  );
}

export default App;
