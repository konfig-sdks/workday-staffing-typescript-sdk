/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { PageBase, PageInfo, PageParameters } from "./page-types";
import { Page } from "./page";
import { PageRequest } from "./pageable";

export const paginate = <
  Data extends PageInfo,
  Parameters extends PageParameters
>({
  request,
  initialParameters,
}: {
  request: PageRequest<Data, Parameters>;
  initialParameters: Parameters;
}): Promise<PageBase<Data, Parameters>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await request(initialParameters);
      resolve(
        new Page({
          data: data.data,
          initialParameters,
          request: (parameters) => request(parameters),
        })
      );
    } catch (error) {
      reject(error);
    }
  });
};
