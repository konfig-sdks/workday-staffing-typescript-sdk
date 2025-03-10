/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CompanyInsiderTypeRelatedView7deab99f645f10001000f8a388740081 } from './company-insider-type-related-view7deab99f645f10001000f8a388740081';
import { CountryRelatedView7deab99f645f10000cf305c30e260054 } from './country-related-view7deab99f645f10000cf305c30e260054';
import { DifficultyToFill89a0b59e7cce1000074acb57c0c50162 } from './difficulty-to-fill89a0b59e7cce1000074acb57c0c50162';
import { JobCategory89a0b59e7cce1000074acb471919015f } from './job-category89a0b59e7cce1000074acb471919015f';
import { JobFamilyRelatedView3b00708994e410000e0e2540529b12d6 } from './job-family-related-view3b00708994e410000e0e2540529b12d6';
import { JobLevel89a0b59e7cce1000074acb3c1e8e015d } from './job-level89a0b59e7cce1000074acb3c1e8e015d';
import { JobProfileDetailView7deab99f645f10000bd5e61a1b780041AllOf } from './job-profile-detail-view7deab99f645f10000bd5e61a1b780041-all-of';
import { JobProfileExemptRelatedView3b00708994e41000076da515387812a2 } from './job-profile-exempt-related-view3b00708994e41000076da515387812a2';
import { JobProfilePayRateTypeRelatedView3b00708994e4100008d4b09e903f12b5 } from './job-profile-pay-rate-type-related-view3b00708994e4100008d4b09e903f12b5';
import { ManagementLevel89a0b59e7cce1000074acb1d768e0158 } from './management-level89a0b59e7cce1000074acb1d768e0158';
import { WorkersCompensationCodeRelatedView3b00708994e4100004af13d958811287 } from './workers-compensation-code-related-view3b00708994e4100004af13d958811287';

/**
 * 
 * @export
 * @interface JobProfileDetailView7deab99f645f10000bd5e61a1b780041
 */
export interface JobProfileDetailView7deab99f645f10000bd5e61a1b780041 {
    /**
     * The description of the responsibilities and/or qualifications for the job profile.
     * @type {string}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'summary'?: string;
    /**
     * The formatted job description value on the job profile.
     * @type {string}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'jobDescription'?: string;
    /**
     * Returns true if the Job Profile is inactive.
     * @type {boolean}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'inactive'?: boolean;
    /**
     * Indicates if the job profile has been marked as being public.
     * @type {boolean}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'public'?: boolean;
    /**
     * 
     * @type {JobLevel89a0b59e7cce1000074acb3c1e8e015d}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'jobLevel'?: JobLevel89a0b59e7cce1000074acb3c1e8e015d;
    /**
     * 
     * @type {ManagementLevel89a0b59e7cce1000074acb1d768e0158}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'managementLevel'?: ManagementLevel89a0b59e7cce1000074acb1d768e0158;
    /**
     * Indicates if the job is considered critical.
     * @type {boolean}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'criticalJob'?: boolean;
    /**
     * Returns the job exempt instances for the job profile.
     * @type {Array<JobProfileExemptRelatedView3b00708994e41000076da515387812a2>}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'jobExempts'?: Array<JobProfileExemptRelatedView3b00708994e41000076da515387812a2>;
    /**
     * The Company Insider Type for the Job Profile.
     * @type {Array<CompanyInsiderTypeRelatedView7deab99f645f10001000f8a388740081>}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'companyInsiderTypes'?: Array<CompanyInsiderTypeRelatedView7deab99f645f10001000f8a388740081>;
    /**
     * The Job Title Default for the job profile.
     * @type {string}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'defaultJobTitle'?: string;
    /**
     * Indicates if the Job Profile requires a Work Shift to be specified on associated Positions.
     * @type {boolean}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'workShiftRequired'?: boolean;
    /**
     * The formatted additional job description value on the job profile.
     * @type {string}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'additionalJobDescription'?: string;
    /**
     * The job family for the job profile.
     * @type {Array<JobFamilyRelatedView3b00708994e410000e0e2540529b12d6>}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'jobFamilies'?: Array<JobFamilyRelatedView3b00708994e410000e0e2540529b12d6>;
    /**
     * 
     * @type {DifficultyToFill89a0b59e7cce1000074acb57c0c50162}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'difficultyToFill'?: DifficultyToFill89a0b59e7cce1000074acb57c0c50162;
    /**
     * The name of the job profile.
     * @type {string}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'name'?: string;
    /**
     * 
     * @type {JobCategory89a0b59e7cce1000074acb471919015f}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'jobCategory'?: JobCategory89a0b59e7cce1000074acb471919015f;
    /**
     * The pay rate for the job profile
     * @type {Array<JobProfilePayRateTypeRelatedView3b00708994e4100008d4b09e903f12b5>}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'payRateTypes'?: Array<JobProfilePayRateTypeRelatedView3b00708994e4100008d4b09e903f12b5>;
    /**
     * Returns the valid countries for the job profile.
     * @type {Array<CountryRelatedView7deab99f645f10000cf305c30e260054>}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'restrictedToCountries'?: Array<CountryRelatedView7deab99f645f10000cf305c30e260054>;
    /**
     * Returns the compensation codes for this job profile.
     * @type {Array<WorkersCompensationCodeRelatedView3b00708994e4100004af13d958811287>}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'workersCompensationCodes'?: Array<WorkersCompensationCodeRelatedView3b00708994e4100004af13d958811287>;
    /**
     * Id of the instance
     * @type {string}
     * @memberof JobProfileDetailView7deab99f645f10000bd5e61a1b780041
     */
    'id'?: string;
}

