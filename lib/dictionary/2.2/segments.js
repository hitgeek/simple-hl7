var segments = {
    "ACC": {
        "desc": "Accident",
        "fields": [
            {
                "datatype": "TS",
                "desc": "Accident date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Accident code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 50
            },
            {
                "datatype": "ST",
                "desc": "Accident location",
                "opt": 1,
                "rep": 1,
                "len": 25
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
    "AL1": {
        "desc": "Patient allergy information",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Allergy",
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
                "desc": "Allergy code / mnemonic / description",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
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
    "BHS": {
        "desc": "Batch header",
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
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Batch Receiving Facility",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "TS",
                "desc": "Batch creation date / time",
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
                "desc": "Batch name / ID / type",
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
                "len": 15
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
        "desc": "Batch trailer",
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
                "datatype": "CM_BATCH_TOTAL",
                "desc": "Batch Totals",
                "opt": 1,
                "rep": 0,
                "len": 100
            }
        ]
    },
    "DG1": {
        "desc": "Diagnosis",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - diagnosis",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis coding method",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 53
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis code",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 51
            },
            {
                "datatype": "ST",
                "desc": "Diagnosis description",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "TS",
                "desc": "Diagnosis date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis / DRG type",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 52
            },
            {
                "datatype": "CE",
                "desc": "Major diagnostic category",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Diagnostic related group",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 55
            },
            {
                "datatype": "ID",
                "desc": "DRG approval indicator",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "DRG grouper review code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 56
            },
            {
                "datatype": "ID",
                "desc": "Outlier type",
                "opt": 1,
                "rep": 1,
                "len": 60,
                "table": 83
            },
            {
                "datatype": "NM",
                "desc": "Outlier days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Outlier cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Grouper version and type",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Diagnosis / DRG priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "CN",
                "desc": "Diagnosing clinician",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "DSC": {
        "desc": "Continuation pointer",
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
        "desc": "Display data",
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
    "ERR": {
        "desc": "Error",
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
                "desc": "Date / time of event",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Date / time planned event",
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
                "datatype": "ID",
                "desc": "Operator ID",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 188
            }
        ]
    },
    "FHS": {
        "desc": "File header",
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
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "File Receiving Facility",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "TS",
                "desc": "File creation date / time",
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
                "desc": "File name / ID",
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
                "desc": "Set ID - financial transaction",
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
                "desc": "Transaction batch ID",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "DT",
                "desc": "Transaction date",
                "opt": 2,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Transaction posting date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Transaction type",
                "opt": 2,
                "rep": 1,
                "len": 8,
                "table": 17
            },
            {
                "datatype": "CE",
                "desc": "Transaction code",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Transaction description",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Transaction description - alternate",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "NM",
                "desc": "Transaction quantity",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Transaction amount - extended",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Transaction amount - unit",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CE",
                "desc": "Department code",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Insurance plan ID",
                "opt": 2,
                "rep": 1,
                "len": 8,
                "table": 72
            },
            {
                "datatype": "NM",
                "desc": "Insurance amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CM_INTERNAL_LOCATION",
                "desc": "Assigned Patient Location",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Fee schedule",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 24
            },
            {
                "datatype": "ID",
                "desc": "Patient type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 18
            },
            {
                "datatype": "CE",
                "desc": "Diagnosis code",
                "opt": 1,
                "rep": 0,
                "len": 8
            },
            {
                "datatype": "CN",
                "desc": "Performed by code",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Ordered by code",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Unit cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CM_FILLER",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 1,
                "len": 75
            }
        ]
    },
    "FTS": {
        "desc": "File trailer",
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
    "GT1": {
        "desc": "Guarantor",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - guarantor",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CK",
                "desc": "Guarantor number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "PN",
                "desc": "Guarantor name",
                "opt": 2,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "PN",
                "desc": "Guarantor spouse name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "AD",
                "desc": "Guarantor address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "TN",
                "desc": "Guarantor phone number - home",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "TN",
                "desc": "Guarantor phone number - business",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "DT",
                "desc": "Guarantor date of birth",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Guarantor sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "ID",
                "desc": "Guarantor type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 68
            },
            {
                "datatype": "ID",
                "desc": "Guarantor relationship",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 63
            },
            {
                "datatype": "ST",
                "desc": "Guarantor social security number",
                "opt": 1,
                "rep": 1,
                "len": 11
            },
            {
                "datatype": "DT",
                "desc": "Guarantor date - begin",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Guarantor date - end",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "NM",
                "desc": "Guarantor priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ST",
                "desc": "Guarantor employer name",
                "opt": 1,
                "rep": 1,
                "len": 45
            },
            {
                "datatype": "AD",
                "desc": "Guarantor employer address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "TN",
                "desc": "Guarantor employ phone number",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Guarantor employee ID number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Guarantor employment status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 66
            },
            {
                "datatype": "ST",
                "desc": "Guarantor organization",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "IN1": {
        "desc": "Insurance",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - insurance",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Insurance plan ID",
                "opt": 2,
                "rep": 1,
                "len": 8,
                "table": 72
            },
            {
                "datatype": "ST",
                "desc": "Insurance company ID",
                "opt": 2,
                "rep": 1,
                "len": 9
            },
            {
                "datatype": "ST",
                "desc": "Insurance company name",
                "opt": 1,
                "rep": 1,
                "len": 45
            },
            {
                "datatype": "AD",
                "desc": "Insurance company address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "PN",
                "desc": "Insurance company contact pers",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "TN",
                "desc": "Insurance company phone number",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Group number",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Group name",
                "opt": 1,
                "rep": 1,
                "len": 35
            },
            {
                "datatype": "ST",
                "desc": "Insured's group employer ID",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Insured's group employer name",
                "opt": 1,
                "rep": 1,
                "len": 45
            },
            {
                "datatype": "DT",
                "desc": "Plan effective date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Plan expiration date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CM_AUI",
                "desc": "Authorization information",
                "opt": 1,
                "rep": 1,
                "len": 55
            },
            {
                "datatype": "ID",
                "desc": "Plan type",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 86
            },
            {
                "datatype": "PN",
                "desc": "Name of insured",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "ID",
                "desc": "Insured's relationship to patient",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 63
            },
            {
                "datatype": "DT",
                "desc": "Insured's date of birth",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "AD",
                "desc": "Insured's address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "ID",
                "desc": "Assignment of benefits",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 135
            },
            {
                "datatype": "ID",
                "desc": "Coordination of benefits",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 173
            },
            {
                "datatype": "ST",
                "desc": "Coordination of benefits - priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Notice of admission code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 136
            },
            {
                "datatype": "DT",
                "desc": "Notice of admission date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Report of eligibility code",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "DT",
                "desc": "Report of eligibility date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Release information code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 93
            },
            {
                "datatype": "ST",
                "desc": "Pre-admit certification",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "TS",
                "desc": "Verification date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CN",
                "desc": "Verification by",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Type of agreement code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 98
            },
            {
                "datatype": "ID",
                "desc": "Billing status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 22
            },
            {
                "datatype": "NM",
                "desc": "Lifetime reserve days",
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
                "datatype": "ID",
                "desc": "Company plan code",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 42
            },
            {
                "datatype": "ST",
                "desc": "Policy number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "NM",
                "desc": "Policy deductible",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Policy limit - amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Policy limit - days",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Room rate - semi-private",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Room rate - private",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CE",
                "desc": "Insured's employment status",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Insured's sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "AD",
                "desc": "Insured's employer address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "ST",
                "desc": "Verification status",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Prior insurance plan ID",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 72
            }
        ]
    },
    "IN2": {
        "desc": "Insurance additional info",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Insured's employee ID",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Insured's social security number",
                "opt": 1,
                "rep": 1,
                "len": 9
            },
            {
                "datatype": "CN",
                "desc": "Insured's employer name",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Employer information data",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 139
            },
            {
                "datatype": "ID",
                "desc": "Mail claim party",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 137
            },
            {
                "datatype": "NM",
                "desc": "Medicare health insurance card number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "PN",
                "desc": "Medicaid case name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "NM",
                "desc": "Medicaid case number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "PN",
                "desc": "Champus sponsor name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "NM",
                "desc": "Champus ID number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Dependent of champus recipient",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "Champus organization",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "ST",
                "desc": "Champus station",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "ID",
                "desc": "Champus service",
                "opt": 1,
                "rep": 1,
                "len": 14,
                "table": 140
            },
            {
                "datatype": "ID",
                "desc": "Champus rank / grade",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 141
            },
            {
                "datatype": "ID",
                "desc": "Champus status",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 142
            },
            {
                "datatype": "DT",
                "desc": "Champus retire date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Champus non-availability certification on file",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Baby coverage",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Combine baby bill",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "NM",
                "desc": "Blood deductible",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "PN",
                "desc": "Special coverage approval name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "ST",
                "desc": "Special coverage approval title",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ID",
                "desc": "Non-covered insurance code",
                "opt": 1,
                "rep": 0,
                "len": 8,
                "table": 143
            },
            {
                "datatype": "ST",
                "desc": "Payor ID",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "ST",
                "desc": "Payor subscriber ID",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "ID",
                "desc": "Eligibility source",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 144
            },
            {
                "datatype": "CM_RMC",
                "desc": "Room coverage type / amount",
                "opt": 1,
                "rep": 0,
                "len": 25
            },
            {
                "datatype": "CM_PTA",
                "desc": "Policy type / amount",
                "opt": 1,
                "rep": 0,
                "len": 25
            },
            {
                "datatype": "CM_DDI",
                "desc": "Daily deductible",
                "opt": 1,
                "rep": 1,
                "len": 25
            }
        ]
    },
    "IN3": {
        "desc": "Insurance additional info-certification",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - insurance certification",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Certification number",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "CN",
                "desc": "Certified by",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Certification required",
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
                "desc": "Certification date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Certification modify date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CN",
                "desc": "Operator",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "DT",
                "desc": "Certification begin date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Certification end date",
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
                "desc": "Non-concur code / description",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Non-concur effective date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CN",
                "desc": "Physician reviewer",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Certification contact",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "TN",
                "desc": "Certification contact phone number",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "Appeal reason",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Certification agency",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TN",
                "desc": "Certification agency phone number",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "CM_PCF",
                "desc": "Pre-certification required / window",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Case manager",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "DT",
                "desc": "Second opinion date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Second opinion status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 151
            },
            {
                "datatype": "ID",
                "desc": "Second opinion documentation received",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 152
            },
            {
                "datatype": "CN",
                "desc": "Second opinion practitioner",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "MFA": {
        "desc": "Master file acknowledgement",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Record-level event code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 180
            },
            {
                "datatype": "ST",
                "desc": "MFN control ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Event completion date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Error return code and/or text",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Primary key value",
                "opt": 2,
                "rep": 0,
                "len": 60
            }
        ]
    },
    "MFE": {
        "desc": "Master file entry",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Record-level event code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 180
            },
            {
                "datatype": "ST",
                "desc": "MFN control ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Effective date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Primary key value",
                "opt": 2,
                "rep": 0,
                "len": 60
            }
        ]
    },
    "MFI": {
        "desc": "Master file identification",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Master file identifier",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Master file application identifier",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 176
            },
            {
                "datatype": "ID",
                "desc": "File-level event code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 178
            },
            {
                "datatype": "TS",
                "desc": "Entered date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Response level code",
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
                "datatype": "CM_PAT_ID",
                "desc": "Prior Patient ID - Internal",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CM_PAT_ID",
                "desc": "Prior Alternate Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CK",
                "desc": "Prior Patient Account Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CK",
                "desc": "Prior Patient ID - External",
                "opt": 1,
                "rep": 1,
                "len": 16
            }
        ]
    },
    "MSA": {
        "desc": "Message acknowledgment",
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
                "desc": "Delayed Acknowledgement type",
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
        "desc": "Message header",
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
                "desc": "Encoding characters",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Sending application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Sending facility",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Receiving application",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Receiving facility",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "TS",
                "desc": "Date / Time of message",
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
                "desc": "Message type",
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
                "datatype": "ID",
                "desc": "Processing ID",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 103
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
                "desc": "Sequence number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Continuation pointer",
                "opt": 1,
                "rep": 1,
                "len": 180
            },
            {
                "datatype": "ID",
                "desc": "Accept acknowledgement type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 155
            },
            {
                "datatype": "ID",
                "desc": "Application acknowledgement type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 155
            },
            {
                "datatype": "ID",
                "desc": "Country code",
                "opt": 1,
                "rep": 1,
                "len": 2
            }
        ]
    },
    "NCK": {
        "desc": "System clock",
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
                "datatype": "PN",
                "desc": "NK Name",
                "opt": 1,
                "rep": 1,
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
                "datatype": "AD",
                "desc": "Address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "TN",
                "desc": "Phone Number",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "TN",
                "desc": "Business Phone Number",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "CE",
                "desc": "Contact Role",
                "opt": 1,
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
                "desc": "Next of Kin",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CM_JOB_CODE",
                "desc": "Next of kin job code / class",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Next of Kin Employee Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Organization Name",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "NPU": {
        "desc": "Bed status update",
        "fields": [
            {
                "datatype": "CM_INTERNAL_LOCATION",
                "desc": "Bed Location",
                "opt": 2,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Bed Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 116
            }
        ]
    },
    "NSC": {
        "desc": "Status change",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Network Change Type",
                "opt": 2,
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
            },
            {
                "datatype": "ST",
                "desc": "New Facility",
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
                "desc": "Message Received",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Message Sent",
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
        "desc": "Notes and comments",
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
        "desc": "Observation request",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Observation Request",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CM_PLACER",
                "desc": "Placer Order Number",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "CM_FILLER",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "CE",
                "desc": "Universal Service ID",
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
                "desc": "Requested date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Observation date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Observation end date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CQ_QUANTITY",
                "desc": "Collection Volume",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CN",
                "desc": "Collector Identifier",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Specimen action code",
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
                "desc": "Relevant clinical information",
                "opt": 1,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "TS",
                "desc": "Specimen received date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CM_SPS",
                "desc": "Specimen source",
                "opt": 1,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "CN",
                "desc": "Ordering Provider",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "TN",
                "desc": "Order Callback Phone Number",
                "opt": 1,
                "rep": 2,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Placer field 1",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Placer field 2",
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
                "desc": "Results report / status change - date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CM_MOC",
                "desc": "Charge to Practice",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ID",
                "desc": "Diagnostic service section ID",
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
                "datatype": "CM_PARENT_RESULT",
                "desc": "Parent Result",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "TQ",
                "desc": "Quantity / timing",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CN",
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
                "desc": "Reason for Study",
                "opt": 1,
                "rep": 0,
                "len": 300
            },
            {
                "datatype": "CM_NDL",
                "desc": "Principal Result Interpreter",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CM_NDL",
                "desc": "Assistant Result Interpreter",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CM_NDL",
                "desc": "Technician",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CM_NDL",
                "desc": "Transcriptionist",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Scheduled date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "OBX": {
        "desc": "Observation result",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Observational Simple",
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
                "len": 80
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
                "rep": 1,
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
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Abnormal Flags",
                "opt": 1,
                "rep": 5,
                "len": 10,
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
                "len": 5,
                "table": 80
            },
            {
                "datatype": "ID",
                "desc": "Observation result status",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 85
            },
            {
                "datatype": "TS",
                "desc": "Effective date last observation normal values",
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
                "desc": "Date / time of the observation",
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
                "datatype": "CN",
                "desc": "Responsible Observer",
                "opt": 1,
                "rep": 1,
                "len": 60
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
                "rep": 2,
                "len": 80
            }
        ]
    },
    "ODT": {
        "desc": "Diet tray instruction",
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
                "rep": 2,
                "len": 80
            }
        ]
    },
    "OM1": {
        "desc": "General - fields that apply to most observations",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Segment Type ID",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/ Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Producer's test / observation ID",
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
                "datatype": "TX",
                "desc": "Observation Description",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Other test / observation IDs for the observation",
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
                "desc": "Identity of instrument used to perform this study",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Coded Representation of Method",
                "opt": 1,
                "rep": 0,
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
                "datatype": "ID",
                "desc": "Observation producing department / section",
                "opt": 1,
                "rep": 0,
                "len": 1
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
                "desc": "Nature of test / observation",
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
                "desc": "Date / time stamp for any change in definition for obs",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective date / time of change",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "NM",
                "desc": "Typical Turn-around Time",
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
                "rep": 0,
                "len": 1000
            },
            {
                "datatype": "TN",
                "desc": "Phone Number of Outside Site",
                "opt": 1,
                "rep": 0,
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
                "desc": "Observations required to interpret the observation",
                "opt": 1,
                "rep": 0,
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
                "rep": 0,
                "len": 65536
            },
            {
                "datatype": "CE",
                "desc": "Reflex tests / observations",
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
                "rep": 0,
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
                "desc": "Factors that may affect the observation",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ST",
                "desc": "Test / observation performance schedule",
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
            }
        ]
    },
    "OM2": {
        "desc": "Numeric observation",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Segment Type ID",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
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
                "rep": 1,
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
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "CM_RFR",
                "desc": "Reference",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CM_RANGE",
                "desc": "Critical range for ordinal and continuous observations",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM_ABS_RANGE",
                "desc": "Absolute range for ordinal and continuous observations",
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
                "datatype": "ST",
                "desc": "Segment Type ID",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/ Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Preferred Coding System",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "CE",
                "desc": "Valid coded answers",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "CE",
                "desc": "Normal test codes for categorical observations",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Abnormal test codes for categorical observations",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CE",
                "desc": "Critical test codes for categorical observations",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Data Type",
                "opt": 1,
                "rep": 1,
                "len": 2
            }
        ]
    },
    "OM4": {
        "desc": "Observation that require specimens",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Segment Type ID",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
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
                "datatype": "CQ_QUANTITY",
                "desc": "Normal Collection Volume",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CQ_QUANTITY",
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
                "len": 60,
                "table": 27
            },
            {
                "datatype": "CQ_QUANTITY",
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
                "datatype": "ST",
                "desc": "Segment Type ID",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Sequence Number - Test/ Observation Master File",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Tests / observations included within an ordered test battery",
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
        "desc": "Observations that are calculated from other obersvations",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Segment Type ID",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
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
        "desc": "Commom order",
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
                "datatype": "CM_PLACER",
                "desc": "Placer Order Number",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "CM_FILLER",
                "desc": "Filler Order Number",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "CM_GROUP_ID",
                "desc": "Placer Group Number",
                "opt": 1,
                "rep": 1,
                "len": 75
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
                "desc": "Quantity / timing",
                "opt": 1,
                "rep": 0,
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
                "desc": "Date / time of transaction",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CN",
                "desc": "Entered By",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CN",
                "desc": "Verified By",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CN",
                "desc": "Ordering Provider",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CM_PARENT_RESULT",
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
                "desc": "Order effective date / time",
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
                "datatype": "CN",
                "desc": "Action by",
                "opt": 1,
                "rep": 1,
                "len": 80
            }
        ]
    },
    "PID": {
        "desc": "Patient identification",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CK",
                "desc": "Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CM_PAT_ID",
                "desc": "Patient ID",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Alternate Patient ID",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "PN",
                "desc": "Patient Name",
                "opt": 2,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "ST",
                "desc": "Mother's Maiden Name",
                "opt": 1,
                "rep": 1,
                "len": 30
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
                "desc": "Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "PN",
                "desc": "Patient Alias",
                "opt": 1,
                "rep": 0,
                "len": 48
            },
            {
                "datatype": "ID",
                "desc": "Race",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 5
            },
            {
                "datatype": "AD",
                "desc": "Patient Address",
                "opt": 1,
                "rep": 3,
                "len": 106
            },
            {
                "datatype": "ID",
                "desc": "County code",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "TN",
                "desc": "Phone Number - Home",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "TN",
                "desc": "Phone Number - Business",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Language - Patient",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "ID",
                "desc": "Marital Status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 2
            },
            {
                "datatype": "ID",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 6
            },
            {
                "datatype": "CK",
                "desc": "Patient Account Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Social security number - patient",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CM_LICENSE_NO",
                "desc": "Driver's license number - patient",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "CK",
                "desc": "Mother's Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
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
                "len": 25
            },
            {
                "datatype": "ID",
                "desc": "Multiple Birth Indicator",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Birth Order",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Citizenship",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 171
            },
            {
                "datatype": "ST",
                "desc": "Veterans Military Status",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "PR1": {
        "desc": "Procedures",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - procedure",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Procedure coding method",
                "opt": 2,
                "rep": 0,
                "len": 2,
                "table": 89
            },
            {
                "datatype": "ID",
                "desc": "Procedure code",
                "opt": 2,
                "rep": 0,
                "len": 10,
                "table": 88
            },
            {
                "datatype": "ST",
                "desc": "Procedure description",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "TS",
                "desc": "Procedure date / time",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Procedure type",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 90
            },
            {
                "datatype": "NM",
                "desc": "Procedure minutes",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CN",
                "desc": "Anesthesiologist",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Anesthesia code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 19
            },
            {
                "datatype": "NM",
                "desc": "Anesthesia minutes",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CN",
                "desc": "Surgeon",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CM_PRACTITIONER",
                "desc": "Procedure Practitioner",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Consent code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 59
            },
            {
                "datatype": "NM",
                "desc": "Procedure priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            }
        ]
    },
    "PRA": {
        "desc": "Practitioner detail",
        "fields": [
            {
                "datatype": "ST",
                "desc": "PRA - primary key value",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Practitioner group",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ID",
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
                "len": 20
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
                "datatype": "CM_INTERNAL_LOCATION",
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
                "datatype": "ST",
                "desc": "Preadmit Number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CM_INTERNAL_LOCATION",
                "desc": "Prior Patient Location",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CN",
                "desc": "Attending Doctor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Referring Doctor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
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
                "datatype": "CM_INTERNAL_LOCATION",
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
                "desc": "Readmission indicator",
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
                "datatype": "ID",
                "desc": "Ambulatory Status",
                "opt": 1,
                "rep": 0,
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
                "datatype": "CN",
                "desc": "Admitting Doctor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Patient type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 18
            },
            {
                "datatype": "CM_PAT_ID",
                "desc": "Visit Number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "CM_FINANCE",
                "desc": "Financial Class",
                "opt": 1,
                "rep": 4,
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
                "desc": "Transfer to bad debt - code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 110
            },
            {
                "datatype": "DT",
                "desc": "Transfer to bad debt - date",
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
                "len": 4,
                "table": 115
            },
            {
                "datatype": "ID",
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
                "datatype": "CM_INTERNAL_LOCATION",
                "desc": "Pending Location",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "CM_INTERNAL_LOCATION",
                "desc": "Prior Temporary Location",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "TS",
                "desc": "Admit date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Discharge date / time",
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
                "datatype": "CM_PAT_ID_0192",
                "desc": "Alternate Visit ID",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "PV2": {
        "desc": "Patient visit - additional information",
        "fields": [
            {
                "datatype": "CM_INTERNAL_LOCATION",
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
                "datatype": "ID",
                "desc": "Visit User Code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 130
            },
            {
                "datatype": "DT",
                "desc": "Expected Admit Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Expected Discharge Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "QRD": {
        "desc": "Query definition",
        "fields": [
            {
                "datatype": "TS",
                "desc": "Query date / time",
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
                "desc": "Deferred response date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CQ_QUANTITY",
                "desc": "Quantity Limited Request",
                "opt": 2,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "Who Subject Filter",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "What Subject Filter",
                "opt": 2,
                "rep": 0,
                "len": 3,
                "table": 48
            },
            {
                "datatype": "ST",
                "desc": "What Department Data Code",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "CM_VR",
                "desc": "What data code value qualifier",
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
        "desc": "Query filter",
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
                "desc": "When data start date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "When data end date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ST",
                "desc": "What User Qualifier",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Other QRY Subject Filter",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Which date / time qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 156
            },
            {
                "datatype": "ID",
                "desc": "Which date / time status qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 157
            },
            {
                "datatype": "ID",
                "desc": "Date / time selection qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 158
            }
        ]
    },
    "RQ1": {
        "desc": "Requisition detail- ",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Anticipated Price",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "CE",
                "desc": "Manufacturer ID",
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
                "desc": "Requisition Unit of measure",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Department cost center",
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
                "desc": "Deliver-to ID",
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
        "desc": "Pharmacy aadministration",
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
                "desc": "Date / time start of administration",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Date / time end of administration",
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
                "datatype": "ST",
                "desc": "Administration Notes",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CN",
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
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Administered Per",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "RXC": {
        "desc": "Pharmacy component order",
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
                "len": 20
            }
        ]
    },
    "RXD": {
        "desc": "Pharmacy dispense",
        "fields": [
            {
                "datatype": "NM",
                "desc": "Dispense Sub-ID Counter",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CE",
                "desc": "Dispense / give code",
                "opt": 2,
                "rep": 1,
                "len": 100
            },
            {
                "datatype": "TS",
                "desc": "Date / time dispensed",
                "opt": 1,
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
                "datatype": "ST",
                "desc": "Dispense Notes",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CN",
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
                "datatype": "CQ_QUANTITY",
                "desc": "Total Daily Dose",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "CM_LA1",
                "desc": "Deliver-to location",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Needs Human Review",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "CE",
                "desc": "Pharmacy Special Dispensing Instructions",
                "opt": 1,
                "rep": 1,
                "len": 200
            }
        ]
    },
    "RXE": {
        "desc": "Pharmacy encoded order",
        "fields": [
            {
                "datatype": "TQ",
                "desc": "Quantity / timing",
                "opt": 1,
                "rep": 0,
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
                "desc": "Deliver-to location",
                "opt": 1,
                "rep": 1,
                "len": 12
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
                "desc": "Pharmacist Verifier ID",
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
                "datatype": "NM",
                "desc": "Number of refills / doses dispensed",
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
                "datatype": "CQ_QUANTITY",
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
                "len": 1
            },
            {
                "datatype": "CE",
                "desc": "Pharmacy Special Dispensing Instructions",
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
                "datatype": "CE",
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
            }
        ]
    },
    "RXG": {
        "desc": "Pharmacy give",
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
                "desc": "Quantity / timing",
                "opt": 1,
                "rep": 0,
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
                "datatype": "ST",
                "desc": "Administration Notes",
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
                "datatype": "CM_LA1",
                "desc": "Deliver-to location",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Needs Human Review",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "CE",
                "desc": "Pharmacy Special Administration Instructions",
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
                "datatype": "CE",
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
            }
        ]
    },
    "RXO": {
        "desc": "Pharmacy prescription order",
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
                "desc": "Deliver-to location",
                "opt": 1,
                "rep": 1,
                "len": 12
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
                "desc": "Pharmacist Verifier ID",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Needs Human Review",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "Requested Give Per",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "RXR": {
        "desc": "Pharmacy route",
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
    "STF": {
        "desc": "Staff identification segment",
        "fields": [
            {
                "datatype": "CE",
                "desc": "STF - primary key value",
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
                "datatype": "PN",
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
                "datatype": "ID",
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
                "desc": "Active / inactive",
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
                "datatype": "TN",
                "desc": "Phone",
                "opt": 1,
                "rep": 0,
                "len": 40
            },
            {
                "datatype": "AD",
                "desc": "Office / home address",
                "opt": 1,
                "rep": 2,
                "len": 106
            },
            {
                "datatype": "CM_DIN",
                "desc": "Activation Date",
                "opt": 1,
                "rep": 0,
                "len": 19
            },
            {
                "datatype": "CM_DIN",
                "desc": "Inactivation Date",
                "opt": 1,
                "rep": 0,
                "len": 19
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
                "datatype": "ID",
                "desc": "Preferred method of Contact",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 185
            }
        ]
    },
    "UB1": {
        "desc": "Ub82 data",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - UB82",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Blood deductible",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "NM",
                "desc": "Blood furnished pints of",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Blood replaced pints",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Blood not replaced pints",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Co-insurance days",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Condition code",
                "opt": 1,
                "rep": 5,
                "len": 2,
                "table": 43
            },
            {
                "datatype": "NM",
                "desc": "Covered days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Non-covered days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CM_UVC",
                "desc": "Value amount and code",
                "opt": 1,
                "rep": 8,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Number of grace days",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Special program indicator",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "PSRO / UR approval indicator",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "DT",
                "desc": "PSRO / UR approved stay - from",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "PSRO / UR approved stay - to",
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
                "desc": "Occurrence span",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "DT",
                "desc": "Occurrence span start date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Occurrence span end date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "UB-82 locator 2",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "UB-82 locator 9",
                "opt": 1,
                "rep": 1,
                "len": 7
            },
            {
                "datatype": "ST",
                "desc": "UB-82 locator 27",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "UB-82 locator 45",
                "opt": 1,
                "rep": 1,
                "len": 17
            }
        ]
    },
    "UB2": {
        "desc": "Ub92 data",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set ID - UB92",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Co-insurance days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "ID",
                "desc": "Condition code",
                "opt": 1,
                "rep": 7,
                "len": 2,
                "table": 43
            },
            {
                "datatype": "ST",
                "desc": "Covered days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "ST",
                "desc": "Non-covered days",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CM_UVC",
                "desc": "Value amount and code",
                "opt": 1,
                "rep": 12,
                "len": 11
            },
            {
                "datatype": "CM_OCD",
                "desc": "Occurrence code and date",
                "opt": 1,
                "rep": 8,
                "len": 11
            },
            {
                "datatype": "CM_OSP",
                "desc": "Occurrence span code / dates",
                "opt": 1,
                "rep": 2,
                "len": 28
            },
            {
                "datatype": "ST",
                "desc": "UB92 locator 2",
                "opt": 1,
                "rep": 2,
                "len": 29
            },
            {
                "datatype": "ST",
                "desc": "UB92 locator 11",
                "opt": 1,
                "rep": 2,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "UB92 locator 31",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "ST",
                "desc": "Document control number",
                "opt": 1,
                "rep": 3,
                "len": 23
            },
            {
                "datatype": "ST",
                "desc": "UB92 locator 49",
                "opt": 1,
                "rep": 23,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "UB92 locator 56",
                "opt": 1,
                "rep": 5,
                "len": 14
            },
            {
                "datatype": "ST",
                "desc": "UB92 locator 57",
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
            }
        ]
    },
    "URD": {
        "desc": "Results/update definition",
        "fields": [
            {
                "datatype": "TS",
                "desc": "R/U date / time",
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
                "datatype": "ST",
                "desc": "R/U Who Subject Definition",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "R/U What Subject Definition",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 48
            },
            {
                "datatype": "ST",
                "desc": "R/U What Department Code",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "R/U display / print locations",
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
        "desc": "Unsolicited selection",
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
                "desc": "R/U when data start date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "R/U when data end date / time",
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
                "desc": "R/U which date / time qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 156
            },
            {
                "datatype": "ID",
                "desc": "R/U which date / time status qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 157
            },
            {
                "datatype": "ID",
                "desc": "R/U date / time selection qualifier",
                "opt": 1,
                "rep": 0,
                "len": 12,
                "table": 158
            }
        ]
    }
};

module.exports = segments;
