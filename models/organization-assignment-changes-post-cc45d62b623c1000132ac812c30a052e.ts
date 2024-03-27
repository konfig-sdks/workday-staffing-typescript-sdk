/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrganizationAssignmentChangesPostCc45d62b623c1000132ac812c30a052eAllOf } from './organization-assignment-changes-post-cc45d62b623c1000132ac812c30a052e-all-of';
import { Position99f6257185e61000043aadd66df203bb } from './position99f6257185e61000043aadd66df203bb';

/**
 * 
 * @export
 * @interface OrganizationAssignmentChangesPostCc45d62b623c1000132ac812c30a052e
 */
export interface OrganizationAssignmentChangesPostCc45d62b623c1000132ac812c30a052e {
    /**
     * 
     * @type {Position99f6257185e61000043aadd66df203bb}
     * @memberof OrganizationAssignmentChangesPostCc45d62b623c1000132ac812c30a052e
     */
    'position'?: Position99f6257185e61000043aadd66df203bb;
    /**
     * The date this business process takes effect.
     * @type {string}
     * @memberof OrganizationAssignmentChangesPostCc45d62b623c1000132ac812c30a052e
     */
    'date': string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof OrganizationAssignmentChangesPostCc45d62b623c1000132ac812c30a052e
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof OrganizationAssignmentChangesPostCc45d62b623c1000132ac812c30a052e
     */
    'descriptor'?: string;
}

