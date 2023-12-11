import {HttpService} from "@/services/http/httpService";

export class HttpActivitiesService extends HttpService{
  constructor() {
    super();
  }

   async index(endpoint) {
    try {
      return (await this.axios.get(`/activities/${endpoint}`)).data;
    } catch (error) {
      console.error('Error fetching activities from V1', error);
      throw error;
    }
  };
}
