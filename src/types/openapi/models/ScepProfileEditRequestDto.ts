// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.7.2-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { RequestAttributeDto } from "./";

/**
 * @export
 * @interface ScepProfileEditRequestDto
 */
export interface ScepProfileEditRequestDto {
    /**
     * Description of the SCEP Profile
     * @type {string}
     * @memberof ScepProfileEditRequestDto
     */
    description?: string;
    /**
     * RA Profile UUID
     * @type {string}
     * @memberof ScepProfileEditRequestDto
     */
    raProfileUuid?: string;
    /**
     * List of Attributes to issue Certificate
     * @type {Array<RequestAttributeDto>}
     * @memberof ScepProfileEditRequestDto
     */
    issueCertificateAttributes: Array<RequestAttributeDto>;
    /**
     * Require manual approval for SCEP requests
     * @type {boolean}
     * @memberof ScepProfileEditRequestDto
     */
    requireManualApproval?: boolean;
    /**
     * UUID of the Certificate to be used as CA Certificate for SCEP Requests
     * @type {string}
     * @memberof ScepProfileEditRequestDto
     */
    caCertificateUuid: string;
    /**
     * List of Custom Attributes
     * @type {Array<RequestAttributeDto>}
     * @memberof ScepProfileEditRequestDto
     */
    customAttributes?: Array<RequestAttributeDto>;
    /**
     * Minimum expiry days to allow renewal of certificate
     * @type {number}
     * @memberof ScepProfileEditRequestDto
     */
    renewalThreshold?: number;
    /**
     * Include CA Certificate in the SCEP Message response
     * @type {boolean}
     * @memberof ScepProfileEditRequestDto
     */
    includeCaCertificate?: boolean;
    /**
     * Include CA Certificate Chain in the SCEP Message response
     * @type {boolean}
     * @memberof ScepProfileEditRequestDto
     */
    includeCaCertificateChain?: boolean;
    /**
     * Challenge Password for the SCEP Request
     * @type {string}
     * @memberof ScepProfileEditRequestDto
     */
    challengePassword: string;
}
