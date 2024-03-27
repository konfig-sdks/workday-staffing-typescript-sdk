/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BusinessProcessParameters5afc0b4b5a4610002aaebb8180cd2261 } from './business-process-parameters5afc0b4b5a4610002aaebb8180cd2261';
import { EventState54e611eca2c910000fbc4579181c0111AllOf } from './event-state54e611eca2c910000fbc4579181c0111-all-of';
import { Status54e611eca2c910000fbc4599be0b0112 } from './status54e611eca2c910000fbc4599be0b0112';

/**
 * 
 * @export
 * @interface EventState54e611eca2c910000fbc4579181c0111
 */
export interface EventState54e611eca2c910000fbc4579181c0111 {
    /**
     * 
     * @type {BusinessProcessParameters5afc0b4b5a4610002aaebb8180cd2261}
     * @memberof EventState54e611eca2c910000fbc4579181c0111
     */
    'businessProcessParameters'?: BusinessProcessParameters5afc0b4b5a4610002aaebb8180cd2261;
    /**
     * 
     * @type {Status54e611eca2c910000fbc4599be0b0112}
     * @memberof EventState54e611eca2c910000fbc4579181c0111
     */
    'status'?: Status54e611eca2c910000fbc4599be0b0112;
    /**
     * Validation message for an action event triggered by a condition.
     * @type {string}
     * @memberof EventState54e611eca2c910000fbc4579181c0111
     */
    'validation'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof EventState54e611eca2c910000fbc4579181c0111
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof EventState54e611eca2c910000fbc4579181c0111
     */
    'descriptor'?: string;
}

