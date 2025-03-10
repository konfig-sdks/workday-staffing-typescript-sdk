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
 * The new gift for the \\~worker\\~ after the business process.
 * @export
 * @interface GiftA18edb56aca0100014a4a0a9f876045b
 */
export interface GiftA18edb56aca0100014a4a0a9f876045b {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof GiftA18edb56aca0100014a4a0a9f876045b
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof GiftA18edb56aca0100014a4a0a9f876045b
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof GiftA18edb56aca0100014a4a0a9f876045b
     */
    'href'?: string;
}

