import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  pageExtensions: [
    `${process.env.NEXT_PUBLIC_REGION}.tsx`,
    "tsx",
    `${process.env.NEXT_PUBLIC_REGION}.ts`,
    "ts",
  ],
  webpack: (config) => {
    config.resolve = {
      alias: {
        ["@"]: path.resolve(__dirname, "."),
      },
      extensions: [
        `.${process.env.NEXT_PUBLIC_REGION}.ts`,
        ".ts",
        `.${process.env.NEXT_PUBLIC_REGION}.tsx`,
        ".tsx",
        "",
        "...",
      ],
    };
    return config;
  },
};
export default nextConfig;
