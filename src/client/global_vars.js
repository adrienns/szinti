const prod = "";
const dev = "http://localhost:8080";
window.api_url = process.env.NODE_ENV === "development" ? dev : prod;
