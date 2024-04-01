export default class ApiService {
  Url: string = "https://jsonplaceholder.typicode.com/";

  async getData(endPoint: string) {
    try {
      let response = await fetch(`${this.Url}${endPoint}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) return response.json();
      else return null;
    } catch (error) {
      console.log(error);
    }
  }
}
