/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayRateTypeRelatedView3b00708994e410000c52776049ba12c3 } from './pay-rate-type-related-view3b00708994e410000c52776049ba12c3';

/**
 * The pay rate type for the job profile pay rate
 * @export
 * @interface PayRateType3b00708994e410000c3d01aea96012c1
 */
export interface PayRateType3b00708994e410000c3d01aea96012c1 {
    /**
     * Id of the instance
     * @type {string}
     * @memberof PayRateType3b00708994e410000c3d01aea96012c1
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof PayRateType3b00708994e410000c3d01aea96012c1
     */
    'descriptor'?: string;
}

