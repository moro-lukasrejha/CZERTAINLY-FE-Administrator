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
    AttributeContentType,
    AttributeType,
    BaseAttributeContent,
    NameAndUuidDto,
} from './';

/**
 * Response metadata attribute instance with content
 * @export
 * @interface ResponseMetadataDto
 */
export interface ResponseMetadataDto {
    /**
     * UUID of the Attribute
     * @type {string}
     * @memberof ResponseMetadataDto
     */
    uuid?: string;
    /**
     * Name of the Attribute
     * @type {string}
     * @memberof ResponseMetadataDto
     */
    name: string;
    /**
     * Label of the the Attribute
     * @type {string}
     * @memberof ResponseMetadataDto
     */
    label: string;
    /**
     * @type {AttributeType}
     * @memberof ResponseMetadataDto
     */
    type: AttributeType;
    /**
     * @type {AttributeContentType}
     * @memberof ResponseMetadataDto
     */
    contentType: AttributeContentType;
    /**
     * Content of the Attribute
     * @type {Array<BaseAttributeContent>}
     * @memberof ResponseMetadataDto
     */
    content?: Array<BaseAttributeContent>;
    /**
     * Source Object Type
     * @type {string}
     * @memberof ResponseMetadataDto
     */
    sourceObjectType?: string;
    /**
     * Source Objects
     * @type {Array<NameAndUuidDto>}
     * @memberof ResponseMetadataDto
     */
    sourceObjects?: Array<NameAndUuidDto>;
}