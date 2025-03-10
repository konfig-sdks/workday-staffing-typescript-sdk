/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SkillItemAddRepresentationC5fabc4ca81610000eaeb4ff2f000137AllOf } from './skill-item-add-representation-c5fabc4ca81610000eaeb4ff2f000137-all-of';

/**
 * 
 * @export
 * @interface SkillItemAddRepresentationC5fabc4ca81610000eaeb4ff2f000137
 */
export interface SkillItemAddRepresentationC5fabc4ca81610000eaeb4ff2f000137 {
    /**
     * The skill name Workday returns.
     * @type {string}
     * @memberof SkillItemAddRepresentationC5fabc4ca81610000eaeb4ff2f000137
     */
    'skillName'?: string;
    /**
     * The remote skill ID of a skill.
     * @type {string}
     * @memberof SkillItemAddRepresentationC5fabc4ca81610000eaeb4ff2f000137
     */
    'remoteID'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof SkillItemAddRepresentationC5fabc4ca81610000eaeb4ff2f000137
     */
    'id'?: string;
}

