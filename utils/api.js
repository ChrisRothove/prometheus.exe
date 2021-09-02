const axios = require("axios").default;

const API_BASE_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

// const headers = {
//   Accept: "application/json",
// };

async function getJson(url, options, onCancel) {
  try {
    const response = await axios(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

async function getStarted(discord_id) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/players/${discord_id}/start`
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getStarted,
};
