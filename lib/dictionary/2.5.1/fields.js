var fields = {
    "AD": {
        "desc": "Address",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "State or Province",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "Zip or Postal Code",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Country",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 399
            },
            {
                "datatype": "ID",
                "desc": "Address Type",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 190
            },
            {
                "datatype": "ST",
                "desc": "Other Geographic Designation",
                "opt": 1,
                "rep": 1,
                "len": 50
            }
        ]
    },
    "AUI": {
        "desc": "Authorization Information",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Authorization Number",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "DT",
                "desc": "Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Source",
                "opt": 1,
                "rep": 1,
                "len": 199
            }
        ]
    },
    "CCD": {
        "desc": "Charge Code and Date",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Invocation Event",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 100
            },
            {
                "datatype": "TS",
                "desc": "Date/time",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "CCP": {
        "desc": "Channel Calibration Parameters",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Channel Calibration Sensitivity Correction Factor",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "NM",
                "desc": "Channel Calibration Baseline",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "NM",
                "desc": "Channel Calibration Time Skew",
                "opt": 1,
                "rep": 1,
                "len": 6
            }
        ]
    },
    "CD": {
        "desc": "Channel Definition",
        "subfields": [
            {
                "datatype": "WVI",
                "desc": "Channel Identifier",
                "opt": 1,
                "rep": 1,
                "len": 22
            },
            {
                "datatype": "WVS",
                "desc": "Waveform Source",
                "opt": 1,
                "rep": 1,
                "len": 17
            },
            {
                "datatype": "CSU",
                "desc": "Channel Sensitivity/Units",
                "opt": 1,
                "rep": 1,
                "len": 478
            },
            {
                "datatype": "CCP",
                "desc": "Channel Calibration Parameters",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "NM",
                "desc": "Channel Sampling Frequency",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "NR",
                "desc": "Minimum/Maximum Data Values",
                "opt": 1,
                "rep": 1,
                "len": 33
            }
        ]
    },
    "CE": {
        "desc": "Coded Element",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Name of Coding System",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Alternate Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Name of Alternate Coding System",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 396
            }
        ]
    },
    "CF": {
        "desc": "Coded Element with Formatted Values",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "FT",
                "desc": "Formatted Text",
                "opt": 1,
                "rep": 1,
                "len": 65536
            },
            {
                "datatype": "ID",
                "desc": "Name of Coding System",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "FT",
                "desc": "Alternate Formatted Text",
                "opt": 1,
                "rep": 1,
                "len": 65536
            },
            {
                "datatype": "ID",
                "desc": "Name of Alternate Coding System",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 396
            }
        ]
    },
    "CNE": {
        "desc": "Coded with No Exceptions",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Identifier",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Name of Coding System",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Alternate Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Name of Alternate Coding System",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Coding System Version ID",
                "opt": 3,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "Alternate Coding System Version ID",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "Original Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            }
        ]
    },
    "CNN": {
        "desc": "Composite ID Number and Name Simplified",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Second and Further Given Names or Initials Thereof",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Degree",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 360
            },
            {
                "datatype": "IS",
                "desc": "Source Table",
                "opt": 3,
                "rep": 1,
                "len": 4,
                "table": 297
            },
            {
                "datatype": "IS",
                "desc": "Assigning Authority   - Namespace ID",
                "opt": 3,
                "rep": 1,
                "len": 20,
                "table": 363
            },
            {
                "datatype": "ST",
                "desc": "Assigning Authority  - Universal ID",
                "opt": 3,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Assigning Authority  - Universal ID Type",
                "opt": 3,
                "rep": 1,
                "len": 6,
                "table": 301
            }
        ]
    },
    "CP": {
        "desc": "Composite Price",
        "subfields": [
            {
                "datatype": "MO",
                "desc": "Price",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Price Type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 205
            },
            {
                "datatype": "NM",
                "desc": "From Value",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "To Value",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CE",
                "desc": "Range Units",
                "opt": 1,
                "rep": 1,
                "len": 483
            },
            {
                "datatype": "ID",
                "desc": "Range Type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 298
            }
        ]
    },
    "CQ": {
        "desc": "Composite Quantity with Units",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CE",
                "desc": "Units",
                "opt": 1,
                "rep": 1,
                "len": 483
            }
        ]
    },
    "CSU": {
        "desc": "Channel Sensitivity",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Channel Sensitivity",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Unit of Measure Identifier",
                "opt": 3,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Unit of Measure Description",
                "opt": 3,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Unit of Measure Coding System",
                "opt": 3,
                "rep": 1,
                "len": 20,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Description",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Alternate Unit of Measure Coding System",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 396
            }
        ]
    },
    "CWE": {
        "desc": "Coded with Exceptions",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Name of Coding System",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Alternate Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Name of Alternate Coding System",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Coding System Version ID",
                "opt": 3,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "Alternate Coding System Version ID",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "Original Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            }
        ]
    },
    "CX": {
        "desc": "Extended Composite ID with Check Digit",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 2,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 61
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1,
                "len": 227,
                "table": 363
            },
            {
                "datatype": "ID",
                "desc": "Identifier Type Code",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 203
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "DT",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Jurisdiction",
                "opt": 1,
                "rep": 1,
                "len": 705
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Agency or Department",
                "opt": 1,
                "rep": 1,
                "len": 705
            }
        ]
    },
    "DDI": {
        "desc": "Daily Deductible Information",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Delay Days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "MO",
                "desc": "Monetary Amount",
                "opt": 2,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Number of Days",
                "opt": 1,
                "rep": 1,
                "len": 4
            }
        ]
    },
    "DIN": {
        "desc": "Date and Institution Name",
        "subfields": [
            {
                "datatype": "TS",
                "desc": "Date",
                "opt": 2,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "CE",
                "desc": "Institution Name",
                "opt": 2,
                "rep": 1,
                "len": 483,
                "table": 531
            }
        ]
    },
    "DLD": {
        "desc": "Discharge Location and Date",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Discharge Location",
                "opt": 2,
                "rep": 1,
                "len": 20,
                "table": 113
            },
            {
                "datatype": "TS",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "DLN": {
        "desc": "Driver_s License Number",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "License Number",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Issuing State, Province, Country",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 333
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 24
            }
        ]
    },
    "DLT": {
        "desc": "Delta",
        "subfields": [
            {
                "datatype": "NR",
                "desc": "Normal Range",
                "opt": 1,
                "rep": 1,
                "len": 33
            },
            {
                "datatype": "NM",
                "desc": "Numeric Threshold",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Change Computation",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 523
            },
            {
                "datatype": "NM",
                "desc": "Days Retained",
                "opt": 1,
                "rep": 1,
                "len": 4
            }
        ]
    },
    "DR": {
        "desc": "Date/Time Range",
        "subfields": [
            {
                "datatype": "TS",
                "desc": "Range Start Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Range End Date/Time",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "DT": {
        "desc": "Date",
        "subfields": []
    },
    "DTM": {
        "desc": "Date/Time",
        "subfields": []
    },
    "DTN": {
        "desc": "Day Type and Number",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Day Type",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 149
            },
            {
                "datatype": "NM",
                "desc": "Number of Days",
                "opt": 2,
                "rep": 1,
                "len": 3
            }
        ]
    },
    "ED": {
        "desc": "Encapsulated Data",
        "subfields": [
            {
                "datatype": "HD",
                "desc": "Source Application",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "ID",
                "desc": "Type of Data",
                "opt": 2,
                "rep": 1,
                "len": 9,
                "table": 191
            },
            {
                "datatype": "ID",
                "desc": "Data Subtype",
                "opt": 1,
                "rep": 1,
                "len": 18,
                "table": 291
            },
            {
                "datatype": "ID",
                "desc": "Encoding",
                "opt": 2,
                "rep": 1,
                "len": 6,
                "table": 299
            },
            {
                "datatype": "TX",
                "desc": "Data",
                "opt": 2,
                "rep": 1,
                "len": 65536
            }
        ]
    },
    "EI": {
        "desc": "Entity Identifier",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Entity Identifier",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "IS",
                "desc": "Namespace ID",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 363
            },
            {
                "datatype": "ST",
                "desc": "Universal ID",
                "opt": 3,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Universal ID Type",
                "opt": 3,
                "rep": 1,
                "len": 6,
                "table": 301
            }
        ]
    },
    "EIP": {
        "desc": "Entity Identifier Pair",
        "subfields": [
            {
                "datatype": "EI",
                "desc": "Placer Assigned Identifier",
                "opt": 1,
                "rep": 1,
                "len": 427
            },
            {
                "datatype": "EI",
                "desc": "Filler Assigned Identifier",
                "opt": 1,
                "rep": 1,
                "len": 427
            }
        ]
    },
    "ELD": {
        "desc": "Error Location and Description",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Segment ID",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Segment Sequence",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Field Position",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "CE",
                "desc": "Code Identifying Error",
                "opt": 1,
                "rep": 1,
                "len": 483,
                "table": 357
            }
        ]
    },
    "ERL": {
        "desc": "Error Location",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Segment ID",
                "opt": 2,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Segment Sequence",
                "opt": 2,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Field Position",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Field Repetition",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Component Number",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Sub-Component Number",
                "opt": 1,
                "rep": 1,
                "len": 2
            }
        ]
    },
    "FC": {
        "desc": "Financial Class",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Financial Class Code",
                "opt": 2,
                "rep": 1,
                "len": 20,
                "table": 64
            },
            {
                "datatype": "TS",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "FN": {
        "desc": "Family Name",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Surname",
                "opt": 2,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "Own Surname Prefix",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Own Surname",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "Surname Prefix From Partner/Spouse",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Surname From Partner/Spouse",
                "opt": 1,
                "rep": 1,
                "len": 50
            }
        ]
    },
    "FT": {
        "desc": "Formatted Text Data",
        "subfields": []
    },
    "GTS": {
        "desc": "General Timing Specification",
        "subfields": []
    },
    "HD": {
        "desc": "Hierarchic Designator",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Namespace ID",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 300
            },
            {
                "datatype": "ST",
                "desc": "Universal ID",
                "opt": 3,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Universal ID Type",
                "opt": 3,
                "rep": 1,
                "len": 6,
                "table": 301
            }
        ]
    },
    "ICD": {
        "desc": "Insurance Certification Definition",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Certification Patient Type",
                "opt": 1,
                "rep": 1,
                "len": 11,
                "table": 150
            },
            {
                "datatype": "ID",
                "desc": "Certification Required",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Certification Required",
                "opt": 1,
                "rep": 1,
                "len": 26
            }
        ]
    },
    "ID": {
        "desc": "Coded values for HL7 tables",
        "subfields": []
    },
    "IS": {
        "desc": "Coded value for user-defined tables",
        "subfields": []
    },
    "JCC": {
        "desc": "Job Code/Class",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Job Code",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 327
            },
            {
                "datatype": "IS",
                "desc": "Job Class",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 328
            },
            {
                "datatype": "TX",
                "desc": "Job Description Text",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "LA1": {
        "desc": "Location with Address Variation 1",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Point of Care",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 302
            },
            {
                "datatype": "IS",
                "desc": "Room",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 303
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 304
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 306
            },
            {
                "datatype": "IS",
                "desc": "Patient Location Type",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 305
            },
            {
                "datatype": "IS",
                "desc": "Building",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 307
            },
            {
                "datatype": "IS",
                "desc": "Floor",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 308
            },
            {
                "datatype": "AD",
                "desc": "Address",
                "opt": 1,
                "rep": 1,
                "len": 415
            }
        ]
    },
    "LA2": {
        "desc": "Location with Address Variation 2",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Point of Care",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 302
            },
            {
                "datatype": "IS",
                "desc": "Room",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 303
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 304
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 306
            },
            {
                "datatype": "IS",
                "desc": "Patient Location Type",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 305
            },
            {
                "datatype": "IS",
                "desc": "Building",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 307
            },
            {
                "datatype": "IS",
                "desc": "Floor",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 308
            },
            {
                "datatype": "ST",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "State or Province",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "Zip or Postal Code",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Country",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 399
            },
            {
                "datatype": "ID",
                "desc": "Address Type",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 190
            },
            {
                "datatype": "ST",
                "desc": "Other Geographic Designation",
                "opt": 1,
                "rep": 1,
                "len": 50
            }
        ]
    },
    "MA": {
        "desc": "Multiplexed Array",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Sample 1 From Channel 1",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Sample 1 From Channel 2",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Sample 1 From Channel N",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Sample 2 From Channel 1",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Sample 2 From Channel N",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Sample N From Channel N",
                "opt": 1,
                "rep": 1,
                "len": 16
            }
        ]
    },
    "MO": {
        "desc": "Money",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "ID",
                "desc": "Denomination",
                "opt": 1,
                "rep": 1,
                "len": 3
            }
        ]
    },
    "MOC": {
        "desc": "Money and Code",
        "subfields": [
            {
                "datatype": "MO",
                "desc": "Monetary Amount",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CE",
                "desc": "Charge Code",
                "opt": 1,
                "rep": 1,
                "len": 483
            }
        ]
    },
    "MOP": {
        "desc": "Money or Percentage",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Money or Percentage Indicator",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 148
            },
            {
                "datatype": "NM",
                "desc": "Money or Percentage Quantity",
                "opt": 2,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "ID",
                "desc": "Currency Denomination",
                "opt": 1,
                "rep": 1,
                "len": 3
            }
        ]
    },
    "MSG": {
        "desc": "Message Type",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Message Code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 76
            },
            {
                "datatype": "ID",
                "desc": "Trigger Event",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 3
            },
            {
                "datatype": "ID",
                "desc": "Message Structure",
                "opt": 1,
                "rep": 1,
                "len": 7,
                "table": 354
            }
        ]
    },
    "NA": {
        "desc": "Numeric Array",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Value1",
                "opt": 2,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Value2",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Value3",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Value4",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Value5",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Value6",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Value7",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Value8",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Value9",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "Value10",
                "opt": 1,
                "rep": 1,
                "len": 16
            }
        ]
    },
    "NDL": {
        "desc": "Name with Date and Location",
        "subfields": [
            {
                "datatype": "CNN",
                "desc": "Name Of Person",
                "opt": 1,
                "rep": 1,
                "len": 406
            },
            {
                "datatype": "TS",
                "desc": "Start Date/time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "End Date/time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "IS",
                "desc": "Point of Care",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 302
            },
            {
                "datatype": "IS",
                "desc": "Room",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 303
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 304
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 306
            },
            {
                "datatype": "IS",
                "desc": "Patient Location Type",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 305
            },
            {
                "datatype": "IS",
                "desc": "Building",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 307
            },
            {
                "datatype": "IS",
                "desc": "Floor",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 308
            }
        ]
    },
    "NM": {
        "desc": "Numeric",
        "subfields": []
    },
    "NR": {
        "desc": "Numeric Range",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Low Value",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "NM",
                "desc": "High Value",
                "opt": 1,
                "rep": 1,
                "len": 16
            }
        ]
    },
    "OCD": {
        "desc": "Occurrence Code and Date",
        "subfields": [
            {
                "datatype": "CNE",
                "desc": "Occurrence Code",
                "opt": 2,
                "rep": 1,
                "len": 705,
                "table": 350
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Date",
                "opt": 2,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "OSD": {
        "desc": "Order Sequence Definition",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Sequence/Results Flag",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 524
            },
            {
                "datatype": "ST",
                "desc": "Placer Order Number: Entity Identifier",
                "opt": 2,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "IS",
                "desc": "Placer Order Number: Namespace ID",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 363
            },
            {
                "datatype": "ST",
                "desc": "Filler Order Number: Entity Identifier",
                "opt": 2,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "IS",
                "desc": "Filler Order Number: Namespace ID",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 363
            },
            {
                "datatype": "ST",
                "desc": "Sequence Condition Value",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Maximum Number of Repeats",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "ST",
                "desc": "Placer Order Number: Universal ID",
                "opt": 2,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ID",
                "desc": "Placer Order Number: Universal ID Type",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 301
            },
            {
                "datatype": "ST",
                "desc": "Filler Order Number: Universal ID",
                "opt": 2,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ID",
                "desc": "Filler Order Number: Universal ID Type",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 301
            }
        ]
    },
    "OSP": {
        "desc": "Occurrence Span Code and Date",
        "subfields": [
            {
                "datatype": "CNE",
                "desc": "Occurrence Span Code",
                "opt": 2,
                "rep": 1,
                "len": 705,
                "table": 351
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Span Start Date",
                "opt": 3,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Span Stop Date",
                "opt": 3,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "PIP": {
        "desc": "Practitioner Institutional Privileges",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Privilege",
                "opt": 2,
                "rep": 1,
                "len": 483,
                "table": 525
            },
            {
                "datatype": "CE",
                "desc": "Privilege Class",
                "opt": 1,
                "rep": 1,
                "len": 483,
                "table": 526
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Activation Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "EI",
                "desc": "Facility",
                "opt": 1,
                "rep": 1,
                "len": 427
            }
        ]
    },
    "PL": {
        "desc": "Person Location",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Point of Care",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 302
            },
            {
                "datatype": "IS",
                "desc": "Room",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 303
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 304
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 306
            },
            {
                "datatype": "IS",
                "desc": "Person Location Type",
                "opt": 3,
                "rep": 1,
                "len": 20,
                "table": 305
            },
            {
                "datatype": "IS",
                "desc": "Building",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 307
            },
            {
                "datatype": "IS",
                "desc": "Floor",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 308
            },
            {
                "datatype": "ST",
                "desc": "Location Description",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "EI",
                "desc": "Comprehensive Location Identifier",
                "opt": 1,
                "rep": 1,
                "len": 427
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority for Location",
                "opt": 1,
                "rep": 1,
                "len": 227
            }
        ]
    },
    "PLN": {
        "desc": "Practitioner License or Other ID Number",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Type of ID Number",
                "opt": 2,
                "rep": 1,
                "len": 8,
                "table": 338
            },
            {
                "datatype": "ST",
                "desc": "State/other Qualifying Information",
                "opt": 1,
                "rep": 1,
                "len": 62
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "PPN": {
        "desc": "Performing Person Time Stamp",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "FN",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1,
                "len": 194
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Second and Further Given Names or Initials Thereof",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Degree",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 360
            },
            {
                "datatype": "IS",
                "desc": "Source Table",
                "opt": 3,
                "rep": 1,
                "len": 4,
                "table": 297
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "ID",
                "desc": "Name Type Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 200
            },
            {
                "datatype": "ST",
                "desc": "Identifier Check Digit",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme",
                "opt": 3,
                "rep": 1,
                "len": 3,
                "table": 61
            },
            {
                "datatype": "ID",
                "desc": "Identifier Type Code",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 203
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Action Performed",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Name Representation Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 465
            },
            {
                "datatype": "CE",
                "desc": "Name Context",
                "opt": 1,
                "rep": 1,
                "len": 483
            },
            {
                "datatype": "DR",
                "desc": "Name Validity Range",
                "opt": 1,
                "rep": 1,
                "len": 17
            },
            {
                "datatype": "ID",
                "desc": "Name Assembly Order",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 444
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
                "datatype": "ST",
                "desc": "Professional Suffix",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Jurisdiction",
                "opt": 1,
                "rep": 1,
                "len": 705
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Agency or Department",
                "opt": 1,
                "rep": 1,
                "len": 705
            }
        ]
    },
    "PRL": {
        "desc": "Parent Result Link",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Parent Observation Identifier",
                "opt": 2,
                "rep": 1,
                "len": 483
            },
            {
                "datatype": "ST",
                "desc": "Parent Observation Sub-identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TX",
                "desc": "Parent Observation Value Descriptor",
                "opt": 1,
                "rep": 1,
                "len": 250
            }
        ]
    },
    "PT": {
        "desc": "Processing Type",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Processing ID",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 103
            },
            {
                "datatype": "ID",
                "desc": "Processing Mode",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 207
            }
        ]
    },
    "PTA": {
        "desc": "Policy Type and Amount",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Policy Type",
                "opt": 2,
                "rep": 1,
                "len": 5,
                "table": 147
            },
            {
                "datatype": "IS",
                "desc": "Amount Class",
                "opt": 1,
                "rep": 1,
                "len": 9,
                "table": 193
            },
            {
                "datatype": "NM",
                "desc": "Money or Percentage Quantity",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "MOP",
                "desc": "Money or Percentage",
                "opt": 2,
                "rep": 1,
                "len": 23
            }
        ]
    },
    "QIP": {
        "desc": "Query Input Parameter List",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Segment Field Name",
                "opt": 2,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Values",
                "opt": 2,
                "rep": 1,
                "len": 199
            }
        ]
    },
    "QSC": {
        "desc": "Query Selection Criteria",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Segment Field Name",
                "opt": 2,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Relational Operator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 209
            },
            {
                "datatype": "ST",
                "desc": "Value",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Relational Conjunction",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 210
            }
        ]
    },
    "RCD": {
        "desc": "Row Column Definition",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Segment Field Name",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "HL7 Data Type",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 440
            },
            {
                "datatype": "NM",
                "desc": "Maximum Column Width",
                "opt": 1,
                "rep": 1,
                "len": 2
            }
        ]
    },
    "RFR": {
        "desc": "Reference Range",
        "subfields": [
            {
                "datatype": "NR",
                "desc": "Numeric Range",
                "opt": 2,
                "rep": 1,
                "len": 33
            },
            {
                "datatype": "IS",
                "desc": "Administrative Sex",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 1
            },
            {
                "datatype": "NR",
                "desc": "Age Range",
                "opt": 1,
                "rep": 1,
                "len": 33
            },
            {
                "datatype": "NR",
                "desc": "Gestational Age Range",
                "opt": 1,
                "rep": 1,
                "len": 33
            },
            {
                "datatype": "ST",
                "desc": "Species",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Race/subspecies",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TX",
                "desc": "Conditions",
                "opt": 1,
                "rep": 1,
                "len": 199
            }
        ]
    },
    "RI": {
        "desc": "Repeat Interval",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Repeat Pattern",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 335
            },
            {
                "datatype": "ST",
                "desc": "Explicit Time Interval",
                "opt": 1,
                "rep": 1,
                "len": 199
            }
        ]
    },
    "RMC": {
        "desc": "Room Coverage",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Room Type",
                "opt": 2,
                "rep": 1,
                "len": 20,
                "table": 145
            },
            {
                "datatype": "IS",
                "desc": "Amount Type",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 146
            },
            {
                "datatype": "NM",
                "desc": "Coverage Amount",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "MOP",
                "desc": "Money or Percentage",
                "opt": 2,
                "rep": 1,
                "len": 23
            }
        ]
    },
    "RP": {
        "desc": "Reference Pointer",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Pointer",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "HD",
                "desc": "Application ID",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "ID",
                "desc": "Type of Data",
                "opt": 1,
                "rep": 1,
                "len": 9,
                "table": 191
            },
            {
                "datatype": "ID",
                "desc": "Subtype",
                "opt": 1,
                "rep": 1,
                "len": 19,
                "table": 291
            }
        ]
    },
    "RPT": {
        "desc": "Repeat Pattern",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Repeat Pattern Code",
                "opt": 2,
                "rep": 1,
                "len": 705,
                "table": 335
            },
            {
                "datatype": "ID",
                "desc": "Calendar Alignment",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 527
            },
            {
                "datatype": "NM",
                "desc": "Phase Range Begin Value",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Phase Range End Value",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Period Quantity",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "IS",
                "desc": "Period Units",
                "opt": 3,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ID",
                "desc": "Institution Specified Time",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Event",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 528
            },
            {
                "datatype": "NM",
                "desc": "Event Offset Quantity",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "IS",
                "desc": "Event Offset Units",
                "opt": 3,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "GTS",
                "desc": "General Timing Specification",
                "opt": 1,
                "rep": 1,
                "len": 200
            }
        ]
    },
    "SAD": {
        "desc": "Street Address",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Street or Mailing Address",
                "opt": 1,
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "ST",
                "desc": "Street Name",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "Dwelling Number",
                "opt": 1,
                "rep": 1,
                "len": 12
            }
        ]
    },
    "SCV": {
        "desc": "Scheduling Class Value Pair",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Parameter Class",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Parameter Value",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "SI": {
        "desc": "Sequence ID",
        "subfields": []
    },
    "SN": {
        "desc": "Structured Numeric",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Comparator",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "NM",
                "desc": "Num1",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Separator/Suffix",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "NM",
                "desc": "Num2",
                "opt": 1,
                "rep": 1,
                "len": 15
            }
        ]
    },
    "SPD": {
        "desc": "Specialty Description",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Specialty Name",
                "opt": 2,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "Governing Board",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ID",
                "desc": "Eligible or Certified",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 337
            },
            {
                "datatype": "DT",
                "desc": "Date of Certification",
                "opt": 1,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "SPS": {
        "desc": "Specimen Source",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Specimen Source Name or Code",
                "opt": 1,
                "rep": 1,
                "len": 705
            },
            {
                "datatype": "CWE",
                "desc": "Additives",
                "opt": 1,
                "rep": 1,
                "len": 705,
                "table": 371
            },
            {
                "datatype": "TX",
                "desc": "Specimen Collection Method",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CWE",
                "desc": "Body Site",
                "opt": 1,
                "rep": 1,
                "len": 705,
                "table": 163
            },
            {
                "datatype": "CWE",
                "desc": "Site Modifier",
                "opt": 1,
                "rep": 1,
                "len": 705,
                "table": 495
            },
            {
                "datatype": "CWE",
                "desc": "Collection Method Modifier Code",
                "opt": 1,
                "rep": 1,
                "len": 705
            },
            {
                "datatype": "CWE",
                "desc": "Specimen Role",
                "opt": 1,
                "rep": 1,
                "len": 705,
                "table": 369
            }
        ]
    },
    "SRT": {
        "desc": "Sort Order",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Sort-by Field",
                "opt": 2,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Sequencing",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 397
            }
        ]
    },
    "ST": {
        "desc": "String Data",
        "subfields": []
    },
    "TM": {
        "desc": "Time",
        "subfields": []
    },
    "TQ": {
        "desc": "Timing Quantity",
        "subfields": [
            {
                "datatype": "CQ",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1,
                "len": 267
            },
            {
                "datatype": "RI",
                "desc": "Interval",
                "opt": 1,
                "rep": 1,
                "len": 206
            },
            {
                "datatype": "ST",
                "desc": "Duration",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "TS",
                "desc": "Start Date/Time",
                "opt": 1,
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
                "datatype": "ST",
                "desc": "Priority",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "ST",
                "desc": "Condition",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "TX",
                "desc": "Text",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Conjunction",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 472
            },
            {
                "datatype": "OSD",
                "desc": "Order Sequencing",
                "opt": 1,
                "rep": 1,
                "len": 110
            },
            {
                "datatype": "CE",
                "desc": "Occurrence Duration",
                "opt": 1,
                "rep": 1,
                "len": 483
            },
            {
                "datatype": "NM",
                "desc": "Total Occurrences",
                "opt": 1,
                "rep": 1,
                "len": 4
            }
        ]
    },
    "TS": {
        "desc": "Time Stamp",
        "subfields": [
            {
                "datatype": "DTM",
                "desc": "Time",
                "opt": 2,
                "rep": 1,
                "len": 24
            },
            {
                "datatype": "ID",
                "desc": "Degree of Precision",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 529
            }
        ]
    },
    "TX": {
        "desc": "Text Data",
        "subfields": []
    },
    "UVC": {
        "desc": "UB Value Code and Amount",
        "subfields": [
            {
                "datatype": "CNE",
                "desc": "Value Code",
                "opt": 2,
                "rep": 1,
                "len": 20,
                "table": 153
            },
            {
                "datatype": "MO",
                "desc": "Value Amount",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "VARIES": {
        "desc": "Variable Datatype",
        "subfields": []
    },
    "VH": {
        "desc": "Visiting Hours",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Start Day Range",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 267
            },
            {
                "datatype": "ID",
                "desc": "End Day Range",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 267
            },
            {
                "datatype": "TM",
                "desc": "Start Hour Range",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "TM",
                "desc": "End Hour Range",
                "opt": 1,
                "rep": 1,
                "len": 16
            }
        ]
    },
    "VID": {
        "desc": "Version Identifier",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Version ID",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 104
            },
            {
                "datatype": "CE",
                "desc": "Internationalization Code",
                "opt": 1,
                "rep": 1,
                "len": 483,
                "table": 399
            },
            {
                "datatype": "CE",
                "desc": "International Version ID",
                "opt": 1,
                "rep": 1,
                "len": 483
            }
        ]
    },
    "VR": {
        "desc": "Value Range",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "First Data Code Value",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "ST",
                "desc": "Last Data Code Value",
                "opt": 1,
                "rep": 1,
                "len": 6
            }
        ]
    },
    "WVI": {
        "desc": "Channel Identifier",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Channel Number",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Channel Name",
                "opt": 1,
                "rep": 1,
                "len": 17
            }
        ]
    },
    "WVS": {
        "desc": "Waveform Source",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Source One Name",
                "opt": 2,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Source Two Name",
                "opt": 1,
                "rep": 1,
                "len": 8
            }
        ]
    },
    "XAD": {
        "desc": "Extended Address",
        "subfields": [
            {
                "datatype": "SAD",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1,
                "len": 184
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1,
                "len": 120
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "State or Province",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "ST",
                "desc": "Zip or Postal Code",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Country",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 399
            },
            {
                "datatype": "ID",
                "desc": "Address Type",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 190
            },
            {
                "datatype": "ST",
                "desc": "Other Geographic Designation",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "IS",
                "desc": "County/Parish Code",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 289
            },
            {
                "datatype": "IS",
                "desc": "Census Tract",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 288
            },
            {
                "datatype": "ID",
                "desc": "Address Representation Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 465
            },
            {
                "datatype": "DR",
                "desc": "Address Validity Range",
                "opt": 1,
                "rep": 1,
                "len": 53
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
            }
        ]
    },
    "XCN": {
        "desc": "Extended Composite ID Number and Name for Persons",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "FN",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1,
                "len": 194
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Second and Further Given Names or Initials Thereof",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Degree",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 360
            },
            {
                "datatype": "IS",
                "desc": "Source Table",
                "opt": 3,
                "rep": 1,
                "len": 4,
                "table": 297
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1,
                "len": 227,
                "table": 363
            },
            {
                "datatype": "ID",
                "desc": "Name Type Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 200
            },
            {
                "datatype": "ST",
                "desc": "Identifier Check Digit",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme",
                "opt": 3,
                "rep": 1,
                "len": 3,
                "table": 61
            },
            {
                "datatype": "ID",
                "desc": "Identifier Type Code",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 203
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "ID",
                "desc": "Name Representation Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 465
            },
            {
                "datatype": "CE",
                "desc": "Name Context",
                "opt": 1,
                "rep": 1,
                "len": 483,
                "table": 448
            },
            {
                "datatype": "DR",
                "desc": "Name Validity Range",
                "opt": 1,
                "rep": 1,
                "len": 53
            },
            {
                "datatype": "ID",
                "desc": "Name Assembly Order",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 444
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
                "datatype": "ST",
                "desc": "Professional Suffix",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Jurisdiction",
                "opt": 1,
                "rep": 1,
                "len": 705
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Agency or Department",
                "opt": 1,
                "rep": 1,
                "len": 705
            }
        ]
    },
    "XON": {
        "desc": "Extended Composite Name and Identification Number for Organizations",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Organization Name",
                "opt": 1,
                "rep": 1,
                "len": 50
            },
            {
                "datatype": "IS",
                "desc": "Organization Name Type Code",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 204
            },
            {
                "datatype": "NM",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 61
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1,
                "len": 227,
                "table": 363
            },
            {
                "datatype": "ID",
                "desc": "Identifier Type Code",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 203
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility",
                "opt": 1,
                "rep": 1,
                "len": 227
            },
            {
                "datatype": "ID",
                "desc": "Name Representation Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 465
            },
            {
                "datatype": "ST",
                "desc": "Organization Identifier",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "XPN": {
        "desc": "Extended Person Name",
        "subfields": [
            {
                "datatype": "FN",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1,
                "len": 194
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Second and Further Given Names or Initials Thereof",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "IS",
                "desc": "Degree",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 360
            },
            {
                "datatype": "ID",
                "desc": "Name Type Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 200
            },
            {
                "datatype": "ID",
                "desc": "Name Representation Code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 465
            },
            {
                "datatype": "CE",
                "desc": "Name Context",
                "opt": 1,
                "rep": 1,
                "len": 483,
                "table": 448
            },
            {
                "datatype": "DR",
                "desc": "Name Validity Range",
                "opt": 1,
                "rep": 1,
                "len": 53
            },
            {
                "datatype": "ID",
                "desc": "Name Assembly Order",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 444
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
                "datatype": "ST",
                "desc": "Professional Suffix",
                "opt": 1,
                "rep": 1,
                "len": 199
            }
        ]
    },
    "XTN": {
        "desc": "Extended Telecommunication Number",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Telephone Number",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ID",
                "desc": "Telecommunication Use Code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 201
            },
            {
                "datatype": "ID",
                "desc": "Telecommunication Equipment Type",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 202
            },
            {
                "datatype": "ST",
                "desc": "Email Address",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "NM",
                "desc": "Country Code",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Area/City Code",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Local Number",
                "opt": 1,
                "rep": 1,
                "len": 9
            },
            {
                "datatype": "NM",
                "desc": "Extension",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "ST",
                "desc": "Any Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ST",
                "desc": "Extension Prefix",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Speed Dial Code",
                "opt": 1,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "ST",
                "desc": "Unformatted Telephone number",
                "opt": 3,
                "rep": 1,
                "len": 199
            }
        ]
    }
};

module.exports = fields;
