import Axios, {AxiosResponse, Method} from 'axios'
// import toast from 'react-hot-toast'
// import {setAuth} from '../../app/modules/auth'
// import {API_URL} from '../../app/utils/api'

interface AxiosParams {
  url: string
  method: Method
  headers: {
    'Content-Type': string
    Authorization: any
  }
  params?: any
  data?: any
}

export const callApi = async (props: any): Promise<AxiosResponse | void> => {
  const {url, payload = {}, method, params = {}, isFullUrl} = props
  const AccessToken = localStorage.getItem('user') || ''
  const {token} = JSON.parse(AccessToken) as any
  if (!token) {
    return
  }
  const isFormData = payload instanceof FormData
  // const axiosParams: AxiosParams = {
  //   url: isFullUrl ? url : API_URL + url,
  //   method,
  //   headers: {
  //     Authorization: `${token}`,
  //     'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
  //   },
  //   params: params,
  //   data: payload,
  // }

  try {
    // const resp = await Axios(axiosParams)
    if (method !== 'GET') {
      // toast.success(resp.data.message)
    }
    // return resp.data
  } catch (err: any) {
    if (err?.response?.status == 401) {
      // setAuth({token: '', refreshToken: ''})
      window.location.reload()
    }
    // toast.error(err.response.data.error)
    throw err
  }
}
