import Server from "./server";

const ServerApp = new Server();

ServerApp.start(() => {
  console.log("server is running on port:", ServerApp.port);
});
