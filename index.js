require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

const fastify = require("fastify")({ logger: false });
const Twitter = require("twitter-v2");

const client = new Twitter({
	bearer_token: process.env.BEARER_TOKEN,
});

fastify.get("/tweets", async (request, reply) => {
    //if username not defined
	if (!request.query["username"]) {
		reply.code(400);
		return { data: "error, username not valid" };
	}

	// set max results
	let max = 5;
	if (request.query["max_results"] >= 5) {
		max = request.query["max_results"];
	}

	//get user id from username
	const userId = await client.get(
		`users/by/username/${request.query["username"]}`
	);

	//get tweet data
	let options = {
		max_results: 10,
		"tweet.fields": ["attachments", "created_at", "entities" ],
	};
	const { data } = await client.get(`users/${userId.data.id}/tweets`, options);

	//return if success
	reply.code(200);
	return { data: data };
});

// Run the server!
const start = async () => {
	try {
		await fastify.listen(process.env.PORT);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};
start();
