import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { resourceSchema } from "./sanity/schemas/resource";

export default defineConfig({
  name: "mama-giulia",
  title: "MamaGiulia — Studio",
  projectId: "c9cdmt22",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [resourceSchema],
  },
});
