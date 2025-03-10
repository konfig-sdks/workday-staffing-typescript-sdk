/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomOrganizationDetails3950e273020a100017857926d35d369cAllOf } from './custom-organization-details3950e273020a100017857926d35d369c-all-of';
import { OrganizationType3950e273020a100017857958e234369d } from './organization-type3950e273020a100017857958e234369d';

/**
 * 
 * @export
 * @interface CustomOrganizationDetails3950e273020a100017857926d35d369c
 */
export interface CustomOrganizationDetails3950e273020a100017857926d35d369c {
    /**
     * 
     * @type {OrganizationType3950e273020a100017857958e234369d}
     * @memberof CustomOrganizationDetails3950e273020a100017857926d35d369c
     */
    'organizationType'?: OrganizationType3950e273020a100017857958e234369d;
    /**
     * Id of the instance
     * @type {string}
     * @memberof CustomOrganizationDetails3950e273020a100017857926d35d369c
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof CustomOrganizationDetails3950e273020a100017857926d35d369c
     */
    'descriptor'?: string;
}

