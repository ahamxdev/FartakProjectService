// import { NextConfig } from "next";
// import createNextIntlPlugin from "next-intl/plugin";

// const nextConfig: NextConfig = {};

// const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
// export default withNextIntl(nextConfig);

import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.fartakproject.ir" , "https://www.fartakproject.ir"],
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
