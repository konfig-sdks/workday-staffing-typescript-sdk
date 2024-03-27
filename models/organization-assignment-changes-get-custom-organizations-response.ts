/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrganizationAssignmentChangesCustomOrganizationDetailsData53cd2b632146100011e9bf4e7041551f } from './organization-assignment-changes-custom-organization-details-data53cd2b632146100011e9bf4e7041551f';

/**
 * 
 * @export
 * @interface OrganizationAssignmentChangesGetCustomOrganizationsResponse
 */
export interface OrganizationAssignmentChangesGetCustomOrganizationsResponse {
    /**
     * 
     * @type {Array<OrganizationAssignmentChangesCustomOrganizationDetailsData53cd2b632146100011e9bf4e7041551f>}
     * @memberof OrganizationAssignmentChangesGetCustomOrganizationsResponse
     */
    'data'?: Array<OrganizationAssignmentChangesCustomOrganizationDetailsData53cd2b632146100011e9bf4e7041551f>;
    /**
     * 
     * @type {number}
     * @memberof OrganizationAssignmentChangesGetCustomOrganizationsResponse
     */
    'total'?: number;
}

