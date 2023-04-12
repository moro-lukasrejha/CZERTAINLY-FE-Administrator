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
 * @interface ClientCertificateRekeyRequestDto
 */
export interface ClientCertificateRekeyRequestDto {
    /**
     * True to replace renewed certificate in the associated locations
     * @type {boolean}
     * @memberof ClientCertificateRekeyRequestDto
     */
    replaceInLocations?: boolean;
    /**
     * Certificate sign request (PKCS#10) encoded as Base64 string. If not provided, CSR attributes will be used
     * @type {string}
     * @memberof ClientCertificateRekeyRequestDto
     */
    pkcs10?: string;
    /**
     * Key UUID
     * @type {string}
     * @memberof ClientCertificateRekeyRequestDto
     */
    keyUuid: string;
    /**
     * Token Profile UUID
     * @type {string}
     * @memberof ClientCertificateRekeyRequestDto
     */
    tokenProfileUuid: string;
    /**
     * Signature Attributes. If not provided, existing attributes will be used to generate the new CSR
     * @type {Array<RequestAttributeDto>}
     * @memberof ClientCertificateRekeyRequestDto
     */
    signatureAttributes?: Array<RequestAttributeDto>;
}
