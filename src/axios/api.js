const _pathList = {
  fetchUserInfo: (nonceStr, body) => {
    return {
      method: 'post',
      url: '/user/staff-users/login',
      data: { nonceStr, body },
    }
  }
}
export default _pathList
