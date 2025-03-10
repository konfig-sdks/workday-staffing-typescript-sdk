/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Job35b8f199c29410002508ffd7ad6101f3 } from './job35b8f199c29410002508ffd7ad6101f3';
import { JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020AllOf } from './job-changes-start-details-data-ce861a6a360d10002d40f176b7180020-all-of';
import { Location6da81665c26510001fc6b1d42fae5f7b } from './location6da81665c26510001fc6b1d42fae5f7b';
import { Reason6da81665c26510001f34d0a154765e9b } from './reason6da81665c26510001f34d0a154765e9b';
import { SupervisoryOrganizationE3267ea37e6f100032c00c34a99e74d8 } from './supervisory-organization-e3267ea37e6f100032c00c34a99e74d8';
import { Template2b1b95dfe4af100009f30dc769a31686 } from './template2b1b95dfe4af100009f30dc769a31686';
import { Worker271bbd673582100010110b9f9a6d99e1 } from './worker271bbd673582100010110b9f9a6d99e1';

/**
 * 
 * @export
 * @interface JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
 */
export interface JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020 {
    /**
     * 
     * @type {Worker271bbd673582100010110b9f9a6d99e1}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'worker'?: Worker271bbd673582100010110b9f9a6d99e1;
    /**
     * Next Pay Period?
     * @type {boolean}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'useNextPayPeriod'?: boolean;
    /**
     * 
     * @type {Template2b1b95dfe4af100009f30dc769a31686}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'template'?: Template2b1b95dfe4af100009f30dc769a31686;
    /**
     * 
     * @type {Job35b8f199c29410002508ffd7ad6101f3}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'job'?: Job35b8f199c29410002508ffd7ad6101f3;
    /**
     * The date this business process takes effect.
     * @type {string}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'date': string;
    /**
     * 
     * @type {Location6da81665c26510001fc6b1d42fae5f7b}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'location'?: Location6da81665c26510001fc6b1d42fae5f7b;
    /**
     * 
     * @type {Reason6da81665c26510001f34d0a154765e9b}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'reason'?: Reason6da81665c26510001f34d0a154765e9b;
    /**
     * 
     * @type {SupervisoryOrganizationE3267ea37e6f100032c00c34a99e74d8}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'supervisoryOrganization'?: SupervisoryOrganizationE3267ea37e6f100032c00c34a99e74d8;
    /**
     * Id of the instance
     * @type {string}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof JobChangesStartDetailsDataCe861a6a360d10002d40f176b7180020
     */
    'descriptor'?: string;
}

