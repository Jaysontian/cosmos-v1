// pages/api/proxy.js
import axios from 'axios';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);  // the request contains the response url from spotify
    const url = searchParams.get("url");      // we search the url for the code and state

    if (!url) {
      return res.status(400).json({ error: 'Missing URL parameter' });
    }

    const response = await axios.get(url);

    return NextResponse.json(response.data, {status: 200})
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
