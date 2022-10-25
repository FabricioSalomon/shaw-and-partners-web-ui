import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../../../services/api";

export default async function getUserDetails(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const username = request?.query?.username && String(request.query.username);

  const user = await api.get(`/users/${username}/details`);

  return response.status(200).json(user);
}
