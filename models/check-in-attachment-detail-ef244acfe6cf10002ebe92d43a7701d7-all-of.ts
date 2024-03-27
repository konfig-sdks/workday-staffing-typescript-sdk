/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContentTypeEf244acfe6cf10002ebe92e7001601d8 } from './content-type-ef244acfe6cf10002ebe92e7001601d8';

/**
 * 
 * @export
 * @interface CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7AllOf
 */
export interface CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7AllOf {
    /**
     * File name of the attachment
     * @type {string}
     * @memberof CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7AllOf
     */
    'fileName'?: string;
    /**
     * 
     * @type {ContentTypeEf244acfe6cf10002ebe92e7001601d8}
     * @memberof CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7AllOf
     */
    'contentType'?: ContentTypeEf244acfe6cf10002ebe92e7001601d8;
    /**
     * Returns comment for the Attachment
     * @type {string}
     * @memberof CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7AllOf
     */
    'comment'?: string;
    /**
     * File length of the attachment
     * @type {number}
     * @memberof CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7AllOf
     */
    'fileLength'?: number;
    /**
     * Id of the instance
     * @type {string}
     * @memberof CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7AllOf
     */
    'id'?: string;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof CheckInAttachmentDetailEf244acfe6cf10002ebe92d43a7701d7AllOf
     */
    'descriptor'?: string;
}

