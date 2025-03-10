/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkerJobViewFab4a151b24810000e7ff8d0c7f0126d } from './worker-job-view-fab4a151b24810000e7ff8d0c7f0126d';

/**
 * The position management \\~worker\\~ filling the position. If the position is overlapped, return the \\~worker\\~ for the overlap position.
 * @export
 * @interface WorkerFab4a151b24810000e66f769304c126b
 */
export interface WorkerFab4a151b24810000e66f769304c126b {
    /**
     * Id of the instance
     * @type {string}
     * @memberof WorkerFab4a151b24810000e66f769304c126b
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof WorkerFab4a151b24810000e66f769304c126b
     */
    'descriptor'?: string;
}

