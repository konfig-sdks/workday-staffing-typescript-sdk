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
 * 
 * @export
 * @interface MULTIPLEINSTANCEMODELREFERENCE
 */
export interface MULTIPLEINSTANCEMODELREFERENCE {
    /**
     * 
     * @type {number}
     * @memberof MULTIPLEINSTANCEMODELREFERENCE
     */
    'total'?: number;
    /**
     * 
     * @type {Array<INSTANCEMODELREFERENCE>}
     * @memberof MULTIPLEINSTANCEMODELREFERENCE
     */
    'data'?: Array<INSTANCEMODELREFERENCE>;
}

