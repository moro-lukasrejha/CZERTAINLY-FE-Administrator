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
    CertificateType,
    ResponseAttributeDto,
} from './';

/**
 * @export
 * @interface ComplianceProfileRuleDto
 */
export interface ComplianceProfileRuleDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof ComplianceProfileRuleDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof ComplianceProfileRuleDto
     */
    name: string;
    /**
     * Description of the rule
     * @type {string}
     * @memberof ComplianceProfileRuleDto
     */
    description?: string;
    /**
     * Connector Name
     * @type {string}
     * @memberof ComplianceProfileRuleDto
     */
    connectorName: string;
    /**
     * Connector UUID
     * @type {string}
     * @memberof ComplianceProfileRuleDto
     */
    connectorUuid: string;
    /**
     * Connector Kind
     * @type {string}
     * @memberof ComplianceProfileRuleDto
     */
    kind: string;
    /**
     * Group UUID
     * @type {string}
     * @memberof ComplianceProfileRuleDto
     */
    groupUuid?: string;
    /**
     * @type {CertificateType}
     * @memberof ComplianceProfileRuleDto
     */
    certificateType: CertificateType;
    /**
     * List of attributes for the rule
     * @type {Array<ResponseAttributeDto>}
     * @memberof ComplianceProfileRuleDto
     */
    attributes: Array<ResponseAttributeDto>;
    /**
     * UUID of the Compliance Profile
     * @type {string}
     * @memberof ComplianceProfileRuleDto
     */
    complianceProfileUuid: string;
    /**
     * Name of the Compliance Profile
     * @type {string}
     * @memberof ComplianceProfileRuleDto
     */
    complianceProfileName: string;
}