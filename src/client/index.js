import Bundler from "parcel-bundler";
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  createProxyMiddleware("/static", {
    target: "http://localhost:8080/",
  })
);

app.use(
  createProxyMiddleware("/api", {
    target: "http://localhost:8080/",
  })
);

const bundler = new Bundler("src/client/index.html");
app.use(bundler.middleware());

app.listen(Number(1234));
