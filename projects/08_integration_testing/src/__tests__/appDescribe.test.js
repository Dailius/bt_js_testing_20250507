const request = require("supertest");
const app = require("../app");

describe("User API", () => {
  const response = request(app);

  test("GET '/' return API status 200 and text 'API is running'", () => {
    return response.get("/").expect(200).expect("API is running");
  });

  test("GET '/' return API status 200 and text 'API is running'", (done) => {
    response.get("/").expect(200).expect("API is running", done);
  });

  describe("Set of GET all users", () => {
    test("GET '/api/users' return API status 200 and list of users", function () {
      return response
        .get("/api/users")
        .expect(200)
        .then((res) => {
          expect(res.body.length).toBeGreaterThan(0);
          res.body.forEach((user) => {
            expect(user.name).toBeTruthy();
          });
        });
    });

    test("GET '/api/users' return API status 200", (done) => {
      response.get("/api/users").expect(200, done);
    });

    test("GET '/api/users' return list is not empty", () => {
      return response
        .get("/api/users")
        .then((res) => {
          expect(res.body.length).toBeGreaterThan(0);
        });
    });

    test("GET '/api/users' return list of users", () => {
      return response
        .get("/api/users")
        .then((res) => {
          res.body.forEach((user) => {
            expect(user.name).toBeTruthy();
          });
        });
    });
  });
});
