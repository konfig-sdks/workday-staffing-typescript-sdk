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
 * The thing which this business process is about. It could be another business process if this is a sub-process
 * @export
 * @interface For5d688bd57bb910001815ab3dd10024a9
 */
export interface For5d688bd57bb910001815ab3dd10024a9 {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof For5d688bd57bb910001815ab3dd10024a9
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof For5d688bd57bb910001815ab3dd10024a9
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof For5d688bd57bb910001815ab3dd10024a9
     */
    'href'?: string;
}

