var segments = {
    "ABS": {
        "desc": "Abstract",
        "fields": [
            {
                "datatype": "XCN",
                "desc": "Discharge Care Provider",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 10
            },
            {
                "datatype": "CE",
                "desc": "Transfer Medical Service Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 69
            },
            {
                "datatype": "CE",
                "desc": "Severity of Illness Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 421
            },
            {
                "datatype": "TS",
                "desc": "Date/Time of Attestation",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Attested By",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Triage Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 422
            },
            {
                "datatype": "TS",
                "desc": "Abstract Completion Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Abstracted By",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Case Category Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 423
            },
            {
                "datatype": "ID",
                "desc": "Caesarian Section Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Gestation Category Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 424
            },
            {
                "datatype": "NM",
                "desc": "Gestation Period - Weeks",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CE",
                "desc": "Newborn Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 425
            },
            {
                "datatype": "ID",
                "desc": "Stillborn Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            }
        ]
    },
    "ACC": {
        "desc": "Accident",
        "fields": [
            {
                "datatype": "TS",
                "desc": "Accident Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Accident Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 50
            },
            {
                "datatype": "ST",
                "desc": "Accident Location",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "CE",
                "desc": "Auto Accident State",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 347
            },
            {
                "datatype": "ID",
                "desc": "Accident Job Related Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Accident Death Indicator",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 136
            },
            {
                "datatype": "XCN",
                "desc": "Entered By",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Accident Description",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "ST",
                "desc": "Brought In By",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "ID",
                "desc": "Police Notified Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "XAD",
                "desc": "Accident Address",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "ADD": {
        "desc": "Addendum",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Addendum Continuation Pointer",
                "opt": 1,
                "rep": 1,
                "len": 65536
            }
        ]
    },
    "AFF": {
        "desc": "Professional Affiliation",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID _ AFF",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XON",
                "desc": "Professional Organization",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Professional Organization Address",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "DR",
                "desc": "Professional Organization Affiliation Date Range",
                "opt": 1,
                "rep": 0,
                "len": 52
            },
            {
                "datatype": "ST",
                "desc": "Professional Affiliation Additional Information",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "AIG": {
        "desc": "Appointment Information - General Resource",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - AIG",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Segment Action Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 206
            },
            {
                "datatype": "CE",
                "desc": "Resource ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Resource Type",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Resource Group",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Resource Quantity",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CE",
                "desc": "Resource Quantity Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Start Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Start Date/Time Offset",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Start Date/Time Offset Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Duration",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Duration Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Allow Substitution Code",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 279
            },
            {
                "datatype": "CE",
                "desc": "Filler Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 278
            }
        ]
    },
    "AIL": {
        "desc": "Appointment Information - Location Resource",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - AIL",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Segment Action Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 206
            },
            {
                "datatype": "PL",
                "desc": "Location Resource ID",
                "opt": 1,
                "rep": 0,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Location Type-AIL",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 305
            },
            {
                "datatype": "CE",
                "desc": "Location Group",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Start Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Start Date/Time Offset",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Start Date/Time Offset Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Duration",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Duration Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Allow Substitution Code",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 279
            },
            {
                "datatype": "CE",
                "desc": "Filler Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 278
            }
        ]
    },
    "AIP": {
        "desc": "Appointment Information - Personnel Resource",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - AIP",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Segment Action Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 206
            },
            {
                "datatype": "XCN",
                "desc": "Personnel Resource ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Resource Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 182
            },
            {
                "datatype": "CE",
                "desc": "Resource Group",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Start Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Start Date/Time Offset",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Start Date/Time Offset Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Duration",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Duration Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Allow Substitution Code",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 279
            },
            {
                "datatype": "CE",
                "desc": "Filler Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 278
            }
        ]
    },
    "AIS": {
        "desc": "Appointment Information",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - AIS",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Segment Action Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 206
            },
            {
                "datatype": "CE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Start Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Start Date/Time Offset",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Start Date/Time Offset Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Duration",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Duration Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Allow Substitution Code",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 279
            },
            {
                "datatype": "CE",
                "desc": "Filler Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 278
            },
            {
                "datatype": "CE",
                "desc": "Placer Supplemental Service Information",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 411
            },
            {
                "datatype": "CE",
                "desc": "Filler Supplemental Service Information",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 411
            }
        ]
    },
    "AL1": {
        "desc": "Patient Allergy Information",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - AL1",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Allergen Type Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 127
            },
            {
                "datatype": "CE",
                "desc": "Allergen Code/Mnemonic/Description",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Allergy Severity Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 128
            },
            {
                "datatype": "ST",
                "desc": "Allergy Reaction Code",
                "opt": 1,
                "rep": 0,
                "len": 15
            },
            {
                "datatype": "DT",
                "desc": "Identification Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "APR": {
        "desc": "Appointment Preferences",
        "fields": [
            {
                "datatype": "SCV",
                "desc": "Time Selection Criteria",
                "opt": 1,
                "rep": 0,
                "len": 80,
                "table": 294
            },
            {
                "datatype": "SCV",
                "desc": "Resource Selection Criteria",
                "opt": 1,
                "rep": 0,
                "len": 80,
                "table": 294
            },
            {
                "datatype": "SCV",
                "desc": "Location Selection Criteria",
                "opt": 1,
                "rep": 0,
                "len": 80,
                "table": 294
            },
            {
                "datatype": "NM",
                "desc": "Slot Spacing Criteria",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "SCV",
                "desc": "Filler Override Criteria",
                "opt": 1,
                "rep": 0,
                "len": 80
            }
        ]
    },
    "ARQ": {
        "desc": "Appointment Request",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Placer Appointment ID",
                "opt": 2,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "EI",
                "desc": "Filler Appointment ID",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "NM",
                "desc": "Occurrence Number",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "EI",
                "desc": "Placer Group Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "CE",
                "desc": "Schedule ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Request Event Reason",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Appointment Reason",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 276
            },
            {
                "datatype": "CE",
                "desc": "Appointment Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 277
            },
            {
                "datatype": "NM",
                "desc": "Appointment Duration",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Appointment Duration Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "DR",
                "desc": "Requested Start Date/Time Range",
                "opt": 1,
                "rep": 0,
                "len": 53
            },
            {
                "datatype": "ST",
                "desc": "Priority-ARQ",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "RI",
                "desc": "Repeating Interval",
                "opt": 1,
                "rep": 1,
                "len": 100
            },
            {
                "datatype": "ST",
                "desc": "Repeating Interval Duration",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "XCN",
                "desc": "Placer Contact Person",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Placer Contact Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Placer Contact Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Placer Contact Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XCN",
                "desc": "Entered By Person",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Entered By Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Entered By Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "EI",
                "desc": "Parent Placer Appointment ID",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "EI",
                "desc": "Parent Filler Appointment ID",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "EI",
                "desc": "Placer Order Number",
                "opt": 1,
                "rep": 0,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 0,
                "len": 22
            }
        ]
    },
    "AUT": {
        "desc": "Authorization Information",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Authorizing Payor, Plan ID",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 72
            },
            {
                "datatype": "CE",
                "desc": "Authorizing Payor, Company ID",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 285
            },
            {
                "datatype": "ST",
                "desc": "Authorizing Payor, Company Name",
                "opt": 1,
                "rep": 1,
                "len": 45
            },
            {
                "datatype": "TS",
                "desc": "Authorization Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Authorization Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "EI",
                "desc": "Authorization Identifier",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "CP",
                "desc": "Reimbursement Limit",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "NM",
                "desc": "Requested Number of Treatments",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Authorized Number of Treatments",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "TS",
                "desc": "Process Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "BHS": {
        "desc": "Batch Header",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Batch Field Separator",
                "opt": 2,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "Batch Encoding Characters",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "HD",
                "desc": "Batch Sending Application",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "HD",
                "desc": "Batch Sending Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "HD",
                "desc": "Batch Receiving Application",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "HD",
                "desc": "Batch Receiving Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "TS",
                "desc": "Batch Creation Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "Batch Security",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Batch Name/ID/Type",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Batch Comment",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "ST",
                "desc": "Batch Control ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Reference Batch Control ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "BLC": {
        "desc": "Blood Code",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Blood Product Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 426
            },
            {
                "datatype": "CQ",
                "desc": "Blood Amount",
                "opt": 1,
                "rep": 1,
                "len": 267
            }
        ]
    },
    "BLG": {
        "desc": "Billing",
        "fields": [
            {
                "datatype": "CCD",
                "desc": "When to Charge",
                "opt": 1,
                "rep": 1,
                "len": 40,
                "table": 100
            },
            {
                "datatype": "ID",
                "desc": "Charge Type",
                "opt": 1,
                "rep": 1,
                "len": 50,
                "table": 122
            },
            {
                "datatype": "CX",
                "desc": "Account ID",
                "opt": 1,
                "rep": 1,
                "len": 100
            },
            {
                "datatype": "CWE",
                "desc": "Charge Type Reason",
                "opt": 1,
                "rep": 1,
                "len": 60,
                "table": 475
            }
        ]
    },
    "BPO": {
        "desc": "Blood product order",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID _ BPO",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "BP Universal Service ID",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "BP  Processing Requirements",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 508
            },
            {
                "datatype": "NM",
                "desc": "BP Quantity",
                "opt": 2,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "NM",
                "desc": "BP Amount",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CE",
                "desc": "BP Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "BP Intended Use Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "PL",
                "desc": "BP Intended Dispense From Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XAD",
                "desc": "BP Intended Dispense From Address",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "BP Requested Dispense Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "PL",
                "desc": "BP Requested Dispense To Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XAD",
                "desc": "BP Requested Dispense To Address",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "BP Indication for Use",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 509
            },
            {
                "datatype": "ID",
                "desc": "BP Informed Consent Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            }
        ]
    },
    "BPX": {
        "desc": "Blood product dispense status",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID _ BPX",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "BP Dispense Status",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 510
            },
            {
                "datatype": "ID",
                "desc": "BP Status",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 511
            },
            {
                "datatype": "TS",
                "desc": "BP Date/Time of Status",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "EI",
                "desc": "BC Donation ID",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "CNE",
                "desc": "BC Component",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CNE",
                "desc": "BC Donation Type / Intended Use",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "CP Commercial Product",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 512
            },
            {
                "datatype": "XON",
                "desc": "CP Manufacturer",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "CP Lot Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "CNE",
                "desc": "BP Blood Group",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CNE",
                "desc": "BC Special Testing",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "BP Expiration Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "BP Quantity",
                "opt": 2,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "NM",
                "desc": "BP Amount",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CE",
                "desc": "BP Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "BP Unique ID",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "PL",
                "desc": "BP Actual Dispensed To Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XAD",
                "desc": "BP Actual Dispensed To Address",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "BP Dispensed to Receiver",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "BP Dispensing Individual",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "BTS": {
        "desc": "Batch Trailer",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Batch Message Count",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "Batch Comment",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "NM",
                "desc": "Batch Totals",
                "opt": 1,
                "rep": 0,
                "len": 100
            }
        ]
    },
    "BTX": {
        "desc": "Blood Product Transfusion/Disposition",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID _ BTX",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EI",
                "desc": "BC Donation ID",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "CNE",
                "desc": "BC Component",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CNE",
                "desc": "BC Blood Group",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "CP Commercial Product",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 512
            },
            {
                "datatype": "XON",
                "desc": "CP Manufacturer",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "CP Lot Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "NM",
                "desc": "BP Quantity",
                "opt": 2,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "NM",
                "desc": "BP Amount",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CE",
                "desc": "BP Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "BP Transfusion/Disposition Status",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 513
            },
            {
                "datatype": "ID",
                "desc": "BP Message Status",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 511
            },
            {
                "datatype": "TS",
                "desc": "BP Date/Time of Status",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "BP Administrator",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "BP Verifier",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "BP Transfusion Start Date/Time of Status",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "BP Transfusion End Date/Time of Status",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CWE",
                "desc": "BP Adverse Reaction Type",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 514
            },
            {
                "datatype": "CWE",
                "desc": "BP Transfusion Interrupted Reason",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 515
            }
        ]
    },
    "CDM": {
        "desc": "Charge Description Master",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Primary Key Value - CDM",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 132
            },
            {
                "datatype": "CE",
                "desc": "Charge Code Alias",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Charge Description Short",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Charge Description Long",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Description Override Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 268
            },
            {
                "datatype": "CE",
                "desc": "Exploding Charges",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 88
            },
            {
                "datatype": "ID",
                "desc": "Active/Inactive Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 183
            },
            {
                "datatype": "CE",
                "desc": "Inventory Number",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 463
            },
            {
                "datatype": "NM",
                "desc": "Resource Load",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CX",
                "desc": "Contract Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XON",
                "desc": "Contract Organization",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Room Fee Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            }
        ]
    },
    "CER": {
        "desc": "Certificate Detail",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID _ CER",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Serial Number",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "ST",
                "desc": "Version",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XON",
                "desc": "Granting Authority",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Issuing Authority",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ED",
                "desc": "Signature of Issuing Authority",
                "opt": 1,
                "rep": 1,
                "len": 65536
            },
            {
                "datatype": "ID",
                "desc": "Granting Country",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 399
            },
            {
                "datatype": "CWE",
                "desc": "Granting State/Province",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 347
            },
            {
                "datatype": "CWE",
                "desc": "Granting County/Parish",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 289
            },
            {
                "datatype": "CWE",
                "desc": "Certificate Type",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Certificate Domain",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Subject ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Subject Name",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Subject Directory Attribute Extension",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Subject Public Key Info",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Authority Key Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Basic Constraint",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "CRL Distribution Point",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Jurisdiction Country",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 399
            },
            {
                "datatype": "CWE",
                "desc": "Jurisdiction State/Province",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 347
            },
            {
                "datatype": "CWE",
                "desc": "Jurisdiction County/Parish",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 289
            },
            {
                "datatype": "CWE",
                "desc": "Jurisdiction Breadth",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 547
            },
            {
                "datatype": "TS",
                "desc": "Granting Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Issuing Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Activation Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Inactivation Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Renewal Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Revocation Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Revocation Reason Code",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Certificate Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 536
            }
        ]
    },
    "CM0": {
        "desc": "Clinical Study Master",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - CM0",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EI",
                "desc": "Sponsor Study ID",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "EI",
                "desc": "Alternate Study ID",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Title of Study",
                "opt": 2,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "XCN",
                "desc": "Chairman of Study",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "DT",
                "desc": "Last IRB Approval Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "NM",
                "desc": "Total Accrual to Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Last Accrual Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "XCN",
                "desc": "Contact for Study",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Contact's Telephone Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Contact's Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            }
        ]
    },
    "CM1": {
        "desc": "Clinical Study Phase Master",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - CM1",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Study Phase Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Description of Study Phase",
                "opt": 2,
                "rep": 1,
                "len": 300
            }
        ]
    },
    "CM2": {
        "desc": "Clinical Study Schedule Master",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - CM2",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Scheduled Time Point",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Description of Time Point",
                "opt": 1,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "CE",
                "desc": "Events Scheduled This Time Point",
                "opt": 2,
                "rep": 0,
                "len": 250
            }
        ]
    },
    "CNS": {
        "desc": "Clear Notification",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Starting Notification Reference Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Ending Notification Reference Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Starting Notification Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Ending Notification Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Starting Notification Code",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Ending Notification Code",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "CSP": {
        "desc": "Clinical Study Phase",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Study Phase Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Date/time Study Phase Began",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Date/time Study Phase Ended",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Study Phase Evaluability",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "CSR": {
        "desc": "Clinical Study Registration",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Sponsor Study ID",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "EI",
                "desc": "Alternate Study ID",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Institution Registering the Patient",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Sponsor Patient ID",
                "opt": 2,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "CX",
                "desc": "Alternate Patient ID - CSR",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Of Patient Study Registration",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Person Performing Study Registration",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Study Authorizing Provider",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Date/time Patient Study Consent Signed",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Patient Study Eligibility Status",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Study Randomization Date/time",
                "opt": 1,
                "rep": 0,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Randomized Study Arm",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Stratum for Study Randomization",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Patient Evaluability Status",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Date/time Ended Study",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Reason Ended Study",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "CSS": {
        "desc": "Clinical Study Data Schedule Segment",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Study Scheduled Time Point",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Study Scheduled Patient Time Point",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Study Quality Control Codes",
                "opt": 1,
                "rep": 0,
                "len": 250
            }
        ]
    },
    "CTD": {
        "desc": "Contact Data",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Contact Role",
                "opt": 2,
                "rep": 0,
                "len": 250,
                "table": 131
            },
            {
                "datatype": "XPN",
                "desc": "Contact Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Contact Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Contact Location",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XTN",
                "desc": "Contact Communication Information",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Preferred Method of Contact",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 185
            },
            {
                "datatype": "PLN",
                "desc": "Contact Identifiers",
                "opt": 1,
                "rep": 0,
                "len": 100
            }
        ]
    },
    "CTI": {
        "desc": "Clinical Trial Identification",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Sponsor Study ID",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Study Phase Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Study Scheduled Time Point",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "DB1": {
        "desc": "Disability",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - DB1",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "IS",
                "desc": "Disabled Person Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 334
            },
            {
                "datatype": "CX",
                "desc": "Disabled Person Identifier",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Disabled Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DT",
                "desc": "Disability Start Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Disability End Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Disability Return to Work Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Disability Unable to Work Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "DG1": {
        "desc": "Diagnosis",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - DG1",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis Coding Method",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 53
            },
            {
                "datatype": "CE",
                "desc": "Diagnosis Code - DG1",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 51
            },
            {
                "datatype": "ST",
                "desc": "Diagnosis Description",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "TS",
                "desc": "Diagnosis Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Diagnosis Type",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 52
            },
            {
                "datatype": "CE",
                "desc": "Major Diagnostic Category",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 118
            },
            {
                "datatype": "CE",
                "desc": "Diagnostic Related Group",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 55
            },
            {
                "datatype": "ID",
                "desc": "DRG Approval Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "IS",
                "desc": "DRG Grouper Review Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 56
            },
            {
                "datatype": "CE",
                "desc": "Outlier Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 83
            },
            {
                "datatype": "NM",
                "desc": "Outlier Days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CP",
                "desc": "Outlier Cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Grouper Version And Type",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis Priority",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 359
            },
            {
                "datatype": "XCN",
                "desc": "Diagnosing Clinician",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Diagnosis Classification",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 228
            },
            {
                "datatype": "ID",
                "desc": "Confidential Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "TS",
                "desc": "Attestation Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "EI",
                "desc": "Diagnosis Identifier",
                "opt": 1,
                "rep": 1,
                "len": 427
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis Action Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 206
            }
        ]
    },
    "DRG": {
        "desc": "Diagnosis Related Group",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Diagnostic Related Group",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 55
            },
            {
                "datatype": "TS",
                "desc": "DRG Assigned Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "DRG Approval Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "IS",
                "desc": "DRG Grouper Review Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 56
            },
            {
                "datatype": "CE",
                "desc": "Outlier Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 83
            },
            {
                "datatype": "NM",
                "desc": "Outlier Days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CP",
                "desc": "Outlier Cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "IS",
                "desc": "DRG Payor",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 229
            },
            {
                "datatype": "CP",
                "desc": "Outlier Reimbursement",
                "opt": 1,
                "rep": 1,
                "len": 9
            },
            {
                "datatype": "ID",
                "desc": "Confidential Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "IS",
                "desc": "DRG Transfer Type",
                "opt": 1,
                "rep": 1,
                "len": 21,
                "table": 415
            }
        ]
    },
    "DSC": {
        "desc": "Continuation Pointer",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Continuation Pointer",
                "opt": 1,
                "rep": 1,
                "len": 180
            },
            {
                "datatype": "ID",
                "desc": "Continuation Style",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 398
            }
        ]
    },
    "DSP": {
        "desc": "Display Data",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - DSP",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "SI",
                "desc": "Display Level",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "TX",
                "desc": "Data Line",
                "opt": 2,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "ST",
                "desc": "Logical Break Point",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "TX",
                "desc": "Result ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "ECD": {
        "desc": "Equipment Command",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Reference Command Number",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Remote Control Command",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 368
            },
            {
                "datatype": "ID",
                "desc": "Response Required",
                "opt": 1,
                "rep": 1,
                "len": 80,
                "table": 136
            },
            {
                "datatype": "TQ",
                "desc": "Requested Completion Time",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "TX",
                "desc": "Parameters",
                "opt": 1,
                "rep": 0,
                "len": 65536
            }
        ]
    },
    "ECR": {
        "desc": "Equipment Command Response",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Command Response",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 387
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Completed",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TX",
                "desc": "Command Response Parameters",
                "opt": 1,
                "rep": 0,
                "len": 65536
            }
        ]
    },
    "EDU": {
        "desc": "Educational Detail",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID _ EDU",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "IS",
                "desc": "Academic Degree",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 360
            },
            {
                "datatype": "DR",
                "desc": "Academic Degree Program Date Range",
                "opt": 1,
                "rep": 1,
                "len": 52
            },
            {
                "datatype": "DR",
                "desc": "Academic Degree Program Participation Date Range",
                "opt": 1,
                "rep": 1,
                "len": 52
            },
            {
                "datatype": "DT",
                "desc": "Academic Degree Granted Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "XON",
                "desc": "School",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "School Type Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 402
            },
            {
                "datatype": "XAD",
                "desc": "School Address",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Major Field of Study",
                "opt": 1,
                "rep": 0,
                "len": 250
            }
        ]
    },
    "EQL": {
        "desc": "Embedded Query Language",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query Tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "ID",
                "desc": "Query/Response Format Code",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 106
            },
            {
                "datatype": "CE",
                "desc": "EQL Query Name",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "EQL Query Statement",
                "opt": 2,
                "rep": 1,
                "len": 4096
            }
        ]
    },
    "EQP": {
        "desc": "Equipment/log Service",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Event type",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 450
            },
            {
                "datatype": "ST",
                "desc": "File Name",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Start Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "End Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "FT",
                "desc": "Transaction Data",
                "opt": 2,
                "rep": 1,
                "len": 65536
            }
        ]
    },
    "EQU": {
        "desc": "Equipment Detail",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Equipment Instance Identifier",
                "opt": 2,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "TS",
                "desc": "Event Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Equipment State",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 365
            },
            {
                "datatype": "CE",
                "desc": "Local/Remote Control State",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 366
            },
            {
                "datatype": "CE",
                "desc": "Alert Level",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 367
            }
        ]
    },
    "ERQ": {
        "desc": "Event replay query",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query Tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "CE",
                "desc": "Event Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "QIP",
                "desc": "Input Parameter List",
                "opt": 1,
                "rep": 0,
                "len": 256
            }
        ]
    },
    "ERR": {
        "desc": "Error",
        "fields": [
            {
                "datatype": "ELD",
                "desc": "Error Code and Location",
                "opt": 1,
                "rep": 0,
                "len": 493
            },
            {
                "datatype": "ERL",
                "desc": "Error Location",
                "opt": 1,
                "rep": 0,
                "len": 18
            },
            {
                "datatype": "CWE",
                "desc": "HL7 Error Code",
                "opt": 2,
                "rep": 1,
                "len": 705,
                "table": 357
            },
            {
                "datatype": "ID",
                "desc": "Severity",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 516
            },
            {
                "datatype": "CWE",
                "desc": "Application Error Code",
                "opt": 1,
                "rep": 1,
                "len": 705,
                "table": 533
            },
            {
                "datatype": "ST",
                "desc": "Application Error Parameter",
                "opt": 1,
                "rep": 0,
                "len": 80
            },
            {
                "datatype": "TX",
                "desc": "Diagnostic Information",
                "opt": 1,
                "rep": 1,
                "len": 2048
            },
            {
                "datatype": "TX",
                "desc": "User Message",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Inform Person Indicator",
                "opt": 1,
                "rep": 0,
                "len": 20,
                "table": 517
            },
            {
                "datatype": "CWE",
                "desc": "Override Type",
                "opt": 1,
                "rep": 1,
                "len": 705,
                "table": 518
            },
            {
                "datatype": "CWE",
                "desc": "Override Reason Code",
                "opt": 1,
                "rep": 0,
                "len": 705,
                "table": 519
            },
            {
                "datatype": "XTN",
                "desc": "Help Desk Contact Point",
                "opt": 1,
                "rep": 0,
                "len": 652
            }
        ]
    },
    "EVN": {
        "desc": "Event Type",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Event Type Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 3
            },
            {
                "datatype": "TS",
                "desc": "Recorded Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Planned Event",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Event Reason Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 62
            },
            {
                "datatype": "XCN",
                "desc": "Operator ID",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 188
            },
            {
                "datatype": "TS",
                "desc": "Event Occurred",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "HD",
                "desc": "Event Facility",
                "opt": 1,
                "rep": 1,
                "len": 241
            }
        ]
    },
    "FAC": {
        "desc": "Facility",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Facility ID-FAC",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Facility Type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 331
            },
            {
                "datatype": "XAD",
                "desc": "Facility Address",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Facility Telecommunication",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Contact Person",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Contact Title",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "XAD",
                "desc": "Contact Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Contact Telecommunication",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Signature Authority",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Signature Authority Title",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XAD",
                "desc": "Signature Authority Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Signature Authority Telecommunication",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "FHS": {
        "desc": "File Header",
        "fields": [
            {
                "datatype": "ST",
                "desc": "File Field Separator",
                "opt": 2,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "File Encoding Characters",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "HD",
                "desc": "File Sending Application",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "HD",
                "desc": "File Sending Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "HD",
                "desc": "File Receiving Application",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "HD",
                "desc": "File Receiving Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "TS",
                "desc": "File Creation Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "File Security",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "File Name/ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "File Header Comment",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "ST",
                "desc": "File Control ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Reference File Control ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "FT1": {
        "desc": "Financial Transaction",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - FT1",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Transaction ID",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Transaction Batch ID",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "DR",
                "desc": "Transaction Date",
                "opt": 2,
                "rep": 1,
                "len": 53
            },
            {
                "datatype": "TS",
                "desc": "Transaction Posting Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Transaction Type",
                "opt": 2,
                "rep": 1,
                "len": 8,
                "table": 17
            },
            {
                "datatype": "CE",
                "desc": "Transaction Code",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 132
            },
            {
                "datatype": "ST",
                "desc": "Transaction Description",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Transaction Description - Alt",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "NM",
                "desc": "Transaction Quantity",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "CP",
                "desc": "Transaction Amount - Extended",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CP",
                "desc": "Transaction Amount - Unit",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CE",
                "desc": "Department Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 49
            },
            {
                "datatype": "CE",
                "desc": "Insurance Plan ID",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 72
            },
            {
                "datatype": "CP",
                "desc": "Insurance Amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "PL",
                "desc": "Assigned Patient Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "IS",
                "desc": "Fee Schedule",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 24
            },
            {
                "datatype": "IS",
                "desc": "Patient Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 18
            },
            {
                "datatype": "CE",
                "desc": "Diagnosis Code - FT1",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 51
            },
            {
                "datatype": "XCN",
                "desc": "Performed By Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 84
            },
            {
                "datatype": "XCN",
                "desc": "Ordered By Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CP",
                "desc": "Unit Cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "XCN",
                "desc": "Entered By Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 88
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code Modifier",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 340
            },
            {
                "datatype": "CE",
                "desc": "Advanced Beneficiary Notice Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 339
            },
            {
                "datatype": "CWE",
                "desc": "Medically Necessary Duplicate Procedure Reason.",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 476
            },
            {
                "datatype": "CNE",
                "desc": "NDC Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 549
            },
            {
                "datatype": "CX",
                "desc": "Payment Reference ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "SI",
                "desc": "Transaction Reference Key",
                "opt": 1,
                "rep": 0,
                "len": 4
            }
        ]
    },
    "FTS": {
        "desc": "File Trailer",
        "fields": [
            {
                "datatype": "NM",
                "desc": "File Batch Count",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "File Trailer Comment",
                "opt": 1,
                "rep": 1,
                "len": 80
            }
        ]
    },
    "GOL": {
        "desc": "Goal Detail",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Action Code",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 287
            },
            {
                "datatype": "TS",
                "desc": "Action Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Goal ID",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "Goal Instance ID",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "EI",
                "desc": "Episode of Care ID",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Goal List Priority",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Goal Established Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Expected Goal Achieve Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Goal Classification",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Goal Management Discipline",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Current Goal Review Status",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Current Goal Review Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Next Goal Review Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Previous Goal Review Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TQ",
                "desc": "Goal Review Interval",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Goal Evaluation",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Goal Evaluation Comment",
                "opt": 1,
                "rep": 0,
                "len": 300
            },
            {
                "datatype": "CE",
                "desc": "Goal Life Cycle Status",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Goal Life Cycle Status Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Goal Target Type",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XPN",
                "desc": "Goal Target Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            }
        ]
    },
    "GP1": {
        "desc": "Grouping/Reimbursement - Visit",
        "fields": [
            {
                "datatype": "IS",
                "desc": "Type of Bill Code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 455
            },
            {
                "datatype": "IS",
                "desc": "Revenue Code",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 456
            },
            {
                "datatype": "IS",
                "desc": "Overall Claim Disposition Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 457
            },
            {
                "datatype": "IS",
                "desc": "OCE Edits per Visit Code",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 458
            },
            {
                "datatype": "CP",
                "desc": "Outlier Cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            }
        ]
    },
    "GP2": {
        "desc": "Grouping/Reimbursement - Procedure Line Item",
        "fields": [
            {
                "datatype": "IS",
                "desc": "Revenue Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 456
            },
            {
                "datatype": "NM",
                "desc": "Number of Service Units",
                "opt": 1,
                "rep": 1,
                "len": 7
            },
            {
                "datatype": "CP",
                "desc": "Charge",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "IS",
                "desc": "Reimbursement Action Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 459
            },
            {
                "datatype": "IS",
                "desc": "Denial or Rejection Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 460
            },
            {
                "datatype": "IS",
                "desc": "OCE Edit Code",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 458
            },
            {
                "datatype": "CE",
                "desc": "Ambulatory Payment Classification Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 466
            },
            {
                "datatype": "IS",
                "desc": "Modifier Edit Code",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 467
            },
            {
                "datatype": "IS",
                "desc": "Payment Adjustment Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 468
            },
            {
                "datatype": "IS",
                "desc": "Packaging Status Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 469
            },
            {
                "datatype": "CP",
                "desc": "Expected CMS Payment Amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "IS",
                "desc": "Reimbursement Type Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 470
            },
            {
                "datatype": "CP",
                "desc": "Co-Pay Amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Pay Rate per Service Unit",
                "opt": 1,
                "rep": 1,
                "len": 4
            }
        ]
    },
    "GT1": {
        "desc": "Guarantor",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - GT1",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CX",
                "desc": "Guarantor Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XPN",
                "desc": "Guarantor Name",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XPN",
                "desc": "Guarantor Spouse Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Guarantor Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Guarantor Ph Num - Home",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Guarantor Ph Num - Business",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Guarantor Date/Time Of Birth",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Guarantor Administrative Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "IS",
                "desc": "Guarantor Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 68
            },
            {
                "datatype": "CE",
                "desc": "Guarantor Relationship",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 63
            },
            {
                "datatype": "ST",
                "desc": "Guarantor SSN",
                "opt": 1,
                "rep": 1,
                "len": 11
            },
            {
                "datatype": "DT",
                "desc": "Guarantor Date - Begin",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Guarantor Date - End",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "NM",
                "desc": "Guarantor Priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "XPN",
                "desc": "Guarantor Employer Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Guarantor Employer Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Guarantor Employer Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Guarantor Employee ID Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Guarantor Employment Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 66
            },
            {
                "datatype": "XON",
                "desc": "Guarantor Organization Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Guarantor Billing Hold Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Guarantor Credit Rating Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 341
            },
            {
                "datatype": "TS",
                "desc": "Guarantor Death Date And Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Guarantor Death Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Guarantor Charge Adjustment Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 218
            },
            {
                "datatype": "CP",
                "desc": "Guarantor Household Annual Income",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Guarantor Household Size",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CX",
                "desc": "Guarantor Employer ID Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Guarantor Marital Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 2
            },
            {
                "datatype": "DT",
                "desc": "Guarantor Hire Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Employment Stop Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "IS",
                "desc": "Living Dependency",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 223
            },
            {
                "datatype": "IS",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 9
            },
            {
                "datatype": "CE",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 171
            },
            {
                "datatype": "CE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 296
            },
            {
                "datatype": "IS",
                "desc": "Living Arrangement",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 220
            },
            {
                "datatype": "CE",
                "desc": "Publicity Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 215
            },
            {
                "datatype": "ID",
                "desc": "Protection Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "IS",
                "desc": "Student Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 231
            },
            {
                "datatype": "CE",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 6
            },
            {
                "datatype": "XPN",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Nationality",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 212
            },
            {
                "datatype": "CE",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 189
            },
            {
                "datatype": "XPN",
                "desc": "Contact Person's Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Contact Person's Telephone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Contact Reason",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 222
            },
            {
                "datatype": "IS",
                "desc": "Contact Relationship",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 63
            },
            {
                "datatype": "ST",
                "desc": "Job Title",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "JCC",
                "desc": "Job Code/Class",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "XON",
                "desc": "Guarantor Employer's Organization Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Handicap",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 295
            },
            {
                "datatype": "IS",
                "desc": "Job Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 311
            },
            {
                "datatype": "FC",
                "desc": "Guarantor Financial Class",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "CE",
                "desc": "Guarantor Race",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 5
            },
            {
                "datatype": "ST",
                "desc": "Guarantor Birth Place",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "VIP Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 99
            }
        ]
    },
    "IAM": {
        "desc": "Patient Adverse Reaction Information",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - IAM",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Allergen Type Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 127
            },
            {
                "datatype": "CE",
                "desc": "Allergen Code/Mnemonic/Description",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Allergy Severity Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 128
            },
            {
                "datatype": "ST",
                "desc": "Allergy Reaction Code",
                "opt": 1,
                "rep": 0,
                "len": 15
            },
            {
                "datatype": "CNE",
                "desc": "Allergy Action Code",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 323
            },
            {
                "datatype": "EI",
                "desc": "Allergy Unique Identifier",
                "opt": 1,
                "rep": 1,
                "len": 427
            },
            {
                "datatype": "ST",
                "desc": "Action Reason",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Sensitivity to Causative Agent Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 436
            },
            {
                "datatype": "CE",
                "desc": "Allergen Group Code/Mnemonic/Description",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "DT",
                "desc": "Onset Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Onset Date Text",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Reported Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "XPN",
                "desc": "Reported By",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Relationship to Patient Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 63
            },
            {
                "datatype": "CE",
                "desc": "Alert Device Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 437
            },
            {
                "datatype": "CE",
                "desc": "Allergy Clinical Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 438
            },
            {
                "datatype": "XCN",
                "desc": "Statused by Person",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XON",
                "desc": "Statused by Organization",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Statused at Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "IIM": {
        "desc": "Inventory Item Master",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Primary Key Value - IIM",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Service Item Code",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Inventory Lot Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Inventory Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CWE",
                "desc": "Inventory Manufacturer Name",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Inventory Location",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Inventory Received Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Inventory Received Quantity",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CWE",
                "desc": "Inventory Received Quantity Unit",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "MO",
                "desc": "Inventory Received Item Cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "TS",
                "desc": "Inventory On Hand Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Inventory On Hand Quantity",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CWE",
                "desc": "Inventory On Hand Quantity Unit",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 88
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code Modifier",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 340
            }
        ]
    },
    "IN1": {
        "desc": "Insurance",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - IN1",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Insurance Plan ID",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 72
            },
            {
                "datatype": "CX",
                "desc": "Insurance Company ID",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XON",
                "desc": "Insurance Company Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Insurance Company Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XPN",
                "desc": "Insurance Co Contact Person",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Insurance Co Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Group Number",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "XON",
                "desc": "Group Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Insured's Group Emp ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XON",
                "desc": "Insured's Group Emp Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "DT",
                "desc": "Plan Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Plan Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "AUI",
                "desc": "Authorization Information",
                "opt": 1,
                "rep": 1,
                "len": 239
            },
            {
                "datatype": "IS",
                "desc": "Plan Type",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 86
            },
            {
                "datatype": "XPN",
                "desc": "Name Of Insured",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Insured's Relationship To Patient",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 63
            },
            {
                "datatype": "TS",
                "desc": "Insured's Date Of Birth",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XAD",
                "desc": "Insured's Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Assignment Of Benefits",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 135
            },
            {
                "datatype": "IS",
                "desc": "Coordination Of Benefits",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 173
            },
            {
                "datatype": "ST",
                "desc": "Coord Of Ben. Priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Notice Of Admission Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DT",
                "desc": "Notice Of Admission Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Report Of Eligibility Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DT",
                "desc": "Report Of Eligibility Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "IS",
                "desc": "Release Information Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 93
            },
            {
                "datatype": "ST",
                "desc": "Pre-Admit Cert",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "TS",
                "desc": "Verification Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Verification By",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Type Of Agreement Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 98
            },
            {
                "datatype": "IS",
                "desc": "Billing Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 22
            },
            {
                "datatype": "NM",
                "desc": "Lifetime Reserve Days",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Delay Before L.R. Day",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "IS",
                "desc": "Company Plan Code",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 42
            },
            {
                "datatype": "ST",
                "desc": "Policy Number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "CP",
                "desc": "Policy Deductible",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CP",
                "desc": "Policy Limit - Amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Policy Limit - Days",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CP",
                "desc": "Room Rate - Semi-Private",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CP",
                "desc": "Room Rate - Private",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CE",
                "desc": "Insured's Employment Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 66
            },
            {
                "datatype": "IS",
                "desc": "Insured's Administrative Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "XAD",
                "desc": "Insured's Employer's Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Verification Status",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "IS",
                "desc": "Prior Insurance Plan ID",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 72
            },
            {
                "datatype": "IS",
                "desc": "Coverage Type",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 309
            },
            {
                "datatype": "IS",
                "desc": "Handicap",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 295
            },
            {
                "datatype": "CX",
                "desc": "Insured's ID Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Signature Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 535
            },
            {
                "datatype": "DT",
                "desc": "Signature Code Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Insured_s Birth Place",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "VIP Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 99
            }
        ]
    },
    "IN2": {
        "desc": "Insurance Additional Information",
        "fields": [
            {
                "datatype": "CX",
                "desc": "Insured's Employee ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Insured's Social Security Number",
                "opt": 1,
                "rep": 1,
                "len": 11
            },
            {
                "datatype": "XCN",
                "desc": "Insured's Employer's Name and ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Employer Information Data",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 139
            },
            {
                "datatype": "IS",
                "desc": "Mail Claim Party",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 137
            },
            {
                "datatype": "ST",
                "desc": "Medicare Health Ins Card Number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "XPN",
                "desc": "Medicaid Case Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Medicaid Case Number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "XPN",
                "desc": "Military Sponsor Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Military ID Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Dependent Of Military Recipient",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 342
            },
            {
                "datatype": "ST",
                "desc": "Military Organization",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "ST",
                "desc": "Military Station",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "IS",
                "desc": "Military Service",
                "opt": 1,
                "rep": 1,
                "len": 14,
                "table": 140
            },
            {
                "datatype": "IS",
                "desc": "Military Rank/Grade",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 141
            },
            {
                "datatype": "IS",
                "desc": "Military Status",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 142
            },
            {
                "datatype": "DT",
                "desc": "Military Retire Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Military Non-Avail Cert On File",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Baby Coverage",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Combine Baby Bill",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ST",
                "desc": "Blood Deductible",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "XPN",
                "desc": "Special Coverage Approval Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Special Coverage Approval Title",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "IS",
                "desc": "Non-Covered Insurance Code",
                "opt": 1,
                "rep": 0,
                "len": 8,
                "table": 143
            },
            {
                "datatype": "CX",
                "desc": "Payor ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Payor Subscriber ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Eligibility Source",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 144
            },
            {
                "datatype": "RMC",
                "desc": "Room Coverage Type/Amount",
                "opt": 1,
                "rep": 0,
                "len": 82
            },
            {
                "datatype": "PTA",
                "desc": "Policy Type/Amount",
                "opt": 1,
                "rep": 0,
                "len": 56
            },
            {
                "datatype": "DDI",
                "desc": "Daily Deductible",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "IS",
                "desc": "Living Dependency",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 223
            },
            {
                "datatype": "IS",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 9
            },
            {
                "datatype": "CE",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 171
            },
            {
                "datatype": "CE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 296
            },
            {
                "datatype": "IS",
                "desc": "Living Arrangement",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 220
            },
            {
                "datatype": "CE",
                "desc": "Publicity Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 215
            },
            {
                "datatype": "ID",
                "desc": "Protection Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "IS",
                "desc": "Student Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 231
            },
            {
                "datatype": "CE",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 6
            },
            {
                "datatype": "XPN",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Nationality",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 212
            },
            {
                "datatype": "CE",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 189
            },
            {
                "datatype": "CE",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 2
            },
            {
                "datatype": "DT",
                "desc": "Insured's Employment Start Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Employment Stop Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Job Title",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "JCC",
                "desc": "Job Code/Class",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Job Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 311
            },
            {
                "datatype": "XPN",
                "desc": "Employer Contact Person Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Employer Contact Person Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Employer Contact Reason",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 222
            },
            {
                "datatype": "XPN",
                "desc": "Insured's Contact Person's Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Insured's Contact Person Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Insured's Contact Person Reason",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 222
            },
            {
                "datatype": "DT",
                "desc": "Relationship to the Patient Start Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Relationship to the Patient Stop Date",
                "opt": 1,
                "rep": 0,
                "len": 8
            },
            {
                "datatype": "IS",
                "desc": "Insurance Co. Contact Reason",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 232
            },
            {
                "datatype": "XTN",
                "desc": "Insurance Co Contact Phone Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Policy Scope",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 312
            },
            {
                "datatype": "IS",
                "desc": "Policy Source",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 313
            },
            {
                "datatype": "CX",
                "desc": "Patient Member Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Guarantor's Relationship To Insured",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 63
            },
            {
                "datatype": "XTN",
                "desc": "Insured's Phone Number - Home",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Insured's Employer Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Military Handicapped Program",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 343
            },
            {
                "datatype": "ID",
                "desc": "Suspend Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Copay Limit Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Stoploss Limit Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "XON",
                "desc": "Insured Organization Name and ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XON",
                "desc": "Insured Employer Organization Name and ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Race",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 5
            },
            {
                "datatype": "CE",
                "desc": "CMS Patient_s Relationship to Insured",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 344
            }
        ]
    },
    "IN3": {
        "desc": "Insurance Additional Information, Certification",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - IN3",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CX",
                "desc": "Certification Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Certified By",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Certification Required",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "MOP",
                "desc": "Penalty",
                "opt": 1,
                "rep": 1,
                "len": 23
            },
            {
                "datatype": "TS",
                "desc": "Certification Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Certification Modify Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Operator",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "DT",
                "desc": "Certification Begin Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Certification End Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DTN",
                "desc": "Days",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "CE",
                "desc": "Non-Concur Code/Description",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 233
            },
            {
                "datatype": "TS",
                "desc": "Non-Concur Effective Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Physician Reviewer",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            },
            {
                "datatype": "ST",
                "desc": "Certification Contact",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Certification Contact Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Appeal Reason",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 345
            },
            {
                "datatype": "CE",
                "desc": "Certification Agency",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 346
            },
            {
                "datatype": "XTN",
                "desc": "Certification Agency Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ICD",
                "desc": "Pre-Certification Requirement",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Case Manager",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "DT",
                "desc": "Second Opinion Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "IS",
                "desc": "Second Opinion Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 151
            },
            {
                "datatype": "IS",
                "desc": "Second Opinion Documentation Received",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 152
            },
            {
                "datatype": "XCN",
                "desc": "Second Opinion Physician",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            }
        ]
    },
    "INV": {
        "desc": "Inventory Detail",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Substance Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 451
            },
            {
                "datatype": "CE",
                "desc": "Substance Status",
                "opt": 2,
                "rep": 0,
                "len": 250,
                "table": 383
            },
            {
                "datatype": "CE",
                "desc": "Substance Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 384
            },
            {
                "datatype": "CE",
                "desc": "Inventory Container Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Container Carrier Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Position on Carrier",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Initial Quantity",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Current Quantity",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Available Quantity",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Consumption Quantity",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Quantity Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Expiration Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "First Used Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TQ",
                "desc": "On Board Stability Duration",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Test/Fluid Identifier",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Manufacturer Lot Number",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Manufacturer Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 385
            },
            {
                "datatype": "CE",
                "desc": "Supplier Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 386
            },
            {
                "datatype": "CQ",
                "desc": "On Board Stability Time",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CQ",
                "desc": "Target Value",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "IPC": {
        "desc": "Imaging Procedure Control Segment",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Accession Identifier",
                "opt": 2,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "EI",
                "desc": "Requested Procedure ID",
                "opt": 2,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Study Instance UID",
                "opt": 2,
                "rep": 1,
                "len": 70
            },
            {
                "datatype": "EI",
                "desc": "Scheduled Procedure Step ID",
                "opt": 2,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "CE",
                "desc": "Modality",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CE",
                "desc": "Protocol Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "Scheduled Station Name",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "CE",
                "desc": "Scheduled Procedure Step Location",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Scheduled AE Title",
                "opt": 1,
                "rep": 1,
                "len": 16
            }
        ]
    },
    "ISD": {
        "desc": "Interaction Status Detail",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Reference Interaction Number",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Interaction Type Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 368
            },
            {
                "datatype": "CE",
                "desc": "Interaction Active State",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 387
            }
        ]
    },
    "LAN": {
        "desc": "Language Detail",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - LAN",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Language Code",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 296
            },
            {
                "datatype": "CE",
                "desc": "Language Ability Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 403
            },
            {
                "datatype": "CE",
                "desc": "Language Proficiency Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 404
            }
        ]
    },
    "LCC": {
        "desc": "Location Charge Code",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Primary Key Value - LCC",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Location Department",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 264
            },
            {
                "datatype": "CE",
                "desc": "Accommodation Type",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 129
            },
            {
                "datatype": "CE",
                "desc": "Charge Code",
                "opt": 2,
                "rep": 0,
                "len": 250,
                "table": 132
            }
        ]
    },
    "LCH": {
        "desc": "Location Characteristic",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Primary Key Value - LCH",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Segment Action Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 206
            },
            {
                "datatype": "EI",
                "desc": "Segment Unique Key",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Location Characteristic ID",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 324
            },
            {
                "datatype": "CE",
                "desc": "Location Characteristic Value-LCH",
                "opt": 2,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "LDP": {
        "desc": "Location Department",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Primary Key Value - LDP",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Location Department",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 264
            },
            {
                "datatype": "IS",
                "desc": "Location Service",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 69
            },
            {
                "datatype": "CE",
                "desc": "Specialty Type",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 265
            },
            {
                "datatype": "IS",
                "desc": "Valid Patient Classes",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 4
            },
            {
                "datatype": "ID",
                "desc": "Active/Inactive Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 183
            },
            {
                "datatype": "TS",
                "desc": "Activation Date  LDP",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Inactivation Date - LDP",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "Inactivated Reason",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "VH",
                "desc": "Visiting Hours",
                "opt": 1,
                "rep": 0,
                "len": 80,
                "table": 267
            },
            {
                "datatype": "XTN",
                "desc": "Contact Phone",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Location Cost Center",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 462
            }
        ]
    },
    "LOC": {
        "desc": "Location Identification",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Primary Key Value - LOC",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ST",
                "desc": "Location Description",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "IS",
                "desc": "Location Type - LOC",
                "opt": 2,
                "rep": 0,
                "len": 2,
                "table": 260
            },
            {
                "datatype": "XON",
                "desc": "Organization Name - LOC",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Location Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Location Phone",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "License Number",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 461
            },
            {
                "datatype": "IS",
                "desc": "Location Equipment",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 261
            },
            {
                "datatype": "IS",
                "desc": "Location Service Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 442
            }
        ]
    },
    "LRL": {
        "desc": "Location Relationship",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Primary Key Value - LRL",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Segment Action Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 206
            },
            {
                "datatype": "EI",
                "desc": "Segment Unique Key",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Location Relationship ID",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 325
            },
            {
                "datatype": "XON",
                "desc": "Organizational Location Relationship Value",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Patient Location Relationship Value",
                "opt": 1,
                "rep": 1,
                "len": 80
            }
        ]
    },
    "MFA": {
        "desc": "Master File Acknowledgment",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Record-Level Event Code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 180
            },
            {
                "datatype": "ST",
                "desc": "MFN Control ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Event Completion Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "MFN Record Level Error Return",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 181
            },
            {
                "datatype": "VARIES",
                "desc": "Primary Key Value - MFA",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Primary Key Value Type - MFA",
                "opt": 2,
                "rep": 0,
                "len": 3,
                "table": 355
            }
        ]
    },
    "MFE": {
        "desc": "Master File Entry",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Record-Level Event Code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 180
            },
            {
                "datatype": "ST",
                "desc": "MFN Control ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Effective Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "VARIES",
                "desc": "Primary Key Value - MFE",
                "opt": 2,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Primary Key Value Type",
                "opt": 2,
                "rep": 0,
                "len": 3,
                "table": 355
            }
        ]
    },
    "MFI": {
        "desc": "Master File Identification",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Master File Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 175
            },
            {
                "datatype": "HD",
                "desc": "Master File Application Identifier",
                "opt": 1,
                "rep": 1,
                "len": 180,
                "table": 361
            },
            {
                "datatype": "ID",
                "desc": "File-Level Event Code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 178
            },
            {
                "datatype": "TS",
                "desc": "Entered Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Response Level Code",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 179
            }
        ]
    },
    "MRG": {
        "desc": "Merge Patient Information",
        "fields": [
            {
                "datatype": "CX",
                "desc": "Prior Patient Identifier List",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Prior Alternate Patient ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Prior Patient Account Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Prior Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Prior Visit Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Prior Alternate Visit ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XPN",
                "desc": "Prior Patient Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            }
        ]
    },
    "MSA": {
        "desc": "Message Acknowledgment",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Acknowledgment Code",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 8
            },
            {
                "datatype": "ST",
                "desc": "Message Control ID",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Text Message",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "NM",
                "desc": "Expected Sequence Number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ID",
                "desc": "Delayed Acknowledgment Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Error Condition",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 357
            }
        ]
    },
    "MSH": {
        "desc": "Message Header",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Field Separator",
                "opt": 2,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "Encoding Characters",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "HD",
                "desc": "Sending Application",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "HD",
                "desc": "Sending Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "HD",
                "desc": "Receiving Application",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "HD",
                "desc": "Receiving Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Of Message",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "Security",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "MSG",
                "desc": "Message Type",
                "opt": 2,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Message Control ID",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "PT",
                "desc": "Processing ID",
                "opt": 2,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "VID",
                "desc": "Version ID",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Sequence Number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Continuation Pointer",
                "opt": 1,
                "rep": 1,
                "len": 180
            },
            {
                "datatype": "ID",
                "desc": "Accept Acknowledgment Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 155
            },
            {
                "datatype": "ID",
                "desc": "Application Acknowledgment Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 155
            },
            {
                "datatype": "ID",
                "desc": "Country Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 399
            },
            {
                "datatype": "ID",
                "desc": "Character Set",
                "opt": 1,
                "rep": 0,
                "len": 16,
                "table": 211
            },
            {
                "datatype": "CE",
                "desc": "Principal Language Of Message",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Alternate Character Set Handling Scheme",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 356
            },
            {
                "datatype": "EI",
                "desc": "Message Profile Identifier",
                "opt": 1,
                "rep": 0,
                "len": 427
            }
        ]
    },
    "NCK": {
        "desc": "System Clock",
        "fields": [
            {
                "datatype": "TS",
                "desc": "System Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "NDS": {
        "desc": "Notification Detail",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Notification Reference Number",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Notification Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Notification Alert Severity",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 367
            },
            {
                "datatype": "CE",
                "desc": "Notification Code",
                "opt": 2,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "NK1": {
        "desc": "Next of Kin / Associated Parties",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - NK1",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "XPN",
                "desc": "NK Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Relationship",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 63
            },
            {
                "datatype": "XAD",
                "desc": "Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Business Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Contact Role",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 131
            },
            {
                "datatype": "DT",
                "desc": "Start Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "End Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Next of Kin / Associated Parties Job Title",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "JCC",
                "desc": "Next of Kin / Associated Parties Job Code/Class",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CX",
                "desc": "Next of Kin / Associated Parties Employee Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XON",
                "desc": "Organization Name - NK1",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 2
            },
            {
                "datatype": "IS",
                "desc": "Administrative Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "TS",
                "desc": "Date/Time of Birth",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Living Dependency",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 223
            },
            {
                "datatype": "IS",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 9
            },
            {
                "datatype": "CE",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 171
            },
            {
                "datatype": "CE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 296
            },
            {
                "datatype": "IS",
                "desc": "Living Arrangement",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 220
            },
            {
                "datatype": "CE",
                "desc": "Publicity Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 215
            },
            {
                "datatype": "ID",
                "desc": "Protection Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "IS",
                "desc": "Student Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 231
            },
            {
                "datatype": "CE",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 6
            },
            {
                "datatype": "XPN",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Nationality",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 212
            },
            {
                "datatype": "CE",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 189
            },
            {
                "datatype": "CE",
                "desc": "Contact Reason",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 222
            },
            {
                "datatype": "XPN",
                "desc": "Contact Person's Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Contact Person's Telephone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Contact Person's Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Next of Kin/Associated Party's Identifiers",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Job Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 311
            },
            {
                "datatype": "CE",
                "desc": "Race",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 5
            },
            {
                "datatype": "IS",
                "desc": "Handicap",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 295
            },
            {
                "datatype": "ST",
                "desc": "Contact Person Social Security Number",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "ST",
                "desc": "Next of Kin Birth Place",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "VIP Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 99
            }
        ]
    },
    "NPU": {
        "desc": "Bed Status Update",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Bed Location",
                "opt": 2,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "IS",
                "desc": "Bed Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 116
            }
        ]
    },
    "NSC": {
        "desc": "Application Status Change",
        "fields": [
            {
                "datatype": "IS",
                "desc": "Application Change Type",
                "opt": 2,
                "rep": 1,
                "len": 4,
                "table": 409
            },
            {
                "datatype": "ST",
                "desc": "Current CPU",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Current Fileserver",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "HD",
                "desc": "Current Application",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "HD",
                "desc": "Current Facility",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "New CPU",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "New Fileserver",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "HD",
                "desc": "New Application",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "HD",
                "desc": "New Facility",
                "opt": 1,
                "rep": 1,
                "len": 30
            }
        ]
    },
    "NST": {
        "desc": "Application control level statistics",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Statistics Available",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ST",
                "desc": "Source Identifier",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ID",
                "desc": "Source Type",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 332
            },
            {
                "datatype": "TS",
                "desc": "Statistics Start",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Statistics End",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Receive Character Count",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Send Character Count",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Messages Received",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Messages Sent",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Checksum Errors Received",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Length Errors Received",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Other Errors Received",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Connect Timeouts",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Receive Timeouts",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Application control-level Errors",
                "opt": 1,
                "rep": 1,
                "len": 10
            }
        ]
    },
    "NTE": {
        "desc": "Notes and Comments",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - NTE",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Source of Comment",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 105
            },
            {
                "datatype": "FT",
                "desc": "Comment",
                "opt": 1,
                "rep": 0,
                "len": 65536
            },
            {
                "datatype": "CE",
                "desc": "Comment Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 364
            }
        ]
    },
    "OBR": {
        "desc": "Observation Request",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - OBR",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EI",
                "desc": "Placer Order Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "CE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Priority _ OBR",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "TS",
                "desc": "Requested Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Observation Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Observation End Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CQ",
                "desc": "Collection Volume",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "XCN",
                "desc": "Collector Identifier",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Specimen Action Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 65
            },
            {
                "datatype": "CE",
                "desc": "Danger Code",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Relevant Clinical Information",
                "opt": 1,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "TS",
                "desc": "Specimen Received Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "SPS",
                "desc": "Specimen Source",
                "opt": 1,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "XCN",
                "desc": "Ordering Provider",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Order Callback Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Placer Field 1",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Placer Field 2",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Filler Field 1",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Filler Field 2",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Results Rpt/Status Chng - Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "MOC",
                "desc": "Charge to Practice",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ID",
                "desc": "Diagnostic Serv Sect ID",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 74
            },
            {
                "datatype": "ID",
                "desc": "Result Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 123
            },
            {
                "datatype": "PRL",
                "desc": "Parent Result",
                "opt": 1,
                "rep": 1,
                "len": 400
            },
            {
                "datatype": "TQ",
                "desc": "Quantity/Timing",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XCN",
                "desc": "Result Copies To",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "EIP",
                "desc": "Parent Number",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Transportation Mode",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 124
            },
            {
                "datatype": "CE",
                "desc": "Reason for Study",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NDL",
                "desc": "Principal Result Interpreter",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "NDL",
                "desc": "Assistant Result Interpreter",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "NDL",
                "desc": "Technician",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "NDL",
                "desc": "Transcriptionist",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "TS",
                "desc": "Scheduled Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Number of Sample Containers *",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Transport Logistics of Collected Sample",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Collector's Comment *",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Transport Arrangement Responsibility",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Transport Arranged",
                "opt": 1,
                "rep": 1,
                "len": 30,
                "table": 224
            },
            {
                "datatype": "ID",
                "desc": "Escort Required",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 225
            },
            {
                "datatype": "CE",
                "desc": "Planned Patient Transport Comment",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 88
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code Modifier",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 340
            },
            {
                "datatype": "CE",
                "desc": "Placer Supplemental Service Information",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 411
            },
            {
                "datatype": "CE",
                "desc": "Filler Supplemental Service Information",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 411
            },
            {
                "datatype": "CWE",
                "desc": "Medically Necessary Duplicate Procedure Reason.",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 476
            },
            {
                "datatype": "IS",
                "desc": "Result Handling",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 507
            },
            {
                "datatype": "CWE",
                "desc": "Parent Universal Service Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "OBX": {
        "desc": "Observation/Result",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - OBX",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Value Type",
                "opt": 1,
                "rep": 125,
                "len": 2,
                "table": 125
            },
            {
                "datatype": "CE",
                "desc": "Observation Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Observation Sub-ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "VARIES",
                "desc": "Observation Value",
                "opt": 1,
                "rep": 0,
                "len": 99999
            },
            {
                "datatype": "CE",
                "desc": "Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "References Range",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "IS",
                "desc": "Abnormal Flags",
                "opt": 1,
                "rep": 0,
                "len": 5,
                "table": 78
            },
            {
                "datatype": "NM",
                "desc": "Probability",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "ID",
                "desc": "Nature of Abnormal Test",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 80
            },
            {
                "datatype": "ID",
                "desc": "Observation Result Status",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 85
            },
            {
                "datatype": "TS",
                "desc": "Effective Date of Reference Range",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "User Defined Access Checks",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Date/Time of the Observation",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Producer's ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Responsible Observer",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Observation Method",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "Equipment Instance Identifier",
                "opt": 1,
                "rep": 0,
                "len": 22
            },
            {
                "datatype": "TS",
                "desc": "Date/Time of the Analysis",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "Reserved for v2.6",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Reserved for v2.6",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Reserved for v2.6",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Performing Organization Name",
                "opt": 1,
                "rep": 1,
                "len": 567
            },
            {
                "datatype": "XAD",
                "desc": "Performing Organization Address",
                "opt": 1,
                "rep": 1,
                "len": 631
            },
            {
                "datatype": "XCN",
                "desc": "Performing Organization Medical Director",
                "opt": 1,
                "rep": 1,
                "len": 3002
            }
        ]
    },
    "ODS": {
        "desc": "Dietary Orders, Supplements, and Preferences",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Type",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 159
            },
            {
                "datatype": "CE",
                "desc": "Service Period",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Diet, Supplement, or Preference Code",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Text Instruction",
                "opt": 1,
                "rep": 0,
                "len": 80
            }
        ]
    },
    "ODT": {
        "desc": "Diet Tray Instructions",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Tray Type",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 160
            },
            {
                "datatype": "CE",
                "desc": "Service Period",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Text Instruction",
                "opt": 1,
                "rep": 1,
                "len": 80
            }
        ]
    },
    "OM1": {
        "desc": "General Segment",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/Observation Master File",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Producer's Service/Test/Observation ID",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Permitted Data Types",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 125
            },
            {
                "datatype": "ID",
                "desc": "Specimen Required",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Producer ID",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TX",
                "desc": "Observation Description",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Other Service/Test/Observation IDs for the Observation",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Other Names",
                "opt": 2,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "ST",
                "desc": "Preferred Report Name for the Observation",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Preferred Short Name or Mnemonic for Observation",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Preferred Long Name for the Observation",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Orderability",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Identity of Instrument Used to Perform this Study",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Coded Representation of Method",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Portable Device Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Observation Producing Department/Section",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Telephone Number of Section",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Nature of Service/Test/Observation",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 174
            },
            {
                "datatype": "CE",
                "desc": "Report Subheader",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Report Display Order",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Stamp for any change in Definition for the Observation",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective Date/Time of Change",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Typical Turn-Around Time",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Processing Time",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Processing Priority",
                "opt": 1,
                "rep": 0,
                "len": 40,
                "table": 168
            },
            {
                "datatype": "ID",
                "desc": "Reporting Priority",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 169
            },
            {
                "datatype": "CE",
                "desc": "Outside Site",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Address of Outside Site",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number of Outside Site",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Confidentiality Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 177
            },
            {
                "datatype": "CE",
                "desc": "Observations Required to Interpret the Observation",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TX",
                "desc": "Interpretation of Observations",
                "opt": 1,
                "rep": 1,
                "len": 65536
            },
            {
                "datatype": "CE",
                "desc": "Contraindications to Observations",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Reflex Tests/Observations",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TX",
                "desc": "Rules that Trigger Reflex Testing",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Fixed Canned Message",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TX",
                "desc": "Patient Preparation",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Procedure Medication",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TX",
                "desc": "Factors that may Affect the Observation",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ST",
                "desc": "Service/Test/Observation Performance Schedule",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "TX",
                "desc": "Description of Test Methods",
                "opt": 1,
                "rep": 1,
                "len": 65536
            },
            {
                "datatype": "CE",
                "desc": "Kind of Quantity Observed",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 254
            },
            {
                "datatype": "CE",
                "desc": "Point Versus Interval",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 255
            },
            {
                "datatype": "TX",
                "desc": "Challenge Information",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Relationship Modifier",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 258
            },
            {
                "datatype": "CE",
                "desc": "Target Anatomic Site Of Test",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Modality Of Imaging Measurement",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 259
            }
        ]
    },
    "OM2": {
        "desc": "Numeric Observation",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Units of Measure",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Range of Decimal Precision",
                "opt": 1,
                "rep": 0,
                "len": 10
            },
            {
                "datatype": "CE",
                "desc": "Corresponding SI Units of Measure",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TX",
                "desc": "SI Conversion Factor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "RFR",
                "desc": "Reference",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "RFR",
                "desc": "Critical Range for Ordinal and Continuous Observations",
                "opt": 1,
                "rep": 0,
                "len": 205
            },
            {
                "datatype": "RFR",
                "desc": "Absolute Range for Ordinal and Continuous Observations",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "DLT",
                "desc": "Delta Check Criteria",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Minimum Meaningful Increments",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "OM3": {
        "desc": "Categorical Service/Test/Observation",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Preferred Coding System",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Valid Coded 'Answers'",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Normal Text/Codes for Categorical Observations",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Abnormal Text/Codes for Categorical Observations",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Critical Text/Codes for Categorical Observations",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Value Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 125
            }
        ]
    },
    "OM4": {
        "desc": "Observations that Require Specimens",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Derived Specimen",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 170
            },
            {
                "datatype": "TX",
                "desc": "Container Description",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Container Volume",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Container Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Specimen",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Additive",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 371
            },
            {
                "datatype": "TX",
                "desc": "Preparation",
                "opt": 1,
                "rep": 1,
                "len": 10240
            },
            {
                "datatype": "TX",
                "desc": "Special Handling Requirements",
                "opt": 1,
                "rep": 1,
                "len": 10240
            },
            {
                "datatype": "CQ",
                "desc": "Normal Collection Volume",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CQ",
                "desc": "Minimum Collection Volume",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TX",
                "desc": "Specimen Requirements",
                "opt": 1,
                "rep": 1,
                "len": 10240
            },
            {
                "datatype": "ID",
                "desc": "Specimen Priorities",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 27
            },
            {
                "datatype": "CQ",
                "desc": "Specimen Retention Time",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "OM5": {
        "desc": "Observation Batteries (Sets",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Test/Observations Included within an Ordered Test Battery",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Observation ID Suffixes",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "OM6": {
        "desc": "Observations that are Calculated from Other Observations",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "TX",
                "desc": "Derivation Rule",
                "opt": 1,
                "rep": 1,
                "len": 10240
            }
        ]
    },
    "OM7": {
        "desc": "Additional Basic Attributes",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/Observation Master File",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Category Identifier",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 412
            },
            {
                "datatype": "TX",
                "desc": "Category Description",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ST",
                "desc": "Category Synonym",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "TS",
                "desc": "Effective Test/Service Start Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective Test/Service End Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Test/Service Default Duration Quantity",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CE",
                "desc": "Test/Service Default Duration Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Test/Service Default Frequency",
                "opt": 1,
                "rep": 1,
                "len": 60,
                "table": 335
            },
            {
                "datatype": "ID",
                "desc": "Consent Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Consent Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 413
            },
            {
                "datatype": "TS",
                "desc": "Consent Effective Start Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Consent Effective End Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Consent Interval Quantity",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CE",
                "desc": "Consent Interval Units",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 414
            },
            {
                "datatype": "NM",
                "desc": "Consent Waiting Period Quantity",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CE",
                "desc": "Consent Waiting Period Units",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 414
            },
            {
                "datatype": "TS",
                "desc": "Effective Date/Time of Change",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Entered By",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Orderable-at Location",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "IS",
                "desc": "Formulary Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 473
            },
            {
                "datatype": "ID",
                "desc": "Special Order Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Primary Key Value - CDM",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 132
            }
        ]
    },
    "ORC": {
        "desc": "Common Order",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Order Control",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 119
            },
            {
                "datatype": "EI",
                "desc": "Placer Order Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Placer Group Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "ID",
                "desc": "Order Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 38
            },
            {
                "datatype": "ID",
                "desc": "Response Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 121
            },
            {
                "datatype": "TQ",
                "desc": "Quantity/Timing",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "EIP",
                "desc": "Parent Order",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "TS",
                "desc": "Date/Time of Transaction",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Entered By",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Verified By",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Ordering Provider",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Enterer's Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XTN",
                "desc": "Call Back Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Order Effective Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Order Control Code Reason",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Entering Organization",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Entering Device",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Action By",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Advanced Beneficiary Notice Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 339
            },
            {
                "datatype": "XON",
                "desc": "Ordering Facility Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Ordering Facility Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Ordering Facility Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Ordering Provider Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Order Status Modifier",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Advanced Beneficiary Notice Override Reason",
                "opt": 1,
                "rep": 1,
                "len": 60,
                "table": 552
            },
            {
                "datatype": "TS",
                "desc": "Filler's Expected Availability Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CWE",
                "desc": "Confidentiality Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 177
            },
            {
                "datatype": "CWE",
                "desc": "Order Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 482
            },
            {
                "datatype": "CNE",
                "desc": "Enterer Authorization Mode",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 483
            },
            {
                "datatype": "CWE",
                "desc": "Parent Universal Service Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "ORG": {
        "desc": "Practitioner Organization Unit",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID _ ORG",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Organization Unit Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 405
            },
            {
                "datatype": "CE",
                "desc": "Organization Unit Type Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 474
            },
            {
                "datatype": "ID",
                "desc": "Primary Org Unit Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CX",
                "desc": "Practitioner Org Unit Identifier",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Health Care Provider Type Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 452
            },
            {
                "datatype": "CE",
                "desc": "Health Care Provider Classification Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 453
            },
            {
                "datatype": "CE",
                "desc": "Health Care Provider Area of Specialization Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 454
            },
            {
                "datatype": "DR",
                "desc": "Effective Date Range",
                "opt": 1,
                "rep": 1,
                "len": 52
            },
            {
                "datatype": "CE",
                "desc": "Employment Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 66
            },
            {
                "datatype": "ID",
                "desc": "Board Approval Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Primary Care Physician Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            }
        ]
    },
    "OVR": {
        "desc": "Override Segment",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Business Rule Override Type",
                "opt": 1,
                "rep": 1,
                "len": 705,
                "table": 518
            },
            {
                "datatype": "CWE",
                "desc": "Business Rule Override Code",
                "opt": 1,
                "rep": 1,
                "len": 705,
                "table": 521
            },
            {
                "datatype": "TX",
                "desc": "Override Comments",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "XCN",
                "desc": "Override Entered By",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Override Authorized By",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "PCR": {
        "desc": "Possible Causal Relationship",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Implicated Product",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Generic Product",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 249
            },
            {
                "datatype": "CE",
                "desc": "Product Class",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CQ",
                "desc": "Total Duration Of Therapy",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "TS",
                "desc": "Product Manufacture Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Product Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Product Implantation Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Product Explantation Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Single Use Device",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 244
            },
            {
                "datatype": "CE",
                "desc": "Indication For Product Use",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Product Problem",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 245
            },
            {
                "datatype": "ST",
                "desc": "Product Serial/Lot Number",
                "opt": 1,
                "rep": 0,
                "len": 30
            },
            {
                "datatype": "IS",
                "desc": "Product Available For Inspection",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 246
            },
            {
                "datatype": "CE",
                "desc": "Product Evaluation Performed",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Product Evaluation Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 247
            },
            {
                "datatype": "CE",
                "desc": "Product Evaluation Results",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Evaluated Product Source",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 248
            },
            {
                "datatype": "TS",
                "desc": "Date Product Returned To Manufacturer",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Device Operator Qualifications",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 242
            },
            {
                "datatype": "ID",
                "desc": "Relatedness Assessment",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 250
            },
            {
                "datatype": "ID",
                "desc": "Action Taken In Response To The Event",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 251
            },
            {
                "datatype": "ID",
                "desc": "Event Causality Observations",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 252
            },
            {
                "datatype": "ID",
                "desc": "Indirect Exposure Mechanism",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 253
            }
        ]
    },
    "PD1": {
        "desc": "Patient Additional Demographic",
        "fields": [
            {
                "datatype": "IS",
                "desc": "Living Dependency",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 223
            },
            {
                "datatype": "IS",
                "desc": "Living Arrangement",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 220
            },
            {
                "datatype": "XON",
                "desc": "Patient Primary Facility",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Patient Primary Care Provider Name and ID No.",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Student Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 231
            },
            {
                "datatype": "IS",
                "desc": "Handicap",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 295
            },
            {
                "datatype": "IS",
                "desc": "Living Will Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 315
            },
            {
                "datatype": "IS",
                "desc": "Organ Donor Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 316
            },
            {
                "datatype": "ID",
                "desc": "Separate Bill",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CX",
                "desc": "Duplicate Patient",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Publicity Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 215
            },
            {
                "datatype": "ID",
                "desc": "Protection Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DT",
                "desc": "Protection Indicator Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "XON",
                "desc": "Place of Worship",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Advance Directive Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 435
            },
            {
                "datatype": "IS",
                "desc": "Immunization Registry Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 441
            },
            {
                "datatype": "DT",
                "desc": "Immunization Registry Status Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Publicity Code Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "IS",
                "desc": "Military Branch",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 140
            },
            {
                "datatype": "IS",
                "desc": "Military Rank/Grade",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 141
            },
            {
                "datatype": "IS",
                "desc": "Military Status",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 142
            }
        ]
    },
    "PDA": {
        "desc": "Patient Death and Autopsy",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Death Cause Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Death Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "ID",
                "desc": "Death Certified Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "TS",
                "desc": "Death Certificate Signed Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Death Certified By",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Autopsy Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DR",
                "desc": "Autopsy Start and End Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 53
            },
            {
                "datatype": "XCN",
                "desc": "Autopsy Performed By",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Coroner Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            }
        ]
    },
    "PDC": {
        "desc": "Product Detail Country",
        "fields": [
            {
                "datatype": "XON",
                "desc": "Manufacturer/Distributor",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Country",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Brand Name",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Device Family Name",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Generic Name",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Model Identifier",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Catalogue Identifier",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Other Identifier",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Product Code",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Marketing Basis",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 330
            },
            {
                "datatype": "ST",
                "desc": "Marketing Approval ID",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CQ",
                "desc": "Labeled Shelf Life",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CQ",
                "desc": "Expected Shelf Life",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "TS",
                "desc": "Date First Marketed",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Date Last Marketed",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "PEO": {
        "desc": "Product Experience Observation",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Event Identifiers Used",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Event Symptom/Diagnosis Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Event Onset Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Event Exacerbation Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Event Improved Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Event Ended Data/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XAD",
                "desc": "Event Location Occurred Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Event Qualification",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 237
            },
            {
                "datatype": "ID",
                "desc": "Event Serious",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 238
            },
            {
                "datatype": "ID",
                "desc": "Event Expected",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 239
            },
            {
                "datatype": "ID",
                "desc": "Event Outcome",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 240
            },
            {
                "datatype": "ID",
                "desc": "Patient Outcome",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 241
            },
            {
                "datatype": "FT",
                "desc": "Event Description From Others",
                "opt": 1,
                "rep": 0,
                "len": 600
            },
            {
                "datatype": "FT",
                "desc": "Event From Original Reporter",
                "opt": 1,
                "rep": 0,
                "len": 600
            },
            {
                "datatype": "FT",
                "desc": "Event Description From Patient",
                "opt": 1,
                "rep": 0,
                "len": 600
            },
            {
                "datatype": "FT",
                "desc": "Event Description From Practitioner",
                "opt": 1,
                "rep": 0,
                "len": 600
            },
            {
                "datatype": "FT",
                "desc": "Event Description From Autopsy",
                "opt": 1,
                "rep": 0,
                "len": 600
            },
            {
                "datatype": "CE",
                "desc": "Cause Of Death",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XPN",
                "desc": "Primary Observer Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Primary Observer Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Primary Observer Telephone",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Primary Observer's Qualification",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 242
            },
            {
                "datatype": "ID",
                "desc": "Confirmation Provided By",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 242
            },
            {
                "datatype": "TS",
                "desc": "Primary Observer Aware Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Primary Observer's identity May Be Divulged",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 243
            }
        ]
    },
    "PES": {
        "desc": "Product Experience Sender",
        "fields": [
            {
                "datatype": "XON",
                "desc": "Sender Organization Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Sender Individual Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Sender Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Sender Telephone",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "Sender Event Identifier",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "NM",
                "desc": "Sender Sequence Number",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "FT",
                "desc": "Sender Event Description",
                "opt": 1,
                "rep": 0,
                "len": 600
            },
            {
                "datatype": "FT",
                "desc": "Sender Comment",
                "opt": 1,
                "rep": 1,
                "len": 600
            },
            {
                "datatype": "TS",
                "desc": "Sender Aware Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Event Report Date",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Event Report Timing/Type",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 234
            },
            {
                "datatype": "ID",
                "desc": "Event Report Source",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 235
            },
            {
                "datatype": "ID",
                "desc": "Event Reported To",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 236
            }
        ]
    },
    "PID": {
        "desc": "Patient Identification",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - PID",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CX",
                "desc": "Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CX",
                "desc": "Patient Identifier List",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Alternate Patient ID - PID",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "XPN",
                "desc": "Patient Name",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XPN",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Date/Time of Birth",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Administrative Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "XPN",
                "desc": "Patient Alias",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Race",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 5
            },
            {
                "datatype": "XAD",
                "desc": "Patient Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "County Code",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 289
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number - Home",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number - Business",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 296
            },
            {
                "datatype": "CE",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 2
            },
            {
                "datatype": "CE",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 6
            },
            {
                "datatype": "CX",
                "desc": "Patient Account Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "SSN Number - Patient",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "DLN",
                "desc": "Driver's License Number - Patient",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "CX",
                "desc": "Mother's Identifier",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 189
            },
            {
                "datatype": "ST",
                "desc": "Birth Place",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Multiple Birth Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "NM",
                "desc": "Birth Order",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "CE",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 171
            },
            {
                "datatype": "CE",
                "desc": "Veterans Military Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 172
            },
            {
                "datatype": "CE",
                "desc": "Nationality",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 212
            },
            {
                "datatype": "TS",
                "desc": "Patient Death Date and Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Patient Death Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Identity Unknown Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "IS",
                "desc": "Identity Reliability Code",
                "opt": 1,
                "rep": 0,
                "len": 20,
                "table": 445
            },
            {
                "datatype": "TS",
                "desc": "Last Update Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "HD",
                "desc": "Last Update Facility",
                "opt": 1,
                "rep": 1,
                "len": 241
            },
            {
                "datatype": "CE",
                "desc": "Species Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 446
            },
            {
                "datatype": "CE",
                "desc": "Breed Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 447
            },
            {
                "datatype": "ST",
                "desc": "Strain",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Production Class Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 429
            },
            {
                "datatype": "CWE",
                "desc": "Tribal Citizenship",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 171
            }
        ]
    },
    "PR1": {
        "desc": "Procedures",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - PR1",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "IS",
                "desc": "Procedure Coding Method",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 89
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 88
            },
            {
                "datatype": "ST",
                "desc": "Procedure Description",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "TS",
                "desc": "Procedure Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Procedure Functional Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 230
            },
            {
                "datatype": "NM",
                "desc": "Procedure Minutes",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "XCN",
                "desc": "Anesthesiologist",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            },
            {
                "datatype": "IS",
                "desc": "Anesthesia Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 19
            },
            {
                "datatype": "NM",
                "desc": "Anesthesia Minutes",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "XCN",
                "desc": "Surgeon",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            },
            {
                "datatype": "XCN",
                "desc": "Procedure Practitioner",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            },
            {
                "datatype": "CE",
                "desc": "Consent Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 59
            },
            {
                "datatype": "ID",
                "desc": "Procedure Priority",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 418
            },
            {
                "datatype": "CE",
                "desc": "Associated Diagnosis Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 51
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code Modifier",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 340
            },
            {
                "datatype": "IS",
                "desc": "Procedure DRG Type",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 416
            },
            {
                "datatype": "CE",
                "desc": "Tissue Type Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 417
            },
            {
                "datatype": "EI",
                "desc": "Procedure Identifier",
                "opt": 1,
                "rep": 1,
                "len": 427
            },
            {
                "datatype": "ID",
                "desc": "Procedure Action Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 206
            }
        ]
    },
    "PRA": {
        "desc": "Practitioner Detail",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Primary Key Value - PRA",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Practitioner Group",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 358
            },
            {
                "datatype": "IS",
                "desc": "Practitioner Category",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 186
            },
            {
                "datatype": "ID",
                "desc": "Provider Billing",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 187
            },
            {
                "datatype": "SPD",
                "desc": "Specialty",
                "opt": 1,
                "rep": 0,
                "len": 112,
                "table": 337
            },
            {
                "datatype": "PLN",
                "desc": "Practitioner ID Numbers",
                "opt": 1,
                "rep": 0,
                "len": 99,
                "table": 338
            },
            {
                "datatype": "PIP",
                "desc": "Privileges",
                "opt": 1,
                "rep": 0,
                "len": 770
            },
            {
                "datatype": "DT",
                "desc": "Date Entered Practice",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CE",
                "desc": "Institution",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 537
            },
            {
                "datatype": "DT",
                "desc": "Date Left Practice",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CE",
                "desc": "Government Reimbursement Billing Eligibility",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 401
            },
            {
                "datatype": "SI",
                "desc": "Set ID - PRA",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "PRB": {
        "desc": "Problem Details",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Action Code",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 287
            },
            {
                "datatype": "TS",
                "desc": "Action Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Problem ID",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "Problem Instance ID",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "EI",
                "desc": "Episode of Care ID",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Problem List Priority",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Problem Established Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Anticipated Problem Resolution Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Actual Problem Resolution Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Problem Classification",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Problem Management Discipline",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Problem Persistence",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Problem Confirmation Status",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Problem Life Cycle Status",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Problem Life Cycle Status Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Problem Date of Onset",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "Problem Onset Text",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Problem Ranking",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Certainty of Problem",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Probability of Problem",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CE",
                "desc": "Individual Awareness of Problem",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Problem Prognosis",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Individual Awareness of Prognosis",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Family/Significant Other Awareness of Problem/Prognosis",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Security/Sensitivity",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "PRC": {
        "desc": "Pricing",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Primary Key Value - PRC",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 132
            },
            {
                "datatype": "CE",
                "desc": "Facility ID - PRC",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 464
            },
            {
                "datatype": "CE",
                "desc": "Department",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 184
            },
            {
                "datatype": "IS",
                "desc": "Valid Patient Classes",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 4
            },
            {
                "datatype": "CP",
                "desc": "Price",
                "opt": 1,
                "rep": 0,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Formula",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "NM",
                "desc": "Minimum Quantity",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Maximum Quantity",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "MO",
                "desc": "Minimum Price",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "MO",
                "desc": "Maximum Price",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "TS",
                "desc": "Effective Start Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective End Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Price Override Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 268
            },
            {
                "datatype": "CE",
                "desc": "Billing Category",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 293
            },
            {
                "datatype": "ID",
                "desc": "Chargeable Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Active/Inactive Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 183
            },
            {
                "datatype": "MO",
                "desc": "Cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "IS",
                "desc": "Charge On Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 269
            }
        ]
    },
    "PRD": {
        "desc": "Provider Data",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Provider Role",
                "opt": 2,
                "rep": 0,
                "len": 250,
                "table": 286
            },
            {
                "datatype": "XPN",
                "desc": "Provider Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Provider Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Provider Location",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XTN",
                "desc": "Provider Communication Information",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Preferred Method of Contact",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 185
            },
            {
                "datatype": "PLN",
                "desc": "Provider Identifiers",
                "opt": 1,
                "rep": 0,
                "len": 100
            },
            {
                "datatype": "TS",
                "desc": "Effective Start Date of Provider Role",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective End Date of Provider Role",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "PSH": {
        "desc": "Product Summary Header",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Report Type",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Report Form Identifier",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Report Date",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Report Interval Start Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Report Interval End Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CQ",
                "desc": "Quantity Manufactured",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CQ",
                "desc": "Quantity Distributed",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Quantity Distributed Method",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 329
            },
            {
                "datatype": "FT",
                "desc": "Quantity Distributed Comment",
                "opt": 1,
                "rep": 1,
                "len": 600
            },
            {
                "datatype": "CQ",
                "desc": "Quantity in Use",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Quantity in Use Method",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 329
            },
            {
                "datatype": "FT",
                "desc": "Quantity in Use Comment",
                "opt": 1,
                "rep": 1,
                "len": 600
            },
            {
                "datatype": "NM",
                "desc": "Number of Product Experience Reports Filed by Facility",
                "opt": 1,
                "rep": 0,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Number of Product Experience Reports Filed by Distributor",
                "opt": 1,
                "rep": 0,
                "len": 2
            }
        ]
    },
    "PTH": {
        "desc": "Pathway",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Action Code",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 287
            },
            {
                "datatype": "CE",
                "desc": "Pathway ID",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "Pathway Instance ID",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Pathway Established Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Pathway Life Cycle Status",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Change Pathway Life Cycle Status Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "PV1": {
        "desc": "Patient Visit",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - PV1",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "IS",
                "desc": "Patient Class",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 4
            },
            {
                "datatype": "PL",
                "desc": "Assigned Patient Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "IS",
                "desc": "Admission Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 7
            },
            {
                "datatype": "CX",
                "desc": "Preadmit Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Prior Patient Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XCN",
                "desc": "Attending Doctor",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            },
            {
                "datatype": "XCN",
                "desc": "Referring Doctor",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            },
            {
                "datatype": "XCN",
                "desc": "Consulting Doctor",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            },
            {
                "datatype": "IS",
                "desc": "Hospital Service",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 69
            },
            {
                "datatype": "PL",
                "desc": "Temporary Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "IS",
                "desc": "Preadmit Test Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 87
            },
            {
                "datatype": "IS",
                "desc": "Re-admission Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 92
            },
            {
                "datatype": "IS",
                "desc": "Admit Source",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 23
            },
            {
                "datatype": "IS",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 9
            },
            {
                "datatype": "IS",
                "desc": "VIP Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 99
            },
            {
                "datatype": "XCN",
                "desc": "Admitting Doctor",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            },
            {
                "datatype": "IS",
                "desc": "Patient Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 18
            },
            {
                "datatype": "CX",
                "desc": "Visit Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "FC",
                "desc": "Financial Class",
                "opt": 1,
                "rep": 0,
                "len": 50,
                "table": 64
            },
            {
                "datatype": "IS",
                "desc": "Charge Price Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 32
            },
            {
                "datatype": "IS",
                "desc": "Courtesy Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 45
            },
            {
                "datatype": "IS",
                "desc": "Credit Rating",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 46
            },
            {
                "datatype": "IS",
                "desc": "Contract Code",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 44
            },
            {
                "datatype": "DT",
                "desc": "Contract Effective Date",
                "opt": 1,
                "rep": 0,
                "len": 8
            },
            {
                "datatype": "NM",
                "desc": "Contract Amount",
                "opt": 1,
                "rep": 0,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Contract Period",
                "opt": 1,
                "rep": 0,
                "len": 3
            },
            {
                "datatype": "IS",
                "desc": "Interest Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 73
            },
            {
                "datatype": "IS",
                "desc": "Transfer to Bad Debt Code",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 110
            },
            {
                "datatype": "DT",
                "desc": "Transfer to Bad Debt Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "IS",
                "desc": "Bad Debt Agency Code",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 21
            },
            {
                "datatype": "NM",
                "desc": "Bad Debt Transfer Amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Bad Debt Recovery Amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "IS",
                "desc": "Delete Account Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 111
            },
            {
                "datatype": "DT",
                "desc": "Delete Account Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "IS",
                "desc": "Discharge Disposition",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 112
            },
            {
                "datatype": "DLD",
                "desc": "Discharged to Location",
                "opt": 1,
                "rep": 1,
                "len": 47,
                "table": 113
            },
            {
                "datatype": "CE",
                "desc": "Diet Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 114
            },
            {
                "datatype": "IS",
                "desc": "Servicing Facility",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 115
            },
            {
                "datatype": "IS",
                "desc": "Bed Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 116
            },
            {
                "datatype": "IS",
                "desc": "Account Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 117
            },
            {
                "datatype": "PL",
                "desc": "Pending Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "PL",
                "desc": "Prior Temporary Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "TS",
                "desc": "Admit Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Discharge Date/Time",
                "opt": 1,
                "rep": 0,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Current Patient Balance",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Total Charges",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Total Adjustments",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Total Payments",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CX",
                "desc": "Alternate Visit ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Visit Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 326
            },
            {
                "datatype": "XCN",
                "desc": "Other Healthcare Provider",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 10
            }
        ]
    },
    "PV2": {
        "desc": "Patient Visit - Additional Information",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Prior Pending Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Accommodation Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 129
            },
            {
                "datatype": "CE",
                "desc": "Admit Reason",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Transfer Reason",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Patient Valuables",
                "opt": 1,
                "rep": 0,
                "len": 25
            },
            {
                "datatype": "ST",
                "desc": "Patient Valuables Location",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "IS",
                "desc": "Visit User Code",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 130
            },
            {
                "datatype": "TS",
                "desc": "Expected Admit Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Expected Discharge Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Estimated Length of Inpatient Stay",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Actual Length of Inpatient Stay",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "ST",
                "desc": "Visit Description",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "XCN",
                "desc": "Referral Source Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "DT",
                "desc": "Previous Service Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Employment Illness Related Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "IS",
                "desc": "Purge Status Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 213
            },
            {
                "datatype": "DT",
                "desc": "Purge Status Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "IS",
                "desc": "Special Program Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 214
            },
            {
                "datatype": "ID",
                "desc": "Retention Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "NM",
                "desc": "Expected Number of Insurance Plans",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "IS",
                "desc": "Visit Publicity Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 215
            },
            {
                "datatype": "ID",
                "desc": "Visit Protection Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "XON",
                "desc": "Clinic Organization Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Patient Status Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 216
            },
            {
                "datatype": "IS",
                "desc": "Visit Priority Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 217
            },
            {
                "datatype": "DT",
                "desc": "Previous Treatment Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "IS",
                "desc": "Expected Discharge Disposition",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 112
            },
            {
                "datatype": "DT",
                "desc": "Signature on File Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "First Similar Illness Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CE",
                "desc": "Patient Charge Adjustment Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 218
            },
            {
                "datatype": "IS",
                "desc": "Recurring Service Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 219
            },
            {
                "datatype": "ID",
                "desc": "Billing Media Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "TS",
                "desc": "Expected Surgery Date and Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Military Partnership Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Military Non-Availability Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Newborn Baby Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Baby Detained Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Mode of Arrival Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 430
            },
            {
                "datatype": "CE",
                "desc": "Recreational Drug Use Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 431
            },
            {
                "datatype": "CE",
                "desc": "Admission Level of Care Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 432
            },
            {
                "datatype": "CE",
                "desc": "Precaution Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 433
            },
            {
                "datatype": "CE",
                "desc": "Patient Condition Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 434
            },
            {
                "datatype": "IS",
                "desc": "Living Will Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 315
            },
            {
                "datatype": "IS",
                "desc": "Organ Donor Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 316
            },
            {
                "datatype": "CE",
                "desc": "Advance Directive Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 435
            },
            {
                "datatype": "DT",
                "desc": "Patient Status Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "TS",
                "desc": "Expected LOA Return Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Expected Pre-admission Testing Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Notify Clergy Code",
                "opt": 1,
                "rep": 0,
                "len": 20,
                "table": 534
            }
        ]
    },
    "QAK": {
        "desc": "Query Acknowledgment",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query Tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "ID",
                "desc": "Query Response Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 208
            },
            {
                "datatype": "CE",
                "desc": "Message Query Name",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 471
            },
            {
                "datatype": "NM",
                "desc": "Hit Count",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "This payload",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Hits remaining",
                "opt": 1,
                "rep": 1,
                "len": 10
            }
        ]
    },
    "QID": {
        "desc": "Query Identification",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query Tag",
                "opt": 2,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "CE",
                "desc": "Message Query Name",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 471
            }
        ]
    },
    "QPD": {
        "desc": "Query Parameter Definition",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Message Query Name",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 471
            },
            {
                "datatype": "ST",
                "desc": "Query Tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "VARIES",
                "desc": "User Parameters",
                "opt": 1,
                "rep": 1,
                "len": 256
            }
        ]
    },
    "QRD": {
        "desc": "Original-Style Query Definition",
        "fields": [
            {
                "datatype": "TS",
                "desc": "Query Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Query Format Code",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 106
            },
            {
                "datatype": "ID",
                "desc": "Query Priority",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 91
            },
            {
                "datatype": "ST",
                "desc": "Query ID",
                "opt": 2,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ID",
                "desc": "Deferred Response Type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 107
            },
            {
                "datatype": "TS",
                "desc": "Deferred Response Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CQ",
                "desc": "Quantity Limited Request",
                "opt": 2,
                "rep": 1,
                "len": 10,
                "table": 126
            },
            {
                "datatype": "XCN",
                "desc": "Who Subject Filter",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "What Subject Filter",
                "opt": 2,
                "rep": 0,
                "len": 250,
                "table": 48
            },
            {
                "datatype": "CE",
                "desc": "What Department Data Code",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "VR",
                "desc": "What Data Code Value Qual.",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Query Results Level",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 108
            }
        ]
    },
    "QRF": {
        "desc": "Original style query filter",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Where Subject Filter",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "When Data Start Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "When Data End Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "What User Qualifier",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Other QRY Subject Filter",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Which Date/Time Qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 156
            },
            {
                "datatype": "ID",
                "desc": "Which Date/Time Status Qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 157
            },
            {
                "datatype": "ID",
                "desc": "Date/Time Selection Qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 158
            },
            {
                "datatype": "TQ",
                "desc": "When Quantity/Timing Qualifier",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Search Confidence Threshold",
                "opt": 1,
                "rep": 1,
                "len": 10
            }
        ]
    },
    "QRI": {
        "desc": "Query Response Instance",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Candidate Confidence",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "IS",
                "desc": "Match Reason Code",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 392
            },
            {
                "datatype": "CE",
                "desc": "Algorithm Descriptor",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 393
            }
        ]
    },
    "RCP": {
        "desc": "Response Control Parameter",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Query Priority",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 91
            },
            {
                "datatype": "CQ",
                "desc": "Quantity Limited Request",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 126
            },
            {
                "datatype": "CE",
                "desc": "Response Modality",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 394
            },
            {
                "datatype": "TS",
                "desc": "Execution and Delivery Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Modify Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 395
            },
            {
                "datatype": "SRT",
                "desc": "Sort-by Field",
                "opt": 1,
                "rep": 0,
                "len": 512
            },
            {
                "datatype": "ID",
                "desc": "Segment group inclusion",
                "opt": 1,
                "rep": 0,
                "len": 256
            }
        ]
    },
    "RDF": {
        "desc": "Table Row Definition",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Number of Columns per Row",
                "opt": 2,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "RCD",
                "desc": "Column Description",
                "opt": 2,
                "rep": 0,
                "len": 40,
                "table": 440
            }
        ]
    },
    "RDT": {
        "desc": "Table Row Data",
        "fields": [
            {
                "datatype": "VARIES",
                "desc": "Column Value",
                "opt": 2,
                "rep": 1,
                "len": 99999
            }
        ]
    },
    "RF1": {
        "desc": "Referral Information",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Referral Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 283
            },
            {
                "datatype": "CE",
                "desc": "Referral Priority",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 280
            },
            {
                "datatype": "CE",
                "desc": "Referral Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 281
            },
            {
                "datatype": "CE",
                "desc": "Referral Disposition",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 282
            },
            {
                "datatype": "CE",
                "desc": "Referral Category",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 284
            },
            {
                "datatype": "EI",
                "desc": "Originating Referral Identifier",
                "opt": 2,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "TS",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Process Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Referral Reason",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 336
            },
            {
                "datatype": "EI",
                "desc": "External Referral Identifier",
                "opt": 1,
                "rep": 0,
                "len": 30
            }
        ]
    },
    "RGS": {
        "desc": "Resource Group",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - RGS",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Segment Action Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 206
            },
            {
                "datatype": "CE",
                "desc": "Resource Group ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "RMI": {
        "desc": "Risk Management Incident",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Risk Management Incident Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 427
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Incident",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Incident Type Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 428
            }
        ]
    },
    "ROL": {
        "desc": "Role",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Role Instance ID",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Action Code",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 287
            },
            {
                "datatype": "CE",
                "desc": "Role-ROL",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 443
            },
            {
                "datatype": "XCN",
                "desc": "Role Person",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Role Begin Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Role End Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Role Duration",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Role Action Reason",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Provider Type",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Organization Unit Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 406
            },
            {
                "datatype": "XAD",
                "desc": "Office/Home Address/Birthplace",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Phone",
                "opt": 1,
                "rep": 0,
                "len": 250
            }
        ]
    },
    "RQ1": {
        "desc": "Requisition Detail-1",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Anticipated Price",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "CE",
                "desc": "Manufacturer Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 385
            },
            {
                "datatype": "ST",
                "desc": "Manufacturer's Catalog",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CE",
                "desc": "Vendor ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Vendor Catalog",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "ID",
                "desc": "Taxable",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Substitute Allowed",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            }
        ]
    },
    "RQD": {
        "desc": "Requisition Detail",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Requisition Line Number",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Item Code - Internal",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Item Code - External",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Hospital Item Code",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Requisition Quantity",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "CE",
                "desc": "Requisition Unit of Measure",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Dept. Cost Center",
                "opt": 1,
                "rep": 1,
                "len": 30,
                "table": 319
            },
            {
                "datatype": "IS",
                "desc": "Item Natural Account Code",
                "opt": 1,
                "rep": 1,
                "len": 30,
                "table": 320
            },
            {
                "datatype": "CE",
                "desc": "Deliver To ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "DT",
                "desc": "Date Needed",
                "opt": 1,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "RXA": {
        "desc": "Pharmacy/Treatment Administration",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Give Sub-ID Counter",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Administration Sub-ID Counter",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Start of Administration",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Date/Time End of Administration",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Administered Code",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 292
            },
            {
                "datatype": "NM",
                "desc": "Administered Amount",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Administered Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Administered Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Administration Notes",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Administering Provider",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "LA2",
                "desc": "Administered-at Location",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ST",
                "desc": "Administered Per",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Administered Strength",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Administered Strength Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Substance Lot Number",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Substance Expiration Date",
                "opt": 1,
                "rep": 0,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Substance Manufacturer Name",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 227
            },
            {
                "datatype": "CE",
                "desc": "Substance/Treatment Refusal Reason",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Indication",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Completion Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 322
            },
            {
                "datatype": "ID",
                "desc": "Action Code - RXA",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 323
            },
            {
                "datatype": "TS",
                "desc": "System Entry Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Administered Drug Strength Volume",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CWE",
                "desc": "Administered Drug Strength Volume Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Administered Barcode Identifier",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Pharmacy Order Type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 480
            }
        ]
    },
    "RXC": {
        "desc": "Pharmacy/Treatment Component Order",
        "fields": [
            {
                "datatype": "ID",
                "desc": "RX Component Type",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 166
            },
            {
                "datatype": "CE",
                "desc": "Component Code",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Component Amount",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Component Units",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Component Strength",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Component Strength Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Supplementary Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Component Drug Strength Volume",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CWE",
                "desc": "Component Drug Strength Volume Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "RXD": {
        "desc": "Pharmacy/Treatment Dispense",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Dispense Sub-ID Counter",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Dispense/Give Code",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 292
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Dispensed",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Actual Dispense Amount",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Actual Dispense Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Actual Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Prescription Number",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Number of Refills Remaining",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Dispense Notes",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XCN",
                "desc": "Dispensing Provider",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Substitution Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 167
            },
            {
                "datatype": "CQ",
                "desc": "Total Daily Dose",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "LA2",
                "desc": "Dispense-to Location",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Needs Human Review",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Actual Strength",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Actual Strength Unit",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Substance Lot Number",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Substance Expiration Date",
                "opt": 1,
                "rep": 0,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Substance Manufacturer Name",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 227
            },
            {
                "datatype": "CE",
                "desc": "Indication",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Dispense Package Size",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Dispense Package Size Unit",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Dispense Package Method",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 321
            },
            {
                "datatype": "CE",
                "desc": "Supplementary Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Initiating Location",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Packaging/Assembly Location",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Actual Drug Strength Volume",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CWE",
                "desc": "Actual Drug Strength Volume Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Dispense to Pharmacy",
                "opt": 1,
                "rep": 1,
                "len": 180
            },
            {
                "datatype": "XAD",
                "desc": "Dispense to Pharmacy Address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "ID",
                "desc": "Pharmacy Order Type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 480
            },
            {
                "datatype": "CWE",
                "desc": "Dispense Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 484
            }
        ]
    },
    "RXE": {
        "desc": "Pharmacy/Treatment Encoded Order",
        "fields": [
            {
                "datatype": "TQ",
                "desc": "Quantity/Timing",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Give Code",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Give Amount - Minimum",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Give Amount - Maximum",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Give Units",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Give Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Provider's Administration Instructions",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "LA1",
                "desc": "Deliver-To Location",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Substitution Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 167
            },
            {
                "datatype": "NM",
                "desc": "Dispense Amount",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Dispense Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Number Of Refills",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "XCN",
                "desc": "Ordering Provider's DEA Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Pharmacist/Treatment Supplier's Verifier ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Prescription Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Number of Refills Remaining",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Number of Refills/Doses Dispensed",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "D/T of Most Recent Refill or Dose Dispensed",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CQ",
                "desc": "Total Daily Dose",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ID",
                "desc": "Needs Human Review",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Give Per",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Give Rate Amount",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "CE",
                "desc": "Give Rate Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Give Strength",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Give Strength Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Give Indication",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Dispense Package Size",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Dispense Package Size Unit",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Dispense Package Method",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 321
            },
            {
                "datatype": "CE",
                "desc": "Supplementary Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Original Order Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Give Drug Strength Volume",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CWE",
                "desc": "Give Drug Strength Volume Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Controlled Substance Schedule",
                "opt": 1,
                "rep": 1,
                "len": 60,
                "table": 477
            },
            {
                "datatype": "ID",
                "desc": "Formulary Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 478
            },
            {
                "datatype": "CWE",
                "desc": "Pharmaceutical Substance Alternative",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CWE",
                "desc": "Pharmacy of Most Recent Fill",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Initial Dispense Amount",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Dispensing Pharmacy",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Dispensing Pharmacy Address",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Deliver-to Patient Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XAD",
                "desc": "Deliver-to Address",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Pharmacy Order Type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 480
            }
        ]
    },
    "RXG": {
        "desc": "Pharmacy/Treatment Give",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Give Sub-ID Counter",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Dispense Sub-ID Counter",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "TQ",
                "desc": "Quantity/Timing",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Give Code",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 292
            },
            {
                "datatype": "NM",
                "desc": "Give Amount - Minimum",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Give Amount - Maximum",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Give Units",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Give Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Administration Notes",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Substitution Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 167
            },
            {
                "datatype": "LA2",
                "desc": "Dispense-to Location",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Needs Human Review",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Pharmacy/Treatment Supplier's Special Administration Instructions",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Give Per",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Give Rate Amount",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "CE",
                "desc": "Give Rate Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Give Strength",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Give Strength Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Substance Lot Number",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Substance Expiration Date",
                "opt": 1,
                "rep": 0,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Substance Manufacturer Name",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 227
            },
            {
                "datatype": "CE",
                "desc": "Indication",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Give Drug Strength Volume",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CWE",
                "desc": "Give Drug Strength Volume Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Give Barcode Identifier",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Pharmacy Order Type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 480
            }
        ]
    },
    "RXO": {
        "desc": "Pharmacy/Treatment Order",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Requested Give Code",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Requested Give Amount - Minimum",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Requested Give Amount - Maximum",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Requested Give Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Requested Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Provider's Pharmacy/Treatment Instructions",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Provider's Administration Instructions",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "LA1",
                "desc": "Deliver-To Location",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Allow Substitutions",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 161
            },
            {
                "datatype": "CE",
                "desc": "Requested Dispense Code",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Requested Dispense Amount",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Requested Dispense Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Number Of Refills",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "XCN",
                "desc": "Ordering Provider's DEA Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Pharmacist/Treatment Supplier's Verifier ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Needs Human Review",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ST",
                "desc": "Requested Give Per",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Requested Give Strength",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Requested Give Strength Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Indication",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Requested Give Rate Amount",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "CE",
                "desc": "Requested Give Rate Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CQ",
                "desc": "Total Daily Dose",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "CE",
                "desc": "Supplementary Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Requested Drug Strength Volume",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CWE",
                "desc": "Requested Drug Strength Volume Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Pharmacy Order Type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 480
            },
            {
                "datatype": "NM",
                "desc": "Dispensing Interval",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "RXR": {
        "desc": "Pharmacy/Treatment Route",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Route",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 162
            },
            {
                "datatype": "CWE",
                "desc": "Administration Site",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 163
            },
            {
                "datatype": "CE",
                "desc": "Administration Device",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 164
            },
            {
                "datatype": "CWE",
                "desc": "Administration Method",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 165
            },
            {
                "datatype": "CE",
                "desc": "Routing Instruction",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Administration Site Modifier",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 495
            }
        ]
    },
    "SAC": {
        "desc": "Specimen Container detail",
        "fields": [
            {
                "datatype": "EI",
                "desc": "External Accession Identifier",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "EI",
                "desc": "Accession Identifier",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "EI",
                "desc": "Container Identifier",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "EI",
                "desc": "Primary",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "EI",
                "desc": "Equipment Container Identifier",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "SPS",
                "desc": "Specimen Source",
                "opt": 1,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "TS",
                "desc": "Registration Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Container Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 370
            },
            {
                "datatype": "CE",
                "desc": "Carrier Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 378
            },
            {
                "datatype": "EI",
                "desc": "Carrier Identifier",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "NA",
                "desc": "Position in Carrier",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Tray Type - SAC",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 379
            },
            {
                "datatype": "EI",
                "desc": "Tray Identifier",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "NA",
                "desc": "Position in Tray",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Location",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Container Height",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Container Diameter",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Barrier Delta",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Bottom Delta",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Container Height/Diameter/Delta Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Container Volume",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Available Specimen Volume",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Initial Specimen Volume",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Volume Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Separator Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 380
            },
            {
                "datatype": "CE",
                "desc": "Cap Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 381
            },
            {
                "datatype": "CWE",
                "desc": "Additive",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 371
            },
            {
                "datatype": "CE",
                "desc": "Specimen Component",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "SN",
                "desc": "Dilution Factor",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Treatment",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 373
            },
            {
                "datatype": "SN",
                "desc": "Temperature",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Hemolysis Index",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Hemolysis Index Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Lipemia Index",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Lipemia Index Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Icterus Index",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Icterus Index Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "NM",
                "desc": "Fibrin Index",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Fibrin Index Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "System Induced Contaminants",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 374
            },
            {
                "datatype": "CE",
                "desc": "Drug Interference",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 382
            },
            {
                "datatype": "CE",
                "desc": "Artificial Blood",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 375
            },
            {
                "datatype": "CWE",
                "desc": "Special Handling Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 376
            },
            {
                "datatype": "CE",
                "desc": "Other Environmental Factors",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 377
            }
        ]
    },
    "SCH": {
        "desc": "Scheduling Activity Information",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Placer Appointment ID",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "EI",
                "desc": "Filler Appointment ID",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "NM",
                "desc": "Occurrence Number",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "EI",
                "desc": "Placer Group Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "CE",
                "desc": "Schedule ID",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Event Reason",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Appointment Reason",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 276
            },
            {
                "datatype": "CE",
                "desc": "Appointment Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 277
            },
            {
                "datatype": "NM",
                "desc": "Appointment Duration",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Appointment Duration Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TQ",
                "desc": "Appointment Timing Quantity",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XCN",
                "desc": "Placer Contact Person",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Placer Contact Phone Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Placer Contact Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Placer Contact Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XCN",
                "desc": "Filler Contact Person",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Filler Contact Phone Number",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Filler Contact Address",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Filler Contact Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XCN",
                "desc": "Entered By Person",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XTN",
                "desc": "Entered By Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "PL",
                "desc": "Entered By Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "EI",
                "desc": "Parent Placer Appointment ID",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "EI",
                "desc": "Parent Filler Appointment ID",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "CE",
                "desc": "Filler Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 278
            },
            {
                "datatype": "EI",
                "desc": "Placer Order Number",
                "opt": 1,
                "rep": 0,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 0,
                "len": 22
            }
        ]
    },
    "SFT": {
        "desc": "Software Segment",
        "fields": [
            {
                "datatype": "XON",
                "desc": "Software Vendor Organization",
                "opt": 2,
                "rep": 1,
                "len": 567
            },
            {
                "datatype": "ST",
                "desc": "Software Certified Version or Release Number",
                "opt": 2,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Software Product Name",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Software Binary ID",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TX",
                "desc": "Software Product Information",
                "opt": 1,
                "rep": 1,
                "len": 1024
            },
            {
                "datatype": "TS",
                "desc": "Software Install Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "SID": {
        "desc": "Substance Identifier",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Application / Method Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Substance Lot Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Substance Container Identifier",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Substance Manufacturer Identifier",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 385
            }
        ]
    },
    "SPM": {
        "desc": "Specimen",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID _ SPM",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EIP",
                "desc": "Specimen ID",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "EIP",
                "desc": "Specimen Parent IDs",
                "opt": 1,
                "rep": 0,
                "len": 80
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Type",
                "opt": 2,
                "rep": 1,
                "len": 250,
                "table": 487
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Type Modifier",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 541
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Additives",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 371
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Collection Method",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 488
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Source Site",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Source Site Modifier",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 542
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Collection Site",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 543
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Role",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 369
            },
            {
                "datatype": "CQ",
                "desc": "Specimen Collection Amount",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Grouped Specimen Count",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "ST",
                "desc": "Specimen Description",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Handling Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 376
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Risk Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 489
            },
            {
                "datatype": "DR",
                "desc": "Specimen Collection Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Specimen Received Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Specimen Expiration Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Specimen Availability",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Reject Reason",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 490
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Quality",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 491
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Appropriateness",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 492
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Condition",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 493
            },
            {
                "datatype": "CQ",
                "desc": "Specimen Current Quantity",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Number of Specimen Containers",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Container Type",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CWE",
                "desc": "Container Condition",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 544
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Child Role",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 494
            }
        ]
    },
    "SPR": {
        "desc": "Stored Procedure Request Definition",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query Tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "ID",
                "desc": "Query/Response Format Code",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 106
            },
            {
                "datatype": "CE",
                "desc": "Stored Procedure Name",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "QIP",
                "desc": "Input Parameter List",
                "opt": 1,
                "rep": 0,
                "len": 256
            }
        ]
    },
    "STF": {
        "desc": "Staff Identification",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Primary Key Value - STF",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CX",
                "desc": "Staff Identifier List",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XPN",
                "desc": "Staff Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "IS",
                "desc": "Staff Type",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 182
            },
            {
                "datatype": "IS",
                "desc": "Administrative Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "TS",
                "desc": "Date/Time of Birth",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Active/Inactive Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 183
            },
            {
                "datatype": "CE",
                "desc": "Department",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 184
            },
            {
                "datatype": "CE",
                "desc": "Hospital Service - STF",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 69
            },
            {
                "datatype": "XTN",
                "desc": "Phone",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XAD",
                "desc": "Office/Home Address/Birthplace",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "DIN",
                "desc": "Institution Activation Date",
                "opt": 1,
                "rep": 0,
                "len": 276,
                "table": 537
            },
            {
                "datatype": "DIN",
                "desc": "Institution Inactivation Date",
                "opt": 1,
                "rep": 0,
                "len": 276,
                "table": 537
            },
            {
                "datatype": "CE",
                "desc": "Backup Person ID",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "E-Mail Address",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "Preferred Method of Contact",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 185
            },
            {
                "datatype": "CE",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 2
            },
            {
                "datatype": "ST",
                "desc": "Job Title",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "JCC",
                "desc": "Job Code/Class",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Employment Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 66
            },
            {
                "datatype": "ID",
                "desc": "Additional Insured on Auto",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DLN",
                "desc": "Driver's License Number - Staff",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "ID",
                "desc": "Copy Auto Ins",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DT",
                "desc": "Auto Ins. Expires",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Date Last DMV Review",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Date Next DMV Review",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CE",
                "desc": "Race",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 5
            },
            {
                "datatype": "CE",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 189
            },
            {
                "datatype": "ID",
                "desc": "Re-activation Approval Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 171
            },
            {
                "datatype": "TS",
                "desc": "Death Date and Time",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Death Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "Institution Relationship Type Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 538
            },
            {
                "datatype": "DR",
                "desc": "Institution Relationship Period",
                "opt": 1,
                "rep": 1,
                "len": 52
            },
            {
                "datatype": "DT",
                "desc": "Expected Return Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CWE",
                "desc": "Cost Center Code",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 539
            },
            {
                "datatype": "ID",
                "desc": "Generic Classification Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "Inactive Reason Code",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 540
            }
        ]
    },
    "TCC": {
        "desc": "Test Code Configuration",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "Test Application Identifier",
                "opt": 2,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "SPS",
                "desc": "Specimen Source",
                "opt": 1,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "SN",
                "desc": "Auto-Dilution Factor Default",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "SN",
                "desc": "Rerun Dilution Factor Default",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "SN",
                "desc": "Pre-Dilution Factor Default",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "SN",
                "desc": "Endogenous Content of Pre-Dilution Diluent",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Inventory Limits Warning Level",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ID",
                "desc": "Automatic Rerun Allowed",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Automatic Repeat Allowed",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Automatic Reflex Allowed",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "SN",
                "desc": "Equipment Dynamic Range",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Units",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Processing Type",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 388
            }
        ]
    },
    "TCD": {
        "desc": "Test Code Detail",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "SN",
                "desc": "Auto-Dilution Factor",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "SN",
                "desc": "Rerun Dilution Factor",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "SN",
                "desc": "Pre-Dilution Factor",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "SN",
                "desc": "Endogenous Content of Pre-Dilution Diluent",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Automatic Repeat Allowed",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Reflex Allowed",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CE",
                "desc": "Analyte Repeat Status",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 389
            }
        ]
    },
    "TQ1": {
        "desc": "Timing/Quantity",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - TQ1",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CQ",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "RPT",
                "desc": "Repeat Pattern",
                "opt": 1,
                "rep": 0,
                "len": 540,
                "table": 335
            },
            {
                "datatype": "TM",
                "desc": "Explicit Time",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "CQ",
                "desc": "Relative Time and Units",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "CQ",
                "desc": "Service Duration",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Start date/time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "End date/time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CWE",
                "desc": "Priority",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 485
            },
            {
                "datatype": "TX",
                "desc": "Condition text",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "TX",
                "desc": "Text instruction",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ID",
                "desc": "Conjunction",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 427
            },
            {
                "datatype": "CQ",
                "desc": "Occurrence duration",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Total occurrence's",
                "opt": 1,
                "rep": 1,
                "len": 10
            }
        ]
    },
    "TQ2": {
        "desc": "Timing/Quantity Relationship",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - TQ2",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Sequence/Results Flag",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 503
            },
            {
                "datatype": "EI",
                "desc": "Related Placer Number",
                "opt": 1,
                "rep": 0,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Related Filler Number",
                "opt": 1,
                "rep": 0,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Related Placer Group Number",
                "opt": 1,
                "rep": 0,
                "len": 22
            },
            {
                "datatype": "ID",
                "desc": "Sequence Condition Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 504
            },
            {
                "datatype": "ID",
                "desc": "Cyclic Entry/Exit Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 505
            },
            {
                "datatype": "CQ",
                "desc": "Sequence Condition Time Interval",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Cyclic Group Maximum Number of Repeats",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ID",
                "desc": "Special Service Request Relationship",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 506
            }
        ]
    },
    "TXA": {
        "desc": "Transcription Document Header",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID- TXA",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "IS",
                "desc": "Document Type",
                "opt": 2,
                "rep": 1,
                "len": 30,
                "table": 270
            },
            {
                "datatype": "ID",
                "desc": "Document Content Presentation",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 191
            },
            {
                "datatype": "TS",
                "desc": "Activity Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Primary Activity Provider Code/Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "TS",
                "desc": "Origination Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Transcription Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Edit Date/Time",
                "opt": 1,
                "rep": 0,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Originator Code/Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Assigned Document Authenticator",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Transcriptionist Code/Name",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "Unique Document Number",
                "opt": 2,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "EI",
                "desc": "Parent Document Number",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "EI",
                "desc": "Placer Order Number",
                "opt": 1,
                "rep": 0,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "ST",
                "desc": "Unique Document File Name",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ID",
                "desc": "Document Completion Status",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 271
            },
            {
                "datatype": "ID",
                "desc": "Document Confidentiality Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 272
            },
            {
                "datatype": "ID",
                "desc": "Document Availability Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 273
            },
            {
                "datatype": "ID",
                "desc": "Document Storage Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 275
            },
            {
                "datatype": "ST",
                "desc": "Document Change Reason",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "PPN",
                "desc": "Authentication Person, Time Stamp",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "XCN",
                "desc": "Distributed Copies",
                "opt": 1,
                "rep": 0,
                "len": 250
            }
        ]
    },
    "UB1": {
        "desc": "UB82",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - UB1",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Blood Deductible",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "NM",
                "desc": "Blood Furnished-Pints Of",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Blood Replaced-Pints",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Blood Not Replaced-Pints",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Co-Insurance Days",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "IS",
                "desc": "Condition Code",
                "opt": 1,
                "rep": 0,
                "len": 14,
                "table": 43
            },
            {
                "datatype": "NM",
                "desc": "Covered Days -",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Non Covered Days -",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "UVC",
                "desc": "Value Amount and Code",
                "opt": 1,
                "rep": 0,
                "len": 41
            },
            {
                "datatype": "NM",
                "desc": "Number Of Grace Days",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "CE",
                "desc": "Special Program Indicator",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 348
            },
            {
                "datatype": "CE",
                "desc": "PSRO/UR Approval Indicator",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 349
            },
            {
                "datatype": "DT",
                "desc": "PSRO/UR Approved Stay-Fm",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "PSRO/UR Approved Stay-To",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "OCD",
                "desc": "Occurrence",
                "opt": 1,
                "rep": 0,
                "len": 259
            },
            {
                "datatype": "CE",
                "desc": "Occurrence Span",
                "opt": 1,
                "rep": 1,
                "len": 250,
                "table": 351
            },
            {
                "datatype": "DT",
                "desc": "Occur Span Start Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Occur Span End Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "UB-82 Locator 2",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "UB-82 Locator 9",
                "opt": 1,
                "rep": 1,
                "len": 7
            },
            {
                "datatype": "ST",
                "desc": "UB-82 Locator 27",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "UB-82 Locator 45",
                "opt": 1,
                "rep": 1,
                "len": 17
            }
        ]
    },
    "UB2": {
        "desc": "UB92 Data",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - UB2",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Co-Insurance Days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "IS",
                "desc": "Condition Code",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 43
            },
            {
                "datatype": "ST",
                "desc": "Covered Days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "ST",
                "desc": "Non-Covered Days",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "UVC",
                "desc": "Value Amount and Code",
                "opt": 1,
                "rep": 0,
                "len": 41
            },
            {
                "datatype": "OCD",
                "desc": "Occurrence Code and Date",
                "opt": 1,
                "rep": 0,
                "len": 259
            },
            {
                "datatype": "OSP",
                "desc": "Occurrence Span Code/Dates",
                "opt": 1,
                "rep": 0,
                "len": 268
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 2",
                "opt": 1,
                "rep": 0,
                "len": 29
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 11",
                "opt": 1,
                "rep": 0,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 31",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "ST",
                "desc": "Document Control Number",
                "opt": 1,
                "rep": 0,
                "len": 23
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 49",
                "opt": 1,
                "rep": 0,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 56",
                "opt": 1,
                "rep": 0,
                "len": 14
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 57",
                "opt": 1,
                "rep": 1,
                "len": 27
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 78",
                "opt": 1,
                "rep": 0,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Special Visit Count",
                "opt": 1,
                "rep": 1,
                "len": 3
            }
        ]
    },
    "URD": {
        "desc": "Results/update Definition",
        "fields": [
            {
                "datatype": "TS",
                "desc": "R/U Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Report Priority",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 109
            },
            {
                "datatype": "XCN",
                "desc": "R/U Who Subject Definition",
                "opt": 2,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "R/U What Subject Definition",
                "opt": 1,
                "rep": 0,
                "len": 250,
                "table": 48
            },
            {
                "datatype": "CE",
                "desc": "R/U What Department Code",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "R/U Display/Print Locations",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "R/U Results Level",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 108
            }
        ]
    },
    "URS": {
        "desc": "Unsolicited Selection",
        "fields": [
            {
                "datatype": "ST",
                "desc": "R/U Where Subject Definition",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "R/U When Data Start Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "R/U When Data End Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "R/U What User Qualifier",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "R/U Other Results Subject Definition",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "R/U Which Date/Time Qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 156
            },
            {
                "datatype": "ID",
                "desc": "R/U Which Date/Time Status Qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 157
            },
            {
                "datatype": "ID",
                "desc": "R/U Date/Time Selection Qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 158
            },
            {
                "datatype": "TQ",
                "desc": "R/U Quantity/Timing Qualifier",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "VAR": {
        "desc": "Variance",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Variance Instance ID",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Documented Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Stated Variance Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Variance Originator",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Variance Classification",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Variance Description",
                "opt": 1,
                "rep": 0,
                "len": 512
            }
        ]
    },
    "VTQ": {
        "desc": "Virtual Table Query Request",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query Tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "ID",
                "desc": "Query/Response Format Code",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 106
            },
            {
                "datatype": "CE",
                "desc": "VT Query Name",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Virtual Table Name",
                "opt": 2,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "QSC",
                "desc": "Selection Criteria",
                "opt": 1,
                "rep": 0,
                "len": 256
            }
        ]
    }
};

module.exports = segments;
