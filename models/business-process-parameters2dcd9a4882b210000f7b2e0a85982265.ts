/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Action38ff08ab6736100010816009079d0126 } from './action38ff08ab6736100010816009079d0126';
import { BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265AllOf } from './business-process-parameters2dcd9a4882b210000f7b2e0a85982265-all-of';
import { Comments86093b8a932f10001499f356ff83012e } from './comments86093b8a932f10001499f356ff83012e';
import { EventAttachmentsForToolbar43b30ba735b8100011ee4767246d0143 } from './event-attachments-for-toolbar43b30ba735b8100011ee4767246d0143';
import { For5d688bd57bb910001815ab3dd10024a9 } from './for5d688bd57bb910001815ab3dd10024a9';
import { OverallBusinessProcess5d688bd57bb910001815ab49927724aa } from './overall-business-process5d688bd57bb910001815ab49927724aa';
import { TransactionStatus7457adcbe0fa1000089b63ab3a510000 } from './transaction-status7457adcbe0fa1000089b63ab3a510000';

/**
 * 
 * @export
 * @interface BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
 */
export interface BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265 {
    /**
     * 
     * @type {Action38ff08ab6736100010816009079d0126}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'action': Action38ff08ab6736100010816009079d0126;
    /**
     * 
     * @type {OverallBusinessProcess5d688bd57bb910001815ab49927724aa}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'overallBusinessProcess'?: OverallBusinessProcess5d688bd57bb910001815ab49927724aa;
    /**
     * Returns a null.
     * @type {string}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'comment'?: string;
    /**
     * Returns the comments for the current business process.
     * @type {Array<Comments86093b8a932f10001499f356ff83012e>}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'comments'?: Array<Comments86093b8a932f10001499f356ff83012e>;
    /**
     * 
     * @type {TransactionStatus7457adcbe0fa1000089b63ab3a510000}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'transactionStatus'?: TransactionStatus7457adcbe0fa1000089b63ab3a510000;
    /**
     * Warning message for an action event triggered by a condition.
     * @type {string}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'warningValidations'?: string;
    /**
     * The current status of the business process.  For example: Successfully Completed, Denied, Terminated.
     * @type {string}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'overallStatus'?: string;
    /**
     * Returns attachments associated with this business process that are uploaded from the toolbar and are accessible to the processing person. Returns blank if either of these conditions are not met.
     * @type {Array<EventAttachmentsForToolbar43b30ba735b8100011ee4767246d0143>}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'attachments'?: Array<EventAttachmentsForToolbar43b30ba735b8100011ee4767246d0143>;
    /**
     * Validation message for an action event triggered by a condition.
     * @type {string}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'criticalValidations'?: string;
    /**
     * 
     * @type {For5d688bd57bb910001815ab3dd10024a9}
     * @memberof BusinessProcessParameters2dcd9a4882b210000f7b2e0a85982265
     */
    'for'?: For5d688bd57bb910001815ab3dd10024a9;
}

