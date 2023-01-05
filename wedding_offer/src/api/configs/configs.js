const HOST = 'http://192.168.0.108'
const PORT = ':8000'
const URL_ADMIN = '/api/weddings_offer/admin_api/'
const URL_OFFER = ''

export const getConfigs = (type) => {
  if(type === 'admin'){
    return HOST + PORT + URL_ADMIN
  } else {
    return '';
  }
}

export const getLinkWithHost = () => {
  return HOST
}