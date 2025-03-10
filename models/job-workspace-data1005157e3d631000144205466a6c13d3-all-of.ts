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
 * @interface JobWorkspaceData1005157e3d631000144205466a6c13d3AllOf
 */
export interface JobWorkspaceData1005157e3d631000144205466a6c13d3AllOf {
    /**
     * Location chain including bread crumbs for location.
     * @type {string}
     * @memberof JobWorkspaceData1005157e3d631000144205466a6c13d3AllOf
     */
    'locationChain'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof JobWorkspaceData1005157e3d631000144205466a6c13d3AllOf
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof JobWorkspaceData1005157e3d631000144205466a6c13d3AllOf
     */
    'descriptor'?: string;
}

