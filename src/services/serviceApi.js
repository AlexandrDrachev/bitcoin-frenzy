import data from './fake-db';

export default class ServiceApi {
  getDataFromApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 0);
    })
      .then((res) => {
        return res;
      });
  };
}
