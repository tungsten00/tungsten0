const path = require("path");
const fastify = require("fastify")({ logger: false });

fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, "public"),
    prefix: "/",
});

fastify.get("/", (request, reply) => {
    reply.sendFile("index.html");
});

fastify.listen({ port: 3000, host: "0.0.0.0" });
