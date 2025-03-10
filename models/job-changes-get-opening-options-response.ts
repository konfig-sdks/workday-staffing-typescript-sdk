/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ChangeJobOpeningData97af9049a5fd10001c4888d654170000 } from './change-job-opening-data97af9049a5fd10001c4888d654170000';

/**
 * 
 * @export
 * @interface JobChangesGetOpeningOptionsResponse
 */
export interface JobChangesGetOpeningOptionsResponse {
    /**
     * 
     * @type {Array<ChangeJobOpeningData97af9049a5fd10001c4888d654170000>}
     * @memberof JobChangesGetOpeningOptionsResponse
     */
    'data'?: Array<ChangeJobOpeningData97af9049a5fd10001c4888d654170000>;
    /**
     * 
     * @type {number}
     * @memberof JobChangesGetOpeningOptionsResponse
     */
    'total'?: number;
}

