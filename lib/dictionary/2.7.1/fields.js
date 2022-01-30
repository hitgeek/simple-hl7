var fields = {
    "AD": {
        "desc": "Address",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State or Province",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Zip or Postal Code",
                "opt": 1,
                "rep": 1
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
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Source",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CCD": {
        "desc": "Charge Code and Date",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Invocation Event ",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 100
            },
            {
                "datatype": "DTM",
                "desc": "Date/time",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Channel Calibration Baseline",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Channel Calibration Time Skew",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "WVS",
                "desc": "Waveform Source",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CSU",
                "desc": "Channel Sensitivity and Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CCP",
                "desc": "Channel Calibration Parameters",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Channel Sampling Frequency",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NR",
                "desc": "Minimum and Maximum Data Values",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "FT",
                "desc": "Formatted Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Coding System",
                "opt": 3,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "FT",
                "desc": "Alternate Formatted Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Alternate Coding System",
                "opt": 3,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Coding System Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Coding System Version ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Original Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "FT",
                "desc": "Second Alternate Formatted Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Second Alternate Coding System",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Coding System Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Value Set Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Alternate Value Set Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Second Alternate Value Set Version ID",
                "opt": 3,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Coding System",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Alternate Coding System",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Coding System Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Coding System Version ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Original Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Second Alternate Coding System",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Coding System Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Value Set Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Alternate Value Set Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Second Alternate Value Set Version ID",
                "opt": 3,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second and Further Given Names or Initials Thereof",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix (e.g., JR or III)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix (e.g., DR)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Degree (e.g., MD)",
                "opt": 1,
                "rep": 1,
                "table": 360
            },
            {
                "datatype": "IS",
                "desc": "Source Table",
                "opt": 3,
                "rep": 1,
                "table": 297
            },
            {
                "datatype": "IS",
                "desc": "Assigning Authority   - Namespace ID",
                "opt": 3,
                "rep": 1,
                "table": 363
            },
            {
                "datatype": "ST",
                "desc": "Assigning Authority  - Universal ID",
                "opt": 3,
                "rep": 1
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
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "To Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Range Units",
                "opt": 3,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Units",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CSU": {
        "desc": "Channel Sensitivity and Units",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Channel Sensitivity",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Unit of Measure Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Unit of Measure Description",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Unit of Measure Coding System",
                "opt": 3,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Alternate Unit of Measure Coding System",
                "opt": 3,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Unit of Measure Coding System Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Coding System Version ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Original Text",
                "opt": 1,
                "rep": 1,
                "len": 199
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Unit of Measure Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Unit of Measure Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Second Alternate Unit of Measure Coding System",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Unit of Measure Coding System Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Unit of Measure Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Unit of Measure Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Unit of Measure Value Set Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Alternate Unit of Measure Value Set Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Unit of Measure Value Set Version ID",
                "opt": 3,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Coding System",
                "opt": 3,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Alternate Coding System",
                "opt": 3,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Coding System Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Coding System Version ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Original Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Second Alternate Coding System",
                "opt": 3,
                "rep": 1,
                "len": 12,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Coding System Version ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Value Set Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Alternate Value Set Version ID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Coding System OID",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second Alternate Value Set OID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Second Alternate Value Set Version ID",
                "opt": 3,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Identifier Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme ",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 61
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 3,
                "rep": 1,
                "table": 363
            },
            {
                "datatype": "ID",
                "desc": "Identifier Type Code",
                "opt": 2,
                "rep": 1,
                "len": 5,
                "table": 203
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Jurisdiction",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Agency or Department",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Security Check",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Security Check Scheme",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 904
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
                "rep": 1
            },
            {
                "datatype": "MO",
                "desc": "Monetary Amount",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number of Days",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "DIN": {
        "desc": "Date and Institution Name",
        "subfields": [
            {
                "datatype": "DTM",
                "desc": "Date",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Institution Name",
                "opt": 2,
                "rep": 1,
                "table": 531
            }
        ]
    },
    "DLD": {
        "desc": "Discharge to Location and Date",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Discharge to Location",
                "opt": 2,
                "rep": 1,
                "table": 113
            },
            {
                "datatype": "DTM",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "DLN": {
        "desc": "Driver's License Number",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "License Number",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Issuing State, Province, Country",
                "opt": 1,
                "rep": 1,
                "table": 333
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Numeric Threshold",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Change Computation",
                "opt": 1,
                "rep": 1,
                "table": 523
            },
            {
                "datatype": "NM",
                "desc": "Days Retained",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "DR": {
        "desc": "Date/Time Range",
        "subfields": [
            {
                "datatype": "DTM",
                "desc": "Range Start Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Range End Date/Time",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Day Type",
                "opt": 2,
                "rep": 1,
                "table": 149
            },
            {
                "datatype": "NM",
                "desc": "Number of Days",
                "opt": 2,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Type of Data",
                "opt": 2,
                "rep": 1,
                "len": 11,
                "table": 834
            },
            {
                "datatype": "ID",
                "desc": "Data Subtype",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Namespace ID",
                "opt": 1,
                "rep": 1,
                "table": 363
            },
            {
                "datatype": "ST",
                "desc": "Universal ID",
                "opt": 3,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Filler Assigned Identifier",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Field Position",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Field Repetition",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Component Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sub-Component Number",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "FC": {
        "desc": "Financial Class",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Financial Class Code",
                "opt": 2,
                "rep": 1,
                "table": 64
            },
            {
                "datatype": "DTM",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Own Surname Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Own Surname",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Surname Prefix from Partner/Spouse",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Surname from Partner/Spouse",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "FT": {
        "desc": "Formatted Text",
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
                "table": 300
            },
            {
                "datatype": "ST",
                "desc": "Universal ID",
                "opt": 3,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Certification Patient Type",
                "opt": 1,
                "rep": 1,
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
                "datatype": "DTM",
                "desc": "Date/Time Certification Required",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "ID": {
        "desc": "Coded Value for HL7-defined tables",
        "subfields": []
    },
    "IS": {
        "desc": "Coded Value for User-defined tables",
        "subfields": []
    },
    "JCC": {
        "desc": "Job Code/Class",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Job Code",
                "opt": 1,
                "rep": 1,
                "table": 327
            },
            {
                "datatype": "CWE",
                "desc": "Job Class",
                "opt": 1,
                "rep": 1,
                "table": 328
            },
            {
                "datatype": "TX",
                "desc": "Job Description Text",
                "opt": 1,
                "rep": 1
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
                "table": 302
            },
            {
                "datatype": "IS",
                "desc": "Room",
                "opt": 1,
                "rep": 1,
                "table": 303
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1,
                "table": 304
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1,
                "table": 306
            },
            {
                "datatype": "IS",
                "desc": "Patient Location Type",
                "opt": 1,
                "rep": 1,
                "table": 305
            },
            {
                "datatype": "IS",
                "desc": "Building",
                "opt": 1,
                "rep": 1,
                "table": 307
            },
            {
                "datatype": "IS",
                "desc": "Floor",
                "opt": 1,
                "rep": 1,
                "table": 308
            },
            {
                "datatype": "AD",
                "desc": "Address",
                "opt": 1,
                "rep": 1
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
                "table": 302
            },
            {
                "datatype": "IS",
                "desc": "Room",
                "opt": 1,
                "rep": 1,
                "table": 303
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1,
                "table": 304
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1,
                "table": 306
            },
            {
                "datatype": "IS",
                "desc": "Patient Location Type",
                "opt": 1,
                "rep": 1,
                "table": 305
            },
            {
                "datatype": "IS",
                "desc": "Building",
                "opt": 1,
                "rep": 1,
                "table": 307
            },
            {
                "datatype": "IS",
                "desc": "Floor",
                "opt": 1,
                "rep": 1,
                "table": 308
            },
            {
                "datatype": "ST",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State or Province",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Zip or Postal Code",
                "opt": 1,
                "rep": 1
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
                "desc": "Other Geographic Designation ",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "MA": {
        "desc": "Multiplexed Array",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 1",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 2",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 3",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 4",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 5",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 6",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 7",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 8",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 9",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample Y From Channel 10",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Denomination",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 913
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Charge Code",
                "opt": 1,
                "rep": 1
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
                "table": 148
            },
            {
                "datatype": "NM",
                "desc": "Money or Percentage Quantity",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Monetary  Denomination",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 913
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
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 3
            },
            {
                "datatype": "ID",
                "desc": "Message Structure",
                "opt": 2,
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
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value2",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value3",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value4",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value5",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value6",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value7",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value8",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value9",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value10",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "NDL": {
        "desc": "Name with Date and Location",
        "subfields": [
            {
                "datatype": "CNN",
                "desc": "Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Start Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "End Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Point of Care ",
                "opt": 1,
                "rep": 1,
                "table": 302
            },
            {
                "datatype": "IS",
                "desc": "Room ",
                "opt": 1,
                "rep": 1,
                "table": 303
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1,
                "table": 304
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Location Status ",
                "opt": 1,
                "rep": 1,
                "table": 306
            },
            {
                "datatype": "IS",
                "desc": "Patient Location Type",
                "opt": 1,
                "rep": 1,
                "table": 305
            },
            {
                "datatype": "IS",
                "desc": "Building ",
                "opt": 1,
                "rep": 1,
                "table": 307
            },
            {
                "datatype": "IS",
                "desc": "Floor",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "High Value",
                "opt": 1,
                "rep": 1
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
                "table": 350
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Date",
                "opt": 2,
                "rep": 1
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
                "table": 524
            },
            {
                "datatype": "ST",
                "desc": "Placer Order Number: Entity Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Placer Order Number: Namespace ID",
                "opt": 1,
                "rep": 1,
                "table": 363
            },
            {
                "datatype": "ST",
                "desc": "Filler Order Number: Entity Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Filler Order Number: Namespace ID",
                "opt": 1,
                "rep": 1,
                "table": 363
            },
            {
                "datatype": "ST",
                "desc": "Sequence Condition Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Maximum Number of Repeats",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Placer Order Number: Universal ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Placer Order Number: Universal ID Type",
                "opt": 1,
                "rep": 1,
                "table": 301
            },
            {
                "datatype": "ST",
                "desc": "Filler Order Number: Universal ID",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Filler Order Number: Universal ID Type",
                "opt": 1,
                "rep": 1,
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
                "table": 351
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Span Start Date",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Span Stop Date",
                "opt": 3,
                "rep": 1
            }
        ]
    },
    "PIP": {
        "desc": "Practitioner Institutional Privileges",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Privilege",
                "opt": 2,
                "rep": 1,
                "table": 525
            },
            {
                "datatype": "CWE",
                "desc": "Privilege Class",
                "opt": 1,
                "rep": 1,
                "table": 526
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Activation Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Facility",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PL": {
        "desc": "Person Location",
        "subfields": [
            {
                "datatype": "HD",
                "desc": "Point of Care",
                "opt": 3,
                "rep": 1,
                "table": 302
            },
            {
                "datatype": "HD",
                "desc": "Room",
                "opt": 1,
                "rep": 1,
                "table": 303
            },
            {
                "datatype": "HD",
                "desc": "Bed",
                "opt": 1,
                "rep": 1,
                "table": 304
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1,
                "table": 306
            },
            {
                "datatype": "IS",
                "desc": "Person Location Type",
                "opt": 1,
                "rep": 1,
                "table": 305
            },
            {
                "datatype": "HD",
                "desc": "Building",
                "opt": 1,
                "rep": 1,
                "table": 307
            },
            {
                "datatype": "HD",
                "desc": "Floor",
                "opt": 1,
                "rep": 1,
                "table": 308
            },
            {
                "datatype": "ST",
                "desc": "Location Description",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Comprehensive Location Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority for Location",
                "opt": 1,
                "rep": 1,
                "table": 363
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Type of ID Number",
                "opt": 2,
                "rep": 1,
                "table": 338
            },
            {
                "datatype": "ST",
                "desc": "State/other Qualifying Information",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PPN": {
        "desc": "Performing Person Time Stamp",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Person Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "FN",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second and Further Given Names or Initials Thereof",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix (e.g., JR or III)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix (e.g., DR)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree (e.g., MD)",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Source Table",
                "opt": 1,
                "rep": 1,
                "table": 297
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 3,
                "rep": 1,
                "table": 363
            },
            {
                "datatype": "ID",
                "desc": "Name Type Code",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 200
            },
            {
                "datatype": "ST",
                "desc": "Identifier Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme ",
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
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Date/Time Action Performed",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Name Context",
                "opt": 1,
                "rep": 1,
                "table": 448
            },
            {
                "datatype": "ST",
                "desc": "Name Validity Range",
                "opt": 4,
                "rep": 1
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
                "datatype": "ST",
                "desc": "Professional Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Jurisdiction",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Agency or Department",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Security Check ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Security Check Scheme",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 904
            }
        ]
    },
    "PRL": {
        "desc": "Parent Result Link",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Parent Observation Identifier",
                "opt": 2,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Parent Observation Sub-identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Parent Observation Value Descriptor",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PT": {
        "desc": "Processing Type",
        "subfields": [
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
                "datatype": "CWE",
                "desc": "Policy Type",
                "opt": 2,
                "rep": 1,
                "table": 147
            },
            {
                "datatype": "CWE",
                "desc": "Amount Class",
                "opt": 1,
                "rep": 1,
                "table": 193
            },
            {
                "datatype": "ST",
                "desc": "Money or Percentage Quantity",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "MOP",
                "desc": "Money or Percentage",
                "opt": 2,
                "rep": 1
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
                "rep": 1
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
                "rep": 1
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
                "rep": 1
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
                "len": 5
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
                "datatype": "NR",
                "desc": "Age Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NR",
                "desc": "Gestational Age Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Species",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Race/subspecies",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Conditions",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "RI": {
        "desc": "Repeat Interval",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Repeat Pattern",
                "opt": 1,
                "rep": 1,
                "table": 335
            },
            {
                "datatype": "ST",
                "desc": "Explicit Time Interval",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "RMC": {
        "desc": "Room Coverage",
        "subfields": [
            {
                "datatype": "CWE",
                "desc": "Room Type",
                "opt": 2,
                "rep": 1,
                "table": 145
            },
            {
                "datatype": "CWE",
                "desc": "Amount Type",
                "opt": 1,
                "rep": 1,
                "table": 146
            },
            {
                "datatype": "ST",
                "desc": "Coverage Amount",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "MOP",
                "desc": "Money or Percentage",
                "opt": 2,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Application ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Type of Data",
                "opt": 1,
                "rep": 1,
                "len": 11,
                "table": 834
            },
            {
                "datatype": "ID",
                "desc": "Subtype",
                "opt": 1,
                "rep": 1,
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
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Phase Range End Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Period Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Period Units",
                "opt": 3,
                "rep": 1
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
                "len": 3,
                "table": 528
            },
            {
                "datatype": "NM",
                "desc": "Event Offset Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Event Offset Units",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "GTS",
                "desc": "General Timing Specification",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Street Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Dwelling Number",
                "opt": 1,
                "rep": 1
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
                "table": 294
            },
            {
                "datatype": "ST",
                "desc": "Parameter Value",
                "opt": 1,
                "rep": 1
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
                "rep": 1
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
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Governing Board",
                "opt": 1,
                "rep": 1
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
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "RI",
                "desc": "Interval",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "Start Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DTM",
                "desc": "End Date/Time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Priority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Condition",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Conjunction",
                "opt": 1,
                "rep": 1,
                "table": 472
            },
            {
                "datatype": "OSD",
                "desc": "Order Sequencing",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Occurrence Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Total Occurrences",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Value Code",
                "opt": 2,
                "rep": 1,
                "table": 153
            },
            {
                "datatype": "MO",
                "desc": "Value Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Non-Monetary Value Amount / Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Non-Monetary Value Amount / Units ",
                "opt": 1,
                "rep": 1
            }
        ]
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
                "rep": 1
            },
            {
                "datatype": "TM",
                "desc": "End Hour Range",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "VID": {
        "desc": "Version Identifier",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Version ID",
                "opt": 2,
                "rep": 1,
                "len": 5,
                "table": 104
            },
            {
                "datatype": "CWE",
                "desc": "Internationalization Code",
                "opt": 1,
                "rep": 1,
                "table": 399
            },
            {
                "datatype": "CWE",
                "desc": "International Version ID",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Last Data Code Value",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Channel Name ",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Source Two Name",
                "opt": 1,
                "rep": 1
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State or Province",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Zip or Postal Code",
                "opt": 1,
                "rep": 1
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
                "opt": 3,
                "rep": 1,
                "len": 3,
                "table": 190
            },
            {
                "datatype": "ST",
                "desc": "Other Geographic Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "County/Parish Code",
                "opt": 1,
                "rep": 1,
                "table": 289
            },
            {
                "datatype": "CWE",
                "desc": "Census Tract",
                "opt": 1,
                "rep": 1,
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
                "datatype": "ST",
                "desc": "Address Validity Range",
                "opt": 4,
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
                "datatype": "CWE",
                "desc": "Expiration Reason",
                "opt": 1,
                "rep": 1,
                "table": 616
            },
            {
                "datatype": "ID",
                "desc": "Temporary Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Bad Address Indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 136
            },
            {
                "datatype": "ID",
                "desc": "Address Usage",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 617
            },
            {
                "datatype": "ST",
                "desc": "Addressee",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Comment",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Preference Order",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Protection Code",
                "opt": 1,
                "rep": 1,
                "table": 618
            },
            {
                "datatype": "EI",
                "desc": "Address Identifier",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "XCN": {
        "desc": "Extended Composite ID Number and Name for Persons",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Person Identifier",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "FN",
                "desc": "Family Name",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second and Further Given Names or Initials Thereof",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix (e.g., JR or III)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix (e.g., DR)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree (e.g., MD)",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Source Table",
                "opt": 1,
                "rep": 1,
                "table": 297
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 3,
                "rep": 1,
                "table": 363
            },
            {
                "datatype": "ID",
                "desc": "Name Type Code",
                "opt": 3,
                "rep": 1,
                "len": 5,
                "table": 200
            },
            {
                "datatype": "ST",
                "desc": "Identifier Check Digit",
                "opt": 1,
                "rep": 1,
                "len": 4
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
                "opt": 3,
                "rep": 1,
                "len": 5,
                "table": 203
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility",
                "opt": 1,
                "rep": 1
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
                "datatype": "CWE",
                "desc": "Name Context",
                "opt": 1,
                "rep": 1,
                "table": 448
            },
            {
                "datatype": "ST",
                "desc": "Name Validity Range",
                "opt": 4,
                "rep": 1
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
                "datatype": "ST",
                "desc": "Professional Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Jurisdiction",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Assigning Agency or Department",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Security Check ",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Security Check Scheme",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 904
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
                "rep": 1
            },
            {
                "datatype": "CWE",
                "desc": "Organization Name Type Code",
                "opt": 1,
                "rep": 1,
                "table": 204
            },
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Identifier Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme ",
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
                "rep": 1
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
                "rep": 1
            }
        ]
    },
    "XPN": {
        "desc": "Extended Person Name",
        "subfields": [
            {
                "datatype": "FN",
                "desc": "Family Name",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Second and Further Given Names or Initials Thereof",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix (e.g., JR or III)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix (e.g., DR)",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree (e.g., MD)",
                "opt": 4,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name Type Code",
                "opt": 1,
                "rep": 1,
                "len": 5,
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
                "datatype": "CWE",
                "desc": "Name Context",
                "opt": 1,
                "rep": 1,
                "table": 448
            },
            {
                "datatype": "ST",
                "desc": "Name Validity Range",
                "opt": 4,
                "rep": 1
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
                "datatype": "ST",
                "desc": "Professional Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Called By",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "XTN": {
        "desc": "Extended Telecommunication Number",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Telephone Number",
                "opt": 4,
                "rep": 1
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
                "opt": 2,
                "rep": 1,
                "len": 8,
                "table": 202
            },
            {
                "datatype": "ST",
                "desc": "Communication Address",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Country Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Area/City Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Local Number",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Extension",
                "opt": 3,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Any Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Extension Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Speed Dial Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Unformatted Telephone number ",
                "opt": 3,
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
            },
            {
                "datatype": "CWE",
                "desc": "Expiration Reason",
                "opt": 1,
                "rep": 1,
                "table": 868
            },
            {
                "datatype": "CWE",
                "desc": "Protection Code",
                "opt": 1,
                "rep": 1,
                "table": 618
            },
            {
                "datatype": "EI",
                "desc": "Shared Telecommunication Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Preference Order",
                "opt": 1,
                "rep": 1
            }
        ]
    }
};

module.exports = fields;
