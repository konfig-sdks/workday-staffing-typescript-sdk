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
 * @interface ChangeJobMoveTeamData544fdf5c01da1000238ad82d26d90146AllOf
 */
export interface ChangeJobMoveTeamData544fdf5c01da1000238ad82d26d90146AllOf {
    /**
     * Returns a boolean that indicates whether teams reporting to the Manager moved with them during the Change Job Event.
     * @type {boolean}
     * @memberof ChangeJobMoveTeamData544fdf5c01da1000238ad82d26d90146AllOf
     */
    'moveTeam'?: boolean;
}

