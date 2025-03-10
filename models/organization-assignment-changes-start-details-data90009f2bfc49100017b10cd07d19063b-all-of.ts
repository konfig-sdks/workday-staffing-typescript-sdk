/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Position827372de4457100019c0e9c5977d0000 } from './position827372de4457100019c0e9c5977d0000';
import { SupervisoryOrganization827372de445710001cfe36968a480000 } from './supervisory-organization827372de445710001cfe36968a480000';
import { Worker90009f2bfc4910001b166d44a72c0727 } from './worker90009f2bfc4910001b166d44a72c0727';

/**
 * 
 * @export
 * @interface OrganizationAssignmentChangesStartDetailsData90009f2bfc49100017b10cd07d19063bAllOf
 */
export interface OrganizationAssignmentChangesStartDetailsData90009f2bfc49100017b10cd07d19063bAllOf {
    /**
     * The date this business process takes effect.
     * @type {string}
     * @memberof OrganizationAssignmentChangesStartDetailsData90009f2bfc49100017b10cd07d19063bAllOf
     */
    'date'?: string;
    /**
     * 
     * @type {SupervisoryOrganization827372de445710001cfe36968a480000}
     * @memberof OrganizationAssignmentChangesStartDetailsData90009f2bfc49100017b10cd07d19063bAllOf
     */
    'supervisoryOrganization'?: SupervisoryOrganization827372de445710001cfe36968a480000;
    /**
     * 
     * @type {Position827372de4457100019c0e9c5977d0000}
     * @memberof OrganizationAssignmentChangesStartDetailsData90009f2bfc49100017b10cd07d19063bAllOf
     */
    'position': Position827372de4457100019c0e9c5977d0000;
    /**
     * 
     * @type {Worker90009f2bfc4910001b166d44a72c0727}
     * @memberof OrganizationAssignmentChangesStartDetailsData90009f2bfc49100017b10cd07d19063bAllOf
     */
    'worker'?: Worker90009f2bfc4910001b166d44a72c0727;
}

