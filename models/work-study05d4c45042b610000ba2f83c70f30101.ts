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
 * Work-Study award proposed for Staffing Event
 * @export
 * @interface WorkStudy05d4c45042b610000ba2f83c70f30101
 */
export interface WorkStudy05d4c45042b610000ba2f83c70f30101 {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof WorkStudy05d4c45042b610000ba2f83c70f30101
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof WorkStudy05d4c45042b610000ba2f83c70f30101
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof WorkStudy05d4c45042b610000ba2f83c70f30101
     */
    'href'?: string;
}

