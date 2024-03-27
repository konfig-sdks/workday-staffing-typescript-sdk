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
 * Return \\~Worker\\~ Types for \\~Worker\\~
 * @export
 * @interface WorkerType3f78eeedc01d1000138d97d80e5a0000
 */
export interface WorkerType3f78eeedc01d1000138d97d80e5a0000 {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof WorkerType3f78eeedc01d1000138d97d80e5a0000
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof WorkerType3f78eeedc01d1000138d97d80e5a0000
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof WorkerType3f78eeedc01d1000138d97d80e5a0000
     */
    'href'?: string;
}

