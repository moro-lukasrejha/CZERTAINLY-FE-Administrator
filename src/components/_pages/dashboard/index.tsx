import { Col, Container, Row } from "reactstrap";

import Spinner from "components/Spinner";
import { EntityType } from "ducks/filters";
import { actions, selectors } from "ducks/statisticsDashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchCondition, SearchGroup } from "types/openapi";
import CountBadge from "./DashboardItem/CountBadge";
import DonutChart from "./DashboardItem/DonutChart";

const getDateInString = (daysOffset: number) => {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

function Dashboard() {
    const dashboard = useSelector(selectors.statisticsDashboard);
    const isFetching = useSelector(selectors.isFetching);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getDashboard());
    }, [dispatch]);

    return (
        <Container className="themed-container" fluid={true}>
            <Row>
                <Col>
                    <CountBadge data={dashboard?.totalCertificates} title="Certificates" link="../certificates" />
                </Col>

                <Col>
                    <CountBadge data={dashboard?.totalGroups} title="Groups" link="../groups" />
                </Col>

                <Col>
                    <CountBadge data={dashboard?.totalDiscoveries} title="Discoveries" link="../discoveries" />
                </Col>

                <Col>
                    <CountBadge data={dashboard?.totalRaProfiles} title="RA Profiles" link="../raprofiles" />
                </Col>
            </Row>

            <Row xs="1" sm="1" md="2" lg="2" xl="3">
                <Col>
                    <DonutChart
                        title={"Certificates by Status"}
                        data={dashboard?.certificateStatByStatus}
                        entity={EntityType.CERTIFICATE}
                        onSetFilter={(index, labels) => [
                            {
                                searchGroup: SearchGroup.Property,
                                condition: SearchCondition.Equals,
                                fieldIdentifier: "STATUS",
                                value: JSON.parse(JSON.stringify(labels[index])),
                            },
                        ]}
                        redirect="../certificates"
                    />
                </Col>

                <Col>
                    <DonutChart
                        title={"Certificates by Group"}
                        data={dashboard?.groupStatByCertificateCount}
                        entity={EntityType.CERTIFICATE}
                        onSetFilter={(index, labels) =>
                            labels[index] === "Unknown"
                                ? [
                                      {
                                          searchGroup: SearchGroup.Property,
                                          condition: SearchCondition.Empty,
                                          fieldIdentifier: "GROUP_NAME",
                                          value: JSON.parse(JSON.stringify("")),
                                      },
                                  ]
                                : [
                                      {
                                          searchGroup: SearchGroup.Property,
                                          condition: SearchCondition.Equals,
                                          fieldIdentifier: "GROUP_NAME",
                                          value: JSON.parse(JSON.stringify(labels[index])),
                                      },
                                  ]
                        }
                        redirect="../certificates"
                    />
                </Col>

                <Col>
                    <DonutChart
                        title={"Certificates by RA Profile"}
                        data={dashboard?.raProfileStatByCertificateCount}
                        entity={EntityType.CERTIFICATE}
                        onSetFilter={(index, labels) =>
                            labels[index] === "Unknown"
                                ? [
                                      {
                                          searchGroup: SearchGroup.Property,
                                          condition: SearchCondition.Empty,
                                          fieldIdentifier: "RA_PROFILE_NAME",
                                          value: JSON.parse(JSON.stringify("")),
                                      },
                                  ]
                                : [
                                      {
                                          searchGroup: SearchGroup.Property,
                                          condition: SearchCondition.Equals,
                                          fieldIdentifier: "RA_PROFILE_NAME",
                                          value: JSON.parse(JSON.stringify(labels[index])),
                                      },
                                  ]
                        }
                        redirect="../certificates"
                    />
                </Col>

                <Col>
                    <DonutChart
                        title={"Certificates by Type"}
                        data={dashboard?.certificateStatByType}
                        entity={EntityType.CERTIFICATE}
                        onSetFilter={(_index, _labels) => []}
                        redirect="../certificates"
                    />
                </Col>

                <Col>
                    <DonutChart
                        title={"Certificates by Expiration in Days"}
                        data={dashboard?.certificateStatByExpiry}
                        entity={EntityType.CERTIFICATE}
                        onSetFilter={(index, labels) => {
                            if (labels[index] === "More") {
                                return [
                                    {
                                        searchGroup: SearchGroup.Property,
                                        condition: SearchCondition.Greater,
                                        fieldIdentifier: "NOT_AFTER",
                                        value: JSON.parse(JSON.stringify(getDateInString(90))),
                                    },
                                ];
                            }
                            if (labels[index] === "expired") {
                                return [
                                    {
                                        searchGroup: SearchGroup.Property,
                                        condition: SearchCondition.Lesser,
                                        fieldIdentifier: "NOT_AFTER",
                                        value: JSON.parse(JSON.stringify(getDateInString(0))),
                                    },
                                ];
                            }
                            if (labels[index] === "60" || labels[index] === "90") {
                                return [
                                    {
                                        searchGroup: SearchGroup.Property,
                                        condition: SearchCondition.Greater,
                                        fieldIdentifier: "NOT_AFTER",
                                        value: JSON.parse(JSON.stringify(getDateInString(+labels[index] - 30))),
                                    },
                                    {
                                        searchGroup: SearchGroup.Property,
                                        condition: SearchCondition.Lesser,
                                        fieldIdentifier: "NOT_AFTER",
                                        value: JSON.parse(JSON.stringify(getDateInString(+labels[index]))),
                                    },
                                ];
                            }
                            return [
                                {
                                    searchGroup: SearchGroup.Property,
                                    condition: SearchCondition.Greater,
                                    fieldIdentifier: "NOT_AFTER",
                                    value: JSON.parse(JSON.stringify(getDateInString(+labels[index] - 10))),
                                },
                                {
                                    searchGroup: SearchGroup.Property,
                                    condition: SearchCondition.Lesser,
                                    fieldIdentifier: "NOT_AFTER",
                                    value: JSON.parse(JSON.stringify(getDateInString(+labels[index]))),
                                },
                            ];
                        }}
                        redirect="../certificates"
                    />
                </Col>

                <Col>
                    <DonutChart
                        title={"Certificates by Key Size"}
                        data={dashboard?.certificateStatByKeySize}
                        entity={EntityType.CERTIFICATE}
                        onSetFilter={(index, labels) => [
                            {
                                searchGroup: SearchGroup.Property,
                                condition: SearchCondition.Equals,
                                fieldIdentifier: "KEY_SIZE",
                                value: JSON.parse(JSON.stringify(labels[index])),
                            },
                        ]}
                        redirect="../certificates"
                    />
                </Col>

                <Col>
                    <DonutChart
                        title={"Certificates by Constraints"}
                        data={dashboard?.certificateStatByBasicConstraints}
                        entity={EntityType.CERTIFICATE}
                        onSetFilter={(_index, _labels) => []}
                        redirect="../certificates"
                    />
                </Col>

                <Col>
                    <DonutChart
                        title={"Certificates by Compliance"}
                        data={dashboard?.certificateStatByComplianceStatus}
                        entity={EntityType.CERTIFICATE}
                        onSetFilter={(index, labels) =>
                            labels[index] === "Not Checked"
                                ? [
                                      {
                                          searchGroup: SearchGroup.Property,
                                          condition: SearchCondition.Empty,
                                          fieldIdentifier: "COMPLIANCE_STATUS",
                                          value: JSON.parse(JSON.stringify("")),
                                      },
                                  ]
                                : [
                                      {
                                          searchGroup: SearchGroup.Property,
                                          condition: SearchCondition.Equals,
                                          fieldIdentifier: "COMPLIANCE_STATUS",
                                          value: JSON.parse(JSON.stringify(labels[index])),
                                      },
                                  ]
                        }
                        redirect="../certificates"
                    />
                </Col>
            </Row>

            <Spinner active={isFetching || dashboard === null} />
        </Container>
    );
}

export default Dashboard;
