const HOST = 'http://192.168.0.108'
const PORT = ':8000'
const URL_ADMIN = '/api/weddings_offer/admin_api/'
const URL_OFFER = '/api/wedding_offer/public_offer/'

export const getConfigs = (type) => {
  if(type === 'admin'){
    return HOST + PORT + URL_ADMIN
  } else {
    return  HOST + PORT + URL_OFFER;
  }
}

export const getLinkWithHost = () => {
  return HOST
}