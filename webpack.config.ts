import { constructModuleWebpackConfig } from "@scottbenton/apps-build";
import { ModuleScope } from "@scottbenton/apps-config";

const config = constructModuleWebpackConfig({
  name: ModuleScope.IronLink, // Replace with your new module scope
  modules: [ModuleScope.Authentication], // Include any other modules that this module references
  dependencies: {},
  exposes: {
    "./routes": "./src/routes.tsx",
  }, // Define your exports here
});

export default config;
