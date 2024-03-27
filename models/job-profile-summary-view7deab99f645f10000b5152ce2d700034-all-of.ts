/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface JobProfileSummaryView7deab99f645f10000b5152ce2d700034AllOf
 */
export interface JobProfileSummaryView7deab99f645f10000b5152ce2d700034AllOf {
    /**
     * Returns true if the Job Profile is inactive.
     * @type {boolean}
     * @memberof JobProfileSummaryView7deab99f645f10000b5152ce2d700034AllOf
     */
    'inactive'?: boolean;
    /**
     * The name of the job profile.
     * @type {string}
     * @memberof JobProfileSummaryView7deab99f645f10000b5152ce2d700034AllOf
     */
    'name'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof JobProfileSummaryView7deab99f645f10000b5152ce2d700034AllOf
     */
    'id'?: string;
}

