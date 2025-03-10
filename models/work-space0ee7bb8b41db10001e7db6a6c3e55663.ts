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
 * The new work space for the \\~worker\\~ as of the effective date.
 * @export
 * @interface WorkSpace0ee7bb8b41db10001e7db6a6c3e55663
 */
export interface WorkSpace0ee7bb8b41db10001e7db6a6c3e55663 {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof WorkSpace0ee7bb8b41db10001e7db6a6c3e55663
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof WorkSpace0ee7bb8b41db10001e7db6a6c3e55663
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof WorkSpace0ee7bb8b41db10001e7db6a6c3e55663
     */
    'href'?: string;
}

