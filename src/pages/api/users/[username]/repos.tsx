import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../../../services/api";

export default async function getUserRepos(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const username = request?.query?.username && String(request.query.username);

  const userRepos = await api.get(`/users/${username}/repos`);

  return response.status(200).json(userRepos);
}
