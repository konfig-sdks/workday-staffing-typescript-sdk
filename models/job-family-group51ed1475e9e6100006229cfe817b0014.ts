/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobFamilyGroupView7164d34509ba10000b8610c566ea002d } from './job-family-group-view7164d34509ba10000b8610c566ea002d';

/**
 * The job family group for the job family. You can specify more than 1 jobFamilyGroup query parameter.
 * @export
 * @interface JobFamilyGroup51ed1475e9e6100006229cfe817b0014
 */
export interface JobFamilyGroup51ed1475e9e6100006229cfe817b0014 {
    /**
     * Id of the instance
     * @type {string}
     * @memberof JobFamilyGroup51ed1475e9e6100006229cfe817b0014
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof JobFamilyGroup51ed1475e9e6100006229cfe817b0014
     */
    'descriptor'?: string;
}

