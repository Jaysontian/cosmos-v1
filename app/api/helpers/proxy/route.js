// pages/api/proxy.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'Missing URL parameter' });
    }

    const response = await axios.get(url);

    // Forward the received data from the external server to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error);

    if (error.response) {
      // The request was made and the server responded with a status code
      // other than 2xx (success)
      res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      res.status(500).json({ error: 'No response from the server' });
    } else {
      // Something happened in setting up the request that triggered an Error
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
