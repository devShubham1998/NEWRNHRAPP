import { getDataAPiRequest } from "./apis"

export const getDataApiRequest = async(url,params) =>{

  const response = await getDataAPiRequest(url)
  return response
}