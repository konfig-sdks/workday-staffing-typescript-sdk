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
 * The new cost center for the \\~worker\\~ as of the effective date.
 * @export
 * @interface CostCenter5aabf8e28cb3100010a999f40b07024f
 */
export interface CostCenter5aabf8e28cb3100010a999f40b07024f {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof CostCenter5aabf8e28cb3100010a999f40b07024f
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof CostCenter5aabf8e28cb3100010a999f40b07024f
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof CostCenter5aabf8e28cb3100010a999f40b07024f
     */
    'href'?: string;
}

