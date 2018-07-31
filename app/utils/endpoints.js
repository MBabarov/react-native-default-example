const apiRoots = {
  API_ROOT: 'http://mbabarov-react-native-example.proxy.beeceptor.com/api',
};

export default {
  loginUser() {
    return `${apiRoots.API_ROOT}/login`;
  },

  singUpUser() {
    return `${apiRoots.API_ROOT}/registered`;
  },
}