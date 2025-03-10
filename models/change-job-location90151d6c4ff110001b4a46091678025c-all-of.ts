/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Location90151d6c4ff110001bfa027116820278 } from './location90151d6c4ff110001bfa027116820278';
import { WorkShift0ee7bb8b41db1000143d4e4822174f2e } from './work-shift0ee7bb8b41db1000143d4e4822174f2e';
import { WorkSpace0ee7bb8b41db10001e7db6a6c3e55663 } from './work-space0ee7bb8b41db10001e7db6a6c3e55663';

/**
 * 
 * @export
 * @interface ChangeJobLocation90151d6c4ff110001b4a46091678025cAllOf
 */
export interface ChangeJobLocation90151d6c4ff110001b4a46091678025cAllOf {
    /**
     * 
     * @type {Location90151d6c4ff110001bfa027116820278}
     * @memberof ChangeJobLocation90151d6c4ff110001b4a46091678025cAllOf
     */
    'location'?: Location90151d6c4ff110001bfa027116820278;
    /**
     * The new scheduled hours for the worker as of the effective date.
     * @type {number}
     * @memberof ChangeJobLocation90151d6c4ff110001b4a46091678025cAllOf
     */
    'scheduledHours'?: number;
    /**
     * 
     * @type {WorkShift0ee7bb8b41db1000143d4e4822174f2e}
     * @memberof ChangeJobLocation90151d6c4ff110001b4a46091678025cAllOf
     */
    'workShift'?: WorkShift0ee7bb8b41db1000143d4e4822174f2e;
    /**
     * 
     * @type {WorkSpace0ee7bb8b41db10001e7db6a6c3e55663}
     * @memberof ChangeJobLocation90151d6c4ff110001b4a46091678025cAllOf
     */
    'workSpace'?: WorkSpace0ee7bb8b41db10001e7db6a6c3e55663;
}

