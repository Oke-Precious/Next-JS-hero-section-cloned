import type {NextConfig} from 'next';

const allowedOrigins = ['localhost', '127.0.0.1'];
if (process.env.NG_ALLOWED_HOSTS) {
  allowedOrigins.push(process.env.NG_ALLOWED_HOSTS);
}

const nextConfig: NextConfig = {
  allowedDevOrigins: allowedOrigins,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
