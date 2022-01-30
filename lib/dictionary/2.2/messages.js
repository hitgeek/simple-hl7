var messages = {
    "ACK": {
        "desc": "General acknowledgment message",
        "name": "ACK",
        "segments": {
            "desc": "General acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADR_A19": {
        "desc": "Patient query",
        "name": "ADR_A19",
        "segments": {
            "desc": "Patient query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QUERY_RESPONSE",
                    "desc": "Query response",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "EVN",
                            "desc": "Event type",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NK1",
                            "desc": "Next of kin",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient visit - additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation result",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DG1",
                            "desc": "Diagnosis",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "INSURANCE",
                            "desc": "Insurance",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "IN1",
                                    "desc": "Insurance",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "Insurance additional info",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional info-certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "ACC",
                            "desc": "Accident",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB1",
                            "desc": "Ub82 data",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB2",
                            "desc": "Ub92 data",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A01": {
        "desc": "Admit/visit notification",
        "name": "ADT_A01",
        "segments": {
            "desc": "Admit/visit notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A02": {
        "desc": "Transfer a patient",
        "name": "ADT_A02",
        "segments": {
            "desc": "Transfer a patient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A03": {
        "desc": "Discharge/end visit",
        "name": "ADT_A03",
        "segments": {
            "desc": "Discharge/end visit",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A04": {
        "desc": "Register a patient",
        "name": "ADT_A04",
        "segments": {
            "desc": "Register a patient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A05": {
        "desc": "Pre-admit a patient",
        "name": "ADT_A05",
        "segments": {
            "desc": "Pre-admit a patient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A06": {
        "desc": "Change an outpatient to an inpatient",
        "name": "ADT_A06",
        "segments": {
            "desc": "Change an outpatient to an inpatient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A07": {
        "desc": "Change an inpatient to an outpatient",
        "name": "ADT_A07",
        "segments": {
            "desc": "Change an inpatient to an outpatient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A08": {
        "desc": "Update patient information",
        "name": "ADT_A08",
        "segments": {
            "desc": "Update patient information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A09": {
        "desc": "Patient departing - tracking",
        "name": "ADT_A09",
        "segments": {
            "desc": "Patient departing - tracking",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A10": {
        "desc": "Patient arriving - tracking",
        "name": "ADT_A10",
        "segments": {
            "desc": "Patient arriving - tracking",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A11": {
        "desc": "Cancel admit/visit notification",
        "name": "ADT_A11",
        "segments": {
            "desc": "Cancel admit/visit notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A12": {
        "desc": "Cancel transfer",
        "name": "ADT_A12",
        "segments": {
            "desc": "Cancel transfer",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A13": {
        "desc": "Cancel discharge/end visit",
        "name": "ADT_A13",
        "segments": {
            "desc": "Cancel discharge/end visit",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A14": {
        "desc": "Pending admit",
        "name": "ADT_A14",
        "segments": {
            "desc": "Pending admit",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A15": {
        "desc": "Pending transfer",
        "name": "ADT_A15",
        "segments": {
            "desc": "Pending transfer",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A16": {
        "desc": "Pending discharge",
        "name": "ADT_A16",
        "segments": {
            "desc": "Pending discharge",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A17": {
        "desc": "Swap patients",
        "name": "ADT_A17",
        "segments": {
            "desc": "Swap patients",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A18": {
        "desc": "Merge patient information",
        "name": "ADT_A18",
        "segments": {
            "desc": "Merge patient information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A20": {
        "desc": "Bed status update",
        "name": "ADT_A20",
        "segments": {
            "desc": "Bed status update",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NPU",
                    "desc": "Bed status update",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A21": {
        "desc": "Patient goes on a \"leave of absence\"",
        "name": "ADT_A21",
        "segments": {
            "desc": "Patient goes on a \"leave of absence\"",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A22": {
        "desc": "Patient returns from a \"leave of absence\"",
        "name": "ADT_A22",
        "segments": {
            "desc": "Patient returns from a \"leave of absence\"",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A23": {
        "desc": "Delete a patient record",
        "name": "ADT_A23",
        "segments": {
            "desc": "Delete a patient record",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A24": {
        "desc": "Link patient information",
        "name": "ADT_A24",
        "segments": {
            "desc": "Link patient information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A25": {
        "desc": "Cancel pending discharge",
        "name": "ADT_A25",
        "segments": {
            "desc": "Cancel pending discharge",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A26": {
        "desc": "Cancel pending transfer",
        "name": "ADT_A26",
        "segments": {
            "desc": "Cancel pending transfer",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A27": {
        "desc": "Cancel pending admit",
        "name": "ADT_A27",
        "segments": {
            "desc": "Cancel pending admit",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A28": {
        "desc": "Add person information",
        "name": "ADT_A28",
        "segments": {
            "desc": "Add person information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A29": {
        "desc": "Delete person information",
        "name": "ADT_A29",
        "segments": {
            "desc": "Delete person information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A30": {
        "desc": "Merge person information",
        "name": "ADT_A30",
        "segments": {
            "desc": "Merge person information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A31": {
        "desc": "Update person information",
        "name": "ADT_A31",
        "segments": {
            "desc": "Update person information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "Patient allergy information",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PR1",
                    "desc": "Procedures",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "Guarantor",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "INSURANCE",
                    "desc": "Insurance",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "Insurance additional info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional info-certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "Ub82 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A32": {
        "desc": "Cancel patient arriving - tracking",
        "name": "ADT_A32",
        "segments": {
            "desc": "Cancel patient arriving - tracking",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A33": {
        "desc": "Cancel patient departing - tracking",
        "name": "ADT_A33",
        "segments": {
            "desc": "Cancel patient departing - tracking",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A34": {
        "desc": "Merge patient information - patient id only",
        "name": "ADT_A34",
        "segments": {
            "desc": "Merge patient information - patient id only",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A35": {
        "desc": "Merge patient information - account number only",
        "name": "ADT_A35",
        "segments": {
            "desc": "Merge patient information - account number only",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A36": {
        "desc": "Merge patient information - patient id and account number",
        "name": "ADT_A36",
        "segments": {
            "desc": "Merge patient information - patient id and account number",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A37": {
        "desc": "Unlink patient information",
        "name": "ADT_A37",
        "segments": {
            "desc": "Unlink patient information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "BAR_P01": {
        "desc": "Add patient accounts",
        "name": "BAR_P01",
        "segments": {
            "desc": "Add patient accounts",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "VISIT",
                    "desc": "Visit",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient visit - additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation result",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DG1",
                            "desc": "Diagnosis",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "NK1",
                            "desc": "Next of kin",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "INSURANCE",
                            "desc": "Insurance",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "IN1",
                                    "desc": "Insurance",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "Insurance additional info",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional info-certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "ACC",
                            "desc": "Accident",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB1",
                            "desc": "Ub82 data",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB2",
                            "desc": "Ub92 data",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "BAR_P02": {
        "desc": "Purge patient accounts",
        "name": "BAR_P02",
        "segments": {
            "desc": "Purge patient accounts",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "DFT_P03": {
        "desc": "Post detail financial transaction",
        "name": "DFT_P03",
        "segments": {
            "desc": "Post detail financial transaction",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "FT1",
                    "desc": "Financial transaction",
                    "min": 1,
                    "max": 0
                }
            ]
        }
    },
    "DSR_P04": {
        "desc": "Display response",
        "name": "DSR_P04",
        "segments": {
            "desc": "Display response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "DSR_Q01": {
        "desc": "Display response message",
        "name": "DSR_Q01",
        "segments": {
            "desc": "Display response message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "DSR_Q03": {
        "desc": "Deferred response to a query",
        "name": "DSR_Q03",
        "segments": {
            "desc": "Deferred response to a query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "DSR_R03": {
        "desc": "Display response",
        "name": "DSR_R03",
        "segments": {
            "desc": "Display response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "MFD_M01": {
        "desc": "Master files delayed application acknowledgment",
        "name": "MFD_M01",
        "segments": {
            "desc": "Master files delayed application acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "Master file identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "Master file acknowledgement",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFD_M02": {
        "desc": "Master files delayed application acknowledgment",
        "name": "MFD_M02",
        "segments": {
            "desc": "Master files delayed application acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "Master file identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "Master file acknowledgement",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFD_M03": {
        "desc": "Master files delayed application acknowledgment",
        "name": "MFD_M03",
        "segments": {
            "desc": "Master files delayed application acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "Master file identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "Master file acknowledgement",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFK_M01": {
        "desc": "Master file application acknowledgment",
        "name": "MFK_M01",
        "segments": {
            "desc": "Master file application acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "Master file identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "Master file acknowledgement",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFK_M02": {
        "desc": "Master file application acknowledgment",
        "name": "MFK_M02",
        "segments": {
            "desc": "Master file application acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "Master file identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "Master file acknowledgement",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFK_M03": {
        "desc": "Master file application acknowledgment",
        "name": "MFK_M03",
        "segments": {
            "desc": "Master file application acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "Master file identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "Master file acknowledgement",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFQ_M01": {
        "desc": "Query for master file record",
        "name": "MFQ_M01",
        "segments": {
            "desc": "Query for master file record",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "MFQ_M02": {
        "desc": "Query for master file record",
        "name": "MFQ_M02",
        "segments": {
            "desc": "Query for master file record",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "MFQ_M03": {
        "desc": "Query for master file record",
        "name": "MFQ_M03",
        "segments": {
            "desc": "Query for master file record",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "NMD_N01": {
        "desc": "Application management data message",
        "name": "NMD_N01",
        "segments": {
            "desc": "Application management data message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "CLOCK_AND_STATS_WITH_NOTES",
                    "desc": "Clock and stats with notes",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "CLOCK",
                            "desc": "Clock",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "NCK",
                                    "desc": "System clock",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "APP_STATS",
                            "desc": "App stats",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "NST",
                                    "desc": "Statistics",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "APP_STATUS",
                            "desc": "App status",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "NSC",
                                    "desc": "Status change",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "NMQ_N02": {
        "desc": "Application management query message",
        "name": "NMQ_N02",
        "segments": {
            "desc": "Application management query message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRY_WITH_DETAIL",
                    "desc": "Qry with detail",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "QRD",
                            "desc": "Query definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "Query filter",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "CLOCK_AND_STATISTICS",
                    "desc": "Clock and statistics",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "NCK",
                            "desc": "System clock",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NST",
                            "desc": "Statistics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NSC",
                            "desc": "Status change",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "NMR_N02": {
        "desc": "Application management response message",
        "name": "NMR_N02",
        "segments": {
            "desc": "Application management response message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "CLOCK_AND_STATS_WITH_NOTES_ALT",
                    "desc": "Clock and stats with notes alt",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "NCK",
                            "desc": "System clock",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "NST",
                            "desc": "Statistics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "NSC",
                            "desc": "Status change",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "ORF_R04": {
        "desc": "Response to query; transmission of requested observation",
        "name": "ORF_R04",
        "segments": {
            "desc": "Response to query; transmission of requested observation",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QUERY_RESPONSE",
                    "desc": "Query response",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "QRD",
                            "desc": "Query definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "Query filter",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ORDER",
                    "desc": "Order",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "ORC",
                            "desc": "Commom order",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBR",
                            "desc": "Observation request",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation result",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ORM_O01": {
        "desc": "Order message",
        "name": "ORM_O01",
        "segments": {
            "desc": "Order message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ORDER",
                    "desc": "Order",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "ORC",
                            "desc": "Commom order",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ORDER_DETAIL",
                            "desc": "Order detail",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "OBR,RQD,RQ1,RXO,ODS,ODT",
                                    "desc": "Details",
                                    "min": 0,
                                    "max": 0,
                                    "compounds": [
                                        {
                                            "name": "OBR",
                                            "desc": "Observation request",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RQD",
                                            "desc": "Requisition detail",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RQ1",
                                            "desc": "Requisition detail-1",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXO",
                                            "desc": "Pharmacy/treatment order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "ODS",
                                            "desc": "Dietary orders, supplements, and preferences",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "ODT",
                                            "desc": "Diet tray instructions",
                                            "min": 1,
                                            "max": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/Result",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and Comments (for Results)",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "BLG",
                            "desc": "Billing",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "ORR_O02": {
        "desc": "Order response",
        "name": "ORR_O02",
        "segments": {
            "desc": "Order response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ORDER",
                            "desc": "Order",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Commom order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OBR,RQD,RQ1,RXO,ODS,ODT",
                                    "desc": "Details",
                                    "min": 0,
                                    "max": 0,
                                    "compounds": [
                                        {
                                            "name": "OBR",
                                            "desc": "Observation request",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RQD",
                                            "desc": "Requisition detail",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RQ1",
                                            "desc": "Requisition detail-1",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXO",
                                            "desc": "Pharmacy/treatment order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "ODS",
                                            "desc": "Dietary orders, supplements, and preferences",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "ODT",
                                            "desc": "Diet tray instructions",
                                            "min": 1,
                                            "max": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "ORU": {
        "desc": "Unsolicited transmission of an observation message",
        "name": "ORU",
        "segments": {
            "desc": "Unsolicited transmission of an observation message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PATIENT_RESULT",
                    "desc": "Patient result",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PATIENT",
                            "desc": "Patient",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "PID",
                                    "desc": "Patient identification",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PV1",
                                    "desc": "Patient visit",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "ORDER_OBSERVATION",
                            "desc": "Order observation",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Commom order",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "Observation request",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation result",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ORU_R01": {
        "desc": "Unsolicited transmission of an observation message",
        "name": "ORU_R01",
        "segments": {
            "desc": "Unsolicited transmission of an observation message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PATIENT_RESULT",
                    "desc": "Patient result",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PATIENT",
                            "desc": "Patient",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "PID",
                                    "desc": "Patient identification",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PV1",
                                    "desc": "Patient visit",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "ORDER_OBSERVATION",
                            "desc": "Order observation",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Commom order",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "Observation request",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation result",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ORU_R03": {
        "desc": "Unsolicited observation message",
        "name": "ORU_R03",
        "segments": {
            "desc": "Unsolicited observation message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PATIENT_RESULT",
                    "desc": "Patient result",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PATIENT",
                            "desc": "Patient",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "PID",
                                    "desc": "Patient identification",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PV1",
                                    "desc": "Patient visit",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "ORDER_OBSERVATION",
                            "desc": "Order observation",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Commom order",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "Observation request",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation result",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_A19": {
        "desc": "Patient query",
        "name": "QRY_A19",
        "segments": {
            "desc": "Patient query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_P04": {
        "desc": "Generate bill and a/r statements",
        "name": "QRY_P04",
        "segments": {
            "desc": "Generate bill and a/r statements",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_Q01": {
        "desc": "Query sent for immediate response",
        "name": "QRY_Q01",
        "segments": {
            "desc": "Query sent for immediate response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_Q02": {
        "desc": "Query sent for deferred response",
        "name": "QRY_Q02",
        "segments": {
            "desc": "Query sent for deferred response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_R02": {
        "desc": "Query for results of observation",
        "name": "QRY_R02",
        "segments": {
            "desc": "Query for results of observation",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "UDM_Q05": {
        "desc": "Unsolicited display update message",
        "name": "UDM_Q05",
        "segments": {
            "desc": "Unsolicited display update message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "URD",
                    "desc": "Results/update definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "URS",
                    "desc": "Unsolicited selection",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    }
};

module.exports = messages;
