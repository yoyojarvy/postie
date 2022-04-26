import { NextApiHandler } from "next";

const authenticateWithPhone: NextApiHandler = (req, res) => {
	if (req.method !== "POST") return res.status(404).json({});

	res.redirect("/auth/phone/verify").send("Redirecting to /auth/phone/verify");
};

export default authenticateWithPhone;
