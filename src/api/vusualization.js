// import request from '@/utils/request.js'
import request from '@/utils/request.js'
export const getVisualization = () => {
  return request({
     url: '/visualization'
   })
 }