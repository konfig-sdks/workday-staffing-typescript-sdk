/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000AllOf } from './external-skill-level-detail1c67ac98c0f310002706be33dcdb0000-all-of';

/**
 * 
 * @export
 * @interface ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000
 */
export interface ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000 {
    /**
     * The name of the skill from the external system
     * @type {string}
     * @memberof ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000
     */
    'externalSkillName'?: string;
    /**
     * The skill level normalized to a scale from 1-5 and to 1 decimal place.
     * @type {number}
     * @memberof ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000
     */
    'externalSkillLevel'?: number;
    /**
     * The name of the vendor associated with the External Skill.
     * @type {string}
     * @memberof ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000
     */
    'skillVendorName'?: string;
    /**
     * The vendor associated to the External Skill.
     * @type {string}
     * @memberof ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000
     */
    'skillVendorId'?: string;
    /**
     * The text you enter to provide context for this external skill load. Not visible to end users.
     * @type {string}
     * @memberof ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000
     */
    'context'?: string;
    /**
     * The date that the external Skill Level was last updated.
     * @type {string}
     * @memberof ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000
     */
    'effectiveMoment'?: string;
    /**
     * The skill from the external system.
     * @type {string}
     * @memberof ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000
     */
    'externalSkillId'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof ExternalSkillLevelDetail1c67ac98c0f310002706be33dcdb0000
     */
    'id'?: string;
}

