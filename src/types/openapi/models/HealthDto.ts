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

import type { HealthStatus } from "./";

/**
 * @export
 * @interface HealthDto
 */
export interface HealthDto {
    /**
     * @type {HealthStatus}
     * @memberof HealthDto
     */
    status: HealthStatus;
    /**
     * Detailed status description
     * @type {string}
     * @memberof HealthDto
     */
    description?: string;
    /**
     * Nested status of services
     * @type {{ [key: string]: HealthDto; }}
     * @memberof HealthDto
     */
    parts?: { [key: string]: HealthDto };
}
