/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CountryAf21e47ff7c01000092ecf4d7ad30270 } from './country-af21e47ff7c01000092ecf4d7ad30270';
import { LocationDataJobView6d3eb084b4c410002b5fa13f0c9d0056 } from './location-data-job-view6d3eb084b4c410002b5fa13f0c9d0056';

/**
 * The location associated with the filled position or position restrictions. When associated with position restrictions, the location returned is in this order: the location on the effective job requisition, hiring restrictions, or primary location of the \\~supervisory organization\\~.
 * @export
 * @interface Location6d3eb084b4c410002b617efb943f0059
 */
export interface Location6d3eb084b4c410002b617efb943f0059 {
    /**
     * 
     * @type {CountryAf21e47ff7c01000092ecf4d7ad30270}
     * @memberof Location6d3eb084b4c410002b617efb943f0059
     */
    'country'?: CountryAf21e47ff7c01000092ecf4d7ad30270;
    /**
     * Id of the instance
     * @type {string}
     * @memberof Location6d3eb084b4c410002b617efb943f0059
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof Location6d3eb084b4c410002b617efb943f0059
     */
    'descriptor'?: string;
}

