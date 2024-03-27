/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SkillItem4b4b7d34b4a210001c7927f9e1330080 } from './skill-item4b4b7d34b4a210001c7927f9e1330080';
import { SkillItemAddDefinitionFaed9891d75a10001e9a289910540228AllOf } from './skill-item-add-definition-faed9891d75a10001e9a289910540228-all-of';

/**
 * 
 * @export
 * @interface SkillItemAddDefinitionFaed9891d75a10001e9a289910540228
 */
export interface SkillItemAddDefinitionFaed9891d75a10001e9a289910540228 {
    /**
     * The skill name that Workday bases similar skill suggestions on.
     * @type {string}
     * @memberof SkillItemAddDefinitionFaed9891d75a10001e9a289910540228
     */
    'skillName'?: string;
    /**
     * 
     * @type {SkillItem4b4b7d34b4a210001c7927f9e1330080}
     * @memberof SkillItemAddDefinitionFaed9891d75a10001e9a289910540228
     */
    'skillItem'?: SkillItem4b4b7d34b4a210001c7927f9e1330080;
    /**
     * The remote skill ID of a skill.
     * @type {string}
     * @memberof SkillItemAddDefinitionFaed9891d75a10001e9a289910540228
     */
    'remoteID'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof SkillItemAddDefinitionFaed9891d75a10001e9a289910540228
     */
    'id'?: string;
}

