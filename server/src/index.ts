import express from "express";
import path from "path";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static images
app.use("/images", express.static(path.resolve(__dirname, "../public/images")));

// Home Route: Get food data as JSON
app.get("/", (req, res) => {
	// You can log the directory for debugging
	console.log(path.resolve(__dirname, "../public"));

	const foodData = [
		{
			name: "Boiled Egg",
			price: 10,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			image: "/images/egg.png",
			type: "breakfast",
		},
		{
			name: "RAMEN",
			price: 25,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			image: "/images/ramen.png",
			type: "lunch",
		},
		{
			name: "GRILLED CHICKEN",
			price: 45,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			image: "/images/chicken.png",
			type: "dinner",
		},
		{
			name: "CAKE",
			price: 18,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			image: "/images/cake.png",
			type: "breakfast",
		},
		{
			name: "BURGER",
			price: 23,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			image: "/images/burger.png",
			type: "lunch",
		},
		{
			name: "PANCAKE",
			price: 25,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			image: "/images/pancake.png",
			type: "dinner",
		},
	];

	res.json(foodData);
});

// Error handling for missing images or invalid paths
app.use((req, res, next) => {
	res.status(404).send("Sorry, we couldn't find the resource you requested.");
});

// Start server on port 9000
app.listen(9000, () => {
	console.log("Server is running on port 9000");
});
