/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SkillItemD6ca778018011000182fa5f3b32001aa } from './skill-item-d6ca778018011000182fa5f3b32001aa';
import { SkillSourceRepresentation998d2cc58f2f10000db59b08da0306a8 } from './skill-source-representation998d2cc58f2f10000db59b08da0306a8';

/**
 * 
 * @export
 * @interface DisplayExplicitSkillRepresentationD6ca778018011000182fa5be1ae901a8AllOf
 */
export interface DisplayExplicitSkillRepresentationD6ca778018011000182fa5be1ae901a8AllOf {
    /**
     * Remote Skill ID for associated Remote Skill Item
     * @type {string}
     * @memberof DisplayExplicitSkillRepresentationD6ca778018011000182fa5be1ae901a8AllOf
     */
    'remoteID'?: string;
    /**
     * The sources that serve as evidence for the skill usage.
     * @type {Array<SkillSourceRepresentation998d2cc58f2f10000db59b08da0306a8>}
     * @memberof DisplayExplicitSkillRepresentationD6ca778018011000182fa5be1ae901a8AllOf
     */
    'skillSources'?: Array<SkillSourceRepresentation998d2cc58f2f10000db59b08da0306a8>;
    /**
     * 
     * @type {SkillItemD6ca778018011000182fa5f3b32001aa}
     * @memberof DisplayExplicitSkillRepresentationD6ca778018011000182fa5be1ae901a8AllOf
     */
    'skillItem'?: SkillItemD6ca778018011000182fa5f3b32001aa;
    /**
     * Id of the instance
     * @type {string}
     * @memberof DisplayExplicitSkillRepresentationD6ca778018011000182fa5be1ae901a8AllOf
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof DisplayExplicitSkillRepresentationD6ca778018011000182fa5be1ae901a8AllOf
     */
    'descriptor'?: string;
}

