/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ChangeJobLocation90151d6c4ff110001b4a46091678025c } from './change-job-location90151d6c4ff110001b4a46091678025c';

/**
 * 
 * @export
 * @interface JobChangesGetLocationInfoResponse
 */
export interface JobChangesGetLocationInfoResponse {
    /**
     * 
     * @type {Array<ChangeJobLocation90151d6c4ff110001b4a46091678025c>}
     * @memberof JobChangesGetLocationInfoResponse
     */
    'data'?: Array<ChangeJobLocation90151d6c4ff110001b4a46091678025c>;
    /**
     * 
     * @type {number}
     * @memberof JobChangesGetLocationInfoResponse
     */
    'total'?: number;
}

