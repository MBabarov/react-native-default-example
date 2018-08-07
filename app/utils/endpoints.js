const apiRoots = {
  API_ROOT: 'http://mbabarov-react-native-example.proxy.beeceptor.com/api',
};

export default {
  loginUser() {
     return `${apiRoots.API_ROOT}/login`;
    // return 'https://reqres.in/api/register';
  },

  singUpUser() {
    return `${apiRoots.API_ROOT}/registered`;
    // return 'https://reqres.in/api/register';
  },
}