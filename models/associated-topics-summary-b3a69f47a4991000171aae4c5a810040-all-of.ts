/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface AssociatedTopicsSummaryB3a69f47a4991000171aae4c5a810040AllOf
 */
export interface AssociatedTopicsSummaryB3a69f47a4991000171aae4c5a810040AllOf {
    /**
     * Topic name.
     * @type {string}
     * @memberof AssociatedTopicsSummaryB3a69f47a4991000171aae4c5a810040AllOf
     */
    'name'?: string;
    /**
     * Indicates that the topic is archived.
     * @type {boolean}
     * @memberof AssociatedTopicsSummaryB3a69f47a4991000171aae4c5a810040AllOf
     */
    'archived'?: boolean;
    /**
     * Id of the instance
     * @type {string}
     * @memberof AssociatedTopicsSummaryB3a69f47a4991000171aae4c5a810040AllOf
     */
    'id'?: string;
}

