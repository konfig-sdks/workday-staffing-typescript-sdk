/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrganizationAssignmentChangesCompanyData652d516fdff41000086e0b9c96950354 } from './organization-assignment-changes-company-data652d516fdff41000086e0b9c96950354';

/**
 * 
 * @export
 * @interface OrganizationAssignmentChangesGetCompanyResponse
 */
export interface OrganizationAssignmentChangesGetCompanyResponse {
    /**
     * 
     * @type {Array<OrganizationAssignmentChangesCompanyData652d516fdff41000086e0b9c96950354>}
     * @memberof OrganizationAssignmentChangesGetCompanyResponse
     */
    'data'?: Array<OrganizationAssignmentChangesCompanyData652d516fdff41000086e0b9c96950354>;
    /**
     * 
     * @type {number}
     * @memberof OrganizationAssignmentChangesGetCompanyResponse
     */
    'total'?: number;
}

