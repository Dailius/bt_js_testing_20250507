const request = require("supertest");
const app = require("../app");

describe("User API", () => {
  test("GET '/' return API status 200 and text 'API is running'", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("API is running");
  });

  describe("Set of GET all users", () => {
    let response = null;

    beforeEach(async () => {
      response = await request(app).get("/api/users");
    });

    test("GET '/api/users' return API status 200 and list of users", async () => {
      //   const response = await request(app).get("/api/users");

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);

      response.body.forEach((user) => {
        // expect(user.name).toBeDefined();
        expect(user.name).toBeTruthy();
      });
    });

    test("GET '/api/users' return API status 200", async () => {
      expect(response.statusCode).toBe(200);
    });

    test("GET '/api/users' return list is not empty", async () => {
      expect(response.body.length).toBeGreaterThan(0);
    });

    test("GET '/api/users' return list of users", async () => {
      response.body.forEach((user) => {
        expect(user.name).toBeTruthy();
      });
    });
  });

  test("GET '/API/users/1' should return user details", async () => {
    const res = await request(app).get("/api/users/1");

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Alice");
  });

  test("GET '/API/users/999' should return error", async () => {
    const res = await request(app).get("/api/users/999");

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("User not found");
  });

  test("POST '/API/users' should create new user", async () => {
    const createUser = { name: "Bonifacijus" };
    const res = await request(app).post("/api/users").send(createUser);

    expect(res.statusCode).toBe(201);
    expect(res.body.id).toBeGreaterThan(0);
    expect(res.body.name).toBe("Bonifacijus");
  });
});
