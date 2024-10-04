import User from "../models/userModel.js";
import fetchFromTMDB from "../services/tmdb.service.js";

const searchPerson = async (req, res) => {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );

    const data = response.results;

    if (data.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data[0].id,
          image: data[0].profile_path,
          title: data[0].name,
          searchType: "person",
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: data });
  } catch (error) {
    console.log("Error in searchPerson controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const searchMovie = async (req, res) => {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    const data = response.results;

    if (data.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data[0].id,
          image: data[0].poster_path,
          title: data[0].title,
          searchType: "movie",
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: data });
  } catch (error) {
    console.log("Error in searchMovie controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const searchTv = async (req, res) => {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
    );

    const data = response.results;

    if (data.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: data[0].id,
          image: data[0].poster_path,
          title: data[0].name,
          searchType: "tv",
          createdAt: new Date(),
        },
      },
    });

    res.status(200).json({ success: true, content: data });
  } catch (error) {
    console.log("Error in searchTv controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getSearchHistory = async (req, res) => {
  try {
    res.status(200).json({ success: true, content: req.user.searchHistory });
  } catch (error) {
    console.log("Error in getSearchHistory controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const removeItemFromSearchHistory = async (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  try {
    await User.findByIdAndUpdate(req.user._id, {
      $pull: {
        searchHistory: { id: id },
      },
    });

    res
      .status(200)
      .json({ success: true, message: "Item removed from search history" });
  } catch (error) {
    console.log("Error in removeSearchHistory controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export {
  searchPerson,
  searchMovie,
  searchTv,
  getSearchHistory,
  removeItemFromSearchHistory,
};
