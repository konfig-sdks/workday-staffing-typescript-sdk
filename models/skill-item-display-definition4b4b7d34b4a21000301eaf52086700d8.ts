/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SkillItemDisplayDefinition4b4b7d34b4a21000301eaf52086700d8AllOf } from './skill-item-display-definition4b4b7d34b4a21000301eaf52086700d8-all-of';

/**
 * 
 * @export
 * @interface SkillItemDisplayDefinition4b4b7d34b4a21000301eaf52086700d8
 */
export interface SkillItemDisplayDefinition4b4b7d34b4a21000301eaf52086700d8 {
    /**
     * The skill name that Workday bases similar skill suggestions on.
     * @type {string}
     * @memberof SkillItemDisplayDefinition4b4b7d34b4a21000301eaf52086700d8
     */
    'skillName'?: string;
    /**
     * The remote skill ID of a skill.
     * @type {string}
     * @memberof SkillItemDisplayDefinition4b4b7d34b4a21000301eaf52086700d8
     */
    'remoteID'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof SkillItemDisplayDefinition4b4b7d34b4a21000301eaf52086700d8
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof SkillItemDisplayDefinition4b4b7d34b4a21000301eaf52086700d8
     */
    'descriptor'?: string;
}

