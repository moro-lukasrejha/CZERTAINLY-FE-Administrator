// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 1.5.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type {
    KeyCompromiseReason,
} from './';

/**
 * @export
 * @interface BulkCompromiseKeyItemRequestDto
 */
export interface BulkCompromiseKeyItemRequestDto {
    /**
     * @type {KeyCompromiseReason}
     * @memberof BulkCompromiseKeyItemRequestDto
     */
    reason: KeyCompromiseReason;
    /**
     * List of Key Item UUID
     * @type {Array<string>}
     * @memberof BulkCompromiseKeyItemRequestDto
     */
    uuids?: Array<string>;
}