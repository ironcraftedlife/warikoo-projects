// Temporary local prototype: off unless explicitly enabled, and never on Vercel.
export const demoVideoEnabled =
  process.env.NEXT_PUBLIC_ENABLE_DEMO_VIDEO === "true" && process.env.VERCEL !== "1";
