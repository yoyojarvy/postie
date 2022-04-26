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
			</main>
		</div>
	);
};

export default Home;
