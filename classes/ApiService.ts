export default class ApiService {
  Url: string = "https://jsonplaceholder.typicode.com/";

  async getData<D>(endPoint: string) {
    // D: dataType
    try {
      let response = await fetch(`${this.Url}${endPoint}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) return (await response.json()) as D[];
      else return null;
    } catch (error) {
      console.log(error);
    }
  }
}
