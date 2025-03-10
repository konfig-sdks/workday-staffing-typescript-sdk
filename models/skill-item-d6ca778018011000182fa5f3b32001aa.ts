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
 * Indicates the skill item name
 * @export
 * @interface SkillItemD6ca778018011000182fa5f3b32001aa
 */
export interface SkillItemD6ca778018011000182fa5f3b32001aa {
    /**
     * wid / id / reference id
     * @type {string}
     * @memberof SkillItemD6ca778018011000182fa5f3b32001aa
     */
    'id': string;
    /**
     * A description of the instance
     * @type {string}
     * @memberof SkillItemD6ca778018011000182fa5f3b32001aa
     */
    'descriptor'?: string;
    /**
     * A link to the instance
     * @type {string}
     * @memberof SkillItemD6ca778018011000182fa5f3b32001aa
     */
    'href'?: string;
}

