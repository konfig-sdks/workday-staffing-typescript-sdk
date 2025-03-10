/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ChangeJobAdditionalJobClassificationData27ec818d10d0100003600115b5200102 } from './change-job-additional-job-classification-data27ec818d10d0100003600115b5200102';

/**
 * 
 * @export
 * @interface ChangeJobJobClassificationData354103f196361000084489bcb281017fAllOf
 */
export interface ChangeJobJobClassificationData354103f196361000084489bcb281017fAllOf {
    /**
     * Additional Job Classifications Proposed By Staffing Event
     * @type {Array<ChangeJobAdditionalJobClassificationData27ec818d10d0100003600115b5200102>}
     * @memberof ChangeJobJobClassificationData354103f196361000084489bcb281017fAllOf
     */
    'additionalJobClassifications'?: Array<ChangeJobAdditionalJobClassificationData27ec818d10d0100003600115b5200102>;
}

