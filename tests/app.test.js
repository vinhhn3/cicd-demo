const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello from Express!" });
  });
});

describe("GET /health", () => {
  it("should return status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});

describe("GET /greet/:name", () => {
  it("should greet the given name", async () => {
    const res = await request(app).get("/greet/Alice");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello, Alice!" });
  });
});

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({ a: 5, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ result: 8 });
  });

  it("should return 400 if inputs are not numbers", async () => {
    const res = await request(app).post("/sum").send({ a: "foo", b: 3 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
