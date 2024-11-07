const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Movie = require('./models/Movie');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedMovies = async () => {
  try {
    const movies = [
      { title: "Inception", director: "Christopher Nolan", genre: "Sci-Fi", releaseYear: 2010, rating: 8.8, duration: 148 },
      { title: "The Godfather", director: "Francis Ford Coppola", genre: "Crime", releaseYear: 1972, rating: 9.2, duration: 175 },
      { title: "The Dark Knight", director: "Christopher Nolan", genre: "Action", releaseYear: 2008, rating: 9.0, duration: 152 },
      { title: "Pulp Fiction", director: "Quentin Tarantino", genre: "Crime", releaseYear: 1994, rating: 8.9, duration: 154 }
    ];

    // Remove existing documents to avoid duplicates
    await Movie.deleteMany();

    // Insert the seed movies
    await Movie.insertMany(movies);
    console.log("Movies seeded successfully!");

    // Close the connection after seeding
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding movies:", error);
  }
};

seedMovies();
