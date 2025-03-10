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
 * \\~Worker\'s\\~ compensation code override for staffing event.
 * @export
 * @interface WorkersCompensationCodeOverride05d4c45042b61000138500e185e0013f
 */
export interface WorkersCompensationCodeOverride05d4c45042b61000138500e185e0013f {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof WorkersCompensationCodeOverride05d4c45042b61000138500e185e0013f
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof WorkersCompensationCodeOverride05d4c45042b61000138500e185e0013f
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof WorkersCompensationCodeOverride05d4c45042b61000138500e185e0013f
     */
    'href'?: string;
}

