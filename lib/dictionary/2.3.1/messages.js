var messages = {
    "ACK": {
        "desc": "General acknowledgment message",
        "name": "ACK",
        "segments": {
            "desc": "General acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                            "desc": "EVN - event type segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PID",
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NK1",
                            "desc": "NK1 - next of kin / associated parties segment-",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "DB1",
                            "desc": "DB1 - Disability segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "OBX",
                            "desc": "OBX - observation/result segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DG1",
                            "desc": "DG1 - diagnosis segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DRG",
                            "desc": "DRG - diagnosis related group segment",
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
                                    "desc": "PR1 - procedures segment",
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
                            "desc": "GT1 - guarantor segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "ACC",
                            "desc": "ACC - accident segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB1",
                            "desc": "UB1 - UB82 data segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB2",
                            "desc": "UB2 - UB92 data segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NPU",
                    "desc": "NPU - bed status update segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
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
                            "desc": "PR1 - procedures segment",
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
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB1",
                    "desc": "UB1 - UB82 data segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "UB2",
                    "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
                    "min": 1,
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "MRG - merge patient information segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "MRG - merge patient information segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "MRG - merge patient information segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "MRG - merge patient information segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MRG",
                            "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
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
                            "desc": "MRG - merge patient information segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "MRG - merge patient information segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
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
                    "desc": "PV2 - patient visit - additional information segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
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
                    "desc": "PV2 - patient visit - additional information segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "DB1",
                            "desc": "DB1 - Disability segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "OBX",
                            "desc": "OBX - observation/result segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DG1",
                            "desc": "DG1 - diagnosis segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DRG",
                            "desc": "DRG - diagnosis related group segment",
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
                                    "desc": "PR1 - procedures segment",
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
                            "desc": "GT1 - guarantor segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "NK1",
                            "desc": "NK1 - next of kin / associated parties segment-",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "ACC",
                            "desc": "ACC - accident segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB1",
                            "desc": "UB1 - UB82 data segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB2",
                            "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "DB1",
                            "desc": "DB1 - Disability segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "DB1",
                            "desc": "DB1 - Disability segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "OBX",
                            "desc": "OBX - observation/result segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DG1",
                            "desc": "DG1 - diagnosis segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DRG",
                            "desc": "DRG - diagnosis related group segment",
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
                                    "desc": "PR1 - procedures segment",
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
                            "desc": "GT1 - guarantor segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "NK1",
                            "desc": "NK1 - next of kin / associated parties segment-",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "ACC",
                            "desc": "ACC - accident segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB1",
                            "desc": "UB1 - UB82 data segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB2",
                            "desc": "UB2 - UB92 data segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
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
                    "desc": "MSH - message header segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "CSR",
                            "desc": "CSR - clinical study registration segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CSP",
                            "desc": "CSP - clinical study phase segment",
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
                    "desc": "MSH - message header segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "CSR",
                            "desc": "CSR - clinical study registration segment",
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
                                    "desc": "CSP - clinical study phase segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "STUDY_SCHEDULE",
                                    "desc": "Study schedule",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "CSS",
                                            "desc": "CSS - clinical study data schedule segment",
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
                                                    "desc": "ORC - common order segment",
                                                    "min": 0,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "OBR",
                                                    "desc": "OBR - observation request segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "OBX",
                                                    "desc": "OBX - observation/result segment",
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
                                                    "desc": "ORC - common order segment",
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
                                                            "desc": "RXA - pharmacy/treatment administration segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "RXR",
                                                            "desc": "RXR - pharmacy/treatment route segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PV2",
                    "desc": "PV2 - patient visit - additional information segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DB1",
                    "desc": "DB1 - Disability segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "FINANCIAL",
                    "desc": "Financial",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "FT1",
                            "desc": "FT1 - financial transaction segment",
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
                                    "desc": "PR1 - procedures segment",
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
                        }
                    ]
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "GT1",
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
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
                            "desc": "EVN - event type segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PID",
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "TXA",
                            "desc": "Document notification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "OBX - observation/result segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "DSP - display data segment",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "DSP - display data segment",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "DSP - display data segment",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EQL",
                    "desc": "EQL - embedded query language segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERQ",
                    "desc": "ERQ - event replay query segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 1,
                    "max": 0
                }
            ]
        }
    },
    "MDM_T03": {
        "desc": "Document status change notification",
        "name": "MDM_T03",
        "segments": {
            "desc": "Document status change notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "MDM_T04": {
        "desc": "Document status change notification and content",
        "name": "MDM_T04",
        "segments": {
            "desc": "Document status change notification and content",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "MDM_T05": {
        "desc": "Document addendum notification",
        "name": "MDM_T05",
        "segments": {
            "desc": "Document addendum notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "MDM_T06": {
        "desc": "Document addendum notification and content",
        "name": "MDM_T06",
        "segments": {
            "desc": "Document addendum notification and content",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 1,
                    "max": 0
                }
            ]
        }
    },
    "MDM_T07": {
        "desc": "Document edit notification",
        "name": "MDM_T07",
        "segments": {
            "desc": "Document edit notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "MDM_T08": {
        "desc": "Document edit notification and content",
        "name": "MDM_T08",
        "segments": {
            "desc": "Document edit notification and content",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 1,
                    "max": 0
                }
            ]
        }
    },
    "MDM_T09": {
        "desc": "Document replacement notification",
        "name": "MDM_T09",
        "segments": {
            "desc": "Document replacement notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "MDM_T10": {
        "desc": "Document replacement notification and content",
        "name": "MDM_T10",
        "segments": {
            "desc": "Document replacement notification and content",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "OBX",
                    "desc": "OBX - observation/result segment",
                    "min": 1,
                    "max": 0
                }
            ]
        }
    },
    "MDM_T11": {
        "desc": "Document cancel notification",
        "name": "MDM_T11",
        "segments": {
            "desc": "Document cancel notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "PV1 - patient visit segment-",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "TXA",
                    "desc": "Document notification segment",
                    "min": 1,
                    "max": 1
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "MFA - master file acknowledgment segment",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFK_M04": {
        "desc": "Master file application acknowledgment",
        "name": "MFK_M04",
        "segments": {
            "desc": "Master file application acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "MFA - master file acknowledgment segment",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFK_M05": {
        "desc": "Master file application acknowledgment",
        "name": "MFK_M05",
        "segments": {
            "desc": "Master file application acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "MFA - master file acknowledgment segment",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "MFK_M06": {
        "desc": "Master file application acknowledgment",
        "name": "MFK_M06",
        "segments": {
            "desc": "Master file application acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFA",
                    "desc": "MFA - master file acknowledgment segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
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
                            "desc": "MFE - master file entry segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "STF",
                            "desc": "STF - staff identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PRA",
                            "desc": "PRA - practitioner detail segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
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
                            "desc": "MFE - master file entry segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CDM",
                            "desc": "CDM -  charge description master segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PRC",
                            "desc": "PRC -  pricing segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
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
                            "desc": "MFE - master file entry segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "LOC",
                            "desc": "LOC - location identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "LCH",
                            "desc": "LCH - location characteristic segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "LRL",
                            "desc": "LRL - location relationship segment",
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
                                    "desc": "LDP - location department segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "LCH",
                                    "desc": "LCH - location characteristic segment",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "LCC",
                                    "desc": "LCC - location charge code segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
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
                            "desc": "MFE - master file entry segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CM0",
                            "desc": "CM0 - clinical study master segment",
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
                                    "desc": "CM1 - clinical study phase master segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CM2",
                                    "desc": "CM2 - clinical study schedule master segment",
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
    "MFN_M08": {
        "desc": "Test/observation (numeric) master file",
        "name": "MFN_M08",
        "segments": {
            "desc": "Test/observation (numeric) master file",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
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
                            "desc": "MFE - master file entry segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM1",
                            "desc": "OM1 - general segment (fields that apply to most observations",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "MF_NUMERIC_OBSERVATION",
                            "desc": "Mf numeric observation",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "OM2",
                                    "desc": "OM2 - numeric observation segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OM3",
                                    "desc": "OM3 - categorical test/observation segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OM4",
                                    "desc": "OM4 - observations that require specimens segment",
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
    "MFN_M09": {
        "desc": "Test/observation (categorical) master file",
        "name": "MFN_M09",
        "segments": {
            "desc": "Test/observation (categorical) master file",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
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
                            "desc": "MFE - master file entry segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM1",
                            "desc": "OM1 - general segment (fields that apply to most observations",
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
                                    "desc": "OM3 - categorical test/observation segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OM4",
                                    "desc": "OM4 - observations that require specimens segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
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
                            "desc": "MFE - master file entry segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM1",
                            "desc": "OM1 - general segment (fields that apply to most observations",
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
                                    "desc": "OM5 - observation batteries (sets",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OM4",
                                    "desc": "OM4 - observations that require specimens segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MFI",
                    "desc": "MFI - master file identification segment",
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
                            "desc": "MFE - master file entry segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "OM1",
                            "desc": "OM1 - general segment (fields that apply to most observations",
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
                                    "desc": "OM6 - Observations that are calculated from other observations segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OM2",
                                    "desc": "OM2 - numeric observation segment",
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
    "MFQ_M01": {
        "desc": "Query for master file record",
        "name": "MFQ_M01",
        "segments": {
            "desc": "Query for master file record",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
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
                                    "desc": "System Clock",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
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
                            "desc": "QRD - original-style query definition segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "QRF - original style query filter segment",
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
                            "desc": "System Clock",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
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
                            "desc": "System Clock",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                            "desc": "NTE - notes and comments segment",
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
                            "desc": "NTE - notes and comments segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "OMD_O01": {
        "desc": "Dietary order",
        "name": "OMD_O01",
        "segments": {
            "desc": "Dietary order",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "GT1 - guarantor segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
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
                            "desc": "ORC - common order segment",
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
                                    "desc": "ODS - dietary orders, supplements, and preferences segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                            "desc": "ORC - common order segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ODT",
                            "desc": "ODT - diet tray instructions segment",
                            "min": 1,
                            "max": 0
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "OMN_O01": {
        "desc": "Non-stock requisition order message",
        "name": "OMN_O01",
        "segments": {
            "desc": "Non-stock requisition order message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "GT1 - guarantor segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
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
                            "desc": "ORC - common order segment",
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
                                    "name": "RQD",
                                    "desc": "RQD - requisition detail segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RQ1",
                                    "desc": "RQ1 - requisition detail-1 segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "BLG",
                            "desc": "BLG - billing segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "OMS_O01": {
        "desc": "Stock requisition order message",
        "name": "OMS_O01",
        "segments": {
            "desc": "Stock requisition order message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "GT1 - guarantor segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
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
                            "desc": "ORC - common order segment",
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
                                    "name": "RQD",
                                    "desc": "RQD - requisition detail segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "BLG",
                            "desc": "BLG - billing segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "ORD_O02": {
        "desc": "Dietary order acknowledgment message",
        "name": "ORD_O02",
        "segments": {
            "desc": "Dietary order acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ODS",
                                    "desc": "ODS - dietary orders, supplements, and preferences segment",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "ODT",
                                    "desc": "ODT - diet tray instructions segment",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                            "name": "PATIENT",
                            "desc": "Patient",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "PID",
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "OBR - observation request segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "CTI",
                                    "desc": "CTI - clinical trial identification segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "GT1 - guarantor segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
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
                            "desc": "ORC - common order segment",
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
                                    "desc": "NTE - notes and comments segment",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "DG1",
                                    "desc": "DG1 - diagnosis segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CTI",
                            "desc": "CTI - clinical trial identification segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "BLG",
                            "desc": "BLG - billing segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "ORN_O02": {
        "desc": "Non-stock requisition - general order acknowledgment message",
        "name": "ORN_O02",
        "segments": {
            "desc": "Non-stock requisition - general order acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RQD",
                                    "desc": "RQD - requisition detail segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RQ1",
                                    "desc": "RQ1 - requisition detail-1 segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
    "ORR_O02": {
        "desc": "Order response",
        "name": "ORR_O02",
        "segments": {
            "desc": "Order response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                    "desc": "NTE - notes and comments segment",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "CTI",
                                    "desc": "CTI - clinical trial identification segment",
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
    "ORS_O02": {
        "desc": "Stock requisition - order acknowledgment message",
        "name": "ORS_O02",
        "segments": {
            "desc": "Stock requisition - order acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RQD",
                                    "desc": "RQD - requisition detail segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PD1",
                                    "desc": "Patient Additional Demographic",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NK1",
                                    "desc": "NK1 - next of kin / associated parties segment-",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "PV1 - patient visit segment-",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "PV2",
                                            "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "ORC - common order segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "OBR - observation request segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "CTI",
                                    "desc": "CTI - clinical trial identification segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PD1",
                                    "desc": "Patient Additional Demographic",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NK1",
                                    "desc": "NK1 - next of kin / associated parties segment-",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "PV1 - patient visit segment-",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "PV2",
                                            "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "ORC - common order segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "OBR - observation request segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "CTI",
                                    "desc": "CTI - clinical trial identification segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "name": "ORC",
                                    "desc": "ORC - common order segment",
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
                                    "desc": "NTE - notes and comments segment",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "CTI",
                                    "desc": "CTI - clinical trial identification segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "EVN - event type segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "PES - product experience sender segment",
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
                                    "desc": "PEO - product experience observation segment",
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
                                            "desc": "PCR - possible causal relationship segment",
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
                                                    "desc": "RXE - pharmacy/treatment encoded order segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "RXR",
                                                    "desc": "RXR - pharmacy/treatment route segment",
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
                                                    "desc": "RXA - pharmacy/treatment administration segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "RXR",
                                                    "desc": "RXR - pharmacy/treatment route segment",
                                                    "min": 0,
                                                    "max": 1
                                                }
                                            ]
                                        },
                                        {
                                            "name": "PRB",
                                            "desc": "Problem Detail",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "OBX",
                                            "desc": "OBX - observation/result segment",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "NK1 - next of kin / associated parties segment-",
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
                                                            "desc": "RXE - pharmacy/treatment encoded order segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "RXR",
                                                            "desc": "RXR - pharmacy/treatment route segment",
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
                                                            "desc": "RXA - pharmacy/treatment administration segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "RXR",
                                                            "desc": "RXR - pharmacy/treatment route segment",
                                                            "min": 0,
                                                            "max": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "PRB",
                                                    "desc": "Problem Detail",
                                                    "min": 0,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "OBX",
                                                    "desc": "OBX - observation/result segment",
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
                                                    "desc": "CSR - clinical study registration segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "CSP",
                                                    "desc": "CSP - clinical study phase segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "Goal Detail",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "Problem Detail",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "OBR - observation request segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXO",
                                            "desc": "RXO - pharmacy/treatment order segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "OBX - observation/result segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
    "PIN_I07": {
        "desc": "Unsolicited insurance information",
        "name": "PIN_I07",
        "segments": {
            "desc": "Unsolicited insurance information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
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
                            "desc": "GT1 - guarantor segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
                    "min": 0,
                    "max": 0
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "Goal Detail",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "Problem Detail",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "OBX - observation/result segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "ORC - common order segment",
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
                                                    "desc": "OBR - observation request segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "RXO",
                                                    "desc": "RXO - pharmacy/treatment order segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                                            "desc": "OBX - observation/result segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "NTE",
                                                            "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "Problem Detail",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "Goal Detail",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "OBX - observation/result segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "ORC - common order segment",
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
                                                    "desc": "OBR - observation request segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "RXO",
                                                    "desc": "RXO - pharmacy/treatment order segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                                            "desc": "OBX - observation/result segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "NTE",
                                                            "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "Problem Detail",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                            "name": "PATHWAY_OBSERVATION",
                            "desc": "Pathway observation",
                            "min": 0,
                            "max": 0,
                            "children": [
                                {
                                    "name": "OBX",
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "Goal Detail",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "OBR - observation request segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXO",
                                            "desc": "RXO - pharmacy/treatment order segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "OBX - observation/result segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
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
                            "desc": "PID - patient identification segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "Goal Detail",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "OBX - observation/result segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                                    "desc": "Problem Detail",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                                            "desc": "OBX - observation/result segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "NTE",
                                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "ORC - common order segment",
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
                                                            "desc": "OBR - observation request segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "RXO",
                                                            "desc": "RXO - pharmacy/treatment order segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "NTE",
                                                            "desc": "NTE - notes and comments segment",
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
                                                                    "desc": "OBX - observation/result segment",
                                                                    "min": 1,
                                                                    "max": 1
                                                                },
                                                                {
                                                                    "name": "NTE",
                                                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
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
                            "desc": "PID - patient identification segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "Goal Detail",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "Problem Detail",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "OBX - observation/result segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "ORC - common order segment",
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
                                                    "desc": "OBR - observation request segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "RXO",
                                                    "desc": "RXO - pharmacy/treatment order segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                                            "desc": "OBX - observation/result segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "NTE",
                                                            "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
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
                            "desc": "PID - patient identification segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "Problem Detail",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "Goal Detail",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "OBX - observation/result segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "ORC - common order segment",
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
                                                    "desc": "OBR - observation request segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "RXO",
                                                    "desc": "RXO - pharmacy/treatment order segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                                            "desc": "OBX - observation/result segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "NTE",
                                                            "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
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
                            "desc": "PID - patient identification segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "NTE - notes and comments segment",
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
                                            "desc": "Problem Detail",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "OBX - observation/result segment",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                                    "desc": "Goal Detail",
                                                    "min": 1,
                                                    "max": 1
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                                            "desc": "OBX - observation/result segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "NTE",
                                                            "desc": "NTE - notes and comments segment",
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
                                                    "desc": "ORC - common order segment",
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
                                                            "desc": "OBR - observation request segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "RXO",
                                                            "desc": "RXO - pharmacy/treatment order segment",
                                                            "min": 1,
                                                            "max": 1
                                                        },
                                                        {
                                                            "name": "NTE",
                                                            "desc": "NTE - notes and comments segment",
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
                                                                    "desc": "OBX - observation/result segment",
                                                                    "min": 1,
                                                                    "max": 1
                                                                },
                                                                {
                                                                    "name": "NTE",
                                                                    "desc": "NTE - notes and comments segment",
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
    "QCK_Q02": {
        "desc": "Deferred query",
        "name": "QCK_Q02",
        "segments": {
            "desc": "Deferred query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_PC9": {
        "desc": "Goal query",
        "name": "QRY_PC9",
        "segments": {
            "desc": "Goal query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_PCE": {
        "desc": "Pathway (problem-oriented) query",
        "name": "QRY_PCE",
        "segments": {
            "desc": "Pathway (problem-oriented) query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_PCK": {
        "desc": "Pathway (goal-oriented) query",
        "name": "QRY_PCK",
        "segments": {
            "desc": "Pathway (goal-oriented) query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
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
                            "desc": "QRD - original-style query definition segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "QRF - original style query filter segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "RXE - pharmacy/treatment encoded order segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "RXC - pharmacy/treatment component order segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "RXA",
                                    "desc": "RXA - pharmacy/treatment administration segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
                                    "min": 1,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "RAS_O01": {
        "desc": "Pharmacy/treatment administration message",
        "name": "RAS_O01",
        "segments": {
            "desc": "Pharmacy/treatment administration message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "ORC - common order segment",
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
                                    "desc": "RXO - pharmacy/treatment order segment",
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
                                            "desc": "NTE - notes and comments segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
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
                                                    "desc": "RXC - pharmacy/treatment component order segment",
                                                    "min": 1,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "RXE - pharmacy/treatment encoded order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "RXC - pharmacy/treatment component order segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "RXA",
                            "desc": "RXA - pharmacy/treatment administration segment",
                            "min": 1,
                            "max": 0
                        },
                        {
                            "name": "RXR",
                            "desc": "RXR - pharmacy/treatment route segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "CTI",
                            "desc": "CTI - clinical trial identification segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
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
                            "desc": "OBR - observation request segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DSP",
                    "desc": "DSP - display data segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "RDE_O01": {
        "desc": "Pharmacy/treatment encoded order message",
        "name": "RDE_O01",
        "segments": {
            "desc": "Pharmacy/treatment encoded order message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "GT1 - guarantor segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
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
                            "desc": "ORC - common order segment",
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
                                    "desc": "RXO - pharmacy/treatment order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
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
                                            "desc": "RXC - pharmacy/treatment component order segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "RXE",
                            "desc": "RXE - pharmacy/treatment encoded order segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RXR",
                            "desc": "RXR - pharmacy/treatment route segment",
                            "min": 1,
                            "max": 0
                        },
                        {
                            "name": "RXC",
                            "desc": "RXC - pharmacy/treatment component order segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "CTI",
                            "desc": "CTI - clinical trial identification segment",
                            "min": 0,
                            "max": 0
                        }
                    ]
                }
            ]
        }
    },
    "RDO_O01": {
        "desc": "Rdo message",
        "name": "RDO_O01",
        "segments": {
            "desc": "Rdo message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "GT1",
                            "desc": "GT1 - guarantor segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
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
                            "desc": "ORC - common order segment",
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
                                    "desc": "RXO - pharmacy/treatment order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
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
                                            "desc": "RXC - pharmacy/treatment component order segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "BLG",
                            "desc": "BLG - billing segment",
                            "min": 0,
                            "max": 1
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
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
                            "desc": "QRD - original-style query definition segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "QRF - original style query filter segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "RXE - pharmacy/treatment encoded order segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "RXC - pharmacy/treatment component order segment",
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
                                            "desc": "RXD - pharmacy/treatment dispense segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "RXC - pharmacy/treatment component order segment",
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
                    "desc": "DSC - Continuation pointer segment",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "RDS_O01": {
        "desc": "Pharmacy/treatment dispense information",
        "name": "RDS_O01",
        "segments": {
            "desc": "Pharmacy/treatment dispense information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "ORC - common order segment",
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
                                    "desc": "RXO - pharmacy/treatment order segment",
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
                                            "desc": "NTE - notes and comments segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
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
                                                    "desc": "RXC - pharmacy/treatment component order segment",
                                                    "min": 1,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "RXE - pharmacy/treatment encoded order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "RXC - pharmacy/treatment component order segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        },
                        {
                            "name": "RXD",
                            "desc": "RXD - pharmacy/treatment dispense segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RXR",
                            "desc": "RXR - pharmacy/treatment route segment",
                            "min": 1,
                            "max": 0
                        },
                        {
                            "name": "RXC",
                            "desc": "RXC - pharmacy/treatment component order segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
    "REF_I12": {
        "desc": "Patient referral",
        "name": "REF_I12",
        "segments": {
            "desc": "Patient referral",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RF1",
                    "desc": "Referral Infomation",
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
                            "desc": "Authorization Information",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
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
                            "desc": "PR1 - procedures segment",
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
                                    "desc": "Authorization Information",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CTD",
                                    "desc": "Contact Data",
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
                            "desc": "OBR - observation request segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
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
                            "desc": "QRD - original-style query definition segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "QRF - original style query filter segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXE",
                                    "desc": "RXE - pharmacy/treatment encoded order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "RXC - pharmacy/treatment component order segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
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
                            "desc": "QRD - original-style query definition segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "QRF - original style query filter segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "RXE - pharmacy/treatment encoded order segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "RXC - pharmacy/treatment component order segment",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                },
                                {
                                    "name": "RXG",
                                    "desc": "RXG - pharmacy/treatment give segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "RXC - pharmacy/treatment component order segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "RGV_O01": {
        "desc": "Pharmacy/treatment give message",
        "name": "RGV_O01",
        "segments": {
            "desc": "Pharmacy/treatment give message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "AL1",
                            "desc": "AL1 - patient allergy information segment",
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
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "ORC - common order segment",
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
                                    "desc": "RXO - pharmacy/treatment order segment",
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
                                            "desc": "NTE - notes and comments segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
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
                                                    "desc": "RXC - pharmacy/treatment component order segment",
                                                    "min": 1,
                                                    "max": 0
                                                },
                                                {
                                                    "name": "NTE",
                                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "RXE - pharmacy/treatment encoded order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "RXC - pharmacy/treatment component order segment",
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
                                    "desc": "RXG - pharmacy/treatment give segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "RXC - pharmacy/treatment component order segment",
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
                                            "desc": "OBX - observation/result segment",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
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
                            "desc": "QRD - original-style query definition segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "QRF",
                            "desc": "QRF - original style query filter segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXO",
                                    "desc": "RXO - pharmacy/treatment order segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "RXR",
                                    "desc": "RXR - pharmacy/treatment route segment",
                                    "min": 1,
                                    "max": 0
                                },
                                {
                                    "name": "RXC",
                                    "desc": "RXC - pharmacy/treatment component order segment",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RF1",
                    "desc": "Referral Infomation",
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
                            "desc": "Authorization Information",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "GT1 - guarantor segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
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
                            "desc": "PR1 - procedures segment",
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
                                    "desc": "Authorization Information",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CTD",
                                    "desc": "Contact Data",
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
                            "desc": "OBR - observation request segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
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
                            "desc": "GT1 - guarantor segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
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
                            "desc": "GT1 - guarantor segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DSP",
                    "desc": "DSP - display data segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RF1",
                    "desc": "Referral Infomation",
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
                            "desc": "Authorization Information",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
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
                            "desc": "GT1 - guarantor segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
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
                            "desc": "PR1 - procedures segment",
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
                                    "desc": "Authorization Information",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CTD",
                                    "desc": "Contact Data",
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
                            "desc": "OBR - observation request segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "GT1 - guarantor segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "RQC_I06": {
        "desc": "Request/receipt of clinical data listing",
        "name": "RQC_I06",
        "segments": {
            "desc": "Request/receipt of clinical data listing",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "GT1 - guarantor segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
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
                            "desc": "GT1 - guarantor segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "RQI_I02": {
        "desc": "Request/receipt of patient selection display list",
        "name": "RQI_I02",
        "segments": {
            "desc": "Request/receipt of patient selection display list",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
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
                            "desc": "GT1 - guarantor segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "RQI_I03": {
        "desc": "Request/receipt of patient selection list",
        "name": "RQI_I03",
        "segments": {
            "desc": "Request/receipt of patient selection list",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
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
                            "desc": "GT1 - guarantor segment",
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
                                    "desc": "IN1 - insurance segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "IN2",
                                    "desc": "IN2 - insurance additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "IN3",
                                    "desc": "IN3 - insurance additional information, certification segment",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "GT1",
                    "desc": "GT1 - guarantor segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERQ",
                    "desc": "ERQ - event replay query segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "RRA_O02": {
        "desc": "Pharmacy/treatment administration acknowledgment message",
        "name": "RRA_O02",
        "segments": {
            "desc": "Pharmacy/treatment administration acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "RXA - pharmacy/treatment administration segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
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
    "RRD_O02": {
        "desc": "Pharmacy/treatment dispense acknowledgment message",
        "name": "RRD_O02",
        "segments": {
            "desc": "Pharmacy/treatment dispense acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "RXD - pharmacy/treatment dispense segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "RXC - pharmacy/treatment component order segment",
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
    "RRE_O02": {
        "desc": "Pharmacy/treatment encoded order acknowledgment message",
        "name": "RRE_O02",
        "segments": {
            "desc": "Pharmacy/treatment encoded order acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "RXE - pharmacy/treatment encoded order segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "RXC - pharmacy/treatment component order segment",
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
    "RRG_O02": {
        "desc": "Pharmacy/treatment give acknowledgment message",
        "name": "RRG_O02",
        "segments": {
            "desc": "Pharmacy/treatment give acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "RXG - pharmacy/treatment give segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "RXC - pharmacy/treatment component order segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "RF1",
                    "desc": "Referral Infomation",
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
                            "desc": "Authorization Information",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
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
                            "desc": "Provider Data",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "CTD",
                            "desc": "Contact Data",
                            "min": 0,
                            "max": 0
                        }
                    ]
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ACC",
                    "desc": "ACC - accident segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "DG1 - diagnosis segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "DRG",
                    "desc": "DRG - diagnosis related group segment",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "AL1",
                    "desc": "AL1 - patient allergy information segment",
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
                            "desc": "PR1 - procedures segment",
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
                                    "desc": "Authorization Information",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "CTD",
                                    "desc": "Contact Data",
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
                            "desc": "OBR - observation request segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "RRO_O02": {
        "desc": "Rro message",
        "name": "RRO_O02",
        "segments": {
            "desc": "Rro message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "ORC - common order segment",
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
                                            "desc": "RXO - pharmacy/treatment order segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXR",
                                            "desc": "RXR - pharmacy/treatment route segment",
                                            "min": 1,
                                            "max": 0
                                        },
                                        {
                                            "name": "RXC",
                                            "desc": "RXC - pharmacy/treatment component order segment",
                                            "min": 0,
                                            "max": 0
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
    "RSP_K22": {
        "desc": "Segment pattern response",
        "name": "RSP_K22",
        "segments": {
            "desc": "Segment pattern response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message Header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message Acknowledgement",
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
                    "desc": "Query Acknowledgement",
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
                    "name": "QUERY_RESPONSE",
                    "desc": "Query response",
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
                            "name": "QRI",
                            "desc": "Query Response Instance",
                            "min": 0,
                            "max": 1
                        }
                    ]
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
    "SIU_S12": {
        "desc": "Notification of new appointment booking",
        "name": "SIU_S12",
        "segments": {
            "desc": "Notification of new appointment booking",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SCH",
                    "desc": "SCH - schedule activity information segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PD1",
                            "desc": "Patient Additional Demographic",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "OBX - observation/result segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DG1",
                            "desc": "DG1 - diagnosis segment",
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
                            "desc": "RGS - resource group segment",
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
                                    "desc": "AIS - appointment information - service segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "AIG - appointment information - general resource segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "AIL - appointment information - location resource segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "AIP - appointment information - personnel resource segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "SPR",
                    "desc": "SPR - stored procedure request definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RDF",
                    "desc": "RDF - table row definition segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                            "desc": "ARQ - appointment request segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "APR",
                            "desc": "APR - appointment preferences segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PID",
                            "desc": "PID - patient identification segment",
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
                                    "desc": "RGS - resource group segment",
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
                                            "desc": "AIS - appointment information - service segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "APR",
                                            "desc": "APR - appointment preferences segment",
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
                                            "desc": "AIG - appointment information - general resource segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "APR",
                                            "desc": "APR - appointment preferences segment",
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
                                            "desc": "AIP - appointment information - personnel resource segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "APR",
                                            "desc": "APR - appointment preferences segment",
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
                                            "desc": "AIL - appointment information - location resource segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "APR",
                                            "desc": "APR - appointment preferences segment",
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
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
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
                            "desc": "SCH - schedule activity information segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV1",
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "DG1",
                                    "desc": "DG1 - diagnosis segment",
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
                                    "desc": "RGS - resource group segment",
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
                                            "desc": "AIS - appointment information - service segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "AIG - appointment information - general resource segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "AIP - appointment information - personnel resource segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "AIL - appointment information - location resource segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ARQ",
                    "desc": "ARQ - appointment request segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "APR",
                    "desc": "APR - appointment preferences segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "NTE - notes and comments segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "PV1 - patient visit segment-",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "OBX",
                            "desc": "OBX - observation/result segment",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "DG1",
                            "desc": "DG1 - diagnosis segment",
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
                            "desc": "RGS - resource group segment",
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
                                    "desc": "AIS - appointment information - service segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "APR",
                                    "desc": "APR - appointment preferences segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "AIG - appointment information - general resource segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "APR",
                                    "desc": "APR - appointment preferences segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "AIL - appointment information - location resource segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "APR",
                                    "desc": "APR - appointment preferences segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                                    "desc": "AIP - appointment information - personnel resource segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "APR",
                                    "desc": "APR - appointment preferences segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
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
                            "desc": "SCH - schedule activity information segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "NTE - notes and comments segment",
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
                                    "desc": "PID - patient identification segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PV1",
                                    "desc": "PV1 - patient visit segment-",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "PV2",
                                    "desc": "PV2 - patient visit - additional information segment",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "DG1",
                                    "desc": "DG1 - diagnosis segment",
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
                                    "desc": "RGS - resource group segment",
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
                                            "desc": "AIS - appointment information - service segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "AIG - appointment information - general resource segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "AIL - appointment information - location resource segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
                                            "desc": "AIP - appointment information - personnel resource segment",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "NTE - notes and comments segment",
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
    "SUR_P09": {
        "desc": "Summary product experience report",
        "name": "SUR_P09",
        "segments": {
            "desc": "Summary product experience report",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "MSH - message header segment",
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
                            "desc": "FAC - facility segment",
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
                                    "desc": "PSH - product summary header segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PDC",
                                    "desc": "PDC - product detail country segment",
                                    "min": 1,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "PSH",
                            "desc": "PSH - product summary header segment",
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
                                    "desc": "FAC - facility segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "PDC",
                                    "desc": "PDC - product detail country segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "ERR - error segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "QAK",
                    "desc": "Query Acknowledgement",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RDF",
                    "desc": "RDF - table row definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RDT",
                    "desc": "RDT - table row data segment",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "URD",
                    "desc": "URD - results/update definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "URS",
                    "desc": "URS - unsolicited selection segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "DSP - display data segment",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "VTQ",
                    "desc": "VTQ - virtual table query request segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "RDF",
                    "desc": "RDF - table row definition segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "DSC - Continuation pointer segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
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
                            "desc": "ORC - common order segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "RXA",
                            "desc": "RXA - pharmacy/treatment administration segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RXR",
                            "desc": "RXR - pharmacy/treatment route segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "PID - patient identification segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PD1",
                    "desc": "Patient Additional Demographic",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "NK1 - next of kin / associated parties segment-",
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
                            "desc": "PV1 - patient visit segment-",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV2",
                            "desc": "PV2 - patient visit - additional information segment",
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
                            "desc": "IN1 - insurance segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "IN2",
                            "desc": "IN2 - insurance additional information segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "IN3",
                            "desc": "IN3 - insurance additional information, certification segment",
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
                            "desc": "ORC - common order segment",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "RXA",
                            "desc": "RXA - pharmacy/treatment administration segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "RXR",
                            "desc": "RXR - pharmacy/treatment route segment",
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
                                    "desc": "OBX - observation/result segment",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "NTE - notes and comments segment",
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
                    "desc": "MSH - message header segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "MSA - message acknowledgment segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "QRD - original-style query definition segment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "QRF - original style query filter segment",
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
                            "desc": "PID - patient identification segment",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NK1",
                            "desc": "NK1 - next of kin / associated parties segment-",
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
