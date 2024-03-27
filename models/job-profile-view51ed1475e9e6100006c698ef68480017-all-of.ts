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
 * @interface JobProfileView51ed1475e9e6100006c698ef68480017AllOf
 */
export interface JobProfileView51ed1475e9e6100006c698ef68480017AllOf {
    /**
     * Id of the instance
     * @type {string}
     * @memberof JobProfileView51ed1475e9e6100006c698ef68480017AllOf
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof JobProfileView51ed1475e9e6100006c698ef68480017AllOf
     */
    'descriptor'?: string;
}

