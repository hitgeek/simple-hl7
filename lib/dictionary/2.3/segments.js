var segments = {
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
                "datatype": "ID",
                "desc": "Accident Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
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
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Accident Job Related Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Accident Death Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 136
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
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Resource Type",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Resource Group",
                "opt": 1,
                "rep": 0,
                "len": 200
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
                "len": 200
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
                "len": 200
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
                "len": 200
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
                "len": 200,
                "table": 278
            }
        ]
    },
    "AIL": {
        "desc": "Appointment Information - Location",
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
                "len": 1,
                "table": 206
            },
            {
                "datatype": "PL",
                "desc": "Location Resource ID",
                "opt": 2,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Location Type",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Location Group",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "len": 200
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
                "len": 200
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
                "len": 200,
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
                "len": 1,
                "table": 206
            },
            {
                "datatype": "XCN",
                "desc": "Personnel Resource ID",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Resource Role",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Resource Group",
                "opt": 1,
                "rep": 0,
                "len": 200
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
                "len": 200
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
                "len": 200
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
                "len": 200,
                "table": 278
            }
        ]
    },
    "AIS": {
        "desc": "Appointment Information - Service",
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
                "len": 200
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
                "len": 200
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
                "len": 200
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
                "len": 200,
                "table": 278
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
                "datatype": "ID",
                "desc": "Allergy Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 127
            },
            {
                "datatype": "CE",
                "desc": "Allergy Code/Mnemonic/ Description",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "IS",
                "desc": "Allergy Severity",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 128
            },
            {
                "datatype": "ST",
                "desc": "Allergy Reaction",
                "opt": 1,
                "rep": 1,
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
                "len": 80
            },
            {
                "datatype": "SCV",
                "desc": "Resource Selection Criteria",
                "opt": 1,
                "rep": 0,
                "len": 80
            },
            {
                "datatype": "SCV",
                "desc": "Location Selection Criteria",
                "opt": 1,
                "rep": 0,
                "len": 80
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
                "len": 75
            },
            {
                "datatype": "CE",
                "desc": "Schedule ID",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Request Event Reason",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Appointment Reason",
                "opt": 1,
                "rep": 1,
                "len": 200,
                "table": 276
            },
            {
                "datatype": "CE",
                "desc": "Appointment Type",
                "opt": 1,
                "rep": 1,
                "len": 200,
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
                "len": 200
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
                "desc": "Priority",
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
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Placer Contact Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "XAD",
                "desc": "Placer Contact Address",
                "opt": 1,
                "rep": 1,
                "len": 106
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
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Entered By Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
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
            }
        ]
    },
    "AUT": {
        "desc": "Authorization Information",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Authorizing Payor, Plan Code",
                "opt": 1,
                "rep": 1,
                "len": 200,
                "table": 72
            },
            {
                "datatype": "CE",
                "desc": "Authorizing Payor, Company ID",
                "opt": 2,
                "rep": 1,
                "len": 200,
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
                "datatype": "ST",
                "desc": "Batch Sending Application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Batch Sending Facility",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Batch Receiving Application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Batch Receiving Facility",
                "opt": 1,
                "rep": 1,
                "len": 20
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
    "BLG": {
        "desc": "Billing",
        "fields": [
            {
                "datatype": "CM_CCD",
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
                "datatype": "CK",
                "desc": "Account ID",
                "opt": 1,
                "rep": 1,
                "len": 100
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
    "CDM": {
        "desc": "Charge Description Master",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Primary Key Value",
                "opt": 2,
                "rep": 1,
                "len": 200,
                "table": 132
            },
            {
                "datatype": "CE",
                "desc": "Charge Code Alias",
                "opt": 1,
                "rep": 0,
                "len": 200
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Resource Load",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CK",
                "desc": "Contract Number",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XON",
                "desc": "Contract Organization",
                "opt": 1,
                "rep": 1,
                "len": 200
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
    "CM0": {
        "desc": "Clinical Study Master",
        "fields": [
            {
                "datatype": "SI",
                "desc": "CM0 - Set ID",
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
                "datatype": "CE",
                "desc": "Alternate Study ID",
                "opt": 1,
                "rep": 3,
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
                "rep": 1,
                "len": 60
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
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XTN",
                "desc": "Contact's Tel. Number",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "XAD",
                "desc": "Contact's Address",
                "opt": 1,
                "rep": 1,
                "len": 100
            }
        ]
    },
    "CM1": {
        "desc": "Clinical Study Phase Master",
        "fields": [
            {
                "datatype": "SI",
                "desc": "CM1 - Set ID",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Study Phase Identifier",
                "opt": 2,
                "rep": 1,
                "len": 60
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
                "desc": "CM2 - Set ID",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Scheduled Time Point",
                "opt": 2,
                "rep": 1,
                "len": 60
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
                "len": 60
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
                "len": 60
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
                "len": 60
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
                "len": 60
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
                "desc": "Alternate Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "TS",
                "desc": "Date/Time of Patient Study Registration",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XCN",
                "desc": "Person Performing Study Registration",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XCN",
                "desc": "Study Authorizing Provider",
                "opt": 2,
                "rep": 1,
                "len": 60
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
                "len": 60
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
                "desc": "Study Randomized Arm",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Stratum for Study Randomization",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Patient Evaluability Status",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 60
            }
        ]
    },
    "CSS": {
        "desc": "Clinical Study Data Schedule",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Study Scheduled Time Point",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "XPN",
                "desc": "Contact Name",
                "opt": 1,
                "rep": 0,
                "len": 106
            },
            {
                "datatype": "XAD",
                "desc": "Contact Address",
                "opt": 1,
                "rep": 0,
                "len": 60
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
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Preferred Method of Contact",
                "opt": 1,
                "rep": 1,
                "len": 200,
                "table": 185
            },
            {
                "datatype": "CM_PI",
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Study Scheduled Time Point",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "DB1": {
        "desc": "Disability Segment",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - DB1",
                "opt": 2,
                "rep": 1,
                "len": 4,
                "table": 131
            },
            {
                "datatype": "IS",
                "desc": "Disabled person code",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "CX",
                "desc": "Disabled person identifier",
                "opt": 1,
                "rep": 0,
                "len": 32
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
                "desc": "Disability start date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Disability end date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Disability return to work date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Disability unable to work date",
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
                "desc": "Set ID - Diagnosis",
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
                "desc": "Diagnosis Code",
                "opt": 1,
                "rep": 1,
                "len": 60,
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
                "len": 60,
                "table": 118
            },
            {
                "datatype": "CE",
                "desc": "Diagnostic Related Group",
                "opt": 1,
                "rep": 1,
                "len": 60,
                "table": 55
            },
            {
                "datatype": "ID",
                "desc": "DRG Approval Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2
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
                "len": 60,
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
                "desc": "Grouper Version and Type",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Diagnosis Priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "XCN",
                "desc": "Diagnosing Clinician",
                "opt": 1,
                "rep": 0,
                "len": 60
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
                "len": 4
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
                "len": 2,
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
                "len": 60
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
            }
        ]
    },
    "DSC": {
        "desc": "Continuation pointer segment",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Continuation Pointer",
                "opt": 1,
                "rep": 1,
                "len": 180
            }
        ]
    },
    "DSP": {
        "desc": "Display data segment",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Display Data",
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
    "EQL": {
        "desc": "Embedded Query Language",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "ID",
                "desc": "Query/ Response Format Code",
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
                "len": 60
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
    "ERQ": {
        "desc": "Event Replay Query Segment",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "CE",
                "desc": "Event identifier",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "QIP",
                "desc": "Input parameter list",
                "opt": 1,
                "rep": 0,
                "len": 256
            }
        ]
    },
    "ERR": {
        "desc": "Error segment",
        "fields": [
            {
                "datatype": "CM_ELD",
                "desc": "Error Code and Location",
                "opt": 2,
                "rep": 0,
                "len": 80
            }
        ]
    },
    "EVN": {
        "desc": "Event type",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Event Type Code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 3
            },
            {
                "datatype": "TS",
                "desc": "Recorded Date/Time",
                "opt": 1,
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
                "datatype": "ID",
                "desc": "Event Reason Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 62
            },
            {
                "datatype": "CN",
                "desc": "Operator ID",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Event Occurred",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "FAC": {
        "desc": "Facility",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Facility ID",
                "opt": 2,
                "rep": 0,
                "len": 60
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
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "XTN",
                "desc": "Facility Telecommunication",
                "opt": 2,
                "rep": 1,
                "len": 44
            },
            {
                "datatype": "XCN",
                "desc": "Contact Person",
                "opt": 1,
                "rep": 0,
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "XTN",
                "desc": "Contact Telecommunication",
                "opt": 1,
                "rep": 0,
                "len": 44
            },
            {
                "datatype": "XCN",
                "desc": "Signature Authority",
                "opt": 2,
                "rep": 1,
                "len": 60
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
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "XTN",
                "desc": "Signature Authority Telecommunication",
                "opt": 1,
                "rep": 1,
                "len": 44
            }
        ]
    },
    "FHS": {
        "desc": "File header segment",
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
                "datatype": "ST",
                "desc": "File Sending Application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "File Sending Facility",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "File Receiving Application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "File Receiving Facility",
                "opt": 1,
                "rep": 1,
                "len": 20
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
        "desc": "Financial transaction",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Financial Transaction",
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
                "datatype": "TS",
                "desc": "Transaction Date",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Transaction Posting Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
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
                "len": 80
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
                "desc": "Transaction Description - alternate",
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Insurance Plan ID",
                "opt": 1,
                "rep": 1,
                "len": 8
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
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Fee Schedule",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 24
            },
            {
                "datatype": "ID",
                "desc": "Patient Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 18
            },
            {
                "datatype": "CE",
                "desc": "Diagnosis Code",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "XCN",
                "desc": "Performed By Code",
                "opt": 1,
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "XCN",
                "desc": "Ordered By Code",
                "opt": 1,
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "NM",
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
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "len": 80
            }
        ]
    },
    "FTS": {
        "desc": "File trailer segment",
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
                "len": 80
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
                "desc": "Expected Goal Achievement Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Goal Classification",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Goal Management Discipline",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Current Goal Review Status",
                "opt": 1,
                "rep": 1,
                "len": 80
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
                "len": 80
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
                "len": 80
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
                "len": 80
            },
            {
                "datatype": "XPN",
                "desc": "Goal Target Name",
                "opt": 1,
                "rep": 0,
                "len": 80
            }
        ]
    },
    "GT1": {
        "desc": "Guarantor",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Guarantor",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CX",
                "desc": "Guarantor Number",
                "opt": 1,
                "rep": 0,
                "len": 59
            },
            {
                "datatype": "XPN",
                "desc": "Guarantor Name",
                "opt": 2,
                "rep": 0,
                "len": 48
            },
            {
                "datatype": "XPN",
                "desc": "Guarantor Spouse Name",
                "opt": 1,
                "rep": 0,
                "len": 48
            },
            {
                "datatype": "XAD",
                "desc": "Guarantor Address",
                "opt": 1,
                "rep": 0,
                "len": 106
            },
            {
                "datatype": "XTN",
                "desc": "Guarantor Ph Num- Home",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "XTN",
                "desc": "Guarantor Ph Num-Business",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "TS",
                "desc": "Guarantor Date/Time of Birth",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Guarantor Sex",
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
                "datatype": "IS",
                "desc": "Guarantor Relationship",
                "opt": 1,
                "rep": 1,
                "len": 2,
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
                "len": 130
            },
            {
                "datatype": "XAD",
                "desc": "Guarantor Employer Address",
                "opt": 1,
                "rep": 0,
                "len": 106
            },
            {
                "datatype": "XTN",
                "desc": "Guarantor Employ Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "CX",
                "desc": "Guarantor Employee ID Number",
                "opt": 1,
                "rep": 0,
                "len": 20
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
                "desc": "Guarantor Organization",
                "opt": 1,
                "rep": 0,
                "len": 130
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
                "len": 80
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
                "len": 80
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
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Guarantor Marital Status Code",
                "opt": 1,
                "rep": 1,
                "len": 1
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
                "rep": 1,
                "len": 2,
                "table": 9
            },
            {
                "datatype": "IS",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 171
            },
            {
                "datatype": "CE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "desc": "Publicity Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1
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
                "datatype": "IS",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 6
            },
            {
                "datatype": "XPN",
                "desc": "Mother s Maiden Name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "CE",
                "desc": "Nationality Code",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "IS",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 189
            },
            {
                "datatype": "XPN",
                "desc": "Contact Person's Name",
                "opt": 1,
                "rep": 0,
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Contact Person s Telephone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "Contact Reason",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "IS",
                "desc": "Contact Relationship Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
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
                "len": 130
            },
            {
                "datatype": "IS",
                "desc": "Handicap",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 310
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
                "datatype": "IS",
                "desc": "Guarantor Race",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 5
            }
        ]
    },
    "IAM": {
        "desc": "Patient adverse reaction information - unique iden",
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
                "len": 250
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
                "len": 250
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
                "len": 250
            },
            {
                "datatype": "EI",
                "desc": "Allergy Unique Identifier",
                "opt": 2,
                "rep": 1,
                "len": 80
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
                "len": 250
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
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Alert Device Code",
                "opt": 1,
                "rep": 1,
                "len": 250
            },
            {
                "datatype": "CE",
                "desc": "Allergy Clinical Status Code",
                "opt": 1,
                "rep": 1,
                "len": 250
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
    "IN1": {
        "desc": "Insurance",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Insurance",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Insurance Plan ID",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CX",
                "desc": "Insurance Company ID",
                "opt": 2,
                "rep": 1,
                "len": 59
            },
            {
                "datatype": "XON",
                "desc": "Insurance Company Name",
                "opt": 1,
                "rep": 1,
                "len": 130
            },
            {
                "datatype": "XAD",
                "desc": "Insurance Company Address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "XPN",
                "desc": "Insurance Co. Contact Ppers",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Insurance Co Phone Number",
                "opt": 1,
                "rep": 3,
                "len": 40
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
                "rep": 1,
                "len": 130
            },
            {
                "datatype": "CX",
                "desc": "Insured's group employer ID",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "XON",
                "desc": "Insured's Group Emp Name",
                "opt": 1,
                "rep": 1,
                "len": 130
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
                "datatype": "CM_AUI",
                "desc": "Authorization Information",
                "opt": 1,
                "rep": 1,
                "len": 55
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
                "desc": "Name of Insured",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "IS",
                "desc": "Insured's Relationship to Patient",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 63
            },
            {
                "datatype": "TS",
                "desc": "Insured's Date of Birth",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "XAD",
                "desc": "Insured's Address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "IS",
                "desc": "Assignment of Benefits",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 135
            },
            {
                "datatype": "IS",
                "desc": "Coordination of Benefits",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 173
            },
            {
                "datatype": "ST",
                "desc": "Coord of Ben. Priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Notice of Admission Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 136
            },
            {
                "datatype": "DT",
                "desc": "Notice of Admission Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Rpt of Eigibility Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 136
            },
            {
                "datatype": "DT",
                "desc": "Rpt of Eligibility Date",
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
                "datatype": "XPN",
                "desc": "Verification By",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "IS",
                "desc": "Type of Agreement Code",
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
                "desc": "Delay before lifetime reserve days",
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
                "len": 60
            },
            {
                "datatype": "IS",
                "desc": "Insured's Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "XAD",
                "desc": "Insured's Employer Address",
                "opt": 1,
                "rep": 1,
                "len": 106
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
                "table": 310
            },
            {
                "datatype": "CX",
                "desc": "Insured's ID Number",
                "opt": 1,
                "rep": 1,
                "len": 12
            }
        ]
    },
    "IN2": {
        "desc": "Insurance additional info",
        "fields": [
            {
                "datatype": "CX",
                "desc": "Insured's Employee ID",
                "opt": 1,
                "rep": 1,
                "len": 59
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
                "desc": "Insured's Employer Name",
                "opt": 1,
                "rep": 1,
                "len": 130
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
                "rep": 1,
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
                "rep": 1,
                "len": 48
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
                "desc": "Champus Sponsor Name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "ST",
                "desc": "Champus ID Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Dependent of Champus Recipient",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "ST",
                "desc": "Champus Organization",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "ST",
                "desc": "Champus Station",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "IS",
                "desc": "Champus Service",
                "opt": 1,
                "rep": 1,
                "len": 14,
                "table": 140
            },
            {
                "datatype": "IS",
                "desc": "Champus Rank/Grade",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 141
            },
            {
                "datatype": "IS",
                "desc": "Champus Status",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 142
            },
            {
                "datatype": "DT",
                "desc": "Champus Retire Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Champus Non-Avail Cert on File",
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
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "ST",
                "desc": "Special Coverage Approval Title",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Non-Covered Insurance Code",
                "opt": 1,
                "rep": 0,
                "len": 8
            },
            {
                "datatype": "CX",
                "desc": "Payor ID",
                "opt": 1,
                "rep": 1,
                "len": 59
            },
            {
                "datatype": "CX",
                "desc": "Payor Subscriber ID",
                "opt": 1,
                "rep": 1,
                "len": 59
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
                "datatype": "CM_RMC",
                "desc": "Room Coverage Type/Amount",
                "opt": 1,
                "rep": 0,
                "len": 25
            },
            {
                "datatype": "CM_PTA",
                "desc": "Policy Type/Amount",
                "opt": 1,
                "rep": 0,
                "len": 25
            },
            {
                "datatype": "CM_DDI",
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
                "rep": 1,
                "len": 2,
                "table": 9
            },
            {
                "datatype": "IS",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 171
            },
            {
                "datatype": "CE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "desc": "Publicity Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1
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
                "datatype": "IS",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 6
            },
            {
                "datatype": "XPN",
                "desc": "Mother s Maiden Name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "CE",
                "desc": "Nationality Code",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "IS",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 189
            },
            {
                "datatype": "IS",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 2
            },
            {
                "datatype": "DT",
                "desc": "Employment Start Date",
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
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Employer Contact Person Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
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
                "desc": "Insured s Contact Person s Name",
                "opt": 1,
                "rep": 0,
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Insured s Contact Person Telephone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "IS",
                "desc": "Insured s Contact Person Reason",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 222
            },
            {
                "datatype": "DT",
                "desc": "Relationship To The Patient Start Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Relationship To The Patient Stop Date",
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
                "desc": "Insurance Co. Contact Phone Number",
                "opt": 1,
                "rep": 1,
                "len": 40
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
                "len": 60
            },
            {
                "datatype": "IS",
                "desc": "Guarantor s Relationship To Insured",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 63
            },
            {
                "datatype": "XTN",
                "desc": "Insured s Telephone Number - Home",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "XTN",
                "desc": "Insured s Employer Telephone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "Military Handicapped Program",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Suspend Flag",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Co-pay Limit Flag",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Stoploss Limit Flag",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 136
            },
            {
                "datatype": "XON",
                "desc": "Insured Organization Name And ID",
                "opt": 1,
                "rep": 0,
                "len": 130
            },
            {
                "datatype": "XON",
                "desc": "Insured Employer Organization Name And ID",
                "opt": 1,
                "rep": 0,
                "len": 130
            },
            {
                "datatype": "IS",
                "desc": "Race",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 5
            },
            {
                "datatype": "ID",
                "desc": "Patient Relationship to Insured",
                "opt": 1,
                "rep": 1,
                "len": 1
            }
        ]
    },
    "IN3": {
        "desc": "Insurance additional info - certification",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Insurance Certification",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CX",
                "desc": "Certification Number",
                "opt": 1,
                "rep": 1,
                "len": 59
            },
            {
                "datatype": "XCN",
                "desc": "Certified By",
                "opt": 1,
                "rep": 0,
                "len": 60
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
                "datatype": "CM_PEN",
                "desc": "Penalty",
                "opt": 1,
                "rep": 1,
                "len": 10
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
                "len": 60
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
                "datatype": "CM_DTN",
                "desc": "Days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CE",
                "desc": "Non-Concur Code/Description",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 60
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
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "Appeal Reason",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Certification Agency",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XTN",
                "desc": "Certification Agency Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "CM_PCF",
                "desc": "Pre-Certification required/Window",
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
                "len": 60
            }
        ]
    },
    "LCC": {
        "desc": "Location Charge Code",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Primary Key Value",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "IS",
                "desc": "Location Department",
                "opt": 2,
                "rep": 1,
                "len": 10,
                "table": 264
            },
            {
                "datatype": "CE",
                "desc": "Accommodation Type",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Charge Code",
                "opt": 2,
                "rep": 0,
                "len": 60
            }
        ]
    },
    "LCH": {
        "desc": "Location Characteristic",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Primary Key Value",
                "opt": 2,
                "rep": 1,
                "len": 20
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
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Location Characteristic Value",
                "opt": 2,
                "rep": 1,
                "len": 80
            }
        ]
    },
    "LDP": {
        "desc": "Location Department",
        "fields": [
            {
                "datatype": "PL",
                "desc": "LDP Primary Key Value",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Location Department",
                "opt": 2,
                "rep": 1,
                "len": 10,
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
                "desc": "Speciality Type",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ID",
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
                "desc": "Activation Date",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "TS",
                "desc": "Inactivation Date - LDP",
                "opt": 1,
                "rep": 1,
                "len": 19
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
                "len": 80
            },
            {
                "datatype": "XTN",
                "desc": "Contact Phone",
                "opt": 1,
                "rep": 1,
                "len": 40
            }
        ]
    },
    "LOC": {
        "desc": "Location Identification",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Primary Key Value",
                "opt": 2,
                "rep": 1,
                "len": 20
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
                "desc": "Location Type",
                "opt": 2,
                "rep": 0,
                "len": 2,
                "table": 260
            },
            {
                "datatype": "XON",
                "desc": "Organization Name",
                "opt": 1,
                "rep": 1,
                "len": 90
            },
            {
                "datatype": "XAD",
                "desc": "Location Address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "XTN",
                "desc": "Location Phone",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "License Number",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Location Equipment",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 261
            }
        ]
    },
    "LRL": {
        "desc": "Location Relationship",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Primary Key Value",
                "opt": 2,
                "rep": 1,
                "len": 20
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
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XON",
                "desc": "Organizational Location Relationship Value",
                "opt": 1,
                "rep": 1
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
        "desc": "Master file acknowledgement segment",
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
                "desc": "Error Return Code and/or Text",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Primary Key Value",
                "opt": 2,
                "rep": 0,
                "len": 60
            }
        ]
    },
    "MFE": {
        "desc": "Master file entry segment",
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
                "datatype": "CE",
                "desc": "Primary Key Value",
                "opt": 2,
                "rep": 0,
                "len": 60
            }
        ]
    },
    "MFI": {
        "desc": "Master file identification segment",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Master File Identifier",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "HD",
                "desc": "Master File Application Identifier",
                "opt": 1,
                "rep": 1,
                "len": 180
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
        "desc": "Merge patient information",
        "fields": [
            {
                "datatype": "CX",
                "desc": "Prior Patient ID - Internal",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "CX",
                "desc": "Prior Alternate Patient ID",
                "opt": 1,
                "rep": 0,
                "len": 16
            },
            {
                "datatype": "CX",
                "desc": "Prior Patient Account Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CX",
                "desc": "Prior Patient ID - External",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CX",
                "desc": "Prior Visit Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Prior Alternate Visit ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CX",
                "desc": "Prior Patient Name",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "MSA": {
        "desc": "Message acknowledgement segment",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Acknowledgement code",
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
                "desc": "Delayed Acknowledgement Type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 102
            },
            {
                "datatype": "CE",
                "desc": "Error Condition",
                "opt": 1,
                "rep": 1,
                "len": 100
            }
        ]
    },
    "MSH": {
        "desc": "Message header segment",
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
                "len": 180
            },
            {
                "datatype": "HD",
                "desc": "Sending Facility",
                "opt": 1,
                "rep": 1,
                "len": 180
            },
            {
                "datatype": "HD",
                "desc": "Receiving Application",
                "opt": 1,
                "rep": 1,
                "len": 180
            },
            {
                "datatype": "HD",
                "desc": "Receiving Facility",
                "opt": 1,
                "rep": 1,
                "len": 180
            },
            {
                "datatype": "TS",
                "desc": "Date / Time of Message",
                "opt": 1,
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
                "datatype": "CM_MSG",
                "desc": "Message Type",
                "opt": 2,
                "rep": 1,
                "len": 7
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
                "datatype": "ID",
                "desc": "Version ID",
                "opt": 2,
                "rep": 1,
                "len": 8,
                "table": 104
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
                "desc": "Accept Acknowledgement Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 155
            },
            {
                "datatype": "ID",
                "desc": "Application Acknowledgement Type",
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
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Character Set",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 211
            },
            {
                "datatype": "CE",
                "desc": "Principal Language of Message",
                "opt": 1,
                "rep": 1,
                "len": 3
            }
        ]
    },
    "NCK": {
        "desc": "System Clock",
        "fields": [
            {
                "datatype": "TS",
                "desc": "System Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "NK1": {
        "desc": "Next of kin",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Next of Kin",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "XPN",
                "desc": "NK Name",
                "opt": 1,
                "rep": 0,
                "len": 48
            },
            {
                "datatype": "CE",
                "desc": "Relationship",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XAD",
                "desc": "Address",
                "opt": 1,
                "rep": 0,
                "len": 106
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "XTN",
                "desc": "Business Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "Contact Role",
                "opt": 2,
                "rep": 1,
                "len": 60
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
                "desc": "Next of Kin/Associated Parties Job Title",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "JCC",
                "desc": "Next of Kin Job/Associated Parties Code/Class",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CX",
                "desc": "Next of Kin/Associated Parties Employee Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "XON",
                "desc": "Organization Name",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "IS",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 2
            },
            {
                "datatype": "IS",
                "desc": "Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "TS",
                "desc": "Date of Birth",
                "opt": 1,
                "rep": 1,
                "len": 26
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
                "rep": 1,
                "len": 2,
                "table": 9
            },
            {
                "datatype": "IS",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 171
            },
            {
                "datatype": "CE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "desc": "Publicity Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1
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
                "datatype": "IS",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 6
            },
            {
                "datatype": "XPN",
                "desc": "Mother s Maiden Name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "CE",
                "desc": "Nationality Code",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "IS",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 189
            },
            {
                "datatype": "CE",
                "desc": "Contact Reason",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "XPN",
                "desc": "Contact Person's Name",
                "opt": 1,
                "rep": 0,
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Contact Person s Telephone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "XAD",
                "desc": "Contact Person s Address",
                "opt": 1,
                "rep": 0,
                "len": 106
            },
            {
                "datatype": "CX",
                "desc": "Associated Party s Identifiers",
                "opt": 1,
                "rep": 0,
                "len": 32
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
                "datatype": "IS",
                "desc": "Race",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 5
            },
            {
                "datatype": "IS",
                "desc": "Handicap",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 310
            },
            {
                "datatype": "ST",
                "desc": "Contact Person Social Security Number",
                "opt": 1,
                "rep": 1,
                "len": 16
            }
        ]
    },
    "NPU": {
        "desc": "Bed status update",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Bed Location",
                "opt": 2,
                "rep": 1,
                "len": 12
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
        "desc": "STATUS CHANGE",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Network Change Type",
                "opt": 1,
                "rep": 1,
                "len": 4
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
                "datatype": "ST",
                "desc": "Current Application",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
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
                "datatype": "ST",
                "desc": "New Application",
                "opt": 1,
                "rep": 1,
                "len": 30
            }
        ]
    },
    "NST": {
        "desc": "Statistics",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Statistics Available",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 125
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
                "len": 3
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
                "desc": "Network Errors",
                "opt": 1,
                "rep": 1,
                "len": 10
            }
        ]
    },
    "NTE": {
        "desc": "Notes and comments segment",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Notes and Comments",
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
            }
        ]
    },
    "OBR": {
        "desc": "Observation request segment",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Observation Request",
                "opt": 1,
                "rep": 1,
                "len": 4
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
                "datatype": "CE",
                "desc": "Universal Service Identifier",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Priority",
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
                "len": 60
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
                "len": 60
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
                "datatype": "CM_SPS",
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
                "len": 120
            },
            {
                "datatype": "XTN",
                "desc": "Order Callback Phone Number",
                "opt": 1,
                "rep": 2,
                "len": 40
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
                "datatype": "CM_MOC",
                "desc": "Charge To Practice",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ID",
                "desc": "Diagnostic Service Section ID",
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
                "datatype": "CM_PRL",
                "desc": "Parent Result",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "TQ",
                "desc": "Quantity/Timing",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "XCN",
                "desc": "Result Copies To",
                "opt": 1,
                "rep": 5,
                "len": 150
            },
            {
                "datatype": "CM_EIP",
                "desc": "Parent Number",
                "opt": 1,
                "rep": 1,
                "len": 150
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
                "desc": "Reason For Study",
                "opt": 1,
                "rep": 0,
                "len": 300
            },
            {
                "datatype": "CM_NDL",
                "desc": "Principal Result Interpreter",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM_NDL",
                "desc": "Assistant Result Interpreter",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CM_NDL",
                "desc": "Technician",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CM_NDL",
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
                "desc": "Number Of Sample Containers",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Transport Logistics Of Collected Sample",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Collector s Comment",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Transport Arrangement Responsibility",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 200
            }
        ]
    },
    "OBX": {
        "desc": "Observation segment",
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
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 125
            },
            {
                "datatype": "CE",
                "desc": "Observation Identifier",
                "opt": 2,
                "rep": 1,
                "len": 590
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
                "len": 65536
            },
            {
                "datatype": "CE",
                "desc": "Units",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "References Range",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ID",
                "desc": "Abnormal Flags",
                "opt": 1,
                "rep": 5,
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
                "rep": 1,
                "len": 2,
                "table": 80
            },
            {
                "datatype": "ID",
                "desc": "Observ Result Status",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 85
            },
            {
                "datatype": "TS",
                "desc": "Date Last Obs Normal Values",
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
                "len": 60
            },
            {
                "datatype": "XCN",
                "desc": "Responsible Observer",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Observation Method",
                "opt": 1,
                "rep": 0,
                "len": 80
            }
        ]
    },
    "ODS": {
        "desc": "Dietary orders, supplements, and preferences",
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
                "rep": 10,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Diet, Supplement, or Preference Code",
                "opt": 2,
                "rep": 20,
                "len": 60
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
    "ODT": {
        "desc": "Diet tray instructions segment",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Tray Type",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Service Period",
                "opt": 1,
                "rep": 10,
                "len": 60
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
        "desc": "General - fields that apply to most observations",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/ Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Producer's Test/Observation ID",
                "opt": 2,
                "rep": 1,
                "len": 200
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
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Observation Description",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Other Test/Observation IDs for the Observation",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "desc": "Identity of Instrument Used to Perfrom this Study",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Coded Representation of Method",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Portable",
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
                "len": 60
            },
            {
                "datatype": "TN",
                "desc": "Telephone Number of Section",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ID",
                "desc": "Nature of Test/Observation",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 174
            },
            {
                "datatype": "CE",
                "desc": "Report Subheader",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "desc": "Date/Time Stamp for any change in Def Attri for Obs",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective Date/Time of Change in Test Proc. that make Results Non-Comparable",
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
                "len": 200
            },
            {
                "datatype": "AD",
                "desc": "Address of Outside Site",
                "opt": 1,
                "rep": 1,
                "len": 1000
            },
            {
                "datatype": "TN",
                "desc": "Phone Number of Outside Site",
                "opt": 1,
                "rep": 1,
                "len": 400
            },
            {
                "datatype": "ID",
                "desc": "Confidentiality Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 177
            },
            {
                "datatype": "CE",
                "desc": "Observations Required to Interpret the Observation",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "len": 65536
            },
            {
                "datatype": "CE",
                "desc": "Reflex Tests/Observations",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "ST",
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
                "len": 65536
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
                "len": 200
            },
            {
                "datatype": "TX",
                "desc": "Factors that may Effect the Observation",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ST",
                "desc": "Test/Observation Performance Schedule",
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Point versus Interval",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TX",
                "desc": "Challenge information",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Relationship modifier",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Target anatomic site of test",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Modality of imaging measurement",
                "opt": 1,
                "rep": 1,
                "len": 200
            }
        ]
    },
    "OM2": {
        "desc": "Numeric observation",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/ Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Units of Measure",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "TX",
                "desc": "SI Conversion Factor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CM_RFR",
                "desc": "Reference",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM_RANGE",
                "desc": "Critical Range for Ordinal & Continuous Obs",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM_ABS_RANGE",
                "desc": "Absolute Range for Ordinal & Continuous Obs",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM_DLT",
                "desc": "Delta Check Criteria",
                "opt": 1,
                "rep": 0,
                "len": 200
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
        "desc": "Categorical test/observation",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/ Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Preferred Coding System",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Valid Coded \"Answers\"",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Normal Text/Codes for Categorical Observations",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Abnormal Text/Codes for Categorical Observations",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Critical Text Codes for Categorical Observations",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Value Type",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 125
            }
        ]
    },
    "OM4": {
        "desc": "Observations that require specimens",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/ Observation Master File",
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Specimen",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Additive",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "rep": 1,
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
        "desc": "Observation batteries",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/ Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Test/Observations Included w/an Ordered Test Battery",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "ST",
                "desc": "Observation ID Suffixes",
                "opt": 1,
                "rep": 1,
                "len": 200
            }
        ]
    },
    "OM6": {
        "desc": "Observations that are calculated from other observations",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/ Observation Master File",
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
    "ORC": {
        "desc": "Common order segment",
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
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM_EIP",
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
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "XCN",
                "desc": "Verified By",
                "opt": 1,
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "XCN",
                "desc": "Ordering Provider",
                "opt": 1,
                "rep": 0,
                "len": 120
            },
            {
                "datatype": "PL",
                "desc": "Enterer's Location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "TN",
                "desc": "Call Back Phone Number",
                "opt": 1,
                "rep": 2,
                "len": 40
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
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Entering Organization",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Entering Device",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XCN",
                "desc": "Action By",
                "opt": 1,
                "rep": 1,
                "len": 120
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
                "len": 60
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
                "len": 30
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
                "len": 60
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
                "rep": 3,
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
                "len": 8
            },
            {
                "datatype": "CE",
                "desc": "Product Evaluation Status",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Product Evaluation Results",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 8,
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
                "table": 232
            },
            {
                "datatype": "ID",
                "desc": "Indirect Exposure Mechanism",
                "opt": 1,
                "rep": 3,
                "len": 2,
                "table": 253
            }
        ]
    },
    "PD1": {
        "desc": "Patient Demographic",
        "fields": [
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
                "len": 90
            },
            {
                "datatype": "XCN",
                "desc": "Patient Primary Care Provider Name & ID No.",
                "opt": 1,
                "rep": 0,
                "len": 90
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
                "table": 310
            },
            {
                "datatype": "IS",
                "desc": "Living Will",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 315
            },
            {
                "datatype": "IS",
                "desc": "Organ Donor",
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
                "len": 2,
                "table": 136
            },
            {
                "datatype": "CX",
                "desc": "Duplicate Patient",
                "opt": 1,
                "rep": 0,
                "len": 2
            },
            {
                "datatype": "CE",
                "desc": "Publicity Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ID",
                "desc": "Protection Indicator",
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
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Country",
                "opt": 2,
                "rep": 1,
                "len": 60
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
                "len": 60
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
                "len": 60
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
                "desc": "Marketing Approval Identifier",
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
                "desc": "Date First Marked",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Date Last Marked",
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Event Symptom/Diagnosis Code",
                "opt": 1,
                "rep": 0,
                "len": 60
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
                "rep": 1,
                "len": 106
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
                "len": 30
            },
            {
                "datatype": "XPN",
                "desc": "Primary Observer Name",
                "opt": 1,
                "rep": 1,
                "len": 46
            },
            {
                "datatype": "XAD",
                "desc": "Primary Observer Address",
                "opt": 1,
                "rep": 0,
                "len": 106
            },
            {
                "datatype": "XTN",
                "desc": "Primary Observer Telephone",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "ID",
                "desc": "Primary Observer s Qualification",
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
                "desc": "Primary Observer s Identity May Be Divulged",
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
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "XCN",
                "desc": "Sender Individual Name",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "XAD",
                "desc": "Sender Address",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XTN",
                "desc": "Sender Telephone",
                "opt": 1,
                "rep": 0,
                "len": 44
            },
            {
                "datatype": "EI",
                "desc": "Sender Event Identifier",
                "opt": 1,
                "rep": 1,
                "len": 30
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
                "desc": "Set ID - Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CX",
                "desc": "Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CX",
                "desc": "Patient ID",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "CX",
                "desc": "Alternate Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "XPN",
                "desc": "Patient Name",
                "opt": 2,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "XPN",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "TS",
                "desc": "Date of Birth",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Sex",
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
                "len": 48
            },
            {
                "datatype": "IS",
                "desc": "Race",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 5
            },
            {
                "datatype": "XAD",
                "desc": "Patient Address",
                "opt": 1,
                "rep": 0,
                "len": 106
            },
            {
                "datatype": "IS",
                "desc": "County Code",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number - Home",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "XTN",
                "desc": "Phone Number - Business",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "Primary Language",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "IS",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 0,
                "len": 1,
                "table": 2
            },
            {
                "datatype": "IS",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 6
            },
            {
                "datatype": "CX",
                "desc": "Patient Account Number",
                "opt": 1,
                "rep": 1,
                "len": 20
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
                "desc": "Driver's License Number",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "CX",
                "desc": "Mother's Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Ethnic Group",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 189
            },
            {
                "datatype": "ST",
                "desc": "Birth Place",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Multiple Birth Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
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
                "datatype": "IS",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 171
            },
            {
                "datatype": "CE",
                "desc": "Veterans Military Status",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Nationality Code",
                "opt": 1,
                "rep": 1,
                "len": 80
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
            }
        ]
    },
    "PR1": {
        "desc": "Procedures",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Procedure",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "IS",
                "desc": "Procedure Coding Method",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 89
            },
            {
                "datatype": "CE",
                "desc": "Procedure Code",
                "opt": 1,
                "rep": 1,
                "len": 80
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
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Procedure Type",
                "opt": 2,
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
                "len": 120
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
                "len": 120
            },
            {
                "datatype": "XCN",
                "desc": "Procedure Practitioner",
                "opt": 1,
                "rep": 0,
                "len": 230
            },
            {
                "datatype": "CE",
                "desc": "Consent Code",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Procedure Priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "CE",
                "desc": "Associated Diagnosis Code",
                "opt": 1,
                "rep": 1,
                "len": 80
            }
        ]
    },
    "PRA": {
        "desc": "Practitioner detail segment",
        "fields": [
            {
                "datatype": "ST",
                "desc": "PRA - Primary Key Value",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Practioner Group",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Practioner Category",
                "opt": 1,
                "rep": 0,
                "len": 3
            },
            {
                "datatype": "ID",
                "desc": "Provider Billing",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 186
            },
            {
                "datatype": "CM_SPD",
                "desc": "Specialty",
                "opt": 1,
                "rep": 0,
                "len": 100
            },
            {
                "datatype": "CM_PLN",
                "desc": "Practitioner ID Numbers",
                "opt": 1,
                "rep": 0,
                "len": 100
            },
            {
                "datatype": "CM_PIP",
                "desc": "Privileges",
                "opt": 1,
                "rep": 0,
                "len": 200
            }
        ]
    },
    "PRB": {
        "desc": "Problem Detail",
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
                "len": 80
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
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Problem Management Discipline",
                "opt": 1,
                "rep": 0,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Problem Persistence",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Problem Confirmation Status",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Problem Life Cycle Status",
                "opt": 1,
                "rep": 1,
                "len": 80
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
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Certainty of Problem",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Problem Prognosis",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Individual Awareness of Prognosis",
                "opt": 1,
                "rep": 1,
                "len": 80
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
                "len": 80
            }
        ]
    },
    "PRC": {
        "desc": "Pricing",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Primary Key Value",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "EI",
                "desc": "Facility ID",
                "opt": 2,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Department",
                "opt": 1,
                "rep": 0,
                "len": 30
            },
            {
                "datatype": "ID",
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
                "datatype": "ID",
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
                "len": 60
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
                "datatype": "ID",
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
                "desc": "Role",
                "opt": 2,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XPN",
                "desc": "Provider Name",
                "opt": 1,
                "rep": 0,
                "len": 106
            },
            {
                "datatype": "XAD",
                "desc": "Provider Address",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Preferred Method of Contact",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM_PI",
                "desc": "Provider Identifiers",
                "opt": 1,
                "rep": 0,
                "len": 100
            },
            {
                "datatype": "TS",
                "desc": "Effective Start Date of Role",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective End Date of Role",
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
                "rep": 8,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Number of Product Experience Reports Filed by Distributor",
                "opt": 1,
                "rep": 8,
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
                "len": 80
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
                "desc": "Pathway Lifecycle Status",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "TS",
                "desc": "Change Pathway Lifecycle Status Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "PV1": {
        "desc": "Patient visit",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Patient Visit",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
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
                "len": 12
            },
            {
                "datatype": "ID",
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
                "len": 20
            },
            {
                "datatype": "PL",
                "desc": "Prior Patient Location",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "XCN",
                "desc": "Attending Doctor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XCN",
                "desc": "Referring Doctor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XCN",
                "desc": "Consulting Doctor",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ID",
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
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Preadmit Test Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 87
            },
            {
                "datatype": "ID",
                "desc": "Readmission Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 92
            },
            {
                "datatype": "ID",
                "desc": "Admit Source",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 23
            },
            {
                "datatype": "IS",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 9
            },
            {
                "datatype": "ID",
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
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
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
                "len": 15
            },
            {
                "datatype": "FC",
                "desc": "Financial Class",
                "opt": 1,
                "rep": 0,
                "len": 50
            },
            {
                "datatype": "ID",
                "desc": "Charge Price Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 32
            },
            {
                "datatype": "ID",
                "desc": "Courtesy Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 45
            },
            {
                "datatype": "ID",
                "desc": "Credit Rating",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 46
            },
            {
                "datatype": "ID",
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
                "datatype": "ID",
                "desc": "Interest Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 73
            },
            {
                "datatype": "ID",
                "desc": "Transfer to Bad Debt Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
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
                "datatype": "ID",
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
                "datatype": "ID",
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
                "datatype": "ID",
                "desc": "Discharge Disposition",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 112
            },
            {
                "datatype": "CM_DLD",
                "desc": "Discharged to Location",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "ID",
                "desc": "Diet Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 114
            },
            {
                "datatype": "ID",
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
                "datatype": "ID",
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
                "len": 12
            },
            {
                "datatype": "PL",
                "desc": "Prior Temporary Location",
                "opt": 1,
                "rep": 1,
                "len": 12
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
                "rep": 1,
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
                "len": 20
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
                "len": 60
            }
        ]
    },
    "PV2": {
        "desc": "Patient visit - additional information",
        "fields": [
            {
                "datatype": "PL",
                "desc": "Prior Pending Location",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CE",
                "desc": "Accommodation Code",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Admit Reason",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Transfer Reason",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "rep": 1,
                "len": 2,
                "table": 130
            },
            {
                "datatype": "TS",
                "desc": "Expected Admit Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "TS",
                "desc": "Expected Discharge Date",
                "opt": 1,
                "rep": 1,
                "len": 8
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
                "rep": 1,
                "len": 90
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
                "len": 90
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
                "datatype": "IS",
                "desc": "Patient Charge Adjustment Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
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
                "desc": "Expected Surgery Date & Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Military Partnership Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Military Non-Availabiltiy Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
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
            }
        ]
    },
    "QAK": {
        "desc": "Query Acknowledgement",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "ID",
                "desc": "Query response status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 208
            }
        ]
    },
    "QCK": {
        "desc": "QCK",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Contents",
                "opt": 1,
                "rep": 1,
                "len": 10000000
            }
        ]
    },
    "QRD": {
        "desc": "Query definition segment",
        "fields": [
            {
                "datatype": "TS",
                "desc": "Query Date/Time",
                "opt": 1,
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
                "len": 10
            },
            {
                "datatype": "XCN",
                "desc": "Who Subject Filter",
                "opt": 2,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "What Subject Filter",
                "opt": 2,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "What Department Data Code",
                "opt": 2,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CM_VR",
                "desc": "What Data Code Value Qualifier",
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
        "desc": "Query filter segment",
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
                "len": 40
            }
        ]
    },
    "RDT": {
        "desc": "Table Row Data",
        "fields": [
            {
                "datatype": "VARIES",
                "desc": "Column value",
                "opt": 2,
                "rep": 1
            }
        ]
    },
    "RF1": {
        "desc": "Referral Information Segment",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Referral Status",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Referral Priority",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Referral Type",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Referral Disposition",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Referral Category",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "len": 200
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
                "len": 200
            }
        ]
    },
    "ROL": {
        "desc": "Role",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Role Instance ID",
                "opt": 2,
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
                "desc": "Role",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "XCN",
                "desc": "Role Person",
                "opt": 2,
                "rep": 1,
                "len": 80
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
                "len": 80
            },
            {
                "datatype": "CE",
                "desc": "Role Action",
                "opt": 1,
                "rep": 1,
                "len": 80
            }
        ]
    },
    "RQ1": {
        "desc": "Requisition detail-1 segment",
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
                "desc": "Manufactured ID",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 60
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
        "desc": "Requisition detail",
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Item Code - External",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Hospital Item Code",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Department Cost Center",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ID",
                "desc": "Item Natural Account Code",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "CE",
                "desc": "Deliver To ID",
                "opt": 1,
                "rep": 1,
                "len": 60
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
        "desc": "Pharmacy administration segment",
        "fields": [
            {
                "datatype": "ID",
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
                "len": 100
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Administered Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Administration Notes",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XCN",
                "desc": "Administering Provider",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM_LA1",
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
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Substance Refusal Reason",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Indication",
                "opt": 1,
                "rep": 0,
                "len": 200
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
                "desc": "Action Code-RXA",
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
            }
        ]
    },
    "RXC": {
        "desc": "Pharmacy component order segment",
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
                "len": 100
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
                "len": 60
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
                "len": 60
            }
        ]
    },
    "RXD": {
        "desc": "Pharmacy dispense segment",
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
                "len": 100
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Actual Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "datatype": "CE",
                "desc": "Dispense Notes",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XCN",
                "desc": "Dispensing Provider",
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
                "datatype": "CQ",
                "desc": "Total Daily Dose",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "CM_LA1",
                "desc": "Dispense-To Location",
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
                "len": 200
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
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Indication",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Dispense Package Method",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 321
            }
        ]
    },
    "RXE": {
        "desc": "Pharmacy encoded order segment",
        "fields": [
            {
                "datatype": "TQ",
                "desc": "Quantity/Timing",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Give Code",
                "opt": 2,
                "rep": 1,
                "len": 100
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Give Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Provider's Administration Instructions",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CM_LA1",
                "desc": "Deliver To Location",
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
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Number of Refills",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CN",
                "desc": "Ordering Provider's DEA Number",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Pharmacist/Treatment Supplier's Verifier ID",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "desc": "Date / time of most recent refill or dose dispensed",
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
                "len": 200
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
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Give Indication",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Dispense Package Method",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 321
            }
        ]
    },
    "RXG": {
        "desc": "Pharmacy give segment",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Give Sub-ID Counter",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Dispense Sub-ID Counter",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "TQ",
                "desc": "Quantity/Timing",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Give Code",
                "opt": 2,
                "rep": 1,
                "len": 100
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Give Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Administration Notes",
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
                "datatype": "CM_LA1",
                "desc": "Dispense-To Location",
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
                "desc": "Pharmacy Special Administration Instructions",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "len": 60
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
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Indication",
                "opt": 1,
                "rep": 1,
                "len": 200
            }
        ]
    },
    "RXO": {
        "desc": "Pharmacy prescription order segment",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Requested Give Code",
                "opt": 2,
                "rep": 1,
                "len": 100
            },
            {
                "datatype": "NM",
                "desc": "Requested Give Amount - Minimum",
                "opt": 2,
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
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Requested Dosage Form",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Provider's Pharmacy Instructions",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Provider's Administration Instructions",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CM_LA1",
                "desc": "Deliver To Location",
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
                "len": 100
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
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Number of Refills",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CN",
                "desc": "Ordering Provider's DEA Number",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Pharmacist/Treatment Supplier's Verifier ID",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Indication",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "len": 60
            }
        ]
    },
    "RXR": {
        "desc": "Pharmacy route segment",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Route",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Site",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Administration Device",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Administration Method",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "SCH": {
        "desc": "Schedule Activity Information",
        "fields": [
            {
                "datatype": "EI",
                "desc": "Placer Appointment ID",
                "opt": 2,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "EI",
                "desc": "Filler Appointment ID",
                "opt": 1,
                "rep": 1,
                "len": 22
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
                "len": 37
            },
            {
                "datatype": "CE",
                "desc": "Schedule ID",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Event Reason",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Appointment Reason",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Appointment Type",
                "opt": 1,
                "rep": 1,
                "len": 200
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
                "len": 200
            },
            {
                "datatype": "TQ",
                "desc": "Appointment Timing Quantity",
                "opt": 2,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XCN",
                "desc": "Placer Contact Person",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Placer Contact Phone Number",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "XAD",
                "desc": "Placer Contact Address",
                "opt": 1,
                "rep": 1,
                "len": 106
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
                "rep": 1,
                "len": 38
            },
            {
                "datatype": "XTN",
                "desc": "Filler Contact Phone Number",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "XAD",
                "desc": "Filler Contact Address",
                "opt": 1,
                "rep": 1,
                "len": 106
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
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "XTN",
                "desc": "Entered By Phone Number",
                "opt": 1,
                "rep": 0,
                "len": 40
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
                "len": 200
            }
        ]
    },
    "SPR": {
        "desc": "Stored Procedure Request Definition",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Query tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "ID",
                "desc": "Query/ Response Format Code",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 106
            },
            {
                "datatype": "CE",
                "desc": "Stored procedure name",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "QIP",
                "desc": "Input parameter list",
                "opt": 1,
                "rep": 0,
                "len": 256
            }
        ]
    },
    "STF": {
        "desc": "Staff identification segment",
        "fields": [
            {
                "datatype": "CE",
                "desc": "STF - Primary Key Value",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Staff ID Code",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "XPN",
                "desc": "Staff Name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "ID",
                "desc": "Staff Type",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 182
            },
            {
                "datatype": "IS",
                "desc": "Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "TS",
                "desc": "Date of Birth",
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
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Service",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "XTN",
                "desc": "Phone",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "AD",
                "desc": "Office/Home Address",
                "opt": 1,
                "rep": 2,
                "len": 106
            },
            {
                "datatype": "CM_DIN",
                "desc": "Activation Date",
                "opt": 1,
                "rep": 0,
                "len": 26
            },
            {
                "datatype": "CM_DIN",
                "desc": "Inactivation Date",
                "opt": 1,
                "rep": 0,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Backup Person ID",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "E-mail Address",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "Preferred Method of Contact",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "IS",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 0,
                "len": 1,
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
                "datatype": "IS",
                "desc": "Employment Status",
                "opt": 1,
                "rep": 1,
                "len": 2,
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
                "desc": "Driver's License Number",
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
            }
        ]
    },
    "TXA": {
        "desc": "Document notification segment",
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
                "rep": 1,
                "len": 60
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
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "XCN",
                "desc": "Assigned Document Authenticator",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "XCN",
                "desc": "Transcriptionist Code/Name",
                "opt": 1,
                "rep": 1,
                "len": 48
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
                "rep": 0,
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
                "len": 60
            },
            {
                "datatype": "XCN",
                "desc": "Distributed Copies",
                "opt": 1,
                "rep": 0,
                "len": 60
            }
        ]
    },
    "UB1": {
        "desc": "UB82  data",
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
                "desc": "Blood Furnished Pints Of",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Blood Replaced Pints",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Blood Not Replaced Pints",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Co Insurance Days",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "IS",
                "desc": "Condition Code",
                "opt": 1,
                "rep": 5,
                "len": 2,
                "table": 43
            },
            {
                "datatype": "NM",
                "desc": "Covered Days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Non Covered Days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CM_UVC",
                "desc": "Value Amount & Code",
                "opt": 1,
                "rep": 8,
                "len": 12
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
                "desc": "Spec Program Indicator",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "PSRO/UR Approval Indicator",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "DT",
                "desc": "PSRO/UR Approved Stay Fm",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "PSRO/UR Approved Stay To",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CM_OCD",
                "desc": "Occurrence",
                "opt": 1,
                "rep": 5,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Occurrence Span",
                "opt": 1,
                "rep": 1,
                "len": 2
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
                "desc": "UB 82 Locator 2",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "UB 82 Locator 9",
                "opt": 1,
                "rep": 1,
                "len": 7
            },
            {
                "datatype": "ST",
                "desc": "UB 82 Locator 27",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "UB 82 Locator 45",
                "opt": 1,
                "rep": 1,
                "len": 17
            }
        ]
    },
    "UB2": {
        "desc": "UB92 data",
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
                "datatype": "ID",
                "desc": "Condition Code",
                "opt": 1,
                "rep": 7,
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
                "datatype": "CM_UVC",
                "desc": "Value Amount & Code",
                "opt": 1,
                "rep": 12,
                "len": 11
            },
            {
                "datatype": "CM_OCD",
                "desc": "Occurrence Code & Date",
                "opt": 1,
                "rep": 8,
                "len": 11
            },
            {
                "datatype": "CM_OSP",
                "desc": "Occurrence Span Code/Dates",
                "opt": 1,
                "rep": 2,
                "len": 28
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 2",
                "opt": 1,
                "rep": 2,
                "len": 29
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 11",
                "opt": 1,
                "rep": 2,
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
                "rep": 3,
                "len": 23
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 49",
                "opt": 1,
                "rep": 23,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "UB92 Locator 56",
                "opt": 1,
                "rep": 5,
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
        "desc": "Results/update definition segment",
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "R/U What Subject Definition",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "R/U What Department Code",
                "opt": 1,
                "rep": 0,
                "len": 60
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
        "desc": "Unsolicited selection segment",
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
                "rep": 1,
                "len": 860
            },
            {
                "datatype": "CE",
                "desc": "Variance Classification",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "desc": "Query tag",
                "opt": 1,
                "rep": 1,
                "len": 32
            },
            {
                "datatype": "ID",
                "desc": "Query/ Response Format Code",
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
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Virtual Table Name",
                "opt": 2,
                "rep": 1,
                "len": 60
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
