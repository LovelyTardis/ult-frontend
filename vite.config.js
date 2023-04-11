import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return defineConfig({
    server: {
      port: process.env.VITE_PORT,
      https: true,
    },
    base: "/",
    plugins: [react(), mkcert()],
  });
};
