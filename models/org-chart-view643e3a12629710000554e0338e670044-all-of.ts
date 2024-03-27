/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Superior643e3a1262971000145238b2ccd10059 } from './superior643e3a1262971000145238b2ccd10059';
import { SupervisoryOrganizationViewA02c2e1916fa100009e137235f1f0018 } from './supervisory-organization-view-a02c2e1916fa100009e137235f1f0018';

/**
 * 
 * @export
 * @interface OrgChartView643e3a12629710000554e0338e670044AllOf
 */
export interface OrgChartView643e3a12629710000554e0338e670044AllOf {
    /**
     * 
     * @type {Superior643e3a1262971000145238b2ccd10059}
     * @memberof OrgChartView643e3a12629710000554e0338e670044AllOf
     */
    'superior'?: Superior643e3a1262971000145238b2ccd10059;
    /**
     * Contains the subordinate organizations that directly report to the organization.
     * @type {Array<SupervisoryOrganizationViewA02c2e1916fa100009e137235f1f0018>}
     * @memberof OrgChartView643e3a12629710000554e0338e670044AllOf
     */
    'subordinates'?: Array<SupervisoryOrganizationViewA02c2e1916fa100009e137235f1f0018>;
    /**
     * Id of the instance
     * @type {string}
     * @memberof OrgChartView643e3a12629710000554e0338e670044AllOf
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof OrgChartView643e3a12629710000554e0338e670044AllOf
     */
    'descriptor'?: string;
}

