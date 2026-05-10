// Single file to customize per client deployment
// Switch client via env var: SITE_CLIENT=aakash-pest-control

import aakash from "../clients/aakash-pest-control/config";

const clientMap: Record<string, typeof aakash> = {
  "aakash-pest-control": aakash,
};

const clientKey = process.env.SITE_CLIENT ?? "aakash-pest-control";
export const siteConfig = clientMap[clientKey] ?? aakash;
