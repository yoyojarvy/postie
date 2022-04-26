import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Postie</title>
				<meta name="description" content="Let's get posting" />
			</Head>

			<main>
				<h1>Welcome to Postie.</h1>
				<p>let&lsquo;s get posting</p>

				<hr />

				<h2>log in</h2>

				<form action="/api/login/phone" method="post">
					<label>
						<p>phone number</p>
						<input type="tel" name="phone" />
					</label>

					<button type="submit">go</button>
				</form>
			</main>
		</div>
	);
};

export default Home;
