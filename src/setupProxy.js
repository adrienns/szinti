// import proxy from "http-proxy-middleware";
// import Bundler from "parcel-bundler";
// import express from "express";

// // import { createRequire } from "module";
// // const proxy = createRequire(import.meta.url)("http-proxy-middleware");
// // const Bundler = createRequire(import.meta.url)("parcel-bundler");
// // const express = createRequire(import.meta.url)("express");

// const bundler = new Bundler("src/index.html", {
//   // Don't cache anything in development
//   cache: false,
// });

// const app = express();
// const PORT = process.env.PORT || 3000;

// // This route structure is specifc to Netlify functions, so
// // if you're setting this up for a non-Netlify project, just use
// // whatever values make sense to you.  Probably something like /api/**

// app.use(
//   "/api",
//   proxy({
//     // Your local server
//     target: "http://localhost:8080",
//   })
// );

// // Pass the Parcel bundler into Express as middleware
// app.use(bundler.middleware());

// // Run your Express server
// app.listen(PORT);
