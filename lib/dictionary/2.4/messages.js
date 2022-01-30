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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "NK1",
                            "desc": "Next of kin / associated parties",
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
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DB1",
                            "desc": "Disability",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/result",
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
                            "name": "DRG",
                            "desc": "Diagnosis related group",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PROCEDURE",
                            "desc": "Procedure",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PR1",
                                    "desc": "Procedures",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 0,
                                    "max": 0
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
                            "desc": "Ub82",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PDA",
                    "desc": "Patient death and autopsy",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PDA",
                    "desc": "Patient death and autopsy",
                    "min": 0,
                    "max": 1
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PDA",
                    "desc": "Patient death and autopsy",
                    "min": 0,
                    "max": 1
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PDA",
                    "desc": "Patient death and autopsy",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PDA",
                    "desc": "Patient death and autopsy",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "Ub92 data",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PDA",
                    "desc": "Patient death and autopsy",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 1,
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "desc": "Ub82",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A38": {
        "desc": "Cancel pre-admit",
        "name": "ADT_A38",
        "segments": {
            "desc": "Cancel pre-admit",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
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
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A39": {
        "desc": "Merge person - patient id",
        "name": "ADT_A39",
        "segments": {
            "desc": "Merge person - patient id",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "Merge patient information",
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
    "ADT_A40": {
        "desc": "Merge patient - patient identifier list",
        "name": "ADT_A40",
        "segments": {
            "desc": "Merge patient - patient identifier list",
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
                    "name": "PATIENT_ID",
                    "desc": "Patient id",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "Merge patient information",
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
    "ADT_A41": {
        "desc": "Merge account - patient account number",
        "name": "ADT_A41",
        "segments": {
            "desc": "Merge account - patient account number",
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
                    "name": "PATIENT_ID",
                    "desc": "Patient id",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "Merge patient information",
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
    "ADT_A42": {
        "desc": "Merge visit - visit number",
        "name": "ADT_A42",
        "segments": {
            "desc": "Merge visit - visit number",
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
                    "name": "PATIENT_ID",
                    "desc": "Patient id",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "Merge patient information",
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
    "ADT_A43": {
        "desc": "Move patient information - patient identifier list",
        "name": "ADT_A43",
        "segments": {
            "desc": "Move patient information - patient identifier list",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
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
            ]
        }
    },
    "ADT_A44": {
        "desc": "Move account information - patient account number",
        "name": "ADT_A44",
        "segments": {
            "desc": "Move account information - patient account number",
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
                    "name": "PATIENT_ID",
                    "desc": "Patient id",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
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
            ]
        }
    },
    "ADT_A45": {
        "desc": "Move visit information - visit number",
        "name": "ADT_A45",
        "segments": {
            "desc": "Move visit information - visit number",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MERGE_INFO",
                    "desc": "Merge info",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MRG",
                            "desc": "Merge patient information",
                            "min": 1,
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
            ]
        }
    },
    "ADT_A46": {
        "desc": "Change patient id (for backward compatibility only)",
        "name": "ADT_A46",
        "segments": {
            "desc": "Change patient id (for backward compatibility only)",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
    "ADT_A47": {
        "desc": "Change patient identifier list",
        "name": "ADT_A47",
        "segments": {
            "desc": "Change patient identifier list",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
    "ADT_A48": {
        "desc": "Change alternate patient id",
        "name": "ADT_A48",
        "segments": {
            "desc": "Change alternate patient id",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
    "ADT_A49": {
        "desc": "Change patient account number",
        "name": "ADT_A49",
        "segments": {
            "desc": "Change patient account number",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
    "ADT_A50": {
        "desc": "Change visit number",
        "name": "ADT_A50",
        "segments": {
            "desc": "Change visit number",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 1,
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
    "ADT_A51": {
        "desc": "Change alternate visit id",
        "name": "ADT_A51",
        "segments": {
            "desc": "Change alternate visit id",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 1,
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
    "ADT_A52": {
        "desc": "Cancel leave of absence for a patient",
        "name": "ADT_A52",
        "segments": {
            "desc": "Cancel leave of absence for a patient",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                }
            ]
        }
    },
    "ADT_A53": {
        "desc": "Cancel patient returns from a leave of absence",
        "name": "ADT_A53",
        "segments": {
            "desc": "Cancel patient returns from a leave of absence",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                }
            ]
        }
    },
    "ADT_A54": {
        "desc": "Change attending doctor",
        "name": "ADT_A54",
        "segments": {
            "desc": "Change attending doctor",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A55": {
        "desc": "Cancel change attending doctor",
        "name": "ADT_A55",
        "segments": {
            "desc": "Cancel change attending doctor",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
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
                }
            ]
        }
    },
    "ADT_A60": {
        "desc": "Update allergy information",
        "name": "ADT_A60",
        "segments": {
            "desc": "Update allergy information",
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
                    "name": "IAM",
                    "desc": "Patient adverse reaction information - unique iden",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "ADT_A61": {
        "desc": "Change consulting doctor",
        "name": "ADT_A61",
        "segments": {
            "desc": "Change consulting doctor",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A62": {
        "desc": "Cancel change consulting doctor",
        "name": "ADT_A62",
        "segments": {
            "desc": "Cancel change consulting doctor",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV2",
                    "desc": "Patient visit - additional information",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
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
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DB1",
                            "desc": "Disability",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/result",
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
                            "name": "DRG",
                            "desc": "Diagnosis related group",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PROCEDURE",
                            "desc": "Procedure",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PR1",
                                    "desc": "Procedures",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "NK1",
                            "desc": "Next of kin / associated parties",
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 0,
                                    "max": 0
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
                            "desc": "Ub82",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "DB1",
                            "desc": "Disability",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "BAR_P05": {
        "desc": "Update account",
        "name": "BAR_P05",
        "segments": {
            "desc": "Update account",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
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
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DB1",
                            "desc": "Disability",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/result",
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
                            "name": "DRG",
                            "desc": "Diagnosis related group",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PROCEDURE",
                            "desc": "Procedure",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PR1",
                                    "desc": "Procedures",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "NK1",
                            "desc": "Next of kin / associated parties",
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 0,
                                    "max": 0
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
                            "desc": "Ub82",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB2",
                            "desc": "Ub92 data",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "ABS",
                            "desc": "Abstract",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "BLC",
                            "desc": "Blood code",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "RMI",
                            "desc": "Risk management incident",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "BAR_P06": {
        "desc": "End account",
        "name": "BAR_P06",
        "segments": {
            "desc": "End account",
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
    "BAR_P10": {
        "desc": "Transmit ambulatory payment classification(apc)",
        "name": "BAR_P10",
        "segments": {
            "desc": "Transmit ambulatory payment classification(apc)",
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
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GP1",
                    "desc": "Grouping/reimbursement - visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "GP2",
                            "desc": "Grouping/reimbursement - procedure line item",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "CRM_C01": {
        "desc": "Register a patient on a clinical trial",
        "name": "CRM_C01",
        "segments": {
            "desc": "Register a patient on a clinical trial",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
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
                        },
                        {
                            "name": "CSR",
                            "desc": "Clinical study registration",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CSP",
                            "desc": "Clinical study phase",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "CSU_C09": {
        "desc": "Automated time intervals for reporting, like monthly",
        "name": "CSU_C09",
        "segments": {
            "desc": "Automated time intervals for reporting, like monthly",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "VISIT",
                            "desc": "Visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
                        },
                        {
                            "name": "CSR",
                            "desc": "Clinical study registration",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "STUDY_PHASE",
                            "desc": "Study phase",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "CSP",
                                    "desc": "Clinical study phase",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "STUDY_SCHEDULE",
                                    "desc": "Study schedule",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "CSS",
                                            "desc": "Clinical study data schedule segment",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "STUDY_OBSERVATION",
                                            "desc": "Study observation",
                                            "min": 1,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ORC",
                                                    "desc": "Common order",
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
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
                                                    "min": 1,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "STUDY_PHARM",
                                            "desc": "Study pharm",
                                            "min": 1,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ORC",
                                                    "desc": "Common order",
                                                    "min": 0,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "RX_ADMIN",
                                                    "desc": "Rx admin",
                                                    "min": 1,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "RXA",
                                                            "desc": "Pharmacy/treatment administration",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "RXR",
                                                            "desc": "Pharmacy/treatment route",
                                                            "min": 1,
                                                            "max": 1
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "COMMON_ORDER",
                    "desc": "Common order",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "ORC",
                            "desc": "Common order",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "ORDER",
                            "desc": "Order",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
                        },
                        {
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                },
                {
                    "name": "FINANCIAL",
                    "desc": "Financial",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "FT1",
                            "desc": "Financial transaction",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "FINANCIAL_PROCEDURE",
                            "desc": "Financial procedure",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PR1",
                                    "desc": "Procedures",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "FINANCIAL_COMMON_ORDER",
                            "desc": "Financial common order",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "FINANCIAL_ORDER",
                                    "desc": "Financial order",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
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
                                        }
                                    ]
                                },
                                {
                                    "name": "FINANCIAL_OBSERVATION",
                                    "desc": "Financial observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "DFT_P11": {
        "desc": "Detail financial transactions",
        "name": "DFT_P11",
        "segments": {
            "desc": "Detail financial transactions",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
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
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DB1",
                    "desc": "Disability",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "COMMON_ORDER",
                    "desc": "Common order",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "ORC",
                            "desc": "Common order",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "ORDER",
                            "desc": "Order",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
                        },
                        {
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "Diagnosis related group",
                    "min": 0,
                    "max": 1
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ROL",
                            "desc": "Role",
                            "min": 0,
                            "max": 0
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
                    "name": "FINANCIAL",
                    "desc": "Financial",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "FT1",
                            "desc": "Financial transaction",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "FINANCIAL_PROCEDURE",
                            "desc": "Financial procedure",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PR1",
                                    "desc": "Procedures",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "FINANCIAL_COMMON_ORDER",
                            "desc": "Financial common order",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "FINANCIAL_ORDER",
                                    "desc": "Financial order",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
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
                                        }
                                    ]
                                },
                                {
                                    "name": "FINANCIAL_OBSERVATION",
                                    "desc": "Financial observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                        },
                        {
                            "name": "DG1",
                            "desc": "Diagnosis",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DRG",
                            "desc": "Diagnosis related group",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "FINANCIAL_INSURANCE",
                            "desc": "Financial insurance",
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "ROL",
                                    "desc": "Role",
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
    "DOC_T12": {
        "desc": "Document response",
        "name": "DOC_T12",
        "segments": {
            "desc": "Document response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RESULT",
                    "desc": "Result",
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
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "TXA",
                            "desc": "Transcription document header",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/result",
                            "min": 0,
                            "max": 0
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
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
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
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
    "EAC_U07": {
        "desc": "Automated equipment command",
        "name": "EAC_U07",
        "segments": {
            "desc": "Automated equipment command",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ECD",
                    "desc": "Equipment command",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "SAC",
                    "desc": "Specimen and container detail",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "CNS",
                    "desc": "Clear notification",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "EAN_U09": {
        "desc": "Automated equipment notification",
        "name": "EAN_U09",
        "segments": {
            "desc": "Automated equipment notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NOTIFICATION",
                    "desc": "Notification",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "NDS",
                            "desc": "Notification detail",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "EAR_U08": {
        "desc": "Automated equipment response",
        "name": "EAR_U08",
        "segments": {
            "desc": "Automated equipment response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "COMMAND_RESPONSE",
                    "desc": "Command response",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "ECD",
                            "desc": "Equipment command",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SAC",
                            "desc": "Specimen and container detail",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "ECR",
                            "desc": "Equipment command response",
                            "min": 1,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "EDR_R07": {
        "desc": "Enhanced display response",
        "name": "EDR_R07",
        "segments": {
            "desc": "Enhanced display response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
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
    "EQQ_Q04": {
        "desc": "Embedded query language query",
        "name": "EQQ_Q04",
        "segments": {
            "desc": "Embedded query language query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQL",
                    "desc": "Embedded query language",
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
    "ERP_R09": {
        "desc": "Event replay response",
        "name": "ERP_R09",
        "segments": {
            "desc": "Event replay response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERQ",
                    "desc": "Event replay query",
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
    "ESR_U02": {
        "desc": "Automated equipment status request",
        "name": "ESR_U02",
        "segments": {
            "desc": "Automated equipment status request",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ESU_U01": {
        "desc": "Automated equipment status update",
        "name": "ESU_U01",
        "segments": {
            "desc": "Automated equipment status update",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ISD",
                    "desc": "Interaction status detail",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "INR_U06": {
        "desc": "Automated equipment inventory request",
        "name": "INR_U06",
        "segments": {
            "desc": "Automated equipment inventory request",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "INV",
                    "desc": "Inventory detail",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "INU_U05": {
        "desc": "Automated equipment inventory update",
        "name": "INU_U05",
        "segments": {
            "desc": "Automated equipment inventory update",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "INV",
                    "desc": "Inventory detail",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "LSU_U12": {
        "desc": "Automated equipment log/service update",
        "name": "LSU_U12",
        "segments": {
            "desc": "Automated equipment log/service update",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQP",
                    "desc": "Equipment/log service",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "MDM_T01": {
        "desc": "Original document notification",
        "name": "MDM_T01",
        "segments": {
            "desc": "Original document notification",
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
                    "name": "TXA",
                    "desc": "Transcription document header",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "MDM_T02": {
        "desc": "Original document notification and content",
        "name": "MDM_T02",
        "segments": {
            "desc": "Original document notification and content",
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
                    "name": "TXA",
                    "desc": "Transcription document header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "Observation/result",
                    "min": 1,
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
                    "desc": "Master file acknowledgment",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFN_M02": {
        "desc": "Master file - staff practitioner",
        "name": "MFN_M02",
        "segments": {
            "desc": "Master file - staff practitioner",
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
                    "name": "MF_STAFF",
                    "desc": "Mf staff",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "STF",
                            "desc": "Staff identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PRA",
                            "desc": "Practitioner detail",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "ORG",
                            "desc": "Practitioner organization unit",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "MFN_M04": {
        "desc": "Master files charge description",
        "name": "MFN_M04",
        "segments": {
            "desc": "Master files charge description",
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
                    "name": "MF_CDM",
                    "desc": "Mf cdm",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CDM",
                            "desc": "Charge description master",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PRC",
                            "desc": "Pricing",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "MFN_M05": {
        "desc": "Patient location master file",
        "name": "MFN_M05",
        "segments": {
            "desc": "Patient location master file",
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
                    "name": "MF_LOCATION",
                    "desc": "Mf location",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "LOC",
                            "desc": "Location identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "LCH",
                            "desc": "Location characteristic",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "LRL",
                            "desc": "Location relationship",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "MF_LOC_DEPT",
                            "desc": "Mf loc dept",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "LDP",
                                    "desc": "Location department",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "LCH",
                                    "desc": "Location characteristic",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "LCC",
                                    "desc": "Location charge code",
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
    "MFN_M06": {
        "desc": "Clinical study with phases and schedules master file",
        "name": "MFN_M06",
        "segments": {
            "desc": "Clinical study with phases and schedules master file",
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
                    "name": "MF_CLIN_STUDY",
                    "desc": "Mf clin study",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CM0",
                            "desc": "Clinical study master",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "MF_PHASE_SCHED_DETAIL",
                            "desc": "Mf phase sched detail",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "CM1",
                                    "desc": "Clinical study phase master",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CM2",
                                    "desc": "Clinical study schedule master",
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
    "MFN_M07": {
        "desc": "Clinical study without phases but with schedules master file",
        "name": "MFN_M07",
        "segments": {
            "desc": "Clinical study without phases but with schedules master file",
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
                    "name": "MF_CLIN_STUDY_SCHED",
                    "desc": "Mf clin study sched",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CM0",
                            "desc": "Clinical study master",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CM2",
                            "desc": "Clinical study schedule master",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "MFN_M08": {
        "desc": "Test/observation (numeric) master file",
        "name": "MFN_M08",
        "segments": {
            "desc": "Test/observation (numeric) master file",
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
                    "name": "MF_TEST_NUMERIC",
                    "desc": "Mf test numeric",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM1",
                            "desc": "General segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM2",
                            "desc": "Numeric observation",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OM3",
                            "desc": "Categorical service/test/observation",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OM4",
                            "desc": "Observations that require specimens",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "MFN_M09": {
        "desc": "Test/observation (categorical) master file",
        "name": "MFN_M09",
        "segments": {
            "desc": "Test/observation (categorical) master file",
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
                    "name": "MF_TEST_CATEGORICAL",
                    "desc": "Mf test categorical",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM1",
                            "desc": "General segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "MF_TEST_CAT_DETAIL",
                            "desc": "Mf test cat detail",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "OM3",
                                    "desc": "Categorical service/test/observation",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OM4",
                                    "desc": "Observations that require specimens",
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
    "MFN_M10": {
        "desc": "Test/observation batteries master file",
        "name": "MFN_M10",
        "segments": {
            "desc": "Test/observation batteries master file",
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
                    "name": "MF_TEST_BATTERIES",
                    "desc": "Mf test batteries",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM1",
                            "desc": "General segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "MF_TEST_BATT_DETAIL",
                            "desc": "Mf test batt detail",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "OM5",
                                    "desc": "Observation batteries (sets",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OM4",
                                    "desc": "Observations that require specimens",
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
    "MFN_M11": {
        "desc": "Test/calculated observations master file",
        "name": "MFN_M11",
        "segments": {
            "desc": "Test/calculated observations master file",
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
                    "name": "MF_TEST_CALCULATED",
                    "desc": "Mf test calculated",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM1",
                            "desc": "General segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "MF_TEST_CALC_DETAIL",
                            "desc": "Mf test calc detail",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "OM6",
                                    "desc": "Observations that are calculated from other observ",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OM2",
                                    "desc": "Numeric observation",
                                    "min": 1,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "MFN_M12": {
        "desc": "Master file notification message",
        "name": "MFN_M12",
        "segments": {
            "desc": "Master file notification message",
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
                    "name": "MF_OBS_ATTRIBUTES",
                    "desc": "Mf obs attributes",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "MFE",
                            "desc": "Master file entry",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM1",
                            "desc": "General segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM7",
                            "desc": "Additional basic attributes",
                            "min": 0,
                            "max": 1
                        }
                    ]
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
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
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
    "NMD_N02": {
        "desc": "Application management data message",
        "name": "NMD_N02",
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
                                    "desc": "Application control level statistics",
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
                                    "desc": "Application status change",
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
    "NMQ_N01": {
        "desc": "Application management query message",
        "name": "NMQ_N01",
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
                            "desc": "Original-style query definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "Original style query filter",
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
                            "desc": "Application control level statistics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NSC",
                            "desc": "Application status change",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "NMR_N01": {
        "desc": "Application management response",
        "name": "NMR_N01",
        "segments": {
            "desc": "Application management response",
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
                    "desc": "Original-style query definition",
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
                            "desc": "Application control level statistics",
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
                            "desc": "Application status change",
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
    "OMD_O03": {
        "desc": "Diet order",
        "name": "OMD_O03",
        "segments": {
            "desc": "Diet order",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ORDER_DIET",
                    "desc": "Order diet",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "ORC",
                            "desc": "Common order",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "DIET",
                            "desc": "Diet",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "ODS",
                                    "desc": "Dietary orders, supplements, and preferences",
                                    "min": 1,
                                    "max": 0
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
                                            "desc": "Observation/result",
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
                },
                {
                    "name": "ORDER_TRAY",
                    "desc": "Order tray",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "ORC",
                            "desc": "Common order",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ODT",
                            "desc": "Diet tray instructions",
                            "min": 1,
                            "max": 0
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
    "OMG_O19": {
        "desc": "General clinical order",
        "name": "OMG_O19",
        "segments": {
            "desc": "General clinical order",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
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
                            "desc": "Common order",
                            "min": 1,
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
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "DG1",
                            "desc": "Diagnosis",
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
                                    "desc": "Observation/result",
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
                            "name": "PRIOR_RESULT",
                            "desc": "Prior result",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PATIENT_PRIOR",
                                    "desc": "Patient prior",
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
                                            "name": "PD1",
                                            "desc": "Patient additional demographic",
                                            "min": 0,
                                            "max": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "PATIENT_VISIT_PRIOR",
                                    "desc": "Patient visit prior",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
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
                                        }
                                    ]
                                },
                                {
                                    "name": "AL1",
                                    "desc": "Patient allergy information",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "ORDER_PRIOR",
                                    "desc": "Order prior",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ORC",
                                            "desc": "Common order",
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
                                            "name": "CTD",
                                            "desc": "Contact data",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "OBSERVATION_PRIOR",
                                            "desc": "Observation prior",
                                            "min": 1,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
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
                        },
                        {
                            "name": "FT1",
                            "desc": "Financial transaction",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "CTI",
                            "desc": "Clinical trial identification",
                            "min": 0,
                            "max": 0
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
    "OML_O21": {
        "desc": "Laboratory order",
        "name": "OML_O21",
        "segments": {
            "desc": "Laboratory order",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ORDER_GENERAL",
                    "desc": "Order general",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "CONTAINER_1",
                            "desc": "Container 1",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "SAC",
                                    "desc": "Specimen and container detail",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OBSERVATION_REQUEST",
                                    "desc": "Observation request",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "OBR",
                                            "desc": "Observation request",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "CONTAINER_2",
                                            "desc": "Container 2",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "SAC",
                                                    "desc": "Specimen and container detail",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "TCD",
                                            "desc": "Test code detail",
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
                                            "name": "DG1",
                                            "desc": "Diagnosis",
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
                                                    "desc": "Observation/result",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "TCD",
                                                    "desc": "Test code detail",
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
                                            "name": "PRIOR_RESULT",
                                            "desc": "Prior result",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "PATIENT_PRIOR",
                                                    "desc": "Patient prior",
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
                                                            "name": "PD1",
                                                            "desc": "Patient additional demographic",
                                                            "min": 0,
                                                            "max": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "PATIENT_VISIT_PRIOR",
                                                    "desc": "Patient visit prior",
                                                    "min": 0,
                                                    "max": 1,
                                                    "children": [
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
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "AL1",
                                                    "desc": "Patient allergy information",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "ORDER_PRIOR",
                                                    "desc": "Order prior",
                                                    "min": 1,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "ORC",
                                                            "desc": "Common order",
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
                                                            "name": "OBSERVATION_PRIOR",
                                                            "desc": "Observation prior",
                                                            "min": 1,
                                                            "max": 0,
                                                            "children": [
                                                                {
                                                                    "name": "OBX",
                                                                    "desc": "Observation/result",
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
                                    ]
                                },
                                {
                                    "name": "FT1",
                                    "desc": "Financial transaction",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "CTI",
                                    "desc": "Clinical trial identification",
                                    "min": 0,
                                    "max": 0
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
            ]
        }
    },
    "OMN_O07": {
        "desc": "Non-stock requisition order",
        "name": "OMN_O07",
        "segments": {
            "desc": "Non-stock requisition order",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
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
                            "desc": "Common order",
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
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
    "OMP_O09": {
        "desc": "Pharmacy/treatment order",
        "name": "OMP_O09",
        "segments": {
            "desc": "Pharmacy/treatment order",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
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
                            "desc": "Common order",
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
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "RXR",
                            "desc": "Pharmacy/treatment route",
                            "min": 1,
                            "max": 0
                        },
                        {
                            "name": "COMPONENT",
                            "desc": "Component",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
                                    "min": 1,
                                    "max": 0
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
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                            "name": "FT1",
                            "desc": "Financial transaction",
                            "min": 0,
                            "max": 0
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
    "OMS_O05": {
        "desc": "Stock requisition order",
        "name": "OMS_O05",
        "segments": {
            "desc": "Stock requisition order",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
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
                            "desc": "Common order",
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
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
    "ORD_O04": {
        "desc": "Diet order acknowledgement",
        "name": "ORD_O04",
        "segments": {
            "desc": "Diet order acknowledgement",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                }
                            ]
                        },
                        {
                            "name": "ORDER_DIET",
                            "desc": "Order diet",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ODS",
                                    "desc": "Dietary orders, supplements, and preferences",
                                    "min": 0,
                                    "max": 0
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
                            "name": "ORDER_TRAY",
                            "desc": "Order tray",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ODT",
                                    "desc": "Diet tray instructions",
                                    "min": 0,
                                    "max": 0
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
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
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
                                    "desc": "Common order",
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
                                    "name": "CTD",
                                    "desc": "Contact data",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                                    "name": "CTI",
                                    "desc": "Clinical trial identification",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query acknowledgment",
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
    "ORG_O20": {
        "desc": "General clinical order response",
        "name": "ORG_O20",
        "segments": {
            "desc": "General clinical order response",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "Observation request",
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
                                    "name": "CTI",
                                    "desc": "Clinical trial identification",
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
    "ORL_O22": {
        "desc": "Response message to oml",
        "name": "ORL_O22",
        "segments": {
            "desc": "Response message to oml",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "name": "GENERAL_ORDER",
                                    "desc": "General order",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "CONTAINER",
                                            "desc": "Container",
                                            "min": 0,
                                            "max": 1,
                                            "children": [
                                                {
                                                    "name": "SAC",
                                                    "desc": "Specimen and container detail",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "ORDER",
                                            "desc": "Order",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ORC",
                                                    "desc": "Common order",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "OBSERVATION_REQUEST",
                                                    "desc": "Observation request",
                                                    "min": 0,
                                                    "max": 1,
                                                    "children": [
                                                        {
                                                            "name": "OBR",
                                                            "desc": "Observation request",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "SAC",
                                                            "desc": "Specimen and container detail",
                                                            "min": 0,
                                                            "max": 0
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
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
                            "desc": "Common order",
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
                                    "name": "CTD",
                                    "desc": "Contact data",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "DG1",
                                    "desc": "Diagnosis",
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
                                            "desc": "Observation/result",
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
                        },
                        {
                            "name": "FT1",
                            "desc": "Financial transaction",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "CTI",
                            "desc": "Clinical trial identification",
                            "min": 0,
                            "max": 0
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
    "ORN_O08": {
        "desc": "Non-stock requisition acknowledgement",
        "name": "ORN_O08",
        "segments": {
            "desc": "Non-stock requisition acknowledgement",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
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
        }
    },
    "ORP_O10": {
        "desc": "Pharmacy/treatment order acknowledgement",
        "name": "ORP_O10",
        "segments": {
            "desc": "Pharmacy/treatment order acknowledgement",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
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
                                            "name": "RXO",
                                            "desc": "Pharmacy/treatment order",
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
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
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
                    "name": "ERR",
                    "desc": "Error",
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
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
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
                                },
                                {
                                    "name": "CTI",
                                    "desc": "Clinical trial identification",
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
    "ORS_O06": {
        "desc": "Stock requisition acknowledgement",
        "name": "ORS_O06",
        "segments": {
            "desc": "Stock requisition acknowledgement",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RSPONSE",
                    "desc": "Rsponse",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
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
                                    "name": "PD1",
                                    "desc": "Patient additional demographic",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NK1",
                                    "desc": "Next of kin / associated parties",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "VISIT",
                                    "desc": "Visit",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
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
                                        }
                                    ]
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
                                    "desc": "Common order",
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
                                    "name": "CTD",
                                    "desc": "Contact data",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                                    "name": "FT1",
                                    "desc": "Financial transaction",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "CTI",
                                    "desc": "Clinical trial identification",
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
                                    "name": "PD1",
                                    "desc": "Patient additional demographic",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NK1",
                                    "desc": "Next of kin / associated parties",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "VISIT",
                                    "desc": "Visit",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
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
                                        }
                                    ]
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
                                    "desc": "Common order",
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
                                    "name": "CTD",
                                    "desc": "Contact data",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                                    "name": "FT1",
                                    "desc": "Financial transaction",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "CTI",
                                    "desc": "Clinical trial identification",
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
    "OSQ_Q06": {
        "desc": "Query for order status",
        "name": "OSQ_Q06",
        "segments": {
            "desc": "Query for order status",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
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
    "OSR_Q06": {
        "desc": "Query response for order status",
        "name": "OSR_Q06",
        "segments": {
            "desc": "Query response for order status",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
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
                                },
                                {
                                    "name": "CTI",
                                    "desc": "Clinical trial identification",
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
    "OUL_R21": {
        "desc": "Unsolicited laboratory observation",
        "name": "OUL_R21",
        "segments": {
            "desc": "Unsolicited laboratory observation",
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
                    "max": 1
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                    "name": "VISIT",
                    "desc": "Visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
                            "name": "CONTAINER",
                            "desc": "Container",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "SAC",
                                    "desc": "Specimen and container detail",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "SID",
                                    "desc": "Substance identifier",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "ORC",
                            "desc": "Common order",
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
                                    "desc": "Observation/result",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "TCD",
                                    "desc": "Test code detail",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "SID",
                                    "desc": "Substance identifier",
                                    "min": 0,
                                    "max": 0
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
                            "name": "CTI",
                            "desc": "Clinical trial identification",
                            "min": 0,
                            "max": 0
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
    "PEX_P07": {
        "desc": "Unsolicited initial individual product experience report",
        "name": "PEX_P07",
        "segments": {
            "desc": "Unsolicited initial individual product experience report",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
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
                    "name": "VISIT",
                    "desc": "Visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
                        }
                    ]
                },
                {
                    "name": "EXPERIENCE",
                    "desc": "Experience",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PES",
                            "desc": "Product experience sender",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PEX_OBSERVATION",
                            "desc": "Pex observation",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PEO",
                                    "desc": "Product experience observation",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PEX_CAUSE",
                                    "desc": "Pex cause",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "PCR",
                                            "desc": "Possible causal relationship",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RX_ORDER",
                                            "desc": "Rx order",
                                            "min": 0,
                                            "max": 1,
                                            "children": [
                                                {
                                                    "name": "RXE",
                                                    "desc": "Pharmacy/treatment encoded order",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "RXR",
                                                    "desc": "Pharmacy/treatment route",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "RX_ADMINISTRATION",
                                            "desc": "Rx administration",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "RXA",
                                                    "desc": "Pharmacy/treatment administration",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "RXR",
                                                    "desc": "Pharmacy/treatment route",
                                                    "min": 0,
                                                    "max": 1
                                                }
                                            ]
                                        },
                                        {
                                            "name": "PRB",
                                            "desc": "Problem details",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "ASSOCIATED_PERSON",
                                            "desc": "Associated person",
                                            "min": 0,
                                            "max": 1,
                                            "children": [
                                                {
                                                    "name": "NK1",
                                                    "desc": "Next of kin / associated parties",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "ASSOCIATED_RX_ORDER",
                                                    "desc": "Associated rx order",
                                                    "min": 0,
                                                    "max": 1,
                                                    "children": [
                                                        {
                                                            "name": "RXE",
                                                            "desc": "Pharmacy/treatment encoded order",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "RXR",
                                                            "desc": "Pharmacy/treatment route",
                                                            "min": 0,
                                                            "max": 0
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "ASSOCIATED_RX_ADMIN",
                                                    "desc": "Associated rx admin",
                                                    "min": 0,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "RXA",
                                                            "desc": "Pharmacy/treatment administration",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "RXR",
                                                            "desc": "Pharmacy/treatment route",
                                                            "min": 0,
                                                            "max": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "PRB",
                                                    "desc": "Problem details",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "STUDY",
                                            "desc": "Study",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "CSR",
                                                    "desc": "Clinical study registration",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "CSP",
                                                    "desc": "Clinical study phase",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "PGL_PC6": {
        "desc": "Goal add",
        "name": "PGL_PC6",
        "segments": {
            "desc": "Goal add",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
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
                    "name": "PATIENT_VISIT",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
                        }
                    ]
                },
                {
                    "name": "GOAL",
                    "desc": "Goal",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "GOL",
                            "desc": "Goal detail",
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
                            "name": "VAR",
                            "desc": "Variance",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "GOAL_ROLE",
                            "desc": "Goal role",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PATHWAY",
                            "desc": "Pathway",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PTH",
                                    "desc": "Pathway",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                            "name": "PROBLEM",
                            "desc": "Problem",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PRB",
                                    "desc": "Problem details",
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
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PROBLEM_ROLE",
                                    "desc": "Problem role",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ROL",
                                            "desc": "Role",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "PROBLEM_OBSERVATION",
                                    "desc": "Problem observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                        },
                        {
                            "name": "ORDER",
                            "desc": "Order",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
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
                                            "name": "OBR",
                                            "desc": "Observation request",
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
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "ORDER_OBSERVATION",
                                            "desc": "Order observation",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
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
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "PMU_B01": {
        "desc": "Add personnel record",
        "name": "PMU_B01",
        "segments": {
            "desc": "Add personnel record",
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
                    "name": "STF",
                    "desc": "Staff identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PRA",
                    "desc": "Practitioner detail",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "ORG",
                    "desc": "Practitioner organization unit",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AFF",
                    "desc": "Professional affiliation",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "LAN",
                    "desc": "Language detail",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "EDU",
                    "desc": "Educational detail",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "PMU_B03": {
        "desc": "Delete personnel re cord",
        "name": "PMU_B03",
        "segments": {
            "desc": "Delete personnel re cord",
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
                    "name": "STF",
                    "desc": "Staff identification",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "PMU_B04": {
        "desc": "Active practicing person",
        "name": "PMU_B04",
        "segments": {
            "desc": "Active practicing person",
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
                    "name": "STF",
                    "desc": "Staff identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PRA",
                    "desc": "Practitioner detail",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "ORG",
                    "desc": "Practitioner organization unit",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "PPG_PCG": {
        "desc": "Pathway (goal-oriented) add",
        "name": "PPG_PCG",
        "segments": {
            "desc": "Pathway (goal-oriented) add",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
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
                    "name": "PATIENT_VISIT",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
                        }
                    ]
                },
                {
                    "name": "PATHWAY",
                    "desc": "Pathway",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PTH",
                            "desc": "Pathway",
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
                            "name": "VAR",
                            "desc": "Variance",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PATHWAY_ROLE",
                            "desc": "Pathway role",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GOAL",
                            "desc": "Goal",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "GOL",
                                    "desc": "Goal detail",
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
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "GOAL_ROLE",
                                    "desc": "Goal role",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ROL",
                                            "desc": "Role",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "GOAL_OBSERVATION",
                                    "desc": "Goal observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                                    "name": "PROBLEM",
                                    "desc": "Problem",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "PRB",
                                            "desc": "Problem details",
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
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "PROBLEM_ROLE",
                                            "desc": "Problem role",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ROL",
                                                    "desc": "Role",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "PROBLEM_OBSERVATION",
                                            "desc": "Problem observation",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
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
                                },
                                {
                                    "name": "ORDER",
                                    "desc": "Order",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ORC",
                                            "desc": "Common order",
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
                                                    "name": "OBR",
                                                    "desc": "Observation request",
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
                                                    "name": "NTE",
                                                    "desc": "Notes and comments",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "ORDER_OBSERVATION",
                                                    "desc": "Order observation",
                                                    "min": 0,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "OBX",
                                                            "desc": "Observation/result",
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
                                                            "name": "VAR",
                                                            "desc": "Variance",
                                                            "min": 0,
                                                            "max": 0
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "PPP_PCB": {
        "desc": "Pathway (problem-oriented) add",
        "name": "PPP_PCB",
        "segments": {
            "desc": "Pathway (problem-oriented) add",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
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
                    "name": "PATIENT_VISIT",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
                        }
                    ]
                },
                {
                    "name": "PATHWAY",
                    "desc": "Pathway",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PTH",
                            "desc": "Pathway",
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
                            "name": "VAR",
                            "desc": "Variance",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PATHWAY_ROLE",
                            "desc": "Pathway role",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PROBLEM",
                            "desc": "Problem",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PRB",
                                    "desc": "Problem details",
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
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PROBLEM_ROLE",
                                    "desc": "Problem role",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ROL",
                                            "desc": "Role",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "PROBLEM_OBSERVATION",
                                    "desc": "Problem observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                                    "name": "GOAL",
                                    "desc": "Goal",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "GOL",
                                            "desc": "Goal detail",
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
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "GOAL_ROLE",
                                            "desc": "Goal role",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ROL",
                                                    "desc": "Role",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "GOAL_OBSERVATION",
                                            "desc": "Goal observation",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
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
                                },
                                {
                                    "name": "ORDER",
                                    "desc": "Order",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ORC",
                                            "desc": "Common order",
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
                                                    "name": "OBR",
                                                    "desc": "Observation request",
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
                                                    "name": "NTE",
                                                    "desc": "Notes and comments",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "ORDER_OBSERVATION",
                                                    "desc": "Order observation",
                                                    "min": 0,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "OBX",
                                                            "desc": "Observation/result",
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
                                                            "name": "VAR",
                                                            "desc": "Variance",
                                                            "min": 0,
                                                            "max": 0
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "PPR_PC1": {
        "desc": "Problem add",
        "name": "PPR_PC1",
        "segments": {
            "desc": "Problem add",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
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
                    "name": "PATIENT_VISIT",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
                        }
                    ]
                },
                {
                    "name": "PROBLEM",
                    "desc": "Problem",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRB",
                            "desc": "Problem details",
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
                            "name": "VAR",
                            "desc": "Variance",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PROBLEM_ROLE",
                            "desc": "Problem role",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ROL",
                                    "desc": "Role",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PATHWAY",
                            "desc": "Pathway",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PTH",
                                    "desc": "Pathway",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PROBLEM_OBSERVATION",
                            "desc": "Problem observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                            "name": "GOAL",
                            "desc": "Goal",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "GOL",
                                    "desc": "Goal detail",
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
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "GOAL_ROLE",
                                    "desc": "Goal role",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ROL",
                                            "desc": "Role",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "GOAL_OBSERVATION",
                                    "desc": "Goal observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                        },
                        {
                            "name": "ORDER",
                            "desc": "Order",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
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
                                            "name": "OBR",
                                            "desc": "Observation request",
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
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "ORDER_OBSERVATION",
                                            "desc": "Order observation",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
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
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "PPT_PCL": {
        "desc": "Pathway (goal-oriented) query response",
        "name": "PPT_PCL",
        "segments": {
            "desc": "Pathway (goal-oriented) query response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
                        },
                        {
                            "name": "PATHWAY",
                            "desc": "Pathway",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PTH",
                                    "desc": "Pathway",
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
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PATHWAY_ROLE",
                                    "desc": "Pathway role",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ROL",
                                            "desc": "Role",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "GOAL",
                                    "desc": "Goal",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "GOL",
                                            "desc": "Goal detail",
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
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "GOAL_ROLE",
                                            "desc": "Goal role",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ROL",
                                                    "desc": "Role",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "GOAL_OBSERVATION",
                                            "desc": "Goal observation",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
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
                                            "name": "PROBLEM",
                                            "desc": "Problem",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "PRB",
                                                    "desc": "Problem details",
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
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "PROBLEM_ROLE",
                                                    "desc": "Problem role",
                                                    "min": 0,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "ROL",
                                                            "desc": "Role",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "VAR",
                                                            "desc": "Variance",
                                                            "min": 0,
                                                            "max": 0
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "PROBLEM_OBSERVATION",
                                                    "desc": "Problem observation",
                                                    "min": 0,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "OBX",
                                                            "desc": "Observation/result",
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
                                        },
                                        {
                                            "name": "ORDER",
                                            "desc": "Order",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ORC",
                                                    "desc": "Common order",
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
                                                            "name": "OBR",
                                                            "desc": "Observation request",
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
                                                            "name": "NTE",
                                                            "desc": "Notes and comments",
                                                            "min": 0,
                                                            "max": 0
                                                        },
                                                        {
                                                            "name": "VAR",
                                                            "desc": "Variance",
                                                            "min": 0,
                                                            "max": 0
                                                        },
                                                        {
                                                            "name": "ORDER_OBSERVATION",
                                                            "desc": "Order observation",
                                                            "min": 0,
                                                            "max": 0,
                                                            "children": [
                                                                {
                                                                    "name": "OBX",
                                                                    "desc": "Observation/result",
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
                                                                    "name": "VAR",
                                                                    "desc": "Variance",
                                                                    "min": 0,
                                                                    "max": 0
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "PPV_PCA": {
        "desc": "Goal response",
        "name": "PPV_PCA",
        "segments": {
            "desc": "Goal response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
                        },
                        {
                            "name": "GOAL",
                            "desc": "Goal",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "GOL",
                                    "desc": "Goal detail",
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
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "GOAL_ROLE",
                                    "desc": "Goal role",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ROL",
                                            "desc": "Role",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "GOAL_PATHWAY",
                                    "desc": "Goal pathway",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "PTH",
                                            "desc": "Pathway",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "GOAL_OBSERVATION",
                                    "desc": "Goal observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                                    "name": "PROBLEM",
                                    "desc": "Problem",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "PRB",
                                            "desc": "Problem details",
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
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "PROBLEM_ROLE",
                                            "desc": "Problem role",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ROL",
                                                    "desc": "Role",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "PROBLEM_OBSERVATION",
                                            "desc": "Problem observation",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
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
                                },
                                {
                                    "name": "ORDER",
                                    "desc": "Order",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ORC",
                                            "desc": "Common order",
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
                                                    "name": "OBR",
                                                    "desc": "Observation request",
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
                                                    "name": "NTE",
                                                    "desc": "Notes and comments",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "ORDER_OBSERVATION",
                                                    "desc": "Order observation",
                                                    "min": 0,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "OBX",
                                                            "desc": "Observation/result",
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
                                                            "name": "VAR",
                                                            "desc": "Variance",
                                                            "min": 0,
                                                            "max": 0
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "PRR_PC5": {
        "desc": "Problem response",
        "name": "PRR_PC5",
        "segments": {
            "desc": "Problem response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
                        },
                        {
                            "name": "PROBLEM",
                            "desc": "Problem",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PRB",
                                    "desc": "Problem details",
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
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PROBLEM_ROLE",
                                    "desc": "Problem role",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ROL",
                                            "desc": "Role",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "PROBLEM_PATHWAY",
                                    "desc": "Problem pathway",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "PTH",
                                            "desc": "Pathway",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "PROBLEM_OBSERVATION",
                                    "desc": "Problem observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                                    "name": "GOAL",
                                    "desc": "Goal",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "GOL",
                                            "desc": "Goal detail",
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
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "GOAL_ROLE",
                                            "desc": "Goal role",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ROL",
                                                    "desc": "Role",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "GOAL_OBSERVATION",
                                            "desc": "Goal observation",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
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
                                },
                                {
                                    "name": "ORDER",
                                    "desc": "Order",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ORC",
                                            "desc": "Common order",
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
                                                    "name": "OBR",
                                                    "desc": "Observation request",
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
                                                    "name": "NTE",
                                                    "desc": "Notes and comments",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "ORDER_OBSERVATION",
                                                    "desc": "Order observation",
                                                    "min": 0,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "OBX",
                                                            "desc": "Observation/result",
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
                                                            "name": "VAR",
                                                            "desc": "Variance",
                                                            "min": 0,
                                                            "max": 0
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "PTR_PCF": {
        "desc": "Pathway (problem-oriented) query response",
        "name": "PTR_PCF",
        "segments": {
            "desc": "Pathway (problem-oriented) query response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
                        },
                        {
                            "name": "PATHWAY",
                            "desc": "Pathway",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PTH",
                                    "desc": "Pathway",
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
                                    "name": "VAR",
                                    "desc": "Variance",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PATHWAY_ROLE",
                                    "desc": "Pathway role",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "ROL",
                                            "desc": "Role",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "PROBLEM",
                                    "desc": "Problem",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "PRB",
                                            "desc": "Problem details",
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
                                            "name": "VAR",
                                            "desc": "Variance",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "PROBLEM_ROLE",
                                            "desc": "Problem role",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ROL",
                                                    "desc": "Role",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                }
                                            ]
                                        },
                                        {
                                            "name": "PROBLEM_OBSERVATION",
                                            "desc": "Problem observation",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "OBX",
                                                    "desc": "Observation/result",
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
                                            "name": "GOAL",
                                            "desc": "Goal",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "GOL",
                                                    "desc": "Goal detail",
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
                                                    "name": "VAR",
                                                    "desc": "Variance",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "GOAL_ROLE",
                                                    "desc": "Goal role",
                                                    "min": 0,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "ROL",
                                                            "desc": "Role",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "VAR",
                                                            "desc": "Variance",
                                                            "min": 0,
                                                            "max": 0
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "GOAL_OBSERVATION",
                                                    "desc": "Goal observation",
                                                    "min": 0,
                                                    "max": 0,
                                                    "children": [
                                                        {
                                                            "name": "OBX",
                                                            "desc": "Observation/result",
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
                                        },
                                        {
                                            "name": "ORDER",
                                            "desc": "Order",
                                            "min": 0,
                                            "max": 0,
                                            "children": [
                                                {
                                                    "name": "ORC",
                                                    "desc": "Common order",
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
                                                            "name": "OBR",
                                                            "desc": "Observation request",
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
                                                            "name": "NTE",
                                                            "desc": "Notes and comments",
                                                            "min": 0,
                                                            "max": 0
                                                        },
                                                        {
                                                            "name": "VAR",
                                                            "desc": "Variance",
                                                            "min": 0,
                                                            "max": 0
                                                        },
                                                        {
                                                            "name": "ORDER_OBSERVATION",
                                                            "desc": "Order observation",
                                                            "min": 0,
                                                            "max": 0,
                                                            "children": [
                                                                {
                                                                    "name": "OBX",
                                                                    "desc": "Observation/result",
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
                                                                    "name": "VAR",
                                                                    "desc": "Variance",
                                                                    "min": 0,
                                                                    "max": 0
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "QBP_K13": {
        "desc": "Query by parameter",
        "name": "QBP_K13",
        "segments": {
            "desc": "Query by parameter",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ROW_DEFINITION",
                    "desc": "Row definition",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "RDF",
                            "desc": "Table row definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RDT",
                            "desc": "Table row data",
                            "min": 0,
                            "max": 0
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
    "QBP_Q11": {
        "desc": "Query by parameter",
        "name": "QBP_Q11",
        "segments": {
            "desc": "Query by parameter",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
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
    "QBP_Q21": {
        "desc": "Query by parameter",
        "name": "QBP_Q21",
        "segments": {
            "desc": "Query by parameter",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
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
    "QBP_Q22": {
        "desc": "Query - Find Candidates",
        "name": "QBP_Q22",
        "segments": {
            "desc": "Query - Find Candidates",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query Parameter Definition Segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response Control Parameters",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation Pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QBP_Q23": {
        "desc": "Query - Get Corresponding Identifiers",
        "name": "QBP_Q23",
        "segments": {
            "desc": "Query - Get Corresponding Identifiers",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
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
    "QBP_Q24": {
        "desc": "Query - Allocate Identifiers",
        "name": "QBP_Q24",
        "segments": {
            "desc": "Query - Allocate Identifiers",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
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
    "QBP_Z73": {
        "desc": "Query by parameter",
        "name": "QBP_Z73",
        "segments": {
            "desc": "Query by parameter",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "QCK_Q02": {
        "desc": "Deferred query",
        "name": "QCK_Q02",
        "segments": {
            "desc": "Deferred query",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QCN_J01": {
        "desc": "Cancel query/acknowledge message",
        "name": "QCN_J01",
        "segments": {
            "desc": "Cancel query/acknowledge message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QID",
                    "desc": "Query identification",
                    "min": 1,
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
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_PC4": {
        "desc": "Problem query",
        "name": "QRY_PC4",
        "segments": {
            "desc": "Problem query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
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
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
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
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
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
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "QRY_T12": {
        "desc": "Document query",
        "name": "QRY_T12",
        "segments": {
            "desc": "Document query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QSB_Q16": {
        "desc": "Create subscription",
        "name": "QSB_Q16",
        "segments": {
            "desc": "Create subscription",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
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
    "RAR_RAR": {
        "desc": "Pharmacy/treatment administration information",
        "name": "RAR_RAR",
        "segments": {
            "desc": "Pharmacy/treatment administration information",
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
                    "name": "DEFINITION",
                    "desc": "Definition",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "QRD",
                            "desc": "Original-style query definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "Original style query filter",
                            "min": 0,
                            "max": 1
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ENCODING",
                                    "desc": "Encoding",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXE",
                                            "desc": "Pharmacy/treatment encoded order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "RXA",
                                    "desc": "Pharmacy/treatment administration",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 1
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
    "RAS_O17": {
        "desc": "Pharmacy/treatment administration",
        "name": "RAS_O17",
        "segments": {
            "desc": "Pharmacy/treatment administration",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "AL1",
                            "desc": "Patient allergy information",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                            "desc": "Common order",
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
                                    "name": "RXO",
                                    "desc": "Pharmacy/treatment order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ORDER_DETAIL_SUPPLEMENT",
                                    "desc": "Order detail supplement",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "COMPONENTS",
                                            "desc": "Components",
                                            "min": 0,
                                            "max": 1,
                                            "children": [
                                                {
                                                    "name": "RXC",
                                                    "desc": "Pharmacy/treatment component order",
                                                    "min": 1,
                                                    "max": 0
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
                            "name": "ENCODING",
                            "desc": "Encoding",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "RXE",
                                    "desc": "Pharmacy/treatment encoded order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "RXA",
                            "desc": "Pharmacy/treatment administration",
                            "min": 1,
                            "max": 0
                        },
                        {
                            "name": "RXR",
                            "desc": "Pharmacy/treatment route",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                            "name": "CTI",
                            "desc": "Clinical trial identification",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "RCI_I05": {
        "desc": "Return clinical information",
        "name": "RCI_I05",
        "segments": {
            "desc": "Return clinical information",
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
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "Diagnosis related group",
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
                    "name": "OBSERVATION",
                    "desc": "Observation",
                    "min": 0,
                    "max": 0,
                    "children": [
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
                            "name": "RESULTS",
                            "desc": "Results",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                },
                {
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "RCL_I06": {
        "desc": "Return clinical information",
        "name": "RCL_I06",
        "segments": {
            "desc": "Return clinical information",
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
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "Diagnosis related group",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 0,
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
    "RDE_O11": {
        "desc": "Pharmacy/treatment encoded order",
        "name": "RDE_O11",
        "segments": {
            "desc": "Pharmacy/treatment encoded order",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "Patient allergy information",
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
                            "desc": "Common order",
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
                                    "name": "RXO",
                                    "desc": "Pharmacy/treatment order",
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
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "COMPONENT",
                                    "desc": "Component",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 1,
                                            "max": 0
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
                            "name": "RXE",
                            "desc": "Pharmacy/treatment encoded order",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RXR",
                            "desc": "Pharmacy/treatment route",
                            "min": 1,
                            "max": 0
                        },
                        {
                            "name": "RXC",
                            "desc": "Pharmacy/treatment component order",
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
                                    "desc": "Observation/result",
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
                            "name": "CTI",
                            "desc": "Clinical trial identification",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "RDR_RDR": {
        "desc": "Pharmacy/treatment dispense information",
        "name": "RDR_RDR",
        "segments": {
            "desc": "Pharmacy/treatment dispense information",
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
                    "name": "DEFINITION",
                    "desc": "Definition",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "QRD",
                            "desc": "Original-style query definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "Original style query filter",
                            "min": 0,
                            "max": 1
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ENCODING",
                                    "desc": "Encoding",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXE",
                                            "desc": "Pharmacy/treatment encoded order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "DISPENSE",
                                    "desc": "Dispense",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "RXD",
                                            "desc": "Pharmacy/treatment dispense",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
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
    "RDS_O13": {
        "desc": "Pharmacy/treatment dispense",
        "name": "RDS_O13",
        "segments": {
            "desc": "Pharmacy/treatment dispense",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "AL1",
                            "desc": "Patient allergy information",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                            "desc": "Common order",
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
                                    "name": "RXO",
                                    "desc": "Pharmacy/treatment order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ORDER_DETAIL_SUPPLEMENT",
                                    "desc": "Order detail supplement",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "COMPONENT",
                                            "desc": "Component",
                                            "min": 0,
                                            "max": 1,
                                            "children": [
                                                {
                                                    "name": "RXC",
                                                    "desc": "Pharmacy/treatment component order",
                                                    "min": 1,
                                                    "max": 0
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
                            "name": "ENCODING",
                            "desc": "Encoding",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "RXE",
                                    "desc": "Pharmacy/treatment encoded order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "RXD",
                            "desc": "Pharmacy/treatment dispense",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RXR",
                            "desc": "Pharmacy/treatment route",
                            "min": 1,
                            "max": 0
                        },
                        {
                            "name": "RXC",
                            "desc": "Pharmacy/treatment component order",
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
                                    "desc": "Observation/result",
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
                            "name": "FT1",
                            "desc": "Financial transaction",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "RDY_K15": {
        "desc": "Display based response",
        "name": "RDY_K15",
        "segments": {
            "desc": "Display based response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 0,
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
    "REF_I12": {
        "desc": "Patient referral",
        "name": "REF_I12",
        "segments": {
            "desc": "Patient referral",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RF1",
                    "desc": "Referral information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "AUTHORIZATION_CONTACT",
                    "desc": "Authorization contact",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "AUT",
                            "desc": "Authorization information",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "PROVIDER_CONTACT",
                    "desc": "Provider contact",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
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
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "Diagnosis related group",
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
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "AUTHORIZATION_CONTACT",
                            "desc": "Authorization contact",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "AUT",
                                    "desc": "Authorization information",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CTD",
                                    "desc": "Contact data",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "OBSERVATION",
                    "desc": "Observation",
                    "min": 0,
                    "max": 0,
                    "children": [
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
                            "name": "RESULTS_NOTES",
                            "desc": "Results notes",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                },
                {
                    "name": "PATIENT_VISIT",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
    },
    "RER_RER": {
        "desc": "Pharmacy/treatment encoded order information",
        "name": "RER_RER",
        "segments": {
            "desc": "Pharmacy/treatment encoded order information",
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
                    "name": "DEFINITION",
                    "desc": "Definition",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "QRD",
                            "desc": "Original-style query definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "Original style query filter",
                            "min": 0,
                            "max": 1
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXE",
                                    "desc": "Pharmacy/treatment encoded order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
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
    "RGR_RGR": {
        "desc": "Pharmacy/treatment dose information",
        "name": "RGR_RGR",
        "segments": {
            "desc": "Pharmacy/treatment dose information",
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
                    "name": "DEFINTION",
                    "desc": "Defintion",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "QRD",
                            "desc": "Original-style query definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "Original style query filter",
                            "min": 0,
                            "max": 1
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ENCODING",
                                    "desc": "Encoding",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXE",
                                            "desc": "Pharmacy/treatment encoded order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "RXG",
                                    "desc": "Pharmacy/treatment give",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
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
    "RGV_O15": {
        "desc": "Pharmacy/treatment give",
        "name": "RGV_O15",
        "segments": {
            "desc": "Pharmacy/treatment give",
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
                            "name": "AL1",
                            "desc": "Patient allergy information",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PATIENT_VISIT",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1,
                            "children": [
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
                                }
                            ]
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
                            "desc": "Common order",
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
                                    "name": "RXO",
                                    "desc": "Pharmacy/treatment order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ORDER_DETAIL_SUPPLEMENT",
                                    "desc": "Order detail supplement",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "COMPONENTS",
                                            "desc": "Components",
                                            "min": 0,
                                            "max": 1,
                                            "children": [
                                                {
                                                    "name": "RXC",
                                                    "desc": "Pharmacy/treatment component order",
                                                    "min": 1,
                                                    "max": 0
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
                            "name": "ENCODING",
                            "desc": "Encoding",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "RXE",
                                    "desc": "Pharmacy/treatment encoded order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GIVE",
                            "desc": "Give",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "RXG",
                                    "desc": "Pharmacy/treatment give",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
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
                                            "desc": "Observation/result",
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
                }
            ]
        }
    },
    "ROR_ROR": {
        "desc": "Pharmacy prescription order query response",
        "name": "ROR_ROR",
        "segments": {
            "desc": "Pharmacy prescription order query response",
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
                    "name": "DEFINITION",
                    "desc": "Definition",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "QRD",
                            "desc": "Original-style query definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "Original style query filter",
                            "min": 0,
                            "max": 1
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
                                    "desc": "Common order",
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
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
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
    "RPA_I08": {
        "desc": "Return patient authorization",
        "name": "RPA_I08",
        "segments": {
            "desc": "Return patient authorization",
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
                    "name": "RF1",
                    "desc": "Referral information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "AUTHORIZATION",
                    "desc": "Authorization",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "AUT",
                            "desc": "Authorization information",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
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
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "Diagnosis related group",
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
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "AUTHORIZATION",
                            "desc": "Authorization",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "AUT",
                                    "desc": "Authorization information",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CTD",
                                    "desc": "Contact data",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "OBSERVATION",
                    "desc": "Observation",
                    "min": 0,
                    "max": 0,
                    "children": [
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
                            "name": "RESULTS",
                            "desc": "Results",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                },
                {
                    "name": "VISIT",
                    "desc": "Visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
    },
    "RPI_I01": {
        "desc": "Return patient information",
        "name": "RPI_I01",
        "segments": {
            "desc": "Return patient information",
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
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GUARANTOR_INSURANCE",
                    "desc": "Guarantor insurance",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "INSURANCE",
                            "desc": "Insurance",
                            "min": 1,
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
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
    },
    "RPI_I04": {
        "desc": "Return patient information",
        "name": "RPI_I04",
        "segments": {
            "desc": "Return patient information",
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
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GUARANTOR_INSURANCE",
                    "desc": "Guarantor insurance",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "INSURANCE",
                            "desc": "Insurance",
                            "min": 1,
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
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
    },
    "RPL_I02": {
        "desc": "Return patient display list",
        "name": "RPL_I02",
        "segments": {
            "desc": "Return patient display list",
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
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
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
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 0,
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
    "RPR_I03": {
        "desc": "Return patient list",
        "name": "RPR_I03",
        "segments": {
            "desc": "Return patient list",
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
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "RQA_I08": {
        "desc": "Request for treatment authorization information",
        "name": "RQA_I08",
        "segments": {
            "desc": "Request for treatment authorization information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RF1",
                    "desc": "Referral information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "AUTHORIZATION",
                    "desc": "Authorization",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "AUT",
                            "desc": "Authorization information",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GUARANTOR_INSURANCE",
                    "desc": "Guarantor insurance",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "INSURANCE",
                            "desc": "Insurance",
                            "min": 1,
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
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
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "Diagnosis related group",
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
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "AUTHORIZATION",
                            "desc": "Authorization",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "AUT",
                                    "desc": "Authorization information",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CTD",
                                    "desc": "Contact data",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "OBSERVATION",
                    "desc": "Observation",
                    "min": 0,
                    "max": 0,
                    "children": [
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
                            "name": "RESULTS",
                            "desc": "Results",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                },
                {
                    "name": "VISIT",
                    "desc": "Visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
    },
    "RQC_I05": {
        "desc": "Request for patient clinical information",
        "name": "RQC_I05",
        "segments": {
            "desc": "Request for patient clinical information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "RQI_I01": {
        "desc": "Request for insurance information",
        "name": "RQI_I01",
        "segments": {
            "desc": "Request for insurance information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GUARANTOR_INSURANCE",
                    "desc": "Guarantor insurance",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "INSURANCE",
                            "desc": "Insurance",
                            "min": 1,
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
                                    "desc": "Insurance additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "Insurance additional information, certification",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
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
    },
    "RQP_I04": {
        "desc": "Request patient demographics",
        "name": "RQP_I04",
        "segments": {
            "desc": "Request patient demographics",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PROVIDER",
                    "desc": "Provider",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "RQQ_Q09": {
        "desc": "Event replay query",
        "name": "RQQ_Q09",
        "segments": {
            "desc": "Event replay query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERQ",
                    "desc": "Event replay query",
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
    "RRA_O18": {
        "desc": "Pharmacy/treatment administration acknowledgement",
        "name": "RRA_O18",
        "segments": {
            "desc": "Pharmacy/treatment administration acknowledgement",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ADMINISTRATION",
                                    "desc": "Administration",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXA",
                                            "desc": "Pharmacy/treatment administration",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "RRD_O14": {
        "desc": "Pharmacy/treatment dispense acknowledgement",
        "name": "RRD_O14",
        "segments": {
            "desc": "Pharmacy/treatment dispense acknowledgement",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "DISPENSE",
                                    "desc": "Dispense",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXD",
                                            "desc": "Pharmacy/treatment dispense",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "RRE_O12": {
        "desc": "Pharmacy/treatment encoded order acknowledgement",
        "name": "RRE_O12",
        "segments": {
            "desc": "Pharmacy/treatment encoded order acknowledgement",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ENCODING",
                                    "desc": "Encoding",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXE",
                                            "desc": "Pharmacy/treatment encoded order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "RRG_O16": {
        "desc": "Pharmacy/treatment give acknowledgement",
        "name": "RRG_O16",
        "segments": {
            "desc": "Pharmacy/treatment give acknowledgement",
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
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "RESPONSE",
                    "desc": "Response",
                    "min": 0,
                    "max": 1,
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "GIVE",
                                    "desc": "Give",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXG",
                                            "desc": "Pharmacy/treatment give",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "RRI_I12": {
        "desc": "Return referral information",
        "name": "RRI_I12",
        "segments": {
            "desc": "Return referral information",
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
                    "name": "RF1",
                    "desc": "Referral information",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "AUTHORIZATION_CONTACT",
                    "desc": "Authorization contact",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "AUT",
                            "desc": "Authorization information",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "PROVIDER_CONTACT",
                    "desc": "Provider contact",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PRD",
                            "desc": "Provider data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ACC",
                    "desc": "Accident",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "Diagnosis related group",
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
                    "name": "PROCEDURE",
                    "desc": "Procedure",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "AUTHORIZATION_CONTACT",
                            "desc": "Authorization contact",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "AUT",
                                    "desc": "Authorization information",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CTD",
                                    "desc": "Contact data",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "OBSERVATION",
                    "desc": "Observation",
                    "min": 0,
                    "max": 0,
                    "children": [
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
                            "name": "RESULTS_NOTES",
                            "desc": "Results notes",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
                },
                {
                    "name": "PATIENT_VISIT",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
    },
    "RSP_K11": {
        "desc": "Segment pattern response",
        "name": "RSP_K11",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
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
    "RSP_K13": {
        "desc": "Segment pattern response",
        "name": "RSP_K13",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ROW_DEFINITION",
                    "desc": "Row definition",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "RDF",
                            "desc": "Table row definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RDT",
                            "desc": "Table row data",
                            "min": 0,
                            "max": 0
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
    "RSP_K15": {
        "desc": "Segment pattern response",
        "name": "RSP_K15",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 0,
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
    "RSP_K21": {
        "desc": "Segment pattern response",
        "name": "RSP_K21",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QUERY_RESPONSE",
                    "desc": "Query response",
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
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
    "RSP_K22": {
        "desc": "Segment pattern response",
        "name": "RSP_K22",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QUERY_RESPONSE",
                    "desc": "Query response",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "QRI",
                            "desc": "Query response instance",
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
    "RSP_K23": {
        "desc": "Segment pattern response",
        "name": "RSP_K23",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
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
    "RSP_K24": {
        "desc": "Segment pattern response",
        "name": "RSP_K24",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
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
    "RSP_K25": {
        "desc": "Segment pattern response",
        "name": "RSP_K25",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "STAFF",
                    "desc": "Staff",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "STF",
                            "desc": "Staff identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PRA",
                            "desc": "Practitioner detail",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "ORG",
                            "desc": "Practitioner organization unit",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "AFF",
                            "desc": "Professional affiliation",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "LAN",
                            "desc": "Language detail",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "EDU",
                            "desc": "Educational detail",
                            "min": 0,
                            "max": 0
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
    "RSP_Z82": {
        "desc": "Segment pattern response",
        "name": "RSP_Z82",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QUERY_RESPONSE",
                    "desc": "Query response",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "VISIT",
                            "desc": "Visit",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "AL1",
                                    "desc": "Patient allergy information",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "PATIENT_VISIT",
                                    "desc": "Patient visit",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
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
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "COMMON_ORDER",
                            "desc": "Common order",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
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
                                            "name": "RXO",
                                            "desc": "Pharmacy/treatment order",
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
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "TREATMENT",
                                            "desc": "Treatment",
                                            "min": 0,
                                            "max": 1,
                                            "children": [
                                                {
                                                    "name": "RXC",
                                                    "desc": "Pharmacy/treatment component order",
                                                    "min": 1,
                                                    "max": 0
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
                                    "name": "ENCODED_ORDER",
                                    "desc": "Encoded order",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXE",
                                            "desc": "Pharmacy/treatment encoded order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "RXD",
                                    "desc": "Pharmacy/treatment dispense",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
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
                                            "desc": "Observation/result",
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
    "RSP_Z86": {
        "desc": "Segment pattern response",
        "name": "RSP_Z86",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QUERY_RESPONSE",
                    "desc": "Query response",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "AL1",
                            "desc": "Patient allergy information",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "COMMON_ORDER",
                            "desc": "Common order",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
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
                                            "name": "RXO",
                                            "desc": "Pharmacy/treatment order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "ENCODED_ORDER",
                                    "desc": "Encoded order",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXE",
                                            "desc": "Pharmacy/treatment encoded order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "DISPENSE",
                                    "desc": "Dispense",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXD",
                                            "desc": "Pharmacy/treatment dispense",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "GIVE",
                                    "desc": "Give",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXG",
                                            "desc": "Pharmacy/treatment give",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "ADMINISTRATION",
                                    "desc": "Administration",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXA",
                                            "desc": "Pharmacy/treatment administration",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
    "RSP_Z88": {
        "desc": "Segment pattern response",
        "name": "RSP_Z88",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QUERY_RESPONSE",
                    "desc": "Query response",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient additional demographic",
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
                            "name": "ALLERGY",
                            "desc": "Allergy",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "AL1",
                                    "desc": "Patient allergy information",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "VISIT",
                                    "desc": "Visit",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
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
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "COMMON_ORDER",
                            "desc": "Common order",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
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
                                            "name": "RXO",
                                            "desc": "Pharmacy/treatment order",
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
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "COMPONENT",
                                            "desc": "Component",
                                            "min": 0,
                                            "max": 1,
                                            "children": [
                                                {
                                                    "name": "RXC",
                                                    "desc": "Pharmacy/treatment component order",
                                                    "min": 1,
                                                    "max": 0
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
                                    "name": "ORDER_ENCODED",
                                    "desc": "Order encoded",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
                                        {
                                            "name": "RXE",
                                            "desc": "Pharmacy/treatment encoded order",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "Pharmacy/treatment route",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "Pharmacy/treatment component order",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "RXD",
                                    "desc": "Pharmacy/treatment dispense",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "Pharmacy/treatment route",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "Pharmacy/treatment component order",
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
                                            "desc": "Observation/result",
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
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "RSP_Z90": {
        "desc": "Segment pattern response",
        "name": "RSP_Z90",
        "segments": {
            "desc": "Segment pattern response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RCP",
                    "desc": "Response control parameter",
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
                                    "name": "PD1",
                                    "desc": "Patient additional demographic",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NK1",
                                    "desc": "Next of kin / associated parties",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "VISIT",
                                    "desc": "Visit",
                                    "min": 0,
                                    "max": 1,
                                    "children": [
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
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "COMMON_ORDER",
                            "desc": "Common order",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
                                    "min": 1,
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
                                    "name": "CTD",
                                    "desc": "Contact data",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/result",
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
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "RTB_K13": {
        "desc": "Tabular response",
        "name": "RTB_K13",
        "segments": {
            "desc": "Tabular response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ROW_DEFINITION",
                    "desc": "Row definition",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "RDF",
                            "desc": "Table row definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RDT",
                            "desc": "Table row data",
                            "min": 0,
                            "max": 0
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
    "RTB_Q13": {
        "desc": "Tabular response",
        "name": "RTB_Q13",
        "segments": {
            "desc": "Tabular response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ROW_DEFINITION",
                    "desc": "Row definition",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "RDF",
                            "desc": "Table row definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RDT",
                            "desc": "Table row data",
                            "min": 0,
                            "max": 0
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
    "RTB_Z74": {
        "desc": "Tabular response",
        "name": "RTB_Z74",
        "segments": {
            "desc": "Tabular response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QPD",
                    "desc": "Query parameter definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ROW_DEFINITION",
                    "desc": "Row definition",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "RDF",
                            "desc": "Table row definition",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RDT",
                            "desc": "Table row data",
                            "min": 0,
                            "max": 0
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
    "SIU_S12": {
        "desc": "Notification of new appointment booking",
        "name": "SIU_S12",
        "segments": {
            "desc": "Notification of new appointment booking",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Scheduling activity information",
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
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient additional demographic",
                            "min": 0,
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
                            "desc": "Observation/result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource group",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment information - service",
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
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment information - general resource",
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
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment information - location resource",
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
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment information - personnel resource",
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
    "SIU_S13": {
        "desc": "Notification of Appointment Rescheduling",
        "name": "SIU_S13",
        "segments": {
            "desc": "Notification of Appointment Rescheduling",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S14": {
        "desc": "Notification of Appointment Modification",
        "name": "SIU_S14",
        "segments": {
            "desc": "Notification of Appointment Modification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S15": {
        "desc": "Notification of Appointment Cancellation",
        "name": "SIU_S15",
        "segments": {
            "desc": "Notification of Appointment Cancellation",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S16": {
        "desc": "Notification of Appointment Discontinuation",
        "name": "SIU_S16",
        "segments": {
            "desc": "Notification of Appointment Discontinuation",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S17": {
        "desc": "Notification of Appointment Deletion",
        "name": "SIU_S17",
        "segments": {
            "desc": "Notification of Appointment Deletion",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S18": {
        "desc": "Notification of Addition of Service/Resource on Appointment",
        "name": "SIU_S18",
        "segments": {
            "desc": "Notification of Addition of Service/Resource on Appointment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S19": {
        "desc": "Notification of Modification of Service/Resource on Appointment",
        "name": "SIU_S19",
        "segments": {
            "desc": "Notification of Modification of Service/Resource on Appointment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S20": {
        "desc": "Notification of Cancellation of Service/Resource on Appointment",
        "name": "SIU_S20",
        "segments": {
            "desc": "Notification of Cancellation of Service/Resource on Appointment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S21": {
        "desc": "Notification of Discontinuation of Service/Resource on Appointment",
        "name": "SIU_S21",
        "segments": {
            "desc": "Notification of Discontinuation of Service/Resource on Appointment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S22": {
        "desc": "Notification of Deletion of Service/Resource on Appointment",
        "name": "SIU_S22",
        "segments": {
            "desc": "Notification of Deletion of Service/Resource on Appointment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S23": {
        "desc": "Notification of Blocked Schedule Time Slot(S)",
        "name": "SIU_S23",
        "segments": {
            "desc": "Notification of Blocked Schedule Time Slot(S)",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S24": {
        "desc": "Notification of Opened (un-blocked) Schedule Time Slot(s)",
        "name": "SIU_S24",
        "segments": {
            "desc": "Notification of Opened (un-blocked) Schedule Time Slot(s)",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SIU_S26": {
        "desc": "Notification That Patient Did Not Show Up for Scheduled Appointment",
        "name": "SIU_S26",
        "segments": {
            "desc": "Notification That Patient Did Not Show Up for Scheduled Appointment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "Schedule Activity Information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and Comments for the SCH",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient Identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Additional Demographics",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient Visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient Visit - Additional Info",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/Result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource Group Segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment Information - Service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIS",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment Information - General Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIG",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment Information - Location Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIL",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment Information - Personnel Resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and Comments for the AIP",
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
    "SPQ_Q08": {
        "desc": "Stored procedure request",
        "name": "SPQ_Q08",
        "segments": {
            "desc": "Stored procedure request",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SPR",
                    "desc": "Stored procedure request definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RDF",
                    "desc": "Table row definition",
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
    "SQM_S25": {
        "desc": "Schedule query message and response",
        "name": "SQM_S25",
        "segments": {
            "desc": "Schedule query message and response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "REQUEST",
                    "desc": "Request",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "ARQ",
                            "desc": "Appointment request",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "APR",
                            "desc": "Appointment preferences",
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
                            "name": "RESOURCES",
                            "desc": "Resources",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "RGS",
                                    "desc": "Resource group",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "SERVICE",
                                    "desc": "Service",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIS",
                                            "desc": "Appointment information - service",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "APR",
                                            "desc": "Appointment preferences",
                                            "min": 0,
                                            "max": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "GENERAL_RESOURCE",
                                    "desc": "General resource",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIG",
                                            "desc": "Appointment information - general resource",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "APR",
                                            "desc": "Appointment preferences",
                                            "min": 0,
                                            "max": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "PERSONNEL_RESOURCE",
                                    "desc": "Personnel resource",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIP",
                                            "desc": "Appointment information - personnel resource",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "APR",
                                            "desc": "Appointment preferences",
                                            "min": 0,
                                            "max": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "LOCATION_RESOURCE",
                                    "desc": "Location resource",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIL",
                                            "desc": "Appointment information - location resource",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "APR",
                                            "desc": "Appointment preferences",
                                            "min": 0,
                                            "max": 1
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
    "SQR_S25": {
        "desc": "Schedule query message and response",
        "name": "SQR_S25",
        "segments": {
            "desc": "Schedule query message and response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCHEDULE",
                    "desc": "Schedule",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "SCH",
                            "desc": "Scheduling activity information",
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
                                    "name": "DG1",
                                    "desc": "Diagnosis",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "RESOURCES",
                            "desc": "Resources",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "RGS",
                                    "desc": "Resource group",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "SERVICE",
                                    "desc": "Service",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIS",
                                            "desc": "Appointment information - service",
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
                                    "name": "GENERAL_RESOURCE",
                                    "desc": "General resource",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIG",
                                            "desc": "Appointment information - general resource",
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
                                    "name": "PERSONNEL_RESOURCE",
                                    "desc": "Personnel resource",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIP",
                                            "desc": "Appointment information - personnel resource",
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
                                    "name": "LOCATION_RESOURCE",
                                    "desc": "Location resource",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIL",
                                            "desc": "Appointment information - location resource",
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
    "SRM_S01": {
        "desc": "Request new appointment booking",
        "name": "SRM_S01",
        "segments": {
            "desc": "Request new appointment booking",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ARQ",
                    "desc": "Appointment request",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "APR",
                    "desc": "Appointment preferences",
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
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
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
                        },
                        {
                            "name": "PV2",
                            "desc": "Patient visit - additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/result",
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
                },
                {
                    "name": "RESOURCES",
                    "desc": "Resources",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "RGS",
                            "desc": "Resource group",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "SERVICE",
                            "desc": "Service",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIS",
                                    "desc": "Appointment information - service",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "APR",
                                    "desc": "Appointment preferences",
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
                            "name": "GENERAL_RESOURCE",
                            "desc": "General resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIG",
                                    "desc": "Appointment information - general resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "APR",
                                    "desc": "Appointment preferences",
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
                            "name": "LOCATION_RESOURCE",
                            "desc": "Location resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIL",
                                    "desc": "Appointment information - location resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "APR",
                                    "desc": "Appointment preferences",
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
                            "name": "PERSONNEL_RESOURCE",
                            "desc": "Personnel resource",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "AIP",
                                    "desc": "Appointment information - personnel resource",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "APR",
                                    "desc": "Appointment preferences",
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
        }
    },
    "SRR_S01": {
        "desc": "Scheduled request response",
        "name": "SRR_S01",
        "segments": {
            "desc": "Scheduled request response",
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
                    "name": "SCHEDULE",
                    "desc": "Schedule",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "SCH",
                            "desc": "Scheduling activity information",
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
                                },
                                {
                                    "name": "PV2",
                                    "desc": "Patient visit - additional information",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "DG1",
                                    "desc": "Diagnosis",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "RESOURCES",
                            "desc": "Resources",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "RGS",
                                    "desc": "Resource group",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "SERVICE",
                                    "desc": "Service",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIS",
                                            "desc": "Appointment information - service",
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
                                    "name": "GENERAL_RESOURCE",
                                    "desc": "General resource",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIG",
                                            "desc": "Appointment information - general resource",
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
                                    "name": "LOCATION_RESOURCE",
                                    "desc": "Location resource",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIL",
                                            "desc": "Appointment information - location resource",
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
                                    "name": "PERSONNEL_RESOURCE",
                                    "desc": "Personnel resource",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "AIP",
                                            "desc": "Appointment information - personnel resource",
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
            ]
        }
    },
    "SSR_U04": {
        "desc": "Specimen status request",
        "name": "SSR_U04",
        "segments": {
            "desc": "Specimen status request",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SAC",
                    "desc": "Specimen and container detail",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "SSU_U03": {
        "desc": "Specimen status update",
        "name": "SSU_U03",
        "segments": {
            "desc": "Specimen status update",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SPECIMEN_CONTAINER",
                    "desc": "Specimen container",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "SAC",
                            "desc": "Specimen and container detail",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "Observation/result",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ROL",
                    "desc": "Role",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "SUR_P09": {
        "desc": "Summary product experience report",
        "name": "SUR_P09",
        "segments": {
            "desc": "Summary product experience report",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "FACILITY",
                    "desc": "Facility",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "FAC",
                            "desc": "Facility",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PRODUCT",
                            "desc": "Product",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "PSH",
                                    "desc": "Product summary header",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PDC",
                                    "desc": "Product detail country",
                                    "min": 1,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "PSH",
                            "desc": "Product summary header",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "FACILITY_DETAIL",
                            "desc": "Facility detail",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "FAC",
                                    "desc": "Facility",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PDC",
                                    "desc": "Product detail country",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 1,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "TBR_R08": {
        "desc": "Tabular data response",
        "name": "TBR_R08",
        "segments": {
            "desc": "Tabular data response",
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
                    "name": "QAK",
                    "desc": "Query acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RDF",
                    "desc": "Table row definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RDT",
                    "desc": "Table row data",
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
    "TCU_U10": {
        "desc": "Automated equipment test code settings update",
        "name": "TCU_U10",
        "segments": {
            "desc": "Automated equipment test code settings update",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQU",
                    "desc": "Equipment detail",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TCC",
                    "desc": "Test code configuration",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "ROL",
                    "desc": "Role",
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
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "VQQ_Q07": {
        "desc": "Virtual table query",
        "name": "VQQ_Q07",
        "segments": {
            "desc": "Virtual table query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "VTQ",
                    "desc": "Virtual table query request",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RDF",
                    "desc": "Table row definition",
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
    "VXQ_V01": {
        "desc": "Query for vaccination record",
        "name": "VXQ_V01",
        "segments": {
            "desc": "Query for vaccination record",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "VXR_V03": {
        "desc": "Vaccination record response",
        "name": "VXR_V03",
        "segments": {
            "desc": "Vaccination record response",
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
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT_VISIT",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1,
                    "children": [
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
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ORDER",
                    "desc": "Order",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "ORC",
                            "desc": "Common order",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "RXA",
                            "desc": "Pharmacy/treatment administration",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RXR",
                            "desc": "Pharmacy/treatment route",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
    "VXU_V04": {
        "desc": "Unsolicited vaccination record update",
        "name": "VXU_V04",
        "segments": {
            "desc": "Unsolicited vaccination record update",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
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
                    "name": "PD1",
                    "desc": "Patient additional demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin / associated parties",
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
                        }
                    ]
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
                            "desc": "Insurance additional information",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "Insurance additional information, certification",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ORDER",
                    "desc": "Order",
                    "min": 0,
                    "max": 0,
                    "children": [
                        {
                            "name": "ORC",
                            "desc": "Common order",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "RXA",
                            "desc": "Pharmacy/treatment administration",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RXR",
                            "desc": "Pharmacy/treatment route",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBSERVATION",
                            "desc": "Observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "Observation/result",
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
    "VXX_V02": {
        "desc": "Response to vaccination query",
        "name": "VXX_V02",
        "segments": {
            "desc": "Response to vaccination query",
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
                    "name": "QRD",
                    "desc": "Original-style query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Original style query filter",
                    "min": 0,
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
                            "name": "NK1",
                            "desc": "Next of kin / associated parties",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = messages;
