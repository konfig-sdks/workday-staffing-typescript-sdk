/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SupervisoryOrganizationJobViewFab4a151b24810000d29746fb7e21259 } from './supervisory-organization-job-view-fab4a151b24810000d29746fb7e21259';

/**
 * The \\~supervisory organization\\~ for the position.
 * @export
 * @interface SupervisoryOrganizationB8ac205877fd10000ea91743659800a7
 */
export interface SupervisoryOrganizationB8ac205877fd10000ea91743659800a7 {
    /**
     * Id of the instance
     * @type {string}
     * @memberof SupervisoryOrganizationB8ac205877fd10000ea91743659800a7
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof SupervisoryOrganizationB8ac205877fd10000ea91743659800a7
     */
    'descriptor'?: string;
}

