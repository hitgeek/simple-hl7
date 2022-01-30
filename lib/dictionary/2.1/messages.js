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
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 1,
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
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
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
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
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
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
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
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
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
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
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
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
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
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
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
                    "name": "DG1",
                    "desc": "Diagnosis",
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
                            "min": 1,
                            "max": 1
                        }
                    ]
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
                    "desc": "Non-patient update",
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
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
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
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 0,
                            "max": 0
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
                    "name": "FT1",
                    "desc": "Financial transaction",
                    "min": 0,
                    "max": 0
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
    "MCF_Q02": {
        "desc": "Delayed acknowledgment",
        "name": "MCF_Q02",
        "segments": {
            "desc": "Delayed acknowledgment",
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
                                    "name": "OBR,ORO,RX1",
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
                                            "name": "ORO",
                                            "desc": "Order other",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RX1",
                                            "desc": "Pharmacy order",
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
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OBR,ORO,RX1",
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
                                            "name": "ORO",
                                            "desc": "Order other",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RX1",
                                            "desc": "Pharmacy order",
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
                                            "desc": "Result",
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
                                            "desc": "Result",
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
                                            "desc": "Result",
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
                    "min": 1,
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
                    "min": 1,
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
