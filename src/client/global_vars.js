const prod = "";
window.api_url =
  process.env.NODE_ENV === "development"
    ? process.env.SERVER_LOCAL
    : process.env.SERVER_PUBLIC;
