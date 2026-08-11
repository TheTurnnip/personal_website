/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

const isVercel = !!process.env.VERCEL;

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  // `output: 'standalone'` is useful for self-hosting but can break Vercel
  // builds (missing nft.json). Disable it when running on Vercel.
  ...(isVercel ? {} : { output: "standalone" }),
};

export default config;
