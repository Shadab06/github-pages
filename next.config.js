const path = require("path");

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     domains: ['res.cloudinary.com', 'media.dev.to']
//   }
// }

module.exports = {
  output: "export",
  basePath: "/github-pages",
  images: {
    unoptimized: true,
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  // images: {
  //   domains: ["res.cloudinary.com", "media.dev.to"],
  // },
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /**
//    * Enable static exports for the App Router.
//    *
//    * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
//    */
//   output: "export",

//   /**
//    * Set base path. This is the slug of your GitHub repository.
//    *
//    * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
//    */
//   basePath: "/github-pages",

//   /**
//    * Disable server-based image optimization. Next.js does not support
//    * dynamic features with static exports.
//    *
//    * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
//    */
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
