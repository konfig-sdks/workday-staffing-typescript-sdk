/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { INSTANCEMODELREFERENCE } from './instancemodelreference';

/**
 * The \\~worker\\~ associated with the business process.
 * @export
 * @interface Worker271bbd673582100010110b9f9a6d99e1
 */
export interface Worker271bbd673582100010110b9f9a6d99e1 {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof Worker271bbd673582100010110b9f9a6d99e1
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof Worker271bbd673582100010110b9f9a6d99e1
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof Worker271bbd673582100010110b9f9a6d99e1
     */
    'href'?: string;
}

