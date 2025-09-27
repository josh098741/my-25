import FeatureFlags from "./components/feature-flag/index"
import FeatureFlagGlobalState from "./components/feature-flag/context";

function App() {
 
  return(
    <FeatureFlagGlobalState>
      <FeatureFlags  />
    </FeatureFlagGlobalState>
  );
}

export default App
