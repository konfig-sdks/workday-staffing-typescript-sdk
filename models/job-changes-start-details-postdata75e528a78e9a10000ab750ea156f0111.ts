/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Job75e528a78e9a10000ab7512c5c550115 } from './job75e528a78e9a10000ab7512c5c550115';
import { JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111AllOf } from './job-changes-start-details-postdata75e528a78e9a10000ab750ea156f0111-all-of';
import { Location75e528a78e9a10000ab75125ebe50114 } from './location75e528a78e9a10000ab75125ebe50114';
import { Reason85deac43cd1a10000b96c80c118f171e } from './reason85deac43cd1a10000b96c80c118f171e';
import { SupervisoryOrganization75e528a78e9a10000ab75132a9df0116 } from './supervisory-organization75e528a78e9a10000ab75132a9df0116';
import { Template2b1b95dfe4af100007f63081aec5158e } from './template2b1b95dfe4af100007f63081aec5158e';

/**
 * 
 * @export
 * @interface JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111
 */
export interface JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111 {
    /**
     * 
     * @type {SupervisoryOrganization75e528a78e9a10000ab75132a9df0116}
     * @memberof JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111
     */
    'supervisoryOrganization'?: SupervisoryOrganization75e528a78e9a10000ab75132a9df0116;
    /**
     * 
     * @type {Location75e528a78e9a10000ab75125ebe50114}
     * @memberof JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111
     */
    'location'?: Location75e528a78e9a10000ab75125ebe50114;
    /**
     * 
     * @type {Template2b1b95dfe4af100007f63081aec5158e}
     * @memberof JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111
     */
    'template'?: Template2b1b95dfe4af100007f63081aec5158e;
    /**
     * 
     * @type {Reason85deac43cd1a10000b96c80c118f171e}
     * @memberof JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111
     */
    'reason'?: Reason85deac43cd1a10000b96c80c118f171e;
    /**
     * The date this business process takes effect.
     * @type {string}
     * @memberof JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111
     */
    'date': string;
    /**
     * 
     * @type {Job75e528a78e9a10000ab7512c5c550115}
     * @memberof JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111
     */
    'job'?: Job75e528a78e9a10000ab7512c5c550115;
    /**
     * Id of the instance
     * @type {string}
     * @memberof JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof JobChangesStartDetailsPOSTData75e528a78e9a10000ab750ea156f0111
     */
    'descriptor'?: string;
}

