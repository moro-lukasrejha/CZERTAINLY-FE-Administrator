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

import type { LocationDto } from "./";

/**
 * @export
 * @interface LocationsResponseDto
 */
export interface LocationsResponseDto {
    /**
     * Locations
     * @type {Array<LocationDto>}
     * @memberof LocationsResponseDto
     */
    locations: Array<LocationDto>;
    /**
     * Number of locations per page
     * @type {number}
     * @memberof LocationsResponseDto
     */
    itemsPerPage: number;
    /**
     * Page number for the request
     * @type {number}
     * @memberof LocationsResponseDto
     */
    pageNumber: number;
    /**
     * Number of pages available
     * @type {number}
     * @memberof LocationsResponseDto
     */
    totalPages: number;
    /**
     * Number of items available
     * @type {number}
     * @memberof LocationsResponseDto
     */
    totalItems: number;
}
