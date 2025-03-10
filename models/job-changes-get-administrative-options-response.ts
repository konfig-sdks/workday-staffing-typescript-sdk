/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ChangeJobAdministrativeDetailsDataF8f20079bc5a1000089ccb7f6a8800ea } from './change-job-administrative-details-data-f8f20079bc5a1000089ccb7f6a8800ea';

/**
 * 
 * @export
 * @interface JobChangesGetAdministrativeOptionsResponse
 */
export interface JobChangesGetAdministrativeOptionsResponse {
    /**
     * 
     * @type {Array<ChangeJobAdministrativeDetailsDataF8f20079bc5a1000089ccb7f6a8800ea>}
     * @memberof JobChangesGetAdministrativeOptionsResponse
     */
    'data'?: Array<ChangeJobAdministrativeDetailsDataF8f20079bc5a1000089ccb7f6a8800ea>;
    /**
     * 
     * @type {number}
     * @memberof JobChangesGetAdministrativeOptionsResponse
     */
    'total'?: number;
}

