var request = require('supertest'),
    app = require('../../app')

describe("Homepage",()=>{
	it("Home",(done)=>{
		request(app).get("/")
			.expect(200)
			.expect("/Home/",done)
	})
});