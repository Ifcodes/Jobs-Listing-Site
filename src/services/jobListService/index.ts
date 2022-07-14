import { apolloClient } from "./../../graphql/index";
import { GET_JOBLIST } from "./queries";

class JobListService {
  async getJobList() {
    try {
      const response = await apolloClient.query({ query: GET_JOBLIST });

      if (!response || !response.data) throw new Error("No data found");

      return response;
    } catch (error) {
      console.log("Error:", error);
    }
  }
}

export default new JobListService();
