import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      // any request starting with /api
      "/api": {
        // send to this backend server
        target: "http://localhost:3000",
        // change the host header to match target
        changeOrigin: true,
      },
      // any request starting with /public
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
