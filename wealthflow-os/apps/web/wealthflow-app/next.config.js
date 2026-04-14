//@ts-check
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // تفعيل الـ SVGR إذا كنت ستستخدم أيقونات SVG كـ Components
  },
  // تأكد من عدم وجود basePath هنا حالياً حتى نصل للمسارات
  reactStrictMode: true,
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
