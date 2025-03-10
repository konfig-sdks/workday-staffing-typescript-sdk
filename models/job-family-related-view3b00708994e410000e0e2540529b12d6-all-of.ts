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
 * @interface JobFamilyRelatedView3b00708994e410000e0e2540529b12d6AllOf
 */
export interface JobFamilyRelatedView3b00708994e410000e0e2540529b12d6AllOf {
    /**
     * The job family name for the job family.
     * @type {string}
     * @memberof JobFamilyRelatedView3b00708994e410000e0e2540529b12d6AllOf
     */
    'name'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof JobFamilyRelatedView3b00708994e410000e0e2540529b12d6AllOf
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof JobFamilyRelatedView3b00708994e410000e0e2540529b12d6AllOf
     */
    'descriptor'?: string;
}

