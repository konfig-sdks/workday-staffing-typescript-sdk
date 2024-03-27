/* tslint:disable */
/* eslint-disable */
/*
staffing

The Staffing REST APIs enable you to get and manage staffing information, such as jobs, job families, job profiles, supervisory organizations, worker check-ins, and job changes. The Staffing service also includes the /workers resource to access staffing information for non-terminated workers.



Related Information:
- Administrator Guide: Setup Considerations: Job Changes

The version of the OpenAPI document: v6


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ERRORMODELREFERENCE } from '../models';
// @ts-ignore
import { JobData1bfa8925c50510000ae4479925510026 } from '../models';
// @ts-ignore
import { JobWorkspaceData1005157e3d631000144205466a6c13d3 } from '../models';
// @ts-ignore
import { JobsGetCollectionResponse } from '../models';
// @ts-ignore
import { JobsGetWorkspacesResponse } from '../models';
// @ts-ignore
import { VALIDATIONERRORMODELREFERENCE } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a collection of jobs.  Secured by: Worker Position: View  Scope: Staffing
         * @summary Retrieves a collection of jobs.
         * @param {number} [limit] The maximum number of objects in a single response. The default is 20. The maximum is 100.
         * @param {number} [offset] The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollection: async (limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a job with the specified job ID.  Secured by: Worker Position: View  Scope: Staffing
         * @summary Retrieves a single job instance.
         * @param {string} iD The Workday ID of the resource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobById: async (iD: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'iD' is not null or undefined
            assertParamExists('getJobById', 'iD', iD)
            const localVarPath = `/jobs/{ID}`
                .replace(`{${"ID"}}`, encodeURIComponent(String(iD !== undefined ? iD : `-ID-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs/{ID}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a single workspace for the specified job ID.  Secured by: Worker Data: Public Worker Reports  Scope: Staffing
         * @summary Retrieves a single workspace instance.
         * @param {string} iD The Workday ID of the resource.
         * @param {string} subresourceID The Workday ID of the subresource.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkspace: async (iD: string, subresourceID: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'iD' is not null or undefined
            assertParamExists('getWorkspace', 'iD', iD)
            // verify required parameter 'subresourceID' is not null or undefined
            assertParamExists('getWorkspace', 'subresourceID', subresourceID)
            const localVarPath = `/jobs/{ID}/workspace/{subresourceID}`
                .replace(`{${"ID"}}`, encodeURIComponent(String(iD !== undefined ? iD : `-ID-`)))
                .replace(`{${"subresourceID"}}`, encodeURIComponent(String(subresourceID !== undefined ? subresourceID : `-subresourceID-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs/{ID}/workspace/{subresourceID}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a collection of workspaces for the specified job ID.  Secured by: Worker Data: Public Worker Reports  Scope: Staffing
         * @summary Retrieves a collection of workspaces for the specified job ID.
         * @param {string} iD The Workday ID of the resource.
         * @param {number} [limit] The maximum number of objects in a single response. The default is 20. The maximum is 100.
         * @param {number} [offset] The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkspaces: async (iD: string, limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'iD' is not null or undefined
            assertParamExists('getWorkspaces', 'iD', iD)
            const localVarPath = `/jobs/{ID}/workspace`
                .replace(`{${"ID"}}`, encodeURIComponent(String(iD !== undefined ? iD : `-ID-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs/{ID}/workspace',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves a collection of jobs.  Secured by: Worker Position: View  Scope: Staffing
         * @summary Retrieves a collection of jobs.
         * @param {JobsApiGetCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCollection(requestParameters: JobsApiGetCollectionRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobsGetCollectionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCollection(requestParameters.limit, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a job with the specified job ID.  Secured by: Worker Position: View  Scope: Staffing
         * @summary Retrieves a single job instance.
         * @param {JobsApiGetJobByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobById(requestParameters: JobsApiGetJobByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobData1bfa8925c50510000ae4479925510026>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobById(requestParameters.iD, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a single workspace for the specified job ID.  Secured by: Worker Data: Public Worker Reports  Scope: Staffing
         * @summary Retrieves a single workspace instance.
         * @param {JobsApiGetWorkspaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkspace(requestParameters: JobsApiGetWorkspaceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobWorkspaceData1005157e3d631000144205466a6c13d3>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkspace(requestParameters.iD, requestParameters.subresourceID, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a collection of workspaces for the specified job ID.  Secured by: Worker Data: Public Worker Reports  Scope: Staffing
         * @summary Retrieves a collection of workspaces for the specified job ID.
         * @param {JobsApiGetWorkspacesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWorkspaces(requestParameters: JobsApiGetWorkspacesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobsGetWorkspacesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWorkspaces(requestParameters.iD, requestParameters.limit, requestParameters.offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobsApiFp(configuration)
    return {
        /**
         * Retrieves a collection of jobs.  Secured by: Worker Position: View  Scope: Staffing
         * @summary Retrieves a collection of jobs.
         * @param {JobsApiGetCollectionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollection(requestParameters: JobsApiGetCollectionRequest = {}, options?: AxiosRequestConfig): AxiosPromise<JobsGetCollectionResponse> {
            return localVarFp.getCollection(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a job with the specified job ID.  Secured by: Worker Position: View  Scope: Staffing
         * @summary Retrieves a single job instance.
         * @param {JobsApiGetJobByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobById(requestParameters: JobsApiGetJobByIdRequest, options?: AxiosRequestConfig): AxiosPromise<JobData1bfa8925c50510000ae4479925510026> {
            return localVarFp.getJobById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a single workspace for the specified job ID.  Secured by: Worker Data: Public Worker Reports  Scope: Staffing
         * @summary Retrieves a single workspace instance.
         * @param {JobsApiGetWorkspaceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkspace(requestParameters: JobsApiGetWorkspaceRequest, options?: AxiosRequestConfig): AxiosPromise<JobWorkspaceData1005157e3d631000144205466a6c13d3> {
            return localVarFp.getWorkspace(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a collection of workspaces for the specified job ID.  Secured by: Worker Data: Public Worker Reports  Scope: Staffing
         * @summary Retrieves a collection of workspaces for the specified job ID.
         * @param {JobsApiGetWorkspacesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWorkspaces(requestParameters: JobsApiGetWorkspacesRequest, options?: AxiosRequestConfig): AxiosPromise<JobsGetWorkspacesResponse> {
            return localVarFp.getWorkspaces(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getCollection operation in JobsApi.
 * @export
 * @interface JobsApiGetCollectionRequest
 */
export type JobsApiGetCollectionRequest = {
    
    /**
    * The maximum number of objects in a single response. The default is 20. The maximum is 100.
    * @type {number}
    * @memberof JobsApiGetCollection
    */
    readonly limit?: number
    
    /**
    * The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.
    * @type {number}
    * @memberof JobsApiGetCollection
    */
    readonly offset?: number
    
}

/**
 * Request parameters for getJobById operation in JobsApi.
 * @export
 * @interface JobsApiGetJobByIdRequest
 */
export type JobsApiGetJobByIdRequest = {
    
    /**
    * The Workday ID of the resource.
    * @type {string}
    * @memberof JobsApiGetJobById
    */
    readonly iD: string
    
}

/**
 * Request parameters for getWorkspace operation in JobsApi.
 * @export
 * @interface JobsApiGetWorkspaceRequest
 */
export type JobsApiGetWorkspaceRequest = {
    
    /**
    * The Workday ID of the resource.
    * @type {string}
    * @memberof JobsApiGetWorkspace
    */
    readonly iD: string
    
    /**
    * The Workday ID of the subresource.
    * @type {string}
    * @memberof JobsApiGetWorkspace
    */
    readonly subresourceID: string
    
}

/**
 * Request parameters for getWorkspaces operation in JobsApi.
 * @export
 * @interface JobsApiGetWorkspacesRequest
 */
export type JobsApiGetWorkspacesRequest = {
    
    /**
    * The Workday ID of the resource.
    * @type {string}
    * @memberof JobsApiGetWorkspaces
    */
    readonly iD: string
    
    /**
    * The maximum number of objects in a single response. The default is 20. The maximum is 100.
    * @type {number}
    * @memberof JobsApiGetWorkspaces
    */
    readonly limit?: number
    
    /**
    * The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.
    * @type {number}
    * @memberof JobsApiGetWorkspaces
    */
    readonly offset?: number
    
}

/**
 * JobsApiGenerated - object-oriented interface
 * @export
 * @class JobsApiGenerated
 * @extends {BaseAPI}
 */
export class JobsApiGenerated extends BaseAPI {
    /**
     * Retrieves a collection of jobs.  Secured by: Worker Position: View  Scope: Staffing
     * @summary Retrieves a collection of jobs.
     * @param {JobsApiGetCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getCollection(requestParameters: JobsApiGetCollectionRequest = {}, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getCollection(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a job with the specified job ID.  Secured by: Worker Position: View  Scope: Staffing
     * @summary Retrieves a single job instance.
     * @param {JobsApiGetJobByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getJobById(requestParameters: JobsApiGetJobByIdRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getJobById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a single workspace for the specified job ID.  Secured by: Worker Data: Public Worker Reports  Scope: Staffing
     * @summary Retrieves a single workspace instance.
     * @param {JobsApiGetWorkspaceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getWorkspace(requestParameters: JobsApiGetWorkspaceRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getWorkspace(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a collection of workspaces for the specified job ID.  Secured by: Worker Data: Public Worker Reports  Scope: Staffing
     * @summary Retrieves a collection of workspaces for the specified job ID.
     * @param {JobsApiGetWorkspacesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getWorkspaces(requestParameters: JobsApiGetWorkspacesRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getWorkspaces(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
