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

/**
 * Object permissions
 * @export
 * @interface ObjectPermissionsDto
 */
export interface ObjectPermissionsDto {
    /**
     * UUID of the Object
     * @type {string}
     * @memberof ObjectPermissionsDto
     */
    uuid: string;
    /**
     * Name of the Object
     * @type {string}
     * @memberof ObjectPermissionsDto
     */
    name: string;
    /**
     * Allowed Action list
     * @type {Array<string>}
     * @memberof ObjectPermissionsDto
     */
    allow: Array<string>;
    /**
     * Denied Action list
     * @type {Array<string>}
     * @memberof ObjectPermissionsDto
     */
    deny: Array<string>;
}
