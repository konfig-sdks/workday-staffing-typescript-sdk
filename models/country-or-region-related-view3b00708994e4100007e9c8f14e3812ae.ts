/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CountryOrRegionRelatedView3b00708994e4100007e9c8f14e3812aeAllOf } from './country-or-region-related-view3b00708994e4100007e9c8f14e3812ae-all-of';

/**
 * 
 * @export
 * @interface CountryOrRegionRelatedView3b00708994e4100007e9c8f14e3812ae
 */
export interface CountryOrRegionRelatedView3b00708994e4100007e9c8f14e3812ae {
    /**
     * Id of the instance
     * @type {string}
     * @memberof CountryOrRegionRelatedView3b00708994e4100007e9c8f14e3812ae
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof CountryOrRegionRelatedView3b00708994e4100007e9c8f14e3812ae
     */
    'descriptor'?: string;
}

