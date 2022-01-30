var segments = {
    "ABS": {
        "desc": "Abstract",
        "fields": [
            {
                "datatype": "XCN",
                "desc": "Discharge Care Provider",
                "opt": 1,
                "rep": 1,
                "table": 10
            },
            {
                "datatype": "CWE",
                "desc": "Transfer Medical Service Code",
                "opt": 1,
                "rep": 1,
                "table": 69
            },
            {
                "datatype": "CWE",
                "desc": "Severity of Illness Code",
                "opt": 1,
                "rep": 1,
                "table": 421
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of Attestation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Attested By",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Triage Code",
                "opt": 1,
                "rep": 1,
                "table": 422
            },
            {
                "datatype": "DTM",
                "desc": "Abstract Completion Date/Time ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Abstracted By",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Case Category Code",
                "opt": 1,
                "rep": 1,
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
                "datatype": "CWE",
                "desc": "Gestation Category Code",
                "opt": 1,
                "rep": 1,
                "table": 424
            },
            {
                "datatype": "NM",
                "desc": "Gestation Period - Weeks",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Newborn Code",
                "opt": 1,
                "rep": 1,
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
                "datatype": "DTM",
                "desc": "Accident Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Accident Code",
                "opt": 1,
                "rep": 1,
                "table": 50
            },
            {
                "datatype": "ST",
                "desc": "Accident Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Auto Accident State",
                "opt": 1,
                "rep": 1,
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
                "len": 1,
                "table": 136
            },
            {
                "datatype": "XCN",
                "desc": "Entered By",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Accident Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Brought In By",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Degree of patient liability",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            }
        ]
    },
    "ADJ": {
        "desc": "Adjustment",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Provider Adjustment Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Payer Adjustment Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "SI",
                "desc": "Adjustment Sequence Number",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Adjustment Category",
                "opt": 2,
                "rep": 1,
                "table": 564
            },
            {
                "datatype": "CP",
                "desc": "Adjustment Amount",
                "opt": 1,
                "rep": 5
            },
            {
                "datatype": "CQ",
                "desc": "Adjustment Quantity",
                "opt": 1,
                "rep": 1,
                "table": 560
            },
            {
                "datatype": "CWE",
                "desc": "Adjustment Reason PA",
                "opt": 3,
                "rep": 1,
                "table": 565
            },
            {
                "datatype": "ST",
                "desc": "Adjustment Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Original Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Substitute Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Adjustment Action",
                "opt": 1,
                "rep": 1,
                "table": 569
            },
            {
                "datatype": "EI",
                "desc": "Provider Adjustment Number Cross Reference",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Provider Product/Service Line Item Number Cross Reference",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Adjustment Date",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Responsible Organization ",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "AFF": {
        "desc": "Professional Affiliation",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - AFF",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "XON",
                "desc": "Professional Organization",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Professional Organization Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DR",
                "desc": "Professional Organization Affiliation Date Range",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Professional Affiliation Additional Information",
                "opt": 1,
                "rep": 1
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
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 206
            },
            {
                "datatype": "CWE",
                "desc": "Resource ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Resource Type",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Resource Group",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Resource Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Resource Quantity Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Start Date/Time",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Start Date/Time Offset",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Start Date/Time Offset Units",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Duration Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Allow Substitution Code",
                "opt": 3,
                "rep": 1,
                "table": 279
            },
            {
                "datatype": "CWE",
                "desc": "Filler Status Code",
                "opt": 3,
                "rep": 1,
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
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 206
            },
            {
                "datatype": "PL",
                "desc": "Location Resource ID",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Location Type - AIL",
                "opt": 3,
                "rep": 1,
                "table": 305
            },
            {
                "datatype": "CWE",
                "desc": "Location Group",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Start Date/Time",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Start Date/Time Offset",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Start Date/Time Offset Units",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Duration Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Allow Substitution Code",
                "opt": 3,
                "rep": 1,
                "table": 279
            },
            {
                "datatype": "CWE",
                "desc": "Filler Status Code",
                "opt": 3,
                "rep": 1,
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
                "desc": "Segment Action code",
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 206
            },
            {
                "datatype": "XCN",
                "desc": "Personnel Resource ID",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Resource Type",
                "opt": 3,
                "rep": 1,
                "table": 182
            },
            {
                "datatype": "CWE",
                "desc": "Resource Group",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Start Date/Time",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Start Date/Time Offset",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Start Date/Time Offset Units",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Duration Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Allow Substitution Code",
                "opt": 3,
                "rep": 1,
                "table": 279
            },
            {
                "datatype": "CWE",
                "desc": "Filler Status Code",
                "opt": 3,
                "rep": 1,
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
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 206
            },
            {
                "datatype": "CWE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Start Date/Time",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Start Date/Time Offset",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Start Date/Time Offset Units",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Duration Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Allow Substitution Code",
                "opt": 3,
                "rep": 1,
                "table": 279
            },
            {
                "datatype": "CWE",
                "desc": "Filler Status Code",
                "opt": 3,
                "rep": 1,
                "table": 278
            },
            {
                "datatype": "CWE",
                "desc": "Placer Supplemental Service Information",
                "opt": 1,
                "rep": 0,
                "table": 411
            },
            {
                "datatype": "CWE",
                "desc": "Filler Supplemental Service Information",
                "opt": 1,
                "rep": 0,
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
                "datatype": "CWE",
                "desc": "Allergen Type Code",
                "opt": 1,
                "rep": 1,
                "table": 127
            },
            {
                "datatype": "CWE",
                "desc": "Allergen Code/Mnemonic/Description",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Allergy Severity Code",
                "opt": 1,
                "rep": 1,
                "table": 128
            },
            {
                "datatype": "ST",
                "desc": "Allergy Reaction Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Identification Date",
                "opt": 4,
                "rep": 1
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
                "table": 294
            },
            {
                "datatype": "SCV",
                "desc": "Resource Selection Criteria",
                "opt": 1,
                "rep": 0,
                "table": 294
            },
            {
                "datatype": "SCV",
                "desc": "Location Selection Criteria",
                "opt": 1,
                "rep": 0,
                "table": 294
            },
            {
                "datatype": "NM",
                "desc": "Slot Spacing Criteria",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SCV",
                "desc": "Filler Override Criteria",
                "opt": 1,
                "rep": 0
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
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Filler Appointment ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Occurrence Number",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Placer Group Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Schedule ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Request Event Reason",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Appointment Reason",
                "opt": 1,
                "rep": 1,
                "table": 276
            },
            {
                "datatype": "CWE",
                "desc": "Appointment Type",
                "opt": 1,
                "rep": 1,
                "table": 277
            },
            {
                "datatype": "NM",
                "desc": "Appointment Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Appointment Duration Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DR",
                "desc": "Requested Start Date/Time Range",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Priority-ARQ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "RI",
                "desc": "Repeating Interval",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Repeating Interval Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Placer Contact Person",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Placer Contact Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Placer Contact Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Placer Contact Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Entered By Person",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Entered By Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Entered By Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Parent Placer Appointment ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Parent Filler Appointment ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Placer Order Number",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 3,
                "rep": 0
            }
        ]
    },
    "ARV": {
        "desc": "Access Restriction",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CNE",
                "desc": "Access Restriction Action Code",
                "opt": 2,
                "rep": 1,
                "table": 206
            },
            {
                "datatype": "CWE",
                "desc": "Access Restriction Value",
                "opt": 2,
                "rep": 1,
                "table": 717
            },
            {
                "datatype": "CWE",
                "desc": "Access Restriction Reason",
                "opt": 1,
                "rep": 0,
                "table": 719
            },
            {
                "datatype": "ST",
                "desc": "Special Access Restriction Instructions",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DR",
                "desc": "Access Restriction Date Range ",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "AUT": {
        "desc": "Authorization Information",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Authorizing Payor, Plan ID",
                "opt": 1,
                "rep": 1,
                "table": 72
            },
            {
                "datatype": "CWE",
                "desc": "Authorizing Payor, Company ID",
                "opt": 2,
                "rep": 1,
                "table": 285
            },
            {
                "datatype": "ST",
                "desc": "Authorizing Payor, Company Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Authorization Effective Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Authorization Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Authorization Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Reimbursement Limit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Requested Number of Treatments",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Authorized Number of Treatments",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Process Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Requested Discipline(s)",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Authorized Discipline(s)",
                "opt": 1,
                "rep": 0
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
                "len": 5
            },
            {
                "datatype": "HD",
                "desc": "Batch Sending Application",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Batch Sending Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Batch Receiving Application",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Batch Receiving Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Batch Creation Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Batch Security",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Batch Name/ID/Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Batch Comment",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Batch Control ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Reference Batch Control ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Batch Sending Network Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Batch Receiving Network Address",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "BLC": {
        "desc": "Blood Code",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Blood Product Code",
                "opt": 1,
                "rep": 1,
                "table": 426
            },
            {
                "datatype": "CQ",
                "desc": "Blood Amount",
                "opt": 1,
                "rep": 1
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
                "table": 100
            },
            {
                "datatype": "ID",
                "desc": "Charge Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 122
            },
            {
                "datatype": "CX",
                "desc": "Account ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Charge Type Reason",
                "opt": 1,
                "rep": 1,
                "table": 475
            }
        ]
    },
    "BPO": {
        "desc": "Blood product order",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - BPO",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "BP Universal Service Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "BP  Processing Requirements",
                "opt": 1,
                "rep": 0,
                "table": 508
            },
            {
                "datatype": "NM",
                "desc": "BP Quantity",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "BP Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "BP Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "BP Intended Use Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "BP Intended Dispense From Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "BP Intended Dispense From Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "BP Requested Dispense Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "BP Requested Dispense To Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "BP Requested Dispense To Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "BP Indication for Use",
                "opt": 1,
                "rep": 0,
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
                "desc": "Set ID - BPX",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "BP Dispense Status",
                "opt": 2,
                "rep": 1,
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
                "datatype": "DTM",
                "desc": "BP Date/Time of Status",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "BC Donation ID ",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "BC Component ",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "BC Donation Type / Intended Use ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "CP Commercial Product ",
                "opt": 3,
                "rep": 1,
                "table": 512
            },
            {
                "datatype": "XON",
                "desc": "CP Manufacturer ",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "CP Lot Number ",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "BP Blood Group ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "BC Special Testing ",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "BP Expiration Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "BP Quantity",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "BP Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "BP Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "BP Unique ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "BP Actual Dispensed To Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "BP Actual Dispensed To Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "BP Dispensed to Receiver",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "BP Dispensing Individual",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Batch Comment",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Batch Totals",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "BTX": {
        "desc": "Blood Product Transfusion/Disposition",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - BTX",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EI",
                "desc": "BC Donation ID ",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "BC Component ",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "BC Blood Group",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "CP Commercial Product ",
                "opt": 3,
                "rep": 1,
                "table": 512
            },
            {
                "datatype": "XON",
                "desc": "CP Manufacturer ",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "CP Lot Number",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "BP Quantity",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "BP Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "BP Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "BP Transfusion/Disposition Status",
                "opt": 2,
                "rep": 1,
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
                "datatype": "DTM",
                "desc": "BP Date/Time of Status",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "BP Transfusion Administrator",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "BP Transfusion Verifier ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "BP Transfusion Start Date/Time of Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "BP Transfusion End Date/Time of Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "BP Adverse Reaction Type",
                "opt": 1,
                "rep": 0,
                "table": 514
            },
            {
                "datatype": "CWE",
                "desc": "BP Transfusion Interrupted Reason",
                "opt": 1,
                "rep": 1,
                "table": 515
            }
        ]
    },
    "CDM": {
        "desc": "Charge Description Master",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Primary Key Value - CDM",
                "opt": 2,
                "rep": 1,
                "table": 132
            },
            {
                "datatype": "CWE",
                "desc": "Charge Code Alias",
                "opt": 1,
                "rep": 0,
                "table": 132
            },
            {
                "datatype": "ST",
                "desc": "Charge Description Short",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Charge Description Long",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Description Override Indicator",
                "opt": 1,
                "rep": 1,
                "table": 268
            },
            {
                "datatype": "CWE",
                "desc": "Exploding Charges",
                "opt": 1,
                "rep": 0,
                "table": 132
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 0,
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
                "datatype": "CWE",
                "desc": "Inventory Number",
                "opt": 1,
                "rep": 0,
                "table": 463
            },
            {
                "datatype": "NM",
                "desc": "Resource Load",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Contract Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XON",
                "desc": "Contract Organization",
                "opt": 1,
                "rep": 0
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
                "desc": "Set ID - CER",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Serial Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Version",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Granting Authority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Issuing Authority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ED",
                "desc": "Signature ",
                "opt": 1,
                "rep": 1
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
                "table": 347
            },
            {
                "datatype": "CWE",
                "desc": "Granting County/Parish",
                "opt": 1,
                "rep": 1,
                "table": 289
            },
            {
                "datatype": "CWE",
                "desc": "Certificate Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Certificate Domain",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Subject ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Subject Name",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Subject Directory Attribute Extension",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Subject Public Key Info",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Authority Key Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Basic Constraint",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "CRL Distribution Point",
                "opt": 1,
                "rep": 0
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
                "table": 347
            },
            {
                "datatype": "CWE",
                "desc": "Jurisdiction County/Parish",
                "opt": 1,
                "rep": 1,
                "table": 289
            },
            {
                "datatype": "CWE",
                "desc": "Jurisdiction Breadth",
                "opt": 1,
                "rep": 0,
                "table": 547
            },
            {
                "datatype": "DTM",
                "desc": "Granting Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Issuing Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Activation Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Inactivation Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Renewal Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Revocation Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Revocation Reason Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Certificate Status Code",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Alternate Study ID",
                "opt": 1,
                "rep": 3
            },
            {
                "datatype": "ST",
                "desc": "Title of Study",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Chairman of Study",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DT",
                "desc": "Last IRB Approval Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Total Accrual to Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Last Accrual Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Contact for Study",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Contact's Telephone Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Contact's Address",
                "opt": 1,
                "rep": 0
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
                "datatype": "CWE",
                "desc": "Study Phase Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Description of Study Phase",
                "opt": 2,
                "rep": 1
            }
        ]
    },
    "CM2": {
        "desc": "Clinical Study Schedule Master",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID- CM2",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Scheduled Time Point",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Description of Time Point",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Events Scheduled This Time Point",
                "opt": 2,
                "rep": 200
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Ending Notification Reference Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Starting Notification Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Ending Notification Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Starting Notification Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Ending Notification Code",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CON": {
        "desc": "Consent Segment",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - CON",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Consent Type",
                "opt": 1,
                "rep": 1,
                "table": 496
            },
            {
                "datatype": "ST",
                "desc": "Consent Form ID and Version",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Consent Form Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "FT",
                "desc": "Consent Text",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "FT",
                "desc": "Subject-specific Consent Text",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "FT",
                "desc": "Consent Background Information",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "FT",
                "desc": "Subject-specific Consent Background Text",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "FT",
                "desc": "Consenter-imposed limitations",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CNE",
                "desc": "Consent Mode",
                "opt": 1,
                "rep": 1,
                "table": 497
            },
            {
                "datatype": "CNE",
                "desc": "Consent Status",
                "opt": 2,
                "rep": 1,
                "table": 498
            },
            {
                "datatype": "DTM",
                "desc": "Consent Discussion Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Consent Decision Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Consent Effective Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Consent End Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Subject Competence Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Translator Assistance Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "Language Translated To",
                "opt": 1,
                "rep": 1,
                "table": 296
            },
            {
                "datatype": "ID",
                "desc": "Informational Material Supplied Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "Consent Bypass Reason",
                "opt": 1,
                "rep": 1,
                "table": 499
            },
            {
                "datatype": "ID",
                "desc": "Consent Disclosure Level",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 500
            },
            {
                "datatype": "CWE",
                "desc": "Consent Non-disclosure Reason",
                "opt": 1,
                "rep": 1,
                "table": 501
            },
            {
                "datatype": "CWE",
                "desc": "Non-subject Consenter Reason",
                "opt": 1,
                "rep": 1,
                "table": 502
            },
            {
                "datatype": "XPN",
                "desc": "Consenter ID",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Relationship to Subject ",
                "opt": 2,
                "rep": 0,
                "table": 548
            }
        ]
    },
    "CSP": {
        "desc": "Clinical Study Phase",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Study Phase Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/time Study Phase Began",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/time Study Phase Ended",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Study Phase Evaluability",
                "opt": 3,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Alternate Study ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Institution Registering the Patient",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Sponsor Patient ID  ",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Alternate Patient ID - CSR",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of Patient Study Registration",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Person Performing Study Registration",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Study Authorizing Provider ",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time Patient Study Consent Signed",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Patient Study Eligibility Status",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Study Randomization Date/time",
                "opt": 1,
                "rep": 3
            },
            {
                "datatype": "CWE",
                "desc": "Randomized Study Arm",
                "opt": 1,
                "rep": 3
            },
            {
                "datatype": "CWE",
                "desc": "Stratum for Study Randomization",
                "opt": 1,
                "rep": 3
            },
            {
                "datatype": "CWE",
                "desc": "Patient Evaluability Status",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time Ended Study",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Reason Ended Study",
                "opt": 3,
                "rep": 1
            }
        ]
    },
    "CSS": {
        "desc": "Clinical Study Data Schedule Segment",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Study Scheduled Time Point",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Study Scheduled Patient Time Point ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Study Quality Control Codes",
                "opt": 1,
                "rep": 3
            }
        ]
    },
    "CTD": {
        "desc": "Contact Data",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Contact Role",
                "opt": 2,
                "rep": 0,
                "table": 131
            },
            {
                "datatype": "XPN",
                "desc": "Contact Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Contact Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Contact Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XTN",
                "desc": "Contact Communication Information",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Preferred Method of Contact ",
                "opt": 1,
                "rep": 1,
                "table": 185
            },
            {
                "datatype": "PLN",
                "desc": "Contact Identifiers",
                "opt": 1,
                "rep": 0,
                "table": 338
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Study Phase Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Study Scheduled Time Point",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Disabled Person Code",
                "opt": 1,
                "rep": 1,
                "table": 334
            },
            {
                "datatype": "CX",
                "desc": "Disabled Person Identifier",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "Disability Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DT",
                "desc": "Disability Start Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Disability End Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Disability Return to Work Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Disability Unable to Work Date",
                "opt": 1,
                "rep": 1
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
                "datatype": "ST",
                "desc": "Diagnosis Coding Method ",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Diagnosis Code - DG1 ",
                "opt": 2,
                "rep": 1,
                "table": 51
            },
            {
                "datatype": "ST",
                "desc": "Diagnosis Description",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Diagnosis Date/Time ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Diagnosis Type",
                "opt": 2,
                "rep": 1,
                "table": 52
            },
            {
                "datatype": "ST",
                "desc": "Major Diagnostic Category",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Diagnostic Related Group ",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "DRG Approval Indicator ",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "DRG Grouper Review Code",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Outlier Type ",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Outlier Days ",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Outlier Cost",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Grouper Version And Type",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Diagnosis Priority",
                "opt": 1,
                "rep": 1,
                "table": 359
            },
            {
                "datatype": "XCN",
                "desc": "Diagnosing Clinician",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Diagnosis Classification",
                "opt": 1,
                "rep": 1,
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
                "datatype": "DTM",
                "desc": "Attestation Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Diagnosis Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis Action Code",
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 206
            },
            {
                "datatype": "EI",
                "desc": "Parent Diagnosis",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "DRG CCL Value Code",
                "opt": 1,
                "rep": 1,
                "table": 728
            },
            {
                "datatype": "ID",
                "desc": "DRG Grouping Usage",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "DRG Diagnosis Determination Status",
                "opt": 1,
                "rep": 1,
                "table": 731
            },
            {
                "datatype": "CWE",
                "desc": "Present On Admission (POA) Indicator",
                "opt": 1,
                "rep": 1,
                "table": 895
            }
        ]
    },
    "DMI": {
        "desc": "DRG Master File Information",
        "fields": [
            {
                "datatype": "CNE",
                "desc": "Diagnostic Related Group ",
                "opt": 1,
                "rep": 1,
                "table": 55
            },
            {
                "datatype": "CNE",
                "desc": "Major Diagnostic Category",
                "opt": 3,
                "rep": 1,
                "table": 118
            },
            {
                "datatype": "NR",
                "desc": "Lower and Upper Trim Points",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Average Length of Stay",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Relative Weight",
                "opt": 3,
                "rep": 1
            }
        ]
    },
    "DRG": {
        "desc": "Diagnosis Related Group",
        "fields": [
            {
                "datatype": "CNE",
                "desc": "Diagnostic Related Group ",
                "opt": 1,
                "rep": 1,
                "table": 55
            },
            {
                "datatype": "DTM",
                "desc": "DRG Assigned Date/Time ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "DRG Approval Indicator ",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "DRG Grouper Review Code",
                "opt": 1,
                "rep": 1,
                "table": 56
            },
            {
                "datatype": "CWE",
                "desc": "Outlier Type ",
                "opt": 1,
                "rep": 1,
                "table": 83
            },
            {
                "datatype": "NM",
                "desc": "Outlier Days ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Outlier Cost",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "DRG Payor",
                "opt": 1,
                "rep": 1,
                "table": 229
            },
            {
                "datatype": "CP",
                "desc": "Outlier Reimbursement",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "DRG Transfer Type",
                "opt": 1,
                "rep": 1,
                "table": 415
            },
            {
                "datatype": "XPN",
                "desc": "Name of Coder",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Grouper Status",
                "opt": 1,
                "rep": 1,
                "table": 734
            },
            {
                "datatype": "CWE",
                "desc": "PCCL Value Code",
                "opt": 1,
                "rep": 1,
                "table": 728
            },
            {
                "datatype": "NM",
                "desc": "Effective Weight",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "MO",
                "desc": "Monetary Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Status Patient",
                "opt": 1,
                "rep": 1,
                "table": 739
            },
            {
                "datatype": "ST",
                "desc": "Grouper Software Name ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Grouper Software Version",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Status Financial Calculation",
                "opt": 1,
                "rep": 1,
                "table": 742
            },
            {
                "datatype": "MO",
                "desc": "Relative Discount/Surcharge",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "MO",
                "desc": "Basic Charge",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "MO",
                "desc": "Total Charge",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "MO",
                "desc": "Discount/Surcharge",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Calculated Days",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Status Gender",
                "opt": 1,
                "rep": 1,
                "table": 749
            },
            {
                "datatype": "CWE",
                "desc": "Status Age",
                "opt": 1,
                "rep": 1,
                "table": 749
            },
            {
                "datatype": "CWE",
                "desc": "Status Length of Stay",
                "opt": 1,
                "rep": 1,
                "table": 749
            },
            {
                "datatype": "CWE",
                "desc": "Status Same Day Flag",
                "opt": 1,
                "rep": 1,
                "table": 749
            },
            {
                "datatype": "CWE",
                "desc": "Status Separation Mode",
                "opt": 1,
                "rep": 1,
                "table": 749
            },
            {
                "datatype": "CWE",
                "desc": "Status Weight at Birth",
                "opt": 1,
                "rep": 1,
                "table": 755
            },
            {
                "datatype": "CWE",
                "desc": "Status Respiration Minutes",
                "opt": 1,
                "rep": 1,
                "table": 757
            },
            {
                "datatype": "CWE",
                "desc": "Status Admission",
                "opt": 1,
                "rep": 1,
                "table": 759
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
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Logical Break Point",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Result ID",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Remote Control Command",
                "opt": 2,
                "rep": 1,
                "table": 368
            },
            {
                "datatype": "ID",
                "desc": "Response Required",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ST",
                "desc": "Requested Completion Time",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Parameters",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "ECR": {
        "desc": "Equipment Command Response",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Command Response",
                "opt": 2,
                "rep": 1,
                "table": 387
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time Completed",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Command Response Parameters",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "EDU": {
        "desc": "Educational Detail",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - EDU",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Academic Degree",
                "opt": 1,
                "rep": 1,
                "table": 360
            },
            {
                "datatype": "DR",
                "desc": "Academic Degree Program Date Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DR",
                "desc": "Academic Degree Program Participation Date Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Academic Degree Granted Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "School",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "School Type Code",
                "opt": 1,
                "rep": 1,
                "table": 402
            },
            {
                "datatype": "XAD",
                "desc": "School Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Major Field of Study",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "EQP": {
        "desc": "Equipment/log Service",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Event type ",
                "opt": 2,
                "rep": 1,
                "table": 450
            },
            {
                "datatype": "ST",
                "desc": "File Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Start Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "End Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "FT",
                "desc": "Transaction Data",
                "opt": 2,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Event Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Equipment State",
                "opt": 3,
                "rep": 1,
                "table": 365
            },
            {
                "datatype": "CWE",
                "desc": "Local/Remote Control State",
                "opt": 1,
                "rep": 1,
                "table": 366
            },
            {
                "datatype": "CWE",
                "desc": "Alert Level",
                "opt": 1,
                "rep": 1,
                "table": 367
            }
        ]
    },
    "ERR": {
        "desc": "Error",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Error Code and Location",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ERL",
                "desc": "Error Location",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "HL7 Error Code",
                "opt": 2,
                "rep": 1,
                "table": 357
            },
            {
                "datatype": "ID",
                "desc": "Severity",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 516
            },
            {
                "datatype": "CWE",
                "desc": "Application Error Code",
                "opt": 1,
                "rep": 1,
                "table": 533
            },
            {
                "datatype": "ST",
                "desc": "Application Error Parameter",
                "opt": 1,
                "rep": 10
            },
            {
                "datatype": "TX",
                "desc": "Diagnostic Information",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "User Message",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Inform Person Indicator",
                "opt": 1,
                "rep": 0,
                "table": 517
            },
            {
                "datatype": "CWE",
                "desc": "Override Type",
                "opt": 1,
                "rep": 1,
                "table": 518
            },
            {
                "datatype": "CWE",
                "desc": "Override Reason Code",
                "opt": 1,
                "rep": 0,
                "table": 519
            },
            {
                "datatype": "XTN",
                "desc": "Help Desk Contact Point",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "EVN": {
        "desc": "Event Type",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Event Type Code",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Recorded Date/Time ",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time Planned Event",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Event Reason Code",
                "opt": 1,
                "rep": 1,
                "table": 62
            },
            {
                "datatype": "XCN",
                "desc": "Operator ID",
                "opt": 1,
                "rep": 0,
                "table": 188
            },
            {
                "datatype": "DTM",
                "desc": "Event Occurred",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Event Facility",
                "opt": 1,
                "rep": 1
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
                "len": 5
            },
            {
                "datatype": "HD",
                "desc": "File Sending Application",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "File Sending Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "File Receiving Application",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "File Receiving Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "File Creation Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "File Security",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "File Name/ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "File Header Comment",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "File Control ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Reference File Control ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "File Sending Network Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "File Receiving Network Address",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "FT1": {
        "desc": "Financial Transaction",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID   FT1",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Transaction ID ",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Transaction Batch ID ",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "DR",
                "desc": "Transaction Date ",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Transaction Posting Date ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Transaction Type ",
                "opt": 2,
                "rep": 1,
                "table": 17
            },
            {
                "datatype": "CWE",
                "desc": "Transaction Code ",
                "opt": 2,
                "rep": 1,
                "table": 132
            },
            {
                "datatype": "ST",
                "desc": "Transaction Description ",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Transaction Description   Alt ",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Transaction Quantity ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Transaction Amount   Extended ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Transaction Amount   Unit ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Department Code ",
                "opt": 1,
                "rep": 1,
                "table": 49
            },
            {
                "datatype": "CWE",
                "desc": "Health Plan ID ",
                "opt": 1,
                "rep": 1,
                "table": 72
            },
            {
                "datatype": "CP",
                "desc": "Insurance Amount ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "Assigned Patient Location ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Fee Schedule ",
                "opt": 1,
                "rep": 1,
                "table": 24
            },
            {
                "datatype": "CWE",
                "desc": "Patient Type ",
                "opt": 1,
                "rep": 1,
                "table": 18
            },
            {
                "datatype": "CWE",
                "desc": "Diagnosis Code - FT1 ",
                "opt": 1,
                "rep": 0,
                "table": 51
            },
            {
                "datatype": "XCN",
                "desc": "Performed By Code ",
                "opt": 1,
                "rep": 0,
                "table": 84
            },
            {
                "datatype": "XCN",
                "desc": "Ordered By Code ",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CP",
                "desc": "Unit Cost ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Entered By Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "table": 88
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code Modifier",
                "opt": 1,
                "rep": 0,
                "table": 340
            },
            {
                "datatype": "CWE",
                "desc": "Advanced Beneficiary Notice Code",
                "opt": 1,
                "rep": 1,
                "table": 339
            },
            {
                "datatype": "CWE",
                "desc": "Medically Necessary Duplicate Procedure Reason",
                "opt": 1,
                "rep": 1,
                "table": 476
            },
            {
                "datatype": "CWE",
                "desc": "NDC Code",
                "opt": 1,
                "rep": 1,
                "table": 549
            },
            {
                "datatype": "CX",
                "desc": "Payment Reference ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SI",
                "desc": "Transaction Reference Key",
                "opt": 1,
                "rep": 0,
                "len": 4
            },
            {
                "datatype": "XON",
                "desc": "Performing Facility",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XON",
                "desc": "Ordering Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Item Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Model Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Special Processing Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Clinic Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Referral Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Authorization Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Service Provider Taxonomy Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Revenue Code",
                "opt": 1,
                "rep": 1,
                "table": 456
            },
            {
                "datatype": "ST",
                "desc": "Prescription Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "NDC Qty and UOM",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "File Trailer Comment",
                "opt": 1,
                "rep": 1
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
                "datatype": "DTM",
                "desc": "Action Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Goal ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Goal Instance ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Episode of Care ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Goal List Priority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Goal Established Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Expected Goal Achieve Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Goal Classification",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Goal Management Discipline",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Current Goal Review Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Current Goal Review Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Next Goal Review Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Previous Goal Review Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Goal Review Interval",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Goal Evaluation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Goal Evaluation Comment",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Goal Life Cycle Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Goal Life Cycle Status Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Goal Target Type",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XPN",
                "desc": "Goal Target Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CNE",
                "desc": "Mood Code  ",
                "opt": 3,
                "rep": 1,
                "table": 725
            }
        ]
    },
    "GP1": {
        "desc": "Grouping/Reimbursement - Visit",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Type of Bill Code",
                "opt": 2,
                "rep": 1,
                "table": 455
            },
            {
                "datatype": "CWE",
                "desc": "Revenue Code",
                "opt": 1,
                "rep": 0,
                "table": 456
            },
            {
                "datatype": "CWE",
                "desc": "Overall Claim Disposition Code",
                "opt": 1,
                "rep": 1,
                "table": 457
            },
            {
                "datatype": "CWE",
                "desc": "OCE Edits per Visit Code",
                "opt": 1,
                "rep": 0,
                "table": 458
            },
            {
                "datatype": "CP",
                "desc": "Outlier Cost",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "GP2": {
        "desc": "Grouping/Reimbursement - Procedure Line Item",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Revenue Code",
                "opt": 1,
                "rep": 1,
                "table": 456
            },
            {
                "datatype": "NM",
                "desc": "Number of Service Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Charge",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Reimbursement Action Code",
                "opt": 1,
                "rep": 1,
                "table": 459
            },
            {
                "datatype": "CWE",
                "desc": "Denial or Rejection Code",
                "opt": 1,
                "rep": 1,
                "table": 460
            },
            {
                "datatype": "CWE",
                "desc": "OCE Edit Code",
                "opt": 1,
                "rep": 0,
                "table": 458
            },
            {
                "datatype": "CWE",
                "desc": "Ambulatory Payment Classification Code ",
                "opt": 1,
                "rep": 1,
                "table": 466
            },
            {
                "datatype": "CWE",
                "desc": "Modifier Edit Code",
                "opt": 1,
                "rep": 0,
                "table": 467
            },
            {
                "datatype": "CWE",
                "desc": "Payment Adjustment Code",
                "opt": 1,
                "rep": 1,
                "table": 468
            },
            {
                "datatype": "CWE",
                "desc": "Packaging Status Code",
                "opt": 1,
                "rep": 1,
                "table": 469
            },
            {
                "datatype": "CP",
                "desc": "Expected CMS Payment Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Reimbursement Type Code",
                "opt": 1,
                "rep": 1,
                "table": 470
            },
            {
                "datatype": "CP",
                "desc": "Co-Pay Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Pay Rate per Service Unit",
                "opt": 1,
                "rep": 1
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
                "rep": 0
            },
            {
                "datatype": "XPN",
                "desc": "Guarantor Name",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "XPN",
                "desc": "Guarantor Spouse Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Guarantor Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Guarantor Ph Num - Home",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Guarantor Ph Num - Business",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Guarantor Date/Time Of Birth",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Guarantor Administrative Sex",
                "opt": 1,
                "rep": 1,
                "table": 1
            },
            {
                "datatype": "CWE",
                "desc": "Guarantor Type",
                "opt": 1,
                "rep": 1,
                "table": 68
            },
            {
                "datatype": "CWE",
                "desc": "Guarantor Relationship",
                "opt": 1,
                "rep": 1,
                "table": 63
            },
            {
                "datatype": "ST",
                "desc": "Guarantor SSN",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Guarantor Date - Begin",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Guarantor Date - End",
                "opt": 1,
                "rep": 1
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
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Guarantor Employer Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Guarantor Employer Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CX",
                "desc": "Guarantor Employee ID Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Guarantor Employment Status",
                "opt": 1,
                "rep": 1,
                "table": 66
            },
            {
                "datatype": "XON",
                "desc": "Guarantor Organization Name",
                "opt": 1,
                "rep": 0
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
                "datatype": "CWE",
                "desc": "Guarantor Credit Rating Code",
                "opt": 1,
                "rep": 1,
                "table": 341
            },
            {
                "datatype": "DTM",
                "desc": "Guarantor Death Date And Time",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Guarantor Charge Adjustment Code",
                "opt": 1,
                "rep": 1,
                "table": 218
            },
            {
                "datatype": "CP",
                "desc": "Guarantor Household Annual Income",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Guarantor Household Size",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Guarantor Employer ID Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Guarantor Marital Status Code",
                "opt": 1,
                "rep": 1,
                "table": 2
            },
            {
                "datatype": "DT",
                "desc": "Guarantor Hire Effective Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Employment Stop Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Living Dependency",
                "opt": 1,
                "rep": 1,
                "table": 223
            },
            {
                "datatype": "CWE",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 0,
                "table": 9
            },
            {
                "datatype": "CWE",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "table": 171
            },
            {
                "datatype": "CWE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "table": 296
            },
            {
                "datatype": "CWE",
                "desc": "Living Arrangement",
                "opt": 1,
                "rep": 1,
                "table": 220
            },
            {
                "datatype": "CWE",
                "desc": "Publicity Code",
                "opt": 1,
                "rep": 1,
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
                "datatype": "CWE",
                "desc": "Student Indicator",
                "opt": 1,
                "rep": 1,
                "table": 231
            },
            {
                "datatype": "CWE",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "table": 6
            },
            {
                "datatype": "XPN",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Nationality",
                "opt": 1,
                "rep": 1,
                "table": 212
            },
            {
                "datatype": "CWE",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 0,
                "table": 189
            },
            {
                "datatype": "XPN",
                "desc": "Contact Person's Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Contact Person's Telephone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Contact Reason",
                "opt": 1,
                "rep": 1,
                "table": 222
            },
            {
                "datatype": "CWE",
                "desc": "Contact Relationship",
                "opt": 1,
                "rep": 1,
                "table": 63
            },
            {
                "datatype": "ST",
                "desc": "Job Title",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "JCC",
                "desc": "Job Code/Class",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Guarantor Employer's Organization Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Handicap ",
                "opt": 1,
                "rep": 1,
                "table": 295
            },
            {
                "datatype": "CWE",
                "desc": "Job Status",
                "opt": 1,
                "rep": 1,
                "table": 311
            },
            {
                "datatype": "FC",
                "desc": "Guarantor Financial Class",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Guarantor Race",
                "opt": 1,
                "rep": 0,
                "table": 5
            },
            {
                "datatype": "ST",
                "desc": "Guarantor Birth Place",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "VIP Indicator",
                "opt": 1,
                "rep": 1,
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
                "datatype": "CWE",
                "desc": "Allergen Type Code",
                "opt": 1,
                "rep": 1,
                "table": 127
            },
            {
                "datatype": "CWE",
                "desc": "Allergen Code/Mnemonic/Description",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Allergy Severity Code",
                "opt": 1,
                "rep": 1,
                "table": 128
            },
            {
                "datatype": "ST",
                "desc": "Allergy Reaction Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CNE",
                "desc": "Allergy Action Code",
                "opt": 2,
                "rep": 1,
                "table": 206
            },
            {
                "datatype": "EI",
                "desc": "Allergy Unique Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Action Reason",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Sensitivity to Causative Agent Code",
                "opt": 1,
                "rep": 1,
                "table": 436
            },
            {
                "datatype": "CWE",
                "desc": "Allergen Group Code/Mnemonic/Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Onset Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Onset Date Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Reported Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XPN",
                "desc": "Reported By",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Relationship to Patient Code",
                "opt": 1,
                "rep": 1,
                "table": 63
            },
            {
                "datatype": "CWE",
                "desc": "Alert Device Code",
                "opt": 1,
                "rep": 1,
                "table": 437
            },
            {
                "datatype": "CWE",
                "desc": "Allergy Clinical Status Code",
                "opt": 1,
                "rep": 1,
                "table": 438
            },
            {
                "datatype": "XCN",
                "desc": "Statused by Person",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Statused by Organization",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Statused at Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Inactivated by Person",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Inactivated Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Initially Recorded by Person",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Initially Recorded Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Modified by Person",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Modified Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Clinician Identified Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Initially Recorded by Organization",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Modified by Organization",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Inactivated by Organization",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "IAR": {
        "desc": "allergy reaction",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Allergy Reaction Code",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Allergy Severity Code",
                "opt": 2,
                "rep": 1,
                "table": 128
            },
            {
                "datatype": "CWE",
                "desc": "Sensitivity to Causative Agent Code",
                "opt": 1,
                "rep": 1,
                "table": 436
            },
            {
                "datatype": "ST",
                "desc": "Management",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Service Item Code",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Inventory Lot Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Inventory Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Inventory Manufacturer Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Inventory Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Inventory Received Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Inventory Received Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Inventory Received Quantity Unit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "MO",
                "desc": "Inventory Received Item Cost",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Inventory On Hand Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Inventory On Hand Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Inventory On Hand Quantity Unit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "table": 88
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code Modifier",
                "opt": 1,
                "rep": 0,
                "table": 340
            }
        ]
    },
    "ILT": {
        "desc": "Material Lot",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set Id - ILT",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Inventory Lot Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Inventory Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Inventory Received Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Inventory Received Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Inventory Received Quantity Unit",
                "opt": 1,
                "rep": 1,
                "table": 818
            },
            {
                "datatype": "MO",
                "desc": "Inventory Received Item Cost",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Inventory On Hand Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Inventory On Hand Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Inventory On Hand Quantity Unit",
                "opt": 1,
                "rep": 1,
                "table": 818
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
                "datatype": "CWE",
                "desc": "Health Plan ID",
                "opt": 2,
                "rep": 1,
                "table": 72
            },
            {
                "datatype": "CX",
                "desc": "Insurance Company ID",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "XON",
                "desc": "Insurance Company Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Insurance Company Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XPN",
                "desc": "Insurance Co Contact Person",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Insurance Co Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Group Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Group Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CX",
                "desc": "Insured's Group Emp ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XON",
                "desc": "Insured's Group Emp Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DT",
                "desc": "Plan Effective Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Plan Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "AUI",
                "desc": "Authorization Information",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Plan Type",
                "opt": 1,
                "rep": 1,
                "table": 86
            },
            {
                "datatype": "XPN",
                "desc": "Name Of Insured",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Insured's Relationship To Patient",
                "opt": 1,
                "rep": 1,
                "table": 63
            },
            {
                "datatype": "DTM",
                "desc": "Insured's Date Of Birth",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Insured's Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Assignment Of Benefits",
                "opt": 1,
                "rep": 1,
                "table": 135
            },
            {
                "datatype": "CWE",
                "desc": "Coordination Of Benefits",
                "opt": 1,
                "rep": 1,
                "table": 173
            },
            {
                "datatype": "ST",
                "desc": "Coord Of Ben. Priority",
                "opt": 1,
                "rep": 1
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
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Release Information Code",
                "opt": 1,
                "rep": 1,
                "table": 93
            },
            {
                "datatype": "ST",
                "desc": "Pre-Admit Cert (PAC)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Verification Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Verification By",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Type Of Agreement Code",
                "opt": 1,
                "rep": 1,
                "table": 98
            },
            {
                "datatype": "CWE",
                "desc": "Billing Status",
                "opt": 1,
                "rep": 1,
                "table": 22
            },
            {
                "datatype": "NM",
                "desc": "Lifetime Reserve Days",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Delay Before L.R. Day",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Company Plan Code",
                "opt": 1,
                "rep": 1,
                "table": 42
            },
            {
                "datatype": "ST",
                "desc": "Policy Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Policy Deductible",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Policy Limit - Amount",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Policy Limit - Days",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Room Rate - Semi-Private",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Room Rate - Private",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Insured's Employment Status",
                "opt": 1,
                "rep": 1,
                "table": 66
            },
            {
                "datatype": "CWE",
                "desc": "Insured's Administrative Sex",
                "opt": 1,
                "rep": 1,
                "table": 1
            },
            {
                "datatype": "XAD",
                "desc": "Insured's Employer's Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Verification Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Prior Insurance Plan ID",
                "opt": 1,
                "rep": 1,
                "table": 72
            },
            {
                "datatype": "CWE",
                "desc": "Coverage Type",
                "opt": 1,
                "rep": 1,
                "table": 309
            },
            {
                "datatype": "CWE",
                "desc": "Handicap ",
                "opt": 1,
                "rep": 1,
                "table": 295
            },
            {
                "datatype": "CX",
                "desc": "Insured's ID Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Signature Code",
                "opt": 1,
                "rep": 1,
                "table": 535
            },
            {
                "datatype": "DT",
                "desc": "Signature Code Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Insured's Birth Place",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "VIP Indicator",
                "opt": 1,
                "rep": 1,
                "table": 99
            },
            {
                "datatype": "CX",
                "desc": "External Health Plan Identifiers",
                "opt": 1,
                "rep": 0
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
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Insured's Social Security Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Insured's Employer's Name and ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Employer Information Data",
                "opt": 1,
                "rep": 1,
                "table": 139
            },
            {
                "datatype": "CWE",
                "desc": "Mail Claim Party",
                "opt": 1,
                "rep": 0,
                "table": 137
            },
            {
                "datatype": "ST",
                "desc": "Medicare Health Ins Card Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XPN",
                "desc": "Medicaid Case Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Medicaid Case Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XPN",
                "desc": "Military Sponsor Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Military ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Dependent Of Military Recipient",
                "opt": 1,
                "rep": 1,
                "table": 342
            },
            {
                "datatype": "ST",
                "desc": "Military Organization",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Military Station",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Military Service",
                "opt": 1,
                "rep": 1,
                "table": 140
            },
            {
                "datatype": "CWE",
                "desc": "Military Rank/Grade",
                "opt": 1,
                "rep": 1,
                "table": 141
            },
            {
                "datatype": "CWE",
                "desc": "Military Status",
                "opt": 1,
                "rep": 1,
                "table": 142
            },
            {
                "datatype": "DT",
                "desc": "Military Retire Date",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "XPN",
                "desc": "Special Coverage Approval Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Special Coverage Approval Title",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Non-Covered Insurance Code",
                "opt": 1,
                "rep": 0,
                "table": 143
            },
            {
                "datatype": "CX",
                "desc": "Payor ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CX",
                "desc": "Payor Subscriber ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Eligibility Source",
                "opt": 1,
                "rep": 1,
                "table": 144
            },
            {
                "datatype": "RMC",
                "desc": "Room Coverage Type/Amount",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PTA",
                "desc": "Policy Type/Amount",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DDI",
                "desc": "Daily Deductible",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Living Dependency",
                "opt": 1,
                "rep": 1,
                "table": 223
            },
            {
                "datatype": "CWE",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 0,
                "table": 9
            },
            {
                "datatype": "CWE",
                "desc": "Citizenship ",
                "opt": 1,
                "rep": 0,
                "table": 171
            },
            {
                "datatype": "CWE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "table": 296
            },
            {
                "datatype": "CWE",
                "desc": "Living Arrangement ",
                "opt": 1,
                "rep": 1,
                "table": 220
            },
            {
                "datatype": "CWE",
                "desc": "Publicity Code",
                "opt": 1,
                "rep": 1,
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
                "datatype": "CWE",
                "desc": "Student Indicator ",
                "opt": 1,
                "rep": 1,
                "table": 231
            },
            {
                "datatype": "CWE",
                "desc": "Religion ",
                "opt": 1,
                "rep": 1,
                "table": 6
            },
            {
                "datatype": "XPN",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Nationality ",
                "opt": 1,
                "rep": 1,
                "table": 212
            },
            {
                "datatype": "CWE",
                "desc": "Ethnic Group ",
                "opt": 1,
                "rep": 0,
                "table": 189
            },
            {
                "datatype": "CWE",
                "desc": "Marital Status ",
                "opt": 1,
                "rep": 0,
                "table": 2
            },
            {
                "datatype": "DT",
                "desc": "Insured's Employment Start Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Employment Stop Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Job Title",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "JCC",
                "desc": "Job Code/Class",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Job Status ",
                "opt": 1,
                "rep": 1,
                "table": 311
            },
            {
                "datatype": "XPN",
                "desc": "Employer Contact Person Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Employer Contact Person Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Employer Contact Reason ",
                "opt": 1,
                "rep": 1,
                "table": 222
            },
            {
                "datatype": "XPN",
                "desc": "Insured's Contact Person's Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Insured's Contact Person Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Insured's Contact Person Reason ",
                "opt": 1,
                "rep": 0,
                "table": 222
            },
            {
                "datatype": "DT",
                "desc": "Relationship to the Patient Start Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Relationship to the Patient Stop Date",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Insurance Co Contact Reason ",
                "opt": 1,
                "rep": 1,
                "table": 232
            },
            {
                "datatype": "XTN",
                "desc": "Insurance Co Contact Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Policy Scope ",
                "opt": 1,
                "rep": 1,
                "table": 312
            },
            {
                "datatype": "CWE",
                "desc": "Policy Source ",
                "opt": 1,
                "rep": 1,
                "table": 313
            },
            {
                "datatype": "CX",
                "desc": "Patient Member Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Guarantor's Relationship to Insured",
                "opt": 1,
                "rep": 1,
                "table": 63
            },
            {
                "datatype": "XTN",
                "desc": "Insured's Phone Number - Home",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Insured's Employer Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Military Handicapped Program ",
                "opt": 1,
                "rep": 1,
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
                "rep": 0
            },
            {
                "datatype": "XON",
                "desc": "Insured Employer Organization Name and ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Race",
                "opt": 1,
                "rep": 0,
                "table": 5
            },
            {
                "datatype": "CWE",
                "desc": "Patient's Relationship to Insured",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Certified By",
                "opt": 1,
                "rep": 0
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
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Certification Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Certification Modify Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Operator",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DT",
                "desc": "Certification Begin Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Certification End Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTN",
                "desc": "Days",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Non-Concur Code/Description",
                "opt": 1,
                "rep": 1,
                "table": 233
            },
            {
                "datatype": "DTM",
                "desc": "Non-Concur Effective Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Physician Reviewer",
                "opt": 1,
                "rep": 0,
                "table": 10
            },
            {
                "datatype": "ST",
                "desc": "Certification Contact",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XTN",
                "desc": "Certification Contact Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Appeal Reason",
                "opt": 1,
                "rep": 1,
                "table": 345
            },
            {
                "datatype": "CWE",
                "desc": "Certification Agency",
                "opt": 1,
                "rep": 1,
                "table": 346
            },
            {
                "datatype": "XTN",
                "desc": "Certification Agency Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ICD",
                "desc": "Pre-Certification Requirement",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Case Manager",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Second Opinion Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Second Opinion Status ",
                "opt": 1,
                "rep": 1,
                "table": 151
            },
            {
                "datatype": "CWE",
                "desc": "Second Opinion Documentation Received",
                "opt": 1,
                "rep": 0,
                "table": 152
            },
            {
                "datatype": "XCN",
                "desc": "Second Opinion Physician",
                "opt": 1,
                "rep": 0,
                "table": 10
            }
        ]
    },
    "INV": {
        "desc": "Inventory Detail",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Substance Identifier",
                "opt": 2,
                "rep": 1,
                "table": 451
            },
            {
                "datatype": "CWE",
                "desc": "Substance Status",
                "opt": 2,
                "rep": 0,
                "table": 383
            },
            {
                "datatype": "CWE",
                "desc": "Substance Type",
                "opt": 1,
                "rep": 1,
                "table": 384
            },
            {
                "datatype": "CWE",
                "desc": "Inventory Container Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Container Carrier Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Position on Carrier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Initial Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Current Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Available Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Consumption Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Quantity Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Expiration Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "First Used Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "On Board Stability Duration",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Test/Fluid Identifier(s)",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Manufacturer Lot Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Manufacturer Identifier",
                "opt": 1,
                "rep": 1,
                "table": 385
            },
            {
                "datatype": "CWE",
                "desc": "Supplier Identifier",
                "opt": 1,
                "rep": 1,
                "table": 386
            },
            {
                "datatype": "CQ",
                "desc": "On Board Stability Time ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Target Value",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Requested Procedure ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Study Instance UID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Scheduled Procedure Step ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Modality ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Protocol Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Scheduled Station Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Scheduled Procedure Step Location",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Scheduled Station AE Title",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "IPR": {
        "desc": "Invoice Processing Results",
        "fields": [
            {
                "datatype": "EI",
                "desc": "IPR Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Provider Cross Reference Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Payer Cross Reference Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "IPR Status",
                "opt": 2,
                "rep": 1,
                "table": 571
            },
            {
                "datatype": "DTM",
                "desc": "IPR Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Adjudicated/Paid Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Expected Payment Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "IPR Checksum",
                "opt": 2,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Interaction Type Identifier ",
                "opt": 1,
                "rep": 1,
                "table": 368
            },
            {
                "datatype": "CWE",
                "desc": "Interaction Active State",
                "opt": 2,
                "rep": 1,
                "table": 387
            }
        ]
    },
    "ITM": {
        "desc": "Material Item",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Item Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Item Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Item Status",
                "opt": 1,
                "rep": 1,
                "table": 776
            },
            {
                "datatype": "CWE",
                "desc": "Item Type ",
                "opt": 1,
                "rep": 1,
                "table": 778
            },
            {
                "datatype": "CWE",
                "desc": "Item Category",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Subject to Expiration Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "EI",
                "desc": "Manufacturer Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Manufacturer Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Manufacturer Catalog Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Manufacturer Labeler Identification Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Patient Chargeable Indicator ",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CWE",
                "desc": "Transaction Code ",
                "opt": 1,
                "rep": 1,
                "table": 132
            },
            {
                "datatype": "CP",
                "desc": "Transaction amount - unit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Stocked Item Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CWE",
                "desc": "Supply Risk Codes ",
                "opt": 1,
                "rep": 1,
                "table": 871
            },
            {
                "datatype": "XON",
                "desc": "Approving Regulatory Agency ",
                "opt": 1,
                "rep": 0,
                "table": 790
            },
            {
                "datatype": "CNE",
                "desc": "Latex Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CWE",
                "desc": "Ruling Act",
                "opt": 1,
                "rep": 0,
                "table": 793
            },
            {
                "datatype": "CWE",
                "desc": "Item Natural Account Code",
                "opt": 1,
                "rep": 1,
                "table": 320
            },
            {
                "datatype": "NM",
                "desc": "Approved To Buy Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "MO",
                "desc": "Approved To Buy Price ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Taxable Item Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Freight Charge Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Item Set Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "EI",
                "desc": "Item Set Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Track Department Usage Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code ",
                "opt": 1,
                "rep": 1,
                "table": 88
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code Modifier",
                "opt": 1,
                "rep": 0,
                "table": 340
            },
            {
                "datatype": "CWE",
                "desc": "Special Handling Code",
                "opt": 1,
                "rep": 1,
                "table": 376
            }
        ]
    },
    "IVC": {
        "desc": "Invoice Segment",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Provider Invoice Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Payer Invoice Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Contract/Agreement Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Invoice Control",
                "opt": 2,
                "rep": 1,
                "table": 553
            },
            {
                "datatype": "CWE",
                "desc": "Invoice Reason",
                "opt": 2,
                "rep": 1,
                "table": 554
            },
            {
                "datatype": "CWE",
                "desc": "Invoice Type",
                "opt": 2,
                "rep": 1,
                "table": 555
            },
            {
                "datatype": "DTM",
                "desc": "Invoice Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Invoice Amount",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Payment Terms",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Provider Organization",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Payer Organization",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Attention",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Last Invoice Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DTM",
                "desc": "Invoice Booking Period",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Origin",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Invoice Fixed Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Special Costs",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Amount for Doctors Treatment",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Responsible Physician",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Cost Center",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Invoice Prepaid Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Total Invoice Amount without Prepaid Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Total-Amount of VAT",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "VAT-Rates applied",
                "opt": 1,
                "rep": 0,
                "len": 5
            },
            {
                "datatype": "CWE",
                "desc": "Benefit Group",
                "opt": 2,
                "rep": 1,
                "table": 556
            },
            {
                "datatype": "ST",
                "desc": "Provider Tax ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Payer Tax ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Provider Tax Status",
                "opt": 1,
                "rep": 1,
                "table": 572
            },
            {
                "datatype": "CWE",
                "desc": "Payer Tax Status",
                "opt": 1,
                "rep": 1,
                "table": 572
            },
            {
                "datatype": "ST",
                "desc": "Sales Tax ID",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "IVT": {
        "desc": "Material Location",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set Id - IVT",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EI",
                "desc": "Inventory Location Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Inventory Location Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Source Location Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Source Location Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Item Status",
                "opt": 1,
                "rep": 1,
                "table": 625
            },
            {
                "datatype": "EI",
                "desc": "Bin Location Identifier ",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Order Packaging",
                "opt": 1,
                "rep": 1,
                "table": 818
            },
            {
                "datatype": "CWE",
                "desc": "Issue Packaging",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Default Inventory Asset Account",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Patient Chargeable Indicator ",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CWE",
                "desc": "Transaction Code",
                "opt": 1,
                "rep": 1,
                "table": 132
            },
            {
                "datatype": "CP",
                "desc": "Transaction amount - unit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Item Importance Code",
                "opt": 1,
                "rep": 1,
                "table": 634
            },
            {
                "datatype": "CNE",
                "desc": "Stocked Item Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Consignment Item Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Reusable Item Indicator ",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CP",
                "desc": "Reusable Cost",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Substitute Item Identifier",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Latex-Free Substitute Item Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Recommended Reorder Theory",
                "opt": 1,
                "rep": 1,
                "table": 642
            },
            {
                "datatype": "NM",
                "desc": "Recommended Safety Stock Days",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Recommended Maximum Days Inventory",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Recommended Order Point",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Recommended Order Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Operating Room Par Level Indicator ",
                "opt": 1,
                "rep": 1,
                "table": 532
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
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Language Code",
                "opt": 2,
                "rep": 1,
                "table": 296
            },
            {
                "datatype": "CWE",
                "desc": "Language Ability Code",
                "opt": 1,
                "rep": 0,
                "table": 403
            },
            {
                "datatype": "CWE",
                "desc": "Language Proficiency Code",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Location Department",
                "opt": 2,
                "rep": 1,
                "table": 264
            },
            {
                "datatype": "CWE",
                "desc": "Accommodation Type",
                "opt": 1,
                "rep": 0,
                "table": 129
            },
            {
                "datatype": "CWE",
                "desc": "Charge Code",
                "opt": 2,
                "rep": 0,
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
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Segment Action Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 206
            },
            {
                "datatype": "EI",
                "desc": "Segment Unique Key",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Location Characteristic ID",
                "opt": 2,
                "rep": 1,
                "table": 324
            },
            {
                "datatype": "CWE",
                "desc": "Location Characteristic Value - LCH",
                "opt": 2,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Location Department",
                "opt": 2,
                "rep": 1,
                "table": 264
            },
            {
                "datatype": "CWE",
                "desc": "Location Service",
                "opt": 1,
                "rep": 0,
                "table": 69
            },
            {
                "datatype": "CWE",
                "desc": "Specialty Type",
                "opt": 1,
                "rep": 0,
                "table": 265
            },
            {
                "datatype": "CWE",
                "desc": "Valid Patient Classes",
                "opt": 1,
                "rep": 0,
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
                "datatype": "DTM",
                "desc": "Activation Date - LDP",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Inactivation Date - LDP",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Inactivated Reason",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "VH",
                "desc": "Visiting Hours",
                "opt": 1,
                "rep": 0,
                "table": 267
            },
            {
                "datatype": "XTN",
                "desc": "Contact Phone",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Location Cost Center",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Location Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Location Type - LOC",
                "opt": 2,
                "rep": 0,
                "table": 260
            },
            {
                "datatype": "XON",
                "desc": "Organization Name - LOC",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Location Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Location Phone",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "License Number",
                "opt": 1,
                "rep": 0,
                "table": 461
            },
            {
                "datatype": "CWE",
                "desc": "Location Equipment",
                "opt": 1,
                "rep": 0,
                "table": 261
            },
            {
                "datatype": "CWE",
                "desc": "Location Service Code",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Segment Action Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 206
            },
            {
                "datatype": "EI",
                "desc": "Segment Unique Key",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Location Relationship ID",
                "opt": 2,
                "rep": 1,
                "table": 325
            },
            {
                "datatype": "XON",
                "desc": "Organizational Location Relationship Value",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Patient Location Relationship Value",
                "opt": 3,
                "rep": 1
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
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Event Completion Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "MFN Record Level Error Return",
                "opt": 2,
                "rep": 1,
                "table": 181
            },
            {
                "datatype": "ST",
                "desc": "Primary Key Value - MFA",
                "opt": 2,
                "rep": 0
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
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Effective Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Primary Key Value - MFE",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "Primary Key Value Type",
                "opt": 2,
                "rep": 0,
                "len": 3,
                "table": 355
            },
            {
                "datatype": "DTM",
                "desc": "Entered Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Entered By",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "MFI": {
        "desc": "Master File Identification",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Master File Identifier",
                "opt": 2,
                "rep": 1,
                "table": 175
            },
            {
                "datatype": "HD",
                "desc": "Master File Application Identifier",
                "opt": 1,
                "rep": 0,
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
                "datatype": "DTM",
                "desc": "Entered Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Effective Date/Time",
                "opt": 1,
                "rep": 1
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
                "table": 61
            },
            {
                "datatype": "ST",
                "desc": "Prior Alternate Patient ID",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Prior Patient Account Number",
                "opt": 1,
                "rep": 1,
                "table": 61
            },
            {
                "datatype": "ST",
                "desc": "Prior Patient ID",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Prior Visit Number",
                "opt": 1,
                "rep": 1,
                "table": 61
            },
            {
                "datatype": "CX",
                "desc": "Prior Alternate Visit ID",
                "opt": 1,
                "rep": 1,
                "table": 61
            },
            {
                "datatype": "XPN",
                "desc": "Prior Patient Name",
                "opt": 1,
                "rep": 0,
                "table": 200
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
                "len": 199
            },
            {
                "datatype": "ST",
                "desc": "Text Message",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Expected Sequence Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Delayed Acknowledgment Type",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Error Condition",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Message Waiting Number ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": " Message Waiting Priority ",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 520
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
                "len": 5
            },
            {
                "datatype": "HD",
                "desc": "Sending Application",
                "opt": 1,
                "rep": 1,
                "table": 361
            },
            {
                "datatype": "HD",
                "desc": "Sending Facility",
                "opt": 1,
                "rep": 1,
                "table": 362
            },
            {
                "datatype": "HD",
                "desc": "Receiving Application",
                "opt": 1,
                "rep": 1,
                "table": 361
            },
            {
                "datatype": "HD",
                "desc": "Receiving Facility",
                "opt": 1,
                "rep": 1,
                "table": 362
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of Message",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Security",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "MSG",
                "desc": "Message Type",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Message Control ID",
                "opt": 2,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "PT",
                "desc": "Processing ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "VID",
                "desc": "Version ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sequence Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Continuation Pointer",
                "opt": 1,
                "rep": 1
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
                "len": 15,
                "table": 211
            },
            {
                "datatype": "CWE",
                "desc": "Principal Language Of Message",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Alternate Character Set Handling Scheme",
                "opt": 1,
                "rep": 1,
                "len": 13,
                "table": 356
            },
            {
                "datatype": "EI",
                "desc": "Message Profile Identifier",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XON",
                "desc": "Sending Responsible Organization",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Receiving Responsible Organization",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Sending Network Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Receiving Network Address",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "NCK": {
        "desc": "System Clock",
        "fields": [
            {
                "datatype": "DTM",
                "desc": "System Date/Time",
                "opt": 2,
                "rep": 1,
                "len": 24
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
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Notification Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Notification Alert Severity",
                "opt": 2,
                "rep": 1,
                "table": 367
            },
            {
                "datatype": "CWE",
                "desc": "Notification Code",
                "opt": 2,
                "rep": 1
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
                "desc": "Name",
                "opt": 1,
                "rep": 0,
                "table": 200
            },
            {
                "datatype": "CWE",
                "desc": "Relationship",
                "opt": 1,
                "rep": 1,
                "table": 63
            },
            {
                "datatype": "XAD",
                "desc": "Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Business Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Contact Role",
                "opt": 1,
                "rep": 1,
                "table": 131
            },
            {
                "datatype": "DT",
                "desc": "Start Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "End Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Next of Kin / Associated Parties Job Title",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "JCC",
                "desc": "Next of Kin / Associated Parties Job Code/Class",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Next of Kin / Associated Parties Employee Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Organization Name - NK1",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 1,
                "table": 2
            },
            {
                "datatype": "CWE",
                "desc": "Administrative Sex",
                "opt": 1,
                "rep": 1,
                "table": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of Birth",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Living Dependency",
                "opt": 1,
                "rep": 0,
                "table": 223
            },
            {
                "datatype": "CWE",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 0,
                "table": 9
            },
            {
                "datatype": "CWE",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "table": 171
            },
            {
                "datatype": "CWE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "table": 296
            },
            {
                "datatype": "CWE",
                "desc": "Living Arrangement",
                "opt": 1,
                "rep": 1,
                "table": 220
            },
            {
                "datatype": "CWE",
                "desc": "Publicity Code",
                "opt": 1,
                "rep": 1,
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
                "datatype": "CWE",
                "desc": "Student Indicator",
                "opt": 1,
                "rep": 1,
                "table": 231
            },
            {
                "datatype": "CWE",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "table": 6
            },
            {
                "datatype": "XPN",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Nationality",
                "opt": 1,
                "rep": 1,
                "table": 212
            },
            {
                "datatype": "CWE",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 0,
                "table": 189
            },
            {
                "datatype": "CWE",
                "desc": "Contact Reason",
                "opt": 1,
                "rep": 0,
                "table": 222
            },
            {
                "datatype": "XPN",
                "desc": "Contact Person's Name",
                "opt": 1,
                "rep": 0,
                "table": 200
            },
            {
                "datatype": "XTN",
                "desc": "Contact Person's Telephone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Contact Person's Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CX",
                "desc": "Next of Kin/Associated Party's Identifiers",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Job Status",
                "opt": 1,
                "rep": 1,
                "table": 311
            },
            {
                "datatype": "CWE",
                "desc": "Race",
                "opt": 1,
                "rep": 0,
                "table": 5
            },
            {
                "datatype": "CWE",
                "desc": "Handicap",
                "opt": 1,
                "rep": 1,
                "table": 295
            },
            {
                "datatype": "ST",
                "desc": "Contact Person Social Security Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Next of Kin Birth Place",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "VIP Indicator",
                "opt": 1,
                "rep": 1,
                "table": 99
            },
            {
                "datatype": "XTN",
                "desc": "Next of Kin Telecommunication Information",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XTN",
                "desc": "Contact Person's Telecommunication Information",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Bed Status",
                "opt": 1,
                "rep": 1,
                "table": 116
            }
        ]
    },
    "NSC": {
        "desc": "Application Status Change",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Application Change Type",
                "opt": 2,
                "rep": 1,
                "table": 409
            },
            {
                "datatype": "ST",
                "desc": "Current CPU",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Current Fileserver",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Current Application",
                "opt": 1,
                "rep": 1,
                "table": 361
            },
            {
                "datatype": "HD",
                "desc": "Current Facility",
                "opt": 1,
                "rep": 1,
                "table": 362
            },
            {
                "datatype": "ST",
                "desc": "New CPU",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "New Fileserver",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "New Application",
                "opt": 1,
                "rep": 1,
                "table": 361
            },
            {
                "datatype": "HD",
                "desc": "New Facility",
                "opt": 1,
                "rep": 1,
                "table": 362
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
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Source Type",
                "opt": 1,
                "rep": 1,
                "table": 332
            },
            {
                "datatype": "DTM",
                "desc": "Statistics Start",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Statistics End",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Receive Character Count",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Send Character Count",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Messages Received",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Messages Sent",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Checksum Errors Received",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Length Errors Received",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Other Errors Received",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Connect Timeouts",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Receive Timeouts",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Application control-level Errors",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Source of Comment",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 105
            },
            {
                "datatype": "FT",
                "desc": "Comment",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Comment Type",
                "opt": 1,
                "rep": 1,
                "table": 364
            },
            {
                "datatype": "XCN",
                "desc": "Entered By",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Entered Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Effective Start Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
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
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Priority",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Requested Date/Time",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Observation Date/Time #",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Observation End Date/Time #",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Collection Volume *",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Collector Identifier *",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "Specimen Action Code *",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 65
            },
            {
                "datatype": "CWE",
                "desc": "Danger Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Relevant Clinical Information",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Specimen Received Date/Time *",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Specimen Source",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Ordering Provider",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Order Callback Phone Number",
                "opt": 1,
                "rep": 2
            },
            {
                "datatype": "ST",
                "desc": "Placer Field 1",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Placer Field 2",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Filler Field 1 +",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Filler Field 2 +",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Results Rpt/Status Chng - Date/Time +",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "MOC",
                "desc": "Charge to Practice +",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Diagnostic Serv Sect ID",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 74
            },
            {
                "datatype": "ID",
                "desc": "Result Status +",
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 123
            },
            {
                "datatype": "PRL",
                "desc": "Parent Result +",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Quantity/Timing",
                "opt": 4,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Result Copies To",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "EIP",
                "desc": "Parent Result Observation Identifier ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Transportation Mode",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 124
            },
            {
                "datatype": "CWE",
                "desc": "Reason for Study",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NDL",
                "desc": "Principal Result Interpreter +",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NDL",
                "desc": "Assistant Result Interpreter + ",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NDL",
                "desc": "Technician +",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NDL",
                "desc": "Transcriptionist +",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Scheduled Date/Time +",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number of Sample Containers *",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Transport Logistics of Collected Sample *",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Collector's Comment *",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Transport Arrangement Responsibility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Transport Arranged",
                "opt": 1,
                "rep": 1,
                "len": 1,
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
                "datatype": "CWE",
                "desc": "Planned Patient Transport Comment",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "table": 88
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code Modifier",
                "opt": 1,
                "rep": 0,
                "table": 340
            },
            {
                "datatype": "CWE",
                "desc": "Placer Supplemental Service Information",
                "opt": 1,
                "rep": 0,
                "table": 411
            },
            {
                "datatype": "CWE",
                "desc": "Filler Supplemental Service Information",
                "opt": 1,
                "rep": 0,
                "table": 411
            },
            {
                "datatype": "CWE",
                "desc": "Medically Necessary Duplicate Procedure Reason",
                "opt": 3,
                "rep": 1,
                "table": 476
            },
            {
                "datatype": "CWE",
                "desc": "Result Handling",
                "opt": 1,
                "rep": 1,
                "table": 507
            },
            {
                "datatype": "CWE",
                "desc": "Parent Universal Service Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Observation Group ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Parent Observation Group ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Alternate Placer Order Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "EIP",
                "desc": "Parent Order",
                "opt": 1,
                "rep": 1
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
                "opt": 3,
                "rep": 1,
                "len": 3,
                "table": 125
            },
            {
                "datatype": "CWE",
                "desc": "Observation Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Observation Sub-ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Observation Value",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "References Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Interpretation Codes",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Probability",
                "opt": 1,
                "rep": 1
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
                "datatype": "DTM",
                "desc": "Effective Date of Reference Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "User Defined Access Checks",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of the Observation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Producer's ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Responsible Observer",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Observation Method",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Equipment Instance Identifier",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of the Analysis",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Observation Site",
                "opt": 1,
                "rep": 0,
                "table": 163
            },
            {
                "datatype": "EI",
                "desc": "Observation Instance Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Mood Code",
                "opt": 3,
                "rep": 1,
                "table": 725
            },
            {
                "datatype": "XON",
                "desc": "Performing Organization Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Performing Organization Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Performing Organization Medical Director",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Patient Results Release Category",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 909
            }
        ]
    },
    "ODS": {
        "desc": "Dietary Orders, Supplements, and Preferences",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Type ",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 159
            },
            {
                "datatype": "CWE",
                "desc": "Service Period",
                "opt": 1,
                "rep": 10
            },
            {
                "datatype": "CWE",
                "desc": "Diet, Supplement, or Preference Code",
                "opt": 2,
                "rep": 20
            },
            {
                "datatype": "ST",
                "desc": "Text Instruction",
                "opt": 1,
                "rep": 2
            }
        ]
    },
    "ODT": {
        "desc": "Diet Tray Instructions",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Tray Type",
                "opt": 2,
                "rep": 1,
                "table": 160
            },
            {
                "datatype": "CWE",
                "desc": "Service Period",
                "opt": 1,
                "rep": 10
            },
            {
                "datatype": "ST",
                "desc": "Text Instruction",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Producer's Service/Test/Observation ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Permitted Data Types",
                "opt": 1,
                "rep": 0,
                "len": 3,
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
                "datatype": "CWE",
                "desc": "Producer ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Observation Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Other Service/Test/Observation IDs for the Observation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Names",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Preferred Report Name for the Observation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Preferred Short Name or Mnemonic for the Observation",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Preferred Long Name for the Observation",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Identity of Instrument Used to Perform this Study",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Coded Representation of Method",
                "opt": 1,
                "rep": 0
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
                "datatype": "CWE",
                "desc": "Observation Producing Department/Section",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Telephone Number of Section",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Nature of Service/Test/Observation",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 174
            },
            {
                "datatype": "CWE",
                "desc": "Report Subheader",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Report Display Order",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time Stamp for Any Change in Definition for the Observation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Effective Date/Time of Change",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Typical Turn-Around Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Processing Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Processing Priority",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 168
            },
            {
                "datatype": "ID",
                "desc": "Reporting Priority",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 169
            },
            {
                "datatype": "CWE",
                "desc": "Outside Site(s) Where Observation May Be Performed",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Address of Outside Site(s)",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number of Outside Site",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Confidentiality Code",
                "opt": 1,
                "rep": 1,
                "table": 177
            },
            {
                "datatype": "CWE",
                "desc": "Observations Required to Interpret this Observation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Interpretation of Observations",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Contraindications to Observations",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Reflex Tests/Observations",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "TX",
                "desc": "Rules that Trigger Reflex Testing",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Fixed Canned Message",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Patient Preparation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Procedure Medication",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Factors that may Affect the Observation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Service/Test/Observation Performance Schedule",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "TX",
                "desc": "Description of Test Methods",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Kind of Quantity Observed",
                "opt": 1,
                "rep": 1,
                "table": 254
            },
            {
                "datatype": "CWE",
                "desc": "Point Versus Interval",
                "opt": 1,
                "rep": 1,
                "table": 255
            },
            {
                "datatype": "TX",
                "desc": "Challenge Information",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Relationship Modifier",
                "opt": 1,
                "rep": 1,
                "table": 258
            },
            {
                "datatype": "CWE",
                "desc": "Target Anatomic Site Of Test",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Modality of Imaging Measurement",
                "opt": 1,
                "rep": 1,
                "table": 910
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Units of Measure",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Range of Decimal Precision",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Corresponding SI Units of Measure",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "SI Conversion Factor",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "RFR",
                "desc": "Reference (Normal) Range for Ordinal and Continuous Observations",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "RFR",
                "desc": "Critical Range for Ordinal and Continuous Observations",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "RFR",
                "desc": "Absolute Range for Ordinal and Continuous Observations",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DLT",
                "desc": "Delta Check Criteria",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Minimum Meaningful Increments",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Preferred Coding System",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Valid Coded \"Answers\"",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Normal Text/Codes for Categorical Observations",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Abnormal Text/Codes for Categorical Observations",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Critical Text/Codes for Categorical Observations",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "Value Type",
                "opt": 1,
                "rep": 1,
                "len": 3,
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
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Container Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Specimen",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Additive",
                "opt": 1,
                "rep": 1,
                "table": 371
            },
            {
                "datatype": "TX",
                "desc": "Preparation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Special Handling Requirements",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Normal Collection Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Minimum Collection Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Specimen Requirements",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            }
        ]
    },
    "OM5": {
        "desc": "Observation Batteries (Sets)",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/Observation Master File",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Test/Observations Included Within an Ordered Test Battery",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Observation ID Suffixes",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Derivation Rule",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Category Identifier",
                "opt": 1,
                "rep": 0,
                "table": 412
            },
            {
                "datatype": "TX",
                "desc": "Category Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Category Synonym",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Effective Test/Service Start Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Effective Test/Service End Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Test/Service Default Duration Quantity ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Test/Service Default Duration Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Test/Service Default Frequency ",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Consent Identifier",
                "opt": 1,
                "rep": 1,
                "table": 413
            },
            {
                "datatype": "DTM",
                "desc": "Consent Effective Start Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Consent Effective End Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Consent Interval Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Consent Interval Units",
                "opt": 3,
                "rep": 1,
                "table": 414
            },
            {
                "datatype": "NM",
                "desc": "Consent Waiting Period Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Consent Waiting Period Units",
                "opt": 3,
                "rep": 1,
                "table": 414
            },
            {
                "datatype": "DTM",
                "desc": "Effective Date/Time of Change",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Entered By",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "Orderable-at Location",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Formulary Status",
                "opt": 1,
                "rep": 1,
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
                "datatype": "CWE",
                "desc": "Primary Key Value - CDM",
                "opt": 1,
                "rep": 0
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
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Placer Group Number",
                "opt": 1,
                "rep": 1
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
                "datatype": "ST",
                "desc": "Quantity/Timing",
                "opt": 4,
                "rep": 0
            },
            {
                "datatype": "EIP",
                "desc": "Parent Order",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of Transaction",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Entered By",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Verified By",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Ordering Provider",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Enterer's Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XTN",
                "desc": "Call Back Phone Number",
                "opt": 1,
                "rep": 2
            },
            {
                "datatype": "DTM",
                "desc": "Order Effective Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Order Control Code Reason",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Entering Organization",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Entering Device",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Action By",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Advanced Beneficiary Notice Code",
                "opt": 1,
                "rep": 1,
                "table": 339
            },
            {
                "datatype": "XON",
                "desc": "Ordering Facility Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Ordering Facility Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Ordering Facility Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Ordering Provider Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Order Status Modifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Advanced Beneficiary Notice Override Reason",
                "opt": 3,
                "rep": 1,
                "table": 552
            },
            {
                "datatype": "DTM",
                "desc": "Filler's Expected Availability Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Confidentiality Code",
                "opt": 1,
                "rep": 1,
                "table": 177
            },
            {
                "datatype": "CWE",
                "desc": "Order Type",
                "opt": 1,
                "rep": 1,
                "table": 482
            },
            {
                "datatype": "CNE",
                "desc": "Enterer Authorization Mode",
                "opt": 1,
                "rep": 1,
                "table": 483
            },
            {
                "datatype": "CWE",
                "desc": "Parent Universal Service Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Advanced Beneficiary Notice Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Alternate Placer Order Number",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "ORG": {
        "desc": "Practitioner Organization Unit s",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - ORG",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Organization Unit Code",
                "opt": 1,
                "rep": 1,
                "table": 405
            },
            {
                "datatype": "CWE",
                "desc": "Organization Unit Type Code",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Health Care Provider Type Code",
                "opt": 1,
                "rep": 1,
                "table": 452
            },
            {
                "datatype": "CWE",
                "desc": "Health Care Provider Classification Code",
                "opt": 1,
                "rep": 1,
                "table": 453
            },
            {
                "datatype": "CWE",
                "desc": "Health Care Provider Area of Specialization Code",
                "opt": 1,
                "rep": 1,
                "table": 454
            },
            {
                "datatype": "DR",
                "desc": "Effective Date Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Employment Status Code",
                "opt": 1,
                "rep": 1,
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
            },
            {
                "datatype": "CWE",
                "desc": "Cost Center Code",
                "opt": 1,
                "rep": 0,
                "table": 539
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
                "table": 518
            },
            {
                "datatype": "CWE",
                "desc": "Business Rule Override Code",
                "opt": 1,
                "rep": 1,
                "table": 521
            },
            {
                "datatype": "TX",
                "desc": "Override Comments",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Override Entered By",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Override Authorized By",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PAC": {
        "desc": "Shipment Package",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set Id - PAC",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EI",
                "desc": "Package ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Parent Package ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NA",
                "desc": "Position in Parent Package",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Package Type",
                "opt": 2,
                "rep": 1,
                "table": 908
            },
            {
                "datatype": "CWE",
                "desc": "Package Condition",
                "opt": 1,
                "rep": 0,
                "table": 544
            },
            {
                "datatype": "CWE",
                "desc": "Package Handling Code",
                "opt": 1,
                "rep": 0,
                "table": 376
            },
            {
                "datatype": "CWE",
                "desc": "Package Risk Code",
                "opt": 1,
                "rep": 0,
                "table": 489
            }
        ]
    },
    "PCE": {
        "desc": "Patient Charge Cost Center Exceptions",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - PCE",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CX",
                "desc": "Cost Center Account Number",
                "opt": 1,
                "rep": 1,
                "table": 319
            },
            {
                "datatype": "CWE",
                "desc": "Transaction Code",
                "opt": 1,
                "rep": 1,
                "table": 132
            },
            {
                "datatype": "CP",
                "desc": "Transaction Amount - Unit",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PCR": {
        "desc": "Possible Causal Relationship",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Implicated Product",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Generic Product",
                "opt": 1,
                "rep": 1,
                "table": 249
            },
            {
                "datatype": "CWE",
                "desc": "Product Class",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Total Duration Of Therapy",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Product Manufacture Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Product Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Product Implantation Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Product Explantation Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Single Use Device",
                "opt": 1,
                "rep": 1,
                "table": 244
            },
            {
                "datatype": "CWE",
                "desc": "Indication For Product Use",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Product Problem",
                "opt": 1,
                "rep": 1,
                "table": 245
            },
            {
                "datatype": "ST",
                "desc": "Product Serial/Lot Number",
                "opt": 1,
                "rep": 3
            },
            {
                "datatype": "CWE",
                "desc": "Product Available For Inspection",
                "opt": 1,
                "rep": 1,
                "table": 246
            },
            {
                "datatype": "CWE",
                "desc": "Product Evaluation Performed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Product Evaluation Status",
                "opt": 1,
                "rep": 1,
                "table": 247
            },
            {
                "datatype": "CWE",
                "desc": "Product Evaluation Results",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Evaluated Product Source",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 248
            },
            {
                "datatype": "DTM",
                "desc": "Date Product Returned To Manufacturer",
                "opt": 1,
                "rep": 1
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
                "rep": 6,
                "len": 2,
                "table": 251
            },
            {
                "datatype": "ID",
                "desc": "Event Causality Observations",
                "opt": 1,
                "rep": 6,
                "len": 2,
                "table": 252
            },
            {
                "datatype": "ID",
                "desc": "Indirect Exposure Mechanism",
                "opt": 1,
                "rep": 3,
                "len": 1,
                "table": 253
            }
        ]
    },
    "PD1": {
        "desc": "Patient Additional Demographic",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Living Dependency",
                "opt": 1,
                "rep": 0,
                "table": 223
            },
            {
                "datatype": "CWE",
                "desc": "Living Arrangement",
                "opt": 1,
                "rep": 1,
                "table": 220
            },
            {
                "datatype": "XON",
                "desc": "Patient Primary Facility",
                "opt": 1,
                "rep": 0,
                "table": 204
            },
            {
                "datatype": "ST",
                "desc": "Patient Primary Care Provider Name & ID No.",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Student Indicator",
                "opt": 1,
                "rep": 1,
                "table": 231
            },
            {
                "datatype": "CWE",
                "desc": "Handicap",
                "opt": 1,
                "rep": 1,
                "table": 295
            },
            {
                "datatype": "CWE",
                "desc": "Living Will Code",
                "opt": 1,
                "rep": 1,
                "table": 315
            },
            {
                "datatype": "CWE",
                "desc": "Organ Donor Code",
                "opt": 1,
                "rep": 1,
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
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Publicity Code",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Place of Worship",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Advance Directive Code",
                "opt": 3,
                "rep": 0,
                "table": 435
            },
            {
                "datatype": "CWE",
                "desc": "Immunization Registry Status",
                "opt": 1,
                "rep": 1,
                "table": 441
            },
            {
                "datatype": "DT",
                "desc": "Immunization Registry Status Effective Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Publicity Code Effective Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Military Branch",
                "opt": 1,
                "rep": 1,
                "table": 140
            },
            {
                "datatype": "CWE",
                "desc": "Military Rank/Grade",
                "opt": 1,
                "rep": 1,
                "table": 141
            },
            {
                "datatype": "CWE",
                "desc": "Military Status",
                "opt": 1,
                "rep": 1,
                "table": 142
            },
            {
                "datatype": "DT",
                "desc": "Advance Directive Last Verified Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PDA": {
        "desc": "Patient Death and Autopsy",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Death Cause Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Death Location",
                "opt": 1,
                "rep": 1
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
                "datatype": "DTM",
                "desc": "Death Certificate Signed Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Death Certified By",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Autopsy Performed By",
                "opt": 1,
                "rep": 1
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
    "PEO": {
        "desc": "Product Experience Observation",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Event Identifiers Used",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Event Symptom/Diagnosis Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Event Onset Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Event Exacerbation Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Event Improved Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Event Ended Data/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Event Location Occurred Address",
                "opt": 1,
                "rep": 0
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
                "desc": "Event Description from Others",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "FT",
                "desc": "Event Description from Original Reporter",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "FT",
                "desc": "Event Description from Patient",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "FT",
                "desc": "Event Description from Practitioner",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "FT",
                "desc": "Event Description from Autopsy",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Cause Of Death",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XPN",
                "desc": "Primary Observer Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Primary Observer Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Primary Observer Telephone",
                "opt": 1,
                "rep": 0
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
                "datatype": "DTM",
                "desc": "Primary Observer Aware Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Primary Observer's identity May Be Divulged",
                "opt": 1,
                "rep": 1,
                "len": 2,
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
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Sender Individual Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Sender Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Sender Telephone",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Sender Event Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sender Sequence Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "FT",
                "desc": "Sender Event Description",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "FT",
                "desc": "Sender Comment",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Sender Aware Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Event Report Date",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Event Report Timing/Type",
                "opt": 1,
                "rep": 2,
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
                "datatype": "ST",
                "desc": "Patient ID",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Patient Identifier List",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Alternate Patient ID - PID",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "XPN",
                "desc": "Patient Name",
                "opt": 2,
                "rep": 0,
                "table": 200
            },
            {
                "datatype": "XPN",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of Birth",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administrative Sex",
                "opt": 1,
                "rep": 1,
                "table": 1
            },
            {
                "datatype": "ST",
                "desc": "Patient Alias",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Race",
                "opt": 1,
                "rep": 0,
                "table": 5
            },
            {
                "datatype": "XAD",
                "desc": "Patient Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "County Code",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number - Home",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number - Business",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "table": 296
            },
            {
                "datatype": "CWE",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 1,
                "table": 2
            },
            {
                "datatype": "CWE",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "table": 6
            },
            {
                "datatype": "CX",
                "desc": "Patient Account Number",
                "opt": 1,
                "rep": 1,
                "table": 61
            },
            {
                "datatype": "ST",
                "desc": "SSN Number - Patient",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Driver's License Number - Patient",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Mother's Identifier",
                "opt": 1,
                "rep": 0,
                "table": 61
            },
            {
                "datatype": "CWE",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 0,
                "table": 189
            },
            {
                "datatype": "ST",
                "desc": "Birth Place",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "table": 171
            },
            {
                "datatype": "CWE",
                "desc": "Veterans Military Status",
                "opt": 1,
                "rep": 1,
                "table": 172
            },
            {
                "datatype": "ST",
                "desc": "Nationality ",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Patient Death Date and Time",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Identity Reliability Code",
                "opt": 1,
                "rep": 0,
                "table": 445
            },
            {
                "datatype": "DTM",
                "desc": "Last Update Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Last Update Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Species Code",
                "opt": 3,
                "rep": 1,
                "table": 446
            },
            {
                "datatype": "CWE",
                "desc": "Breed Code",
                "opt": 3,
                "rep": 1,
                "table": 447
            },
            {
                "datatype": "ST",
                "desc": "Strain",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Production Class Code",
                "opt": 1,
                "rep": 2,
                "table": 429
            },
            {
                "datatype": "CWE",
                "desc": "Tribal Citizenship",
                "opt": 1,
                "rep": 0,
                "table": 171
            },
            {
                "datatype": "XTN",
                "desc": "Patient Telecommunication Information",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "PKG": {
        "desc": "Item Packaging",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set Id - PKG",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Packaging Units",
                "opt": 1,
                "rep": 1,
                "table": 818
            },
            {
                "datatype": "CNE",
                "desc": "Default Order Unit Of Measure Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "NM",
                "desc": "Package Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Price",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Future Item Price",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Future Item Price Effective Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PMT": {
        "desc": "Payment Information",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Payment/Remittance Advice Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Payment/Remittance Effective Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Payment/Remittance Expiration Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Payment Method",
                "opt": 2,
                "rep": 1,
                "table": 570
            },
            {
                "datatype": "DTM",
                "desc": "Payment/Remittance Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Payment/Remittance Amount",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Check Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Payee Bank Identification",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Payee Transit Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Payee Bank Account ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Payment Organization",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "ESR-Code-Line",
                "opt": 1,
                "rep": 1
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
                "datatype": "ST",
                "desc": "Procedure Coding Method",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code",
                "opt": 2,
                "rep": 1,
                "table": 88
            },
            {
                "datatype": "ST",
                "desc": "Procedure Description",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Procedure Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Procedure Functional Type",
                "opt": 1,
                "rep": 1,
                "table": 230
            },
            {
                "datatype": "NM",
                "desc": "Procedure Minutes",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Anesthesiologist",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Anesthesia Code",
                "opt": 1,
                "rep": 1,
                "table": 19
            },
            {
                "datatype": "NM",
                "desc": "Anesthesia Minutes",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Surgeon",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Procedure Practitioner ",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Consent Code",
                "opt": 1,
                "rep": 1,
                "table": 59
            },
            {
                "datatype": "NM",
                "desc": "Procedure Priority",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 418
            },
            {
                "datatype": "CWE",
                "desc": "Associated Diagnosis Code",
                "opt": 1,
                "rep": 1,
                "table": 51
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code Modifier",
                "opt": 1,
                "rep": 0,
                "table": 340
            },
            {
                "datatype": "CWE",
                "desc": "Procedure DRG Type",
                "opt": 1,
                "rep": 1,
                "table": 416
            },
            {
                "datatype": "CWE",
                "desc": "Tissue Type Code",
                "opt": 1,
                "rep": 0,
                "table": 417
            },
            {
                "datatype": "EI",
                "desc": "Procedure Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Procedure Action Code",
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 206
            },
            {
                "datatype": "CWE",
                "desc": "DRG Procedure Determination Status ",
                "opt": 1,
                "rep": 1,
                "table": 761
            },
            {
                "datatype": "CWE",
                "desc": "DRG Procedure Relevance",
                "opt": 1,
                "rep": 1,
                "table": 763
            },
            {
                "datatype": "PL",
                "desc": "Treating Organizational Unit",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "Respiratory Within Surgery",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "EI",
                "desc": "Parent Procedure ID",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PRA": {
        "desc": "Practitioner Detail",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Primary Key Value - PRA",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Practitioner Group",
                "opt": 1,
                "rep": 0,
                "table": 358
            },
            {
                "datatype": "CWE",
                "desc": "Practitioner Category",
                "opt": 1,
                "rep": 0,
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
                "table": 337
            },
            {
                "datatype": "PLN",
                "desc": "Practitioner ID Numbers",
                "opt": 1,
                "rep": 0,
                "table": 338
            },
            {
                "datatype": "PIP",
                "desc": "Privileges",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DT",
                "desc": "Date Entered Practice",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Institution ",
                "opt": 1,
                "rep": 1,
                "table": 537
            },
            {
                "datatype": "DT",
                "desc": "Date Left Practice",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Government Reimbursement Billing Eligibility",
                "opt": 1,
                "rep": 0,
                "table": 401
            },
            {
                "datatype": "SI",
                "desc": "Set ID - PRA",
                "opt": 3,
                "rep": 1,
                "len": 4
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
                "datatype": "DTM",
                "desc": "Action Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Problem ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Problem Instance ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Episode of Care ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Problem List Priority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Problem Established Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Anticipated Problem Resolution Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Actual Problem Resolution Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Problem Classification",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Problem Management Discipline",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Problem Persistence",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Problem Confirmation Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Problem Life Cycle Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Problem Life Cycle Status Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Problem Date of Onset",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Problem Onset Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Problem Ranking",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Certainty of Problem",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Probability of Problem (0-1)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Individual Awareness of Problem",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Problem Prognosis",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Individual Awareness of Prognosis",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Family/Significant Other Awareness of Problem/Prognosis",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Security/Sensitivity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Problem Severity",
                "opt": 1,
                "rep": 1,
                "table": 836
            },
            {
                "datatype": "CWE",
                "desc": "Problem Perspective",
                "opt": 1,
                "rep": 1,
                "table": 838
            },
            {
                "datatype": "CNE",
                "desc": "Mood Code",
                "opt": 3,
                "rep": 1,
                "table": 725
            }
        ]
    },
    "PRC": {
        "desc": "Pricing",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Primary Key Value - PRC",
                "opt": 2,
                "rep": 1,
                "table": 132
            },
            {
                "datatype": "CWE",
                "desc": "Facility ID - PRC",
                "opt": 1,
                "rep": 0,
                "table": 464
            },
            {
                "datatype": "CWE",
                "desc": "Department",
                "opt": 1,
                "rep": 0,
                "table": 184
            },
            {
                "datatype": "CWE",
                "desc": "Valid Patient Classes",
                "opt": 1,
                "rep": 0,
                "table": 4
            },
            {
                "datatype": "CP",
                "desc": "Price",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Formula",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Minimum Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Maximum Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "MO",
                "desc": "Minimum Price",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "MO",
                "desc": "Maximum Price",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Effective Start Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Effective End Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Price Override Flag",
                "opt": 1,
                "rep": 1,
                "table": 268
            },
            {
                "datatype": "CWE",
                "desc": "Billing Category",
                "opt": 1,
                "rep": 0,
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Charge on Indicator",
                "opt": 1,
                "rep": 1,
                "table": 269
            }
        ]
    },
    "PRD": {
        "desc": "Provider Data",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Provider Role",
                "opt": 2,
                "rep": 0,
                "table": 286
            },
            {
                "datatype": "XPN",
                "desc": "Provider Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Provider Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Provider Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XTN",
                "desc": "Provider Communication Information",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Preferred Method of Contact ",
                "opt": 1,
                "rep": 1,
                "table": 185
            },
            {
                "datatype": "PLN",
                "desc": "Provider Identifiers",
                "opt": 1,
                "rep": 0,
                "table": 338
            },
            {
                "datatype": "DTM",
                "desc": "Effective Start Date of Provider Role",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Effective End Date of Provider Role",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XON",
                "desc": "Provider Organization Name and Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Provider Organization Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Provider Organization Location Information",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Provider Organization Communication Information",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Provider Organization Method of Contact",
                "opt": 1,
                "rep": 1,
                "table": 185
            }
        ]
    },
    "PRT": {
        "desc": "Participation Information",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Participation Instance ID",
                "opt": 3,
                "rep": 1,
                "len": 4
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
                "datatype": "CWE",
                "desc": "Action Reason",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Participation ",
                "opt": 2,
                "rep": 1,
                "table": 912
            },
            {
                "datatype": "XCN",
                "desc": "Participation Person",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Participation Person Provider Type",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Participant Organization Unit Type",
                "opt": 3,
                "rep": 1,
                "table": 406
            },
            {
                "datatype": "XON",
                "desc": "Participation Organization",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Participant Location",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Participation Device",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Participation Begin Date/Time (arrival time)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Participation End Date/Time (departure time)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Participation Qualitative Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Participation Address",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Participant Telecommunication Address",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "PSG": {
        "desc": "Product/Service Group",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Provider Product/Service Group Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Payer Product/Service Group Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SI",
                "desc": "Product/Service Group Sequence Number",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Adjudicate as Group",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CP",
                "desc": "Product/Service Group Billed Amount",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Product/Service Group Description",
                "opt": 2,
                "rep": 1
            }
        ]
    },
    "PSL": {
        "desc": "Product/Service Line Item",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Provider Product/Service Line Item Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Payer Product/Service Line Item Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SI",
                "desc": "Product/Service Line Item Sequence Number",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EI",
                "desc": "Provider Tracking ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Payer Tracking ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Product/Service Line Item Status",
                "opt": 2,
                "rep": 1,
                "table": 559
            },
            {
                "datatype": "CWE",
                "desc": "Product/Service Code",
                "opt": 2,
                "rep": 1,
                "table": 879
            },
            {
                "datatype": "CWE",
                "desc": "Product/Service Code Modifier",
                "opt": 1,
                "rep": 5,
                "table": 880
            },
            {
                "datatype": "ST",
                "desc": "Product/Service Code Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Product/Service Effective Date",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Product/Service Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Product/Service Quantity",
                "opt": 3,
                "rep": 1,
                "table": 560
            },
            {
                "datatype": "CP",
                "desc": "Product/Service Unit Cost",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number of Items per Unit",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Product/Service Gross Amount",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Product/Service Billed Amount",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Product/Service Clarification Code Type",
                "opt": 1,
                "rep": 20,
                "table": 561
            },
            {
                "datatype": "ST",
                "desc": "Product/Service Clarification Code Value",
                "opt": 1,
                "rep": 20
            },
            {
                "datatype": "EI",
                "desc": "Health Document Reference Identifier",
                "opt": 1,
                "rep": 5
            },
            {
                "datatype": "CWE",
                "desc": "Processing Consideration Code",
                "opt": 1,
                "rep": 20,
                "table": 562
            },
            {
                "datatype": "ID",
                "desc": "Restricted Disclosure Indicator",
                "opt": 2,
                "rep": 1,
                "len": 4,
                "table": 532
            },
            {
                "datatype": "CWE",
                "desc": "Related Product/Service Code Indicator",
                "opt": 1,
                "rep": 1,
                "table": 879
            },
            {
                "datatype": "CP",
                "desc": "Product/Service Amount for Physician",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Product/Service Cost Factor",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Cost Center",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DR",
                "desc": "Billing Period",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Days without Billing",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Session-No",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "XCN",
                "desc": "Executing Physician ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Responsible Physician ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Role Executing Physician",
                "opt": 1,
                "rep": 1,
                "table": 881
            },
            {
                "datatype": "CWE",
                "desc": "Medical Role Executing Physician",
                "opt": 1,
                "rep": 1,
                "table": 882
            },
            {
                "datatype": "CWE",
                "desc": "Side of body ",
                "opt": 1,
                "rep": 1,
                "table": 894
            },
            {
                "datatype": "NM",
                "desc": "Number of TP's PP",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "TP-Value PP",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Internal Scaling Factor PP",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "External Scaling Factor PP",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Amount PP",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number of TP's Technical Part",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "TP-Value Technical Part",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Internal Scaling Factor Technical Part",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "External Scaling Factor Technical Part",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Amount Technical Part",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CP",
                "desc": "Total Amount Professional Part + Technical Part",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "VAT-Rate",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Main-Service",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Validation",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ST",
                "desc": "Comment",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PSS": {
        "desc": "Product/Service Section",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Provider Product/Service Section Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Payer Product/Service Section Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SI",
                "desc": "Product/Service Section Sequence Number",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CP",
                "desc": "Billed Amount",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Section Description or Heading",
                "opt": 2,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Pathway ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Pathway Instance ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Pathway Established Date/Time ",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Pathway Life Cycle Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Change Pathway Life Cycle Status Date/Time",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Mood Code",
                "opt": 3,
                "rep": 1,
                "table": 725
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
                "datatype": "CWE",
                "desc": "Patient Class",
                "opt": 2,
                "rep": 1,
                "table": 4
            },
            {
                "datatype": "PL",
                "desc": "Assigned Patient Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Admission Type",
                "opt": 1,
                "rep": 1,
                "table": 7
            },
            {
                "datatype": "CX",
                "desc": "Preadmit Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "Prior Patient Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Attending Doctor",
                "opt": 1,
                "rep": 0,
                "table": 10
            },
            {
                "datatype": "XCN",
                "desc": "Referring Doctor",
                "opt": 1,
                "rep": 0,
                "table": 10
            },
            {
                "datatype": "XCN",
                "desc": "Consulting Doctor",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Hospital Service",
                "opt": 1,
                "rep": 1,
                "table": 69
            },
            {
                "datatype": "PL",
                "desc": "Temporary Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Preadmit Test Indicator",
                "opt": 1,
                "rep": 1,
                "table": 87
            },
            {
                "datatype": "CWE",
                "desc": "Re-admission Indicator",
                "opt": 1,
                "rep": 1,
                "table": 92
            },
            {
                "datatype": "CWE",
                "desc": "Admit Source",
                "opt": 1,
                "rep": 1,
                "table": 23
            },
            {
                "datatype": "CWE",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 0,
                "table": 9
            },
            {
                "datatype": "CWE",
                "desc": "VIP Indicator",
                "opt": 1,
                "rep": 1,
                "table": 99
            },
            {
                "datatype": "XCN",
                "desc": "Admitting Doctor",
                "opt": 1,
                "rep": 0,
                "table": 10
            },
            {
                "datatype": "CWE",
                "desc": "Patient Type",
                "opt": 1,
                "rep": 1,
                "table": 18
            },
            {
                "datatype": "CX",
                "desc": "Visit Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "FC",
                "desc": "Financial Class",
                "opt": 1,
                "rep": 0,
                "table": 64
            },
            {
                "datatype": "CWE",
                "desc": "Charge Price Indicator",
                "opt": 1,
                "rep": 1,
                "table": 32
            },
            {
                "datatype": "CWE",
                "desc": "Courtesy Code",
                "opt": 1,
                "rep": 1,
                "table": 45
            },
            {
                "datatype": "CWE",
                "desc": "Credit Rating",
                "opt": 1,
                "rep": 1,
                "table": 46
            },
            {
                "datatype": "CWE",
                "desc": "Contract Code",
                "opt": 1,
                "rep": 0,
                "table": 44
            },
            {
                "datatype": "DT",
                "desc": "Contract Effective Date",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Contract Amount",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Contract Period",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Interest Code",
                "opt": 1,
                "rep": 1,
                "table": 73
            },
            {
                "datatype": "CWE",
                "desc": "Transfer to Bad Debt Code",
                "opt": 1,
                "rep": 1,
                "table": 110
            },
            {
                "datatype": "DT",
                "desc": "Transfer to Bad Debt Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Bad Debt Agency Code",
                "opt": 1,
                "rep": 1,
                "table": 21
            },
            {
                "datatype": "NM",
                "desc": "Bad Debt Transfer Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Bad Debt Recovery Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Delete Account Indicator",
                "opt": 1,
                "rep": 1,
                "table": 111
            },
            {
                "datatype": "DT",
                "desc": "Delete Account Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Discharge Disposition",
                "opt": 1,
                "rep": 1,
                "table": 112
            },
            {
                "datatype": "DLD",
                "desc": "Discharged to Location",
                "opt": 1,
                "rep": 1,
                "table": 113
            },
            {
                "datatype": "CWE",
                "desc": "Diet Type",
                "opt": 1,
                "rep": 1,
                "table": 114
            },
            {
                "datatype": "CWE",
                "desc": "Servicing Facility",
                "opt": 1,
                "rep": 1,
                "table": 115
            },
            {
                "datatype": "ST",
                "desc": "Bed Status",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Account Status",
                "opt": 1,
                "rep": 1,
                "table": 117
            },
            {
                "datatype": "PL",
                "desc": "Pending Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "Prior Temporary Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Admit Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Discharge Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Current Patient Balance",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Total Charges",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Total Adjustments",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Total Payments",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Alternate Visit ID",
                "opt": 1,
                "rep": 1,
                "table": 203
            },
            {
                "datatype": "CWE",
                "desc": "Visit Indicator",
                "opt": 1,
                "rep": 1,
                "table": 326
            },
            {
                "datatype": "ST",
                "desc": "Other Healthcare Provider",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Service Episode Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Service Episode Identifier",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PV2": {
        "desc": "Patient Visit - Additional Information",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Prior Pending Location",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Accommodation Code",
                "opt": 1,
                "rep": 1,
                "table": 129
            },
            {
                "datatype": "CWE",
                "desc": "Admit Reason",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Transfer Reason",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Patient Valuables",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Patient Valuables Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Visit User Code",
                "opt": 1,
                "rep": 0,
                "table": 130
            },
            {
                "datatype": "DTM",
                "desc": "Expected Admit Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Expected Discharge Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Estimated Length of Inpatient Stay",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Actual Length of Inpatient Stay",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Visit Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Referral Source Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DT",
                "desc": "Previous Service Date",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Purge Status Code",
                "opt": 1,
                "rep": 1,
                "table": 213
            },
            {
                "datatype": "DT",
                "desc": "Purge Status Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Special Program Code",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Visit Publicity Code",
                "opt": 1,
                "rep": 1,
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
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Patient Status Code",
                "opt": 1,
                "rep": 1,
                "table": 216
            },
            {
                "datatype": "CWE",
                "desc": "Visit Priority Code",
                "opt": 1,
                "rep": 1,
                "table": 217
            },
            {
                "datatype": "DT",
                "desc": "Previous Treatment Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Expected Discharge Disposition",
                "opt": 1,
                "rep": 1,
                "table": 112
            },
            {
                "datatype": "DT",
                "desc": "Signature on File Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "First Similar Illness Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Patient Charge Adjustment Code",
                "opt": 1,
                "rep": 1,
                "table": 218
            },
            {
                "datatype": "CWE",
                "desc": "Recurring Service Code",
                "opt": 1,
                "rep": 1,
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
                "datatype": "DTM",
                "desc": "Expected Surgery Date and Time",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Mode of Arrival Code",
                "opt": 1,
                "rep": 1,
                "table": 430
            },
            {
                "datatype": "CWE",
                "desc": "Recreational Drug Use Code",
                "opt": 1,
                "rep": 0,
                "table": 431
            },
            {
                "datatype": "CWE",
                "desc": "Admission Level of Care Code",
                "opt": 1,
                "rep": 1,
                "table": 432
            },
            {
                "datatype": "CWE",
                "desc": "Precaution Code",
                "opt": 1,
                "rep": 0,
                "table": 433
            },
            {
                "datatype": "CWE",
                "desc": "Patient Condition Code",
                "opt": 1,
                "rep": 1,
                "table": 434
            },
            {
                "datatype": "CWE",
                "desc": "Living Will Code",
                "opt": 1,
                "rep": 1,
                "table": 315
            },
            {
                "datatype": "CWE",
                "desc": "Organ Donor Code",
                "opt": 1,
                "rep": 1,
                "table": 316
            },
            {
                "datatype": "CWE",
                "desc": "Advance Directive Code",
                "opt": 3,
                "rep": 0,
                "table": 435
            },
            {
                "datatype": "DT",
                "desc": "Patient Status Effective Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Expected LOA Return Date/Time",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Expected Pre-admission Testing Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Notify Clergy Code",
                "opt": 1,
                "rep": 0,
                "table": 534
            },
            {
                "datatype": "DT",
                "desc": "Advance Directive Last Verified Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PYE": {
        "desc": "Payee Information",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - PYE",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Payee Type",
                "opt": 2,
                "rep": 1,
                "table": 557
            },
            {
                "datatype": "CWE",
                "desc": "Payee Relationship to Invoice (Patient)",
                "opt": 3,
                "rep": 1,
                "table": 558
            },
            {
                "datatype": "XON",
                "desc": "Payee Identification List",
                "opt": 3,
                "rep": 5
            },
            {
                "datatype": "XPN",
                "desc": "Payee Person Name",
                "opt": 3,
                "rep": 4
            },
            {
                "datatype": "XAD",
                "desc": "Payee Address",
                "opt": 3,
                "rep": 4
            },
            {
                "datatype": "CWE",
                "desc": "Payment Method",
                "opt": 1,
                "rep": 1,
                "table": 570
            }
        ]
    },
    "QAK": {
        "desc": "Query Acknowledgment",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query Tag",
                "opt": 3,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Message Query Name",
                "opt": 1,
                "rep": 1,
                "table": 471
            },
            {
                "datatype": "NM",
                "desc": "Hit Count Total",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "This payload",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Hits remaining",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Message Query Name",
                "opt": 2,
                "rep": 1,
                "table": 471
            }
        ]
    },
    "QPD": {
        "desc": "Query Parameter Definition",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Message Query Name ",
                "opt": 2,
                "rep": 1,
                "table": 471
            },
            {
                "datatype": "ST",
                "desc": "Query Tag",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "User Parameters (in successive fields) ",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "QRD": {
        "desc": "Original-Style Query Definition",
        "fields": [
            {
                "datatype": "DTM",
                "desc": "Query Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Query Format Code",
                "opt": 2,
                "rep": 1,
                "table": 106
            },
            {
                "datatype": "ID",
                "desc": "Query Priority",
                "opt": 2,
                "rep": 1,
                "table": 91
            },
            {
                "datatype": "ST",
                "desc": "Query ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Deferred Response Type",
                "opt": 1,
                "rep": 1,
                "table": 107
            },
            {
                "datatype": "DTM",
                "desc": "Deferred Response Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Quantity Limited Request",
                "opt": 2,
                "rep": 1,
                "table": 126
            },
            {
                "datatype": "XCN",
                "desc": "Who Subject Filter",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "What Subject Filter",
                "opt": 2,
                "rep": 0,
                "table": 48
            },
            {
                "datatype": "CWE",
                "desc": "What Department Data Code",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "VR",
                "desc": "What Data Code Value Qual.",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "Query Results Level",
                "opt": 1,
                "rep": 1,
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
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "When Data Start Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "When Data End Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "What User Qualifier",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Other QRY Subject Filter",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "Which Date/Time Qualifier",
                "opt": 1,
                "rep": 0,
                "table": 156
            },
            {
                "datatype": "ID",
                "desc": "Which Date/Time Status Qualifier",
                "opt": 1,
                "rep": 0,
                "table": 157
            },
            {
                "datatype": "ID",
                "desc": "Date/Time Selection Qualifier",
                "opt": 1,
                "rep": 0,
                "table": 158
            },
            {
                "datatype": "TQ",
                "desc": "When Quantity/Timing Qualifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Search Confidence Threshold",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Match Reason Code",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 392
            },
            {
                "datatype": "CWE",
                "desc": "Algorithm Descriptor",
                "opt": 1,
                "rep": 1,
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
                "table": 126
            },
            {
                "datatype": "CNE",
                "desc": "Response Modality",
                "opt": 1,
                "rep": 1,
                "table": 394
            },
            {
                "datatype": "DTM",
                "desc": "Execution and Delivery Time",
                "opt": 3,
                "rep": 1
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
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "Segment group inclusion ",
                "opt": 1,
                "rep": 0,
                "len": 256,
                "table": 391
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
                "rep": 1
            },
            {
                "datatype": "RCD",
                "desc": "Column Description",
                "opt": 2,
                "rep": 0,
                "table": 440
            }
        ]
    },
    "RDT": {
        "desc": "Table Row Data",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Column Value",
                "opt": 2,
                "rep": 1
            }
        ]
    },
    "REL": {
        "desc": "Clinical Relationship Segment",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID -REL",
                "opt": 3,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CWE",
                "desc": "Relationship Type",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "This Relationship Instance Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Source Information Instance Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Target Information Instance Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Asserting Entity Instance ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Asserting Person",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Asserting Organization",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Assertor Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XTN",
                "desc": "Assertor Contact",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DR",
                "desc": "Assertion Date Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Negation Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "CWE",
                "desc": "Certainty of Relationship",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Priority No",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Priority  Sequence No (rel preference for consideration)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Separability Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            }
        ]
    },
    "RF1": {
        "desc": "Referral Information",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Referral Status",
                "opt": 1,
                "rep": 1,
                "table": 283
            },
            {
                "datatype": "CWE",
                "desc": "Referral Priority",
                "opt": 1,
                "rep": 1,
                "table": 280
            },
            {
                "datatype": "CWE",
                "desc": "Referral Type",
                "opt": 1,
                "rep": 1,
                "table": 281
            },
            {
                "datatype": "CWE",
                "desc": "Referral Disposition",
                "opt": 1,
                "rep": 0,
                "table": 282
            },
            {
                "datatype": "CWE",
                "desc": "Referral Category",
                "opt": 1,
                "rep": 1,
                "table": 284
            },
            {
                "datatype": "EI",
                "desc": "Originating Referral Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Process Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Referral Reason",
                "opt": 1,
                "rep": 0,
                "table": 336
            },
            {
                "datatype": "EI",
                "desc": "External Referral Identifier",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Referral Documentation Completion Status ",
                "opt": 1,
                "rep": 1,
                "table": 865
            }
        ]
    },
    "RFI": {
        "desc": "Request for Information",
        "fields": [
            {
                "datatype": "DTM",
                "desc": "Request Date",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Response Due Date",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Patient Consent",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "DTM",
                "desc": "Date Additional Information Was Submitted",
                "opt": 1,
                "rep": 1
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
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 206
            },
            {
                "datatype": "CWE",
                "desc": "Resource Group ID",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "RMI": {
        "desc": "Risk Management Incident",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Risk Management Incident Code",
                "opt": 1,
                "rep": 1,
                "table": 427
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time Incident",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Incident Type Code",
                "opt": 1,
                "rep": 1,
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
                "opt": 3,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Role-ROL",
                "opt": 2,
                "rep": 1,
                "table": 443
            },
            {
                "datatype": "XCN",
                "desc": "Role Person",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Role Begin Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Role End Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Role Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Role Action Reason",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Provider Type",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Organization Unit Type",
                "opt": 1,
                "rep": 1,
                "table": 406
            },
            {
                "datatype": "XAD",
                "desc": "Office/Home Address/Birthplace",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Phone ",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Person's Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XON",
                "desc": "Organization",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Manufacturer Identifier",
                "opt": 3,
                "rep": 1,
                "table": 385
            },
            {
                "datatype": "ST",
                "desc": "Manufacturer's Catalog",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Vendor ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Vendor Catalog",
                "opt": 3,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Item Code - Internal",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Item Code - External",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Hospital Item Code",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Requisition Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Requisition Unit of Measure",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Cost Center Account Number",
                "opt": 1,
                "rep": 1,
                "table": 319
            },
            {
                "datatype": "CWE",
                "desc": "Item Natural Account Code",
                "opt": 1,
                "rep": 1,
                "table": 320
            },
            {
                "datatype": "CWE",
                "desc": "Deliver To ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Date Needed",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Administration Sub-ID Counter",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time Start of Administration",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time End of Administration",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administered Code",
                "opt": 2,
                "rep": 1,
                "table": 292
            },
            {
                "datatype": "NM",
                "desc": "Administered Amount",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administered Units",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administered Dosage Form",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administration Notes",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Administering Provider",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "LA2",
                "desc": "Administered-at Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Administered Per (Time Unit)",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Administered Strength",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administered Strength Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Substance Lot Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Substance Expiration Date",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Substance Manufacturer Name",
                "opt": 1,
                "rep": 0,
                "table": 227
            },
            {
                "datatype": "CWE",
                "desc": "Substance/Treatment Refusal Reason",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Indication",
                "opt": 1,
                "rep": 0
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
                "len": 1,
                "table": 206
            },
            {
                "datatype": "DTM",
                "desc": "System Entry Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Administered Drug Strength Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administered Drug Strength Volume Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administered Barcode Identifier",
                "opt": 1,
                "rep": 1
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
                "datatype": "PL",
                "desc": "Administer-at",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Administered-at Address",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Component Code",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Component Amount",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Component Units",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Component Strength",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Component Strength Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Supplementary Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Component Drug Strength Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Component Drug Strength Volume Units",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Dispense/Give Code",
                "opt": 2,
                "rep": 1,
                "table": 292
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time Dispensed",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Actual Dispense Amount",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Actual Dispense Units",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Actual Dosage Form",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prescription Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number of Refills Remaining",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Dispense Notes",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Dispensing Provider",
                "opt": 1,
                "rep": 0
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
                "rep": 1
            },
            {
                "datatype": "LA2",
                "desc": "Dispense-to Location",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Actual Strength",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Actual Strength Unit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Substance Lot Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Substance Expiration Date",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Substance Manufacturer Name",
                "opt": 1,
                "rep": 0,
                "table": 227
            },
            {
                "datatype": "CWE",
                "desc": "Indication",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Dispense Package Size",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Dispense Package Size Unit",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Supplementary Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Initiating Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Packaging/Assembly Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Actual Drug Strength Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Actual Drug Strength Volume Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Dispense to Pharmacy",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Dispense to Pharmacy Address",
                "opt": 1,
                "rep": 1
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
                "table": 484
            },
            {
                "datatype": "XTN",
                "desc": "Pharmacy Phone Number",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "RXE": {
        "desc": "Pharmacy/Treatment Encoded Order",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Quantity/Timing",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Code",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Give Amount - Minimum",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Give Amount - Maximum",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Units",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Dosage Form",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Provider's Administration Instructions",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Deliver-to Location",
                "opt": 4,
                "rep": 1
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
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Dispense Units",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number of Refills",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Ordering Provider's DEA Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Pharmacist/Treatment Supplier's Verifier ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Prescription Number",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number of Refills Remaining",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number of Refills/Doses Dispensed",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "D/T of Most Recent Refill or Dose Dispensed",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Total Daily Dose",
                "opt": 3,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Give Per (Time Unit)",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Give Rate Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Rate Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Give Strength",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Strength Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Indication",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Dispense Package Size",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Dispense Package Size Unit",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Supplementary Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Original Order Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Give Drug Strength Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Drug Strength Volume Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Controlled Substance Schedule",
                "opt": 1,
                "rep": 1,
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
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Pharmacy of Most Recent Fill",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Initial Dispense Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Dispensing Pharmacy",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Dispensing Pharmacy Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "Deliver-to Patient Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Deliver-to Address",
                "opt": 1,
                "rep": 1
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
                "datatype": "XTN",
                "desc": "Pharmacy Phone Number",
                "opt": 1,
                "rep": 0
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Dispense Sub-ID Counter",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Quantity/Timing",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Code",
                "opt": 2,
                "rep": 1,
                "table": 292
            },
            {
                "datatype": "NM",
                "desc": "Give Amount - Minimum",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Give Amount - Maximum",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Units",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Dosage Form",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administration Notes",
                "opt": 1,
                "rep": 0
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
                "desc": "Dispense-To Location",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Pharmacy/Treatment Supplier's Special Administration Instructions",
                "opt": 1,
                "rep": 0,
                "len": 250
            },
            {
                "datatype": "ST",
                "desc": "Give Per (Time Unit)",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Give Rate Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Rate Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Give Strength",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Strength Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Substance Lot Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Substance Expiration Date",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Substance Manufacturer Name",
                "opt": 1,
                "rep": 0,
                "table": 227
            },
            {
                "datatype": "CWE",
                "desc": "Indication",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Give Drug Strength Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Drug Strength Volume Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Give Barcode Identifier",
                "opt": 1,
                "rep": 1
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
                "desc": "Dispense to Pharmacy",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Dispense to Pharmacy Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "Deliver-to Patient Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Deliver-to Address",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "RXO": {
        "desc": "Pharmacy/Treatment Order",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Requested Give Code",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Requested Give Amount - Minimum",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Requested Give Amount - Maximum",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Requested Give Units",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Requested Dosage Form",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Provider's Pharmacy/Treatment Instructions",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Provider's Administration Instructions",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "LA1",
                "desc": "Deliver-To Location",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Requested Dispense Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Requested Dispense Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Requested Dispense Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number Of Refills",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Ordering Provider's DEA Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Pharmacist/Treatment Supplier's Verifier ID",
                "opt": 3,
                "rep": 0
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
                "desc": "Requested Give Per (Time Unit)",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Requested Give Strength",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Requested Give Strength Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Indication",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Requested Give Rate Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Requested Give Rate Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Total Daily Dose",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Supplementary Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Requested Drug Strength Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Requested Drug Strength Volume Units",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Medication Instance Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Segment Instance Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Mood Code",
                "opt": 3,
                "rep": 1,
                "table": 725
            },
            {
                "datatype": "CWE",
                "desc": "Dispensing Pharmacy",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Dispensing Pharmacy Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "PL",
                "desc": "Deliver-to Patient Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Deliver-to Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XTN",
                "desc": "Pharmacy Phone Number",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "RXR": {
        "desc": "Pharmacy/Treatment Route",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Route",
                "opt": 2,
                "rep": 1,
                "table": 162
            },
            {
                "datatype": "CWE",
                "desc": "Administration Site",
                "opt": 1,
                "rep": 1,
                "table": 550
            },
            {
                "datatype": "CWE",
                "desc": "Administration Device",
                "opt": 1,
                "rep": 1,
                "table": 164
            },
            {
                "datatype": "CWE",
                "desc": "Administration Method",
                "opt": 1,
                "rep": 1,
                "table": 165
            },
            {
                "datatype": "CWE",
                "desc": "Routing Instruction",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Administration Site Modifier",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Accession Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Container Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Primary (Parent) Container Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Equipment Container Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Specimen Source",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Registration Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Container Status",
                "opt": 1,
                "rep": 1,
                "table": 370
            },
            {
                "datatype": "CWE",
                "desc": "Carrier Type",
                "opt": 1,
                "rep": 1,
                "table": 378
            },
            {
                "datatype": "EI",
                "desc": "Carrier Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NA",
                "desc": "Position in Carrier ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Tray Type - SAC",
                "opt": 1,
                "rep": 1,
                "table": 379
            },
            {
                "datatype": "EI",
                "desc": "Tray Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NA",
                "desc": "Position in Tray ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Location",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "NM",
                "desc": "Container Height",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Container Diameter",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Barrier Delta",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Bottom Delta",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Container Height/Diameter/Delta Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Container Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Available Specimen Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Initial Specimen Volume",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Volume Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Separator Type",
                "opt": 1,
                "rep": 1,
                "table": 380
            },
            {
                "datatype": "CWE",
                "desc": "Cap Type",
                "opt": 1,
                "rep": 1,
                "table": 381
            },
            {
                "datatype": "CWE",
                "desc": "Additive",
                "opt": 1,
                "rep": 0,
                "table": 371
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Component",
                "opt": 1,
                "rep": 1,
                "table": 372
            },
            {
                "datatype": "SN",
                "desc": "Dilution Factor",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Treatment",
                "opt": 1,
                "rep": 1,
                "table": 373
            },
            {
                "datatype": "SN",
                "desc": "Temperature",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Hemolysis Index",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Hemolysis Index Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Lipemia Index",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Lipemia Index Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Icterus Index",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Icterus Index Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Fibrin Index",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Fibrin Index Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "System Induced Contaminants",
                "opt": 1,
                "rep": 0,
                "table": 374
            },
            {
                "datatype": "CWE",
                "desc": "Drug Interference",
                "opt": 1,
                "rep": 0,
                "table": 382
            },
            {
                "datatype": "CWE",
                "desc": "Artificial Blood",
                "opt": 1,
                "rep": 1,
                "table": 375
            },
            {
                "datatype": "CWE",
                "desc": "Special Handling Code",
                "opt": 1,
                "rep": 0,
                "table": 376
            },
            {
                "datatype": "CWE",
                "desc": "Other Environmental Factors",
                "opt": 1,
                "rep": 0,
                "table": 377
            }
        ]
    },
    "SCD": {
        "desc": "Anti-Microbial Cycle Data",
        "fields": [
            {
                "datatype": "TM",
                "desc": "Cycle Start Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Cycle Count",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Temp Max",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Temp Min",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Load Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Condition Time ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Sterilize Time ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Exhaust Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Total Cycle Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Device Status ",
                "opt": 1,
                "rep": 1,
                "table": 682
            },
            {
                "datatype": "DTM",
                "desc": "Cycle Start Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Dry Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Leak Rate",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Control Temperature",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Sterilizer Temperature",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TM",
                "desc": "Cycle Complete Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Under Temperature",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Over Temperature",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Abort Cycle",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Alarm",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Long in Charge Phase",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Long in Exhaust Phase",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Long in Fast Exhaust Phase",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Reset",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "XCN",
                "desc": "Operator - Unload",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Door Open",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CNE",
                "desc": "Reading Failure",
                "opt": 1,
                "rep": 1,
                "table": 532
            },
            {
                "datatype": "CWE",
                "desc": "Cycle Type",
                "opt": 1,
                "rep": 1,
                "table": 702
            },
            {
                "datatype": "CQ",
                "desc": "Thermal Rinse Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Wash Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Injection Rate",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "table": 88
            },
            {
                "datatype": "CX",
                "desc": "Patient Identifier List",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Attending Doctor",
                "opt": 1,
                "rep": 1,
                "table": 10
            },
            {
                "datatype": "SN",
                "desc": "Dilution Factor",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Fill Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CQ",
                "desc": "Inlet Temperature",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "SCH": {
        "desc": "Scheduling Activity Information",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Placer Appointment ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Filler Appointment ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Occurrence Number",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Placer Group Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Schedule ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Event Reason",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Appointment Reason",
                "opt": 1,
                "rep": 1,
                "table": 276
            },
            {
                "datatype": "CWE",
                "desc": "Appointment Type",
                "opt": 1,
                "rep": 1,
                "table": 277
            },
            {
                "datatype": "ST",
                "desc": "Appointment Duration",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Appointment Duration Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Appointment Timing Quantity",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Placer Contact Person",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Placer Contact Phone Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Placer Contact Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Placer Contact Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Filler Contact Person",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Filler Contact Phone Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XAD",
                "desc": "Filler Contact Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Filler Contact Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Entered by Person",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "XTN",
                "desc": "Entered by Phone Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "PL",
                "desc": "Entered by Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Parent Placer Appointment ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Parent Filler Appointment ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Filler Status Code",
                "opt": 1,
                "rep": 1,
                "table": 278
            },
            {
                "datatype": "EI",
                "desc": "Placer Order Number",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 3,
                "rep": 0
            }
        ]
    },
    "SCP": {
        "desc": "Sterilizer Configuration (Anti-Microbial Devices)",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Number Of Decontamination/Sterilization Devices ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Labor Calculation Type",
                "opt": 1,
                "rep": 1,
                "table": 651
            },
            {
                "datatype": "CWE",
                "desc": "Date Format",
                "opt": 1,
                "rep": 1,
                "table": 653
            },
            {
                "datatype": "EI",
                "desc": "Device Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Device Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Device Model Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Device Type",
                "opt": 1,
                "rep": 1,
                "table": 657
            },
            {
                "datatype": "CWE",
                "desc": "Lot Control",
                "opt": 1,
                "rep": 1,
                "table": 659
            }
        ]
    },
    "SDD": {
        "desc": "Sterilization Device Data",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Lot Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Device Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Device Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Device Data State",
                "opt": 1,
                "rep": 1,
                "table": 667
            },
            {
                "datatype": "CWE",
                "desc": "Load Status",
                "opt": 1,
                "rep": 1,
                "table": 669
            },
            {
                "datatype": "NM",
                "desc": "Control Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Operator Name",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Software Certified Version or Release Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Software Product Name",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Software Binary ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Software Product Information",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Software Install Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "SHP": {
        "desc": "Shipment",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Shipment ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Internal Shipment ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Shipment Status",
                "opt": 1,
                "rep": 1,
                "table": 905
            },
            {
                "datatype": "DTM",
                "desc": "Shipment Status Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Shipment Status Reason",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Shipment Priority",
                "opt": 1,
                "rep": 1,
                "table": 906
            },
            {
                "datatype": "CWE",
                "desc": "Shipment Confidentiality",
                "opt": 1,
                "rep": 0,
                "table": 907
            },
            {
                "datatype": "NM",
                "desc": "Number of Packages in Shipment",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Shipment Condition",
                "opt": 1,
                "rep": 0,
                "table": 544
            },
            {
                "datatype": "CWE",
                "desc": "Shipment Handling Code",
                "opt": 1,
                "rep": 0,
                "table": 376
            },
            {
                "datatype": "CWE",
                "desc": "Shipment Risk Code",
                "opt": 1,
                "rep": 0,
                "table": 489
            }
        ]
    },
    "SID": {
        "desc": "Substance Identifier",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Application/Method Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Substance Lot Number",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Substance Container Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Substance Manufacturer Identifier ",
                "opt": 3,
                "rep": 1,
                "table": 385
            }
        ]
    },
    "SLT": {
        "desc": "Sterilization Lot",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Device Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Device Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Lot Number ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Item Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Bar Code",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "SPM": {
        "desc": "Specimen",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - SPM",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EIP",
                "desc": "Specimen ID ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EIP",
                "desc": "Specimen Parent IDs",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Type ",
                "opt": 2,
                "rep": 1,
                "table": 487
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Type Modifier",
                "opt": 1,
                "rep": 0,
                "table": 541
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Additives",
                "opt": 1,
                "rep": 0,
                "table": 371
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Collection Method ",
                "opt": 1,
                "rep": 1,
                "table": 488
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Source Site",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Source Site Modifier",
                "opt": 1,
                "rep": 0,
                "table": 542
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Collection Site",
                "opt": 1,
                "rep": 1,
                "table": 543
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Role",
                "opt": 1,
                "rep": 0,
                "table": 369
            },
            {
                "datatype": "CQ",
                "desc": "Specimen Collection Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Grouped Specimen Count",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Specimen Description ",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Handling Code ",
                "opt": 1,
                "rep": 0,
                "table": 376
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Risk Code",
                "opt": 1,
                "rep": 0,
                "table": 489
            },
            {
                "datatype": "DR",
                "desc": "Specimen Collection Date/Time ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Specimen Received Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Specimen Expiration Date/Time",
                "opt": 1,
                "rep": 1
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
                "table": 490
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Quality ",
                "opt": 1,
                "rep": 1,
                "table": 491
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Appropriateness ",
                "opt": 1,
                "rep": 1,
                "table": 492
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Condition ",
                "opt": 1,
                "rep": 0,
                "table": 493
            },
            {
                "datatype": "CQ",
                "desc": "Specimen Current Quantity ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number of Specimen Containers",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Container Type ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Container Condition",
                "opt": 1,
                "rep": 1,
                "table": 544
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Child Role ",
                "opt": 1,
                "rep": 1,
                "table": 494
            },
            {
                "datatype": "CX",
                "desc": "Accession ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CX",
                "desc": "Other Specimen ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Shipment ID",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "STF": {
        "desc": "Staff Identification",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Primary Key Value - STF",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Staff Identifier List",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XPN",
                "desc": "Staff Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Staff Type",
                "opt": 1,
                "rep": 0,
                "table": 182
            },
            {
                "datatype": "CWE",
                "desc": "Administrative Sex",
                "opt": 1,
                "rep": 1,
                "table": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of Birth",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Department",
                "opt": 1,
                "rep": 0,
                "table": 184
            },
            {
                "datatype": "CWE",
                "desc": "Hospital Service - STF",
                "opt": 1,
                "rep": 0,
                "table": 69
            },
            {
                "datatype": "XTN",
                "desc": "Phone",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XAD",
                "desc": "Office/Home Address/Birthplace",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DIN",
                "desc": "Institution Activation Date",
                "opt": 1,
                "rep": 0,
                "table": 537
            },
            {
                "datatype": "DIN",
                "desc": "Institution Inactivation Date",
                "opt": 1,
                "rep": 0,
                "table": 537
            },
            {
                "datatype": "CWE",
                "desc": "Backup Person ID",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "E-Mail Address",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Preferred Method of Contact",
                "opt": 1,
                "rep": 1,
                "table": 185
            },
            {
                "datatype": "CWE",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 1,
                "table": 2
            },
            {
                "datatype": "ST",
                "desc": "Job Title",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "JCC",
                "desc": "Job Code/Class",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Employment Status Code",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
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
                "desc": "Auto Ins Expires",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Date Last DMV Review",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Date Next DMV Review",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Race",
                "opt": 1,
                "rep": 1,
                "table": 5
            },
            {
                "datatype": "CWE",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 1,
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
                "datatype": "CWE",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "table": 171
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time of Death",
                "opt": 1,
                "rep": 1
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
                "table": 538
            },
            {
                "datatype": "DR",
                "desc": "Institution Relationship Period",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Expected Return Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Cost Center Code",
                "opt": 1,
                "rep": 0,
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
                "table": 540
            },
            {
                "datatype": "CWE",
                "desc": "Generic resource type or category",
                "opt": 1,
                "rep": 0,
                "table": 771
            },
            {
                "datatype": "CWE",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "table": 6
            },
            {
                "datatype": "ED",
                "desc": "Signature ",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "STZ": {
        "desc": "Sterilization Parameter",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Sterilization Type",
                "opt": 1,
                "rep": 1,
                "table": 806
            },
            {
                "datatype": "CWE",
                "desc": "Sterilization Cycle",
                "opt": 1,
                "rep": 1,
                "table": 702
            },
            {
                "datatype": "CWE",
                "desc": "Maintenance Cycle",
                "opt": 1,
                "rep": 1,
                "table": 809
            },
            {
                "datatype": "CWE",
                "desc": "Maintenance Type ",
                "opt": 1,
                "rep": 1,
                "table": 811
            }
        ]
    },
    "TCC": {
        "desc": "Test Code Configuration",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Equipment Test Application Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Specimen Source",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "SN",
                "desc": "Auto-Dilution Factor Default",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SN",
                "desc": "Rerun Dilution Factor Default",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SN",
                "desc": "Pre-Dilution Factor Default",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SN",
                "desc": "Endogenous Content of Pre-Dilution Diluent",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Inventory Limits Warning Level",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Processing Type",
                "opt": 1,
                "rep": 1,
                "table": 388
            }
        ]
    },
    "TCD": {
        "desc": "Test Code Detail",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "SN",
                "desc": "Auto-Dilution Factor ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SN",
                "desc": "Rerun Dilution Factor ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SN",
                "desc": "Pre-Dilution Factor ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "SN",
                "desc": "Endogenous Content of Pre-Dilution Diluent",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Analyte Repeat Status",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "RPT",
                "desc": "Repeat Pattern",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "TM",
                "desc": "Explicit Time",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CQ",
                "desc": "Relative Time and Units",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CQ",
                "desc": "Service Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Start date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "End date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Priority",
                "opt": 1,
                "rep": 0,
                "table": 485
            },
            {
                "datatype": "TX",
                "desc": "Condition text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Text instruction",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Conjunction",
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 472
            },
            {
                "datatype": "CQ",
                "desc": "Occurrence duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Total occurrences",
                "opt": 1,
                "rep": 1
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
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Related Filler Number",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Related Placer Group Number",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "Sequence Condition Code",
                "opt": 3,
                "rep": 1,
                "table": 504
            },
            {
                "datatype": "ID",
                "desc": "Cyclic Entry/Exit Indicator",
                "opt": 3,
                "rep": 1,
                "len": 1,
                "table": 505
            },
            {
                "datatype": "CQ",
                "desc": "Sequence Condition Time Interval",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Cyclic Group Maximum Number of Repeats",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Special Service Request Relationship",
                "opt": 3,
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
                "datatype": "CWE",
                "desc": "Document Type ",
                "opt": 2,
                "rep": 1,
                "table": 270
            },
            {
                "datatype": "ID",
                "desc": "Document Content Presentation",
                "opt": 3,
                "rep": 1,
                "table": 191
            },
            {
                "datatype": "DTM",
                "desc": "Activity Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Primary Activity Provider Code/Name",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Origination Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Transcription Date/Time",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Edit Date/Time",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Originator Code/Name",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Assigned Document Authenticator",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Transcriptionist Code/Name",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Unique Document Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Parent Document Number",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Placer Order Number",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "EI",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Unique Document File Name",
                "opt": 1,
                "rep": 1
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
                "len": 1,
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
                "rep": 1
            },
            {
                "datatype": "PPN",
                "desc": "Authentication Person, Time Stamp (set) ",
                "opt": 3,
                "rep": 0
            },
            {
                "datatype": "XCN",
                "desc": "Distributed Copies (Code and Name of Recipient(s) )",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Folder Assignment",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "Document Title",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "Agreed Due Date/Time   ",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "UAC": {
        "desc": "User Authentication Credential Segment",
        "fields": [
            {
                "datatype": "CWE",
                "desc": "User Authentication Credential Type Code",
                "opt": 2,
                "rep": 1,
                "table": 615
            },
            {
                "datatype": "ED",
                "desc": "User Authentication Credential  ",
                "opt": 2,
                "rep": 1
            }
        ]
    },
    "UB1": {
        "desc": "UB82",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID   UB1",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Blood Deductible",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Blood Furnished Pints",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Blood Replaced Pints",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Blood Not Replaced Pints",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Co Insurance Days",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Condition Code",
                "opt": 4,
                "rep": 5
            },
            {
                "datatype": "ST",
                "desc": "Covered Days",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Non Covered Days",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Value Amount & Code",
                "opt": 4,
                "rep": 8
            },
            {
                "datatype": "ST",
                "desc": "Number Of Grace Days",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Special Program Indicator",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "PSRO/UR Approval Indicator",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "PSRO/UR Approved Stay Fm",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "PSRO/UR Approved Stay To",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Occurrence",
                "opt": 4,
                "rep": 5
            },
            {
                "datatype": "ST",
                "desc": "Occurrence Span",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Occur Span Start Date",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Occur Span End Date",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "UB 82 Locator 2",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "UB 82 Locator 9",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "UB 82 Locator 27",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "UB 82 Locator 45",
                "opt": 4,
                "rep": 1
            }
        ]
    },
    "UB2": {
        "desc": "Uniform Billing Data",
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
                "desc": "Co-Insurance Days (9)",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CWE",
                "desc": "Condition Code (24-30)",
                "opt": 1,
                "rep": 7,
                "table": 43
            },
            {
                "datatype": "ST",
                "desc": "Covered Days (7)",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "ST",
                "desc": "Non-Covered Days (8)",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "UVC",
                "desc": "Value Amount & Code",
                "opt": 1,
                "rep": 12
            },
            {
                "datatype": "OCD",
                "desc": "Occurrence Code & Date (32-35)",
                "opt": 1,
                "rep": 8
            },
            {
                "datatype": "OSP",
                "desc": "Occurrence Span Code/Dates (36)",
                "opt": 1,
                "rep": 2
            },
            {
                "datatype": "ST",
                "desc": "Uniform Billing Locator 2 (State)",
                "opt": 1,
                "rep": 2,
                "len": 29
            },
            {
                "datatype": "ST",
                "desc": "Uniform Billing 11 (State)",
                "opt": 1,
                "rep": 2,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Uniform Billing 31 (National)",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "ST",
                "desc": "Document Control Number",
                "opt": 1,
                "rep": 3,
                "len": 23
            },
            {
                "datatype": "ST",
                "desc": "Uniform Billing 49 (National)",
                "opt": 1,
                "rep": 23,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Uniform Billing 56 (State)",
                "opt": 1,
                "rep": 5,
                "len": 14
            },
            {
                "datatype": "ST",
                "desc": "Uniform Billing 57 (National)",
                "opt": 1,
                "rep": 1,
                "len": 27
            },
            {
                "datatype": "ST",
                "desc": "Uniform Billing 78 (State)",
                "opt": 1,
                "rep": 2,
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
                "datatype": "DTM",
                "desc": "R/U Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Report Priority",
                "opt": 1,
                "rep": 1,
                "table": 109
            },
            {
                "datatype": "XCN",
                "desc": "R/U Who Subject Definition",
                "opt": 2,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "R/U What Subject Definition",
                "opt": 1,
                "rep": 0,
                "table": 48
            },
            {
                "datatype": "CWE",
                "desc": "R/U What Department Code",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "R/U Display/Print Locations",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "R/U Results Level",
                "opt": 1,
                "rep": 1,
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
                "rep": 0
            },
            {
                "datatype": "DTM",
                "desc": "R/U When Data Start Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "R/U When Data End Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "R/U What User Qualifier",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ST",
                "desc": "R/U Other Results Subject Definition",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "ID",
                "desc": "R/U Which Date/Time Qualifier",
                "opt": 1,
                "rep": 0,
                "table": 156
            },
            {
                "datatype": "ID",
                "desc": "R/U Which Date/Time Status Qualifier",
                "opt": 1,
                "rep": 0,
                "table": 157
            },
            {
                "datatype": "ID",
                "desc": "R/U Date/Time Selection Qualifier",
                "opt": 1,
                "rep": 0,
                "table": 158
            },
            {
                "datatype": "TQ",
                "desc": "R/U Quantity/Timing Qualifier",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Documented Date/Time",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Stated Variance Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Variance Originator",
                "opt": 1,
                "rep": 0
            },
            {
                "datatype": "CWE",
                "desc": "Variance Classification",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Variance Description",
                "opt": 1,
                "rep": 0
            }
        ]
    },
    "VND": {
        "desc": "Purchasing Vendor",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set Id - VND",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "EI",
                "desc": "Vendor Identifier ",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Vendor Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Vendor Catalog Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CNE",
                "desc": "Primary Vendor Indicator",
                "opt": 1,
                "rep": 1,
                "table": 532
            }
        ]
    }
};

module.exports = segments;
