/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [resolve(__dirname, 'styles')],
  },
};

export default nextConfig;
