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
                "desc": "State Or Province",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Zip Or Postal Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Country",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Geographic Designation",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CE": {
        "desc": "Coded Element",
        "subfields": [
            {
                "datatype": "ID",
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
                "datatype": "ST",
                "desc": "Name Of Coding System",
                "opt": 1,
                "rep": 1
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
                "datatype": "ST",
                "desc": "Name Of Alternate Coding System",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CK": {
        "desc": "Composite ID With Check Digit",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Code Identifying The Check Digit Scheme Employed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CK_ACCOUNT_NO": {
        "desc": "Account Number",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Account Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Facility ID",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_ABS_RANGE": {
        "desc": "Absolute Range",
        "subfields": [
            {
                "datatype": "CM_RANGE",
                "desc": "Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Numeric Change",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Percent Per Change",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Days",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_AUI": {
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
    "CM_BATCH_TOTAL": {
        "desc": "CM For Batch Totals",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Batch Total 1",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Batch Total 2",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_CCD": {
        "desc": "Charge Time",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "When To Charge",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Date/time",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DDI": {
        "desc": "Daily Deductible",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Delay Days",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number Of Days",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DIN": {
        "desc": "Activation Date",
        "subfields": [
            {
                "datatype": "TS",
                "desc": "Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Institution Name",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DLD": {
        "desc": "Discharge Location",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Discharge Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DLT": {
        "desc": "Delta Check",
        "subfields": [
            {
                "datatype": "CM_RANGE",
                "desc": "Range",
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
                "datatype": "ST",
                "desc": "Change",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Length Of Time-days",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DTN": {
        "desc": "Day Type And Number",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Day Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number Of Days",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_EIP": {
        "desc": "Parent Order",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Parent s Placer Order Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Parent s Filler Order Number",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_ELD": {
        "desc": "Error",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Segment-ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sequence",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Field-Position",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Code Identifying Error",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_FILLER": {
        "desc": "Filler",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Unique Filler Id",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Filler Application ID",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_FINANCE": {
        "desc": "Finance",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Financial Class ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_GROUP_ID": {
        "desc": "Group ID",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Unique Group Id",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Placer Application Id",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_INTERNAL_LOCATION": {
        "desc": "Internal Location",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Nurse Unit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Room",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Bed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Facility ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Bed Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Etage",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Klinik",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Zentrum",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_JOB_CODE": {
        "desc": "Job Code",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Job Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Employee Classification",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_LA1": {
        "desc": "Location With Address Information",
        "subfields": [
            {
                "datatype": "CM_INTERNAL_LOCATION",
                "desc": "Dispense / Deliver To Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "AD",
                "desc": "Location",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_LICENSE_NO": {
        "desc": "License Number",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "License Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Issuing State,province,country",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_MOC": {
        "desc": "Charge To Practise",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Dollar Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Charge Code",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_MSG": {
        "desc": "Message Type",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Message Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Trigger Event",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_NDL": {
        "desc": "Observing Practitioner",
        "subfields": [
            {
                "datatype": "CN",
                "desc": "Interpreter / Technician",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Start Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "End Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_INTERNAL_LOCATION",
                "desc": "Location",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_OCD": {
        "desc": "Occurence",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Occurrence Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_OSP": {
        "desc": "Occurence Span",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Occurrence Span Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Span Start Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Span Stop Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PARENT_RESULT": {
        "desc": "Undefined CM Data Type",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Observation Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Sub-ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Result",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PAT_ID": {
        "desc": "Patient ID",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Facility ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Type",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PAT_ID_0192": {
        "desc": "Patient ID With Table 0192",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Check Digit Scheme",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Facility ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Type",
                "opt": 1,
                "rep": 1,
                "table": 192
            }
        ]
    },
    "CM_PCF": {
        "desc": "Pre-certification Required",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Pre-certification Patient Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Pre-certication Required",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Pre-certification Window",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PEN": {
        "desc": "Penalty",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Penalty ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Penalty Amount",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PIP": {
        "desc": "Privileges",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Privilege",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Privilege Class",
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
                "datatype": "DT",
                "desc": "Activation Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PLACER": {
        "desc": "Auftragsnummer Des Auftraggebers / Der Auftraggebenden Stelle",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Unique Placer Id",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Placer Application",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PLN": {
        "desc": "Practitioner ID Numbers",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Type Of ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State/other Qualifiying Info",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_POSITION": {
        "desc": "Position",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Saal",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Tisch",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Stuhl",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PRACTITIONER": {
        "desc": "Practitioner",
        "subfields": [
            {
                "datatype": "CN",
                "desc": "Procedure Practitioner  ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Procedure Practitioner Type",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PTA": {
        "desc": "Policy Type",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Policy Type",
                "opt": 1,
                "rep": 1,
                "table": 147
            },
            {
                "datatype": "ID",
                "desc": "Amount Class",
                "opt": 1,
                "rep": 1,
                "table": 193
            },
            {
                "datatype": "NM",
                "desc": "Amount",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_RANGE": {
        "desc": "Wertebereich",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Low Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "High Value",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_RFR": {
        "desc": "Reference Range",
        "subfields": [
            {
                "datatype": "CM_RANGE",
                "desc": "Reference Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Sex",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_RANGE",
                "desc": "Age Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_RANGE",
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
                "datatype": "ID",
                "desc": "Race / Subspecies",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Text Condition",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_RI": {
        "desc": "Interval",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Repeat Pattern",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Explicit Time Intevall",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_RMC": {
        "desc": "Room Coverage",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Room Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Amount Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Coverage Amount",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_SPD": {
        "desc": "Specialty",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Specialty Name",
                "opt": 1,
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
                "desc": "Eligible Or Certified",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Date Of Certification",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_SPS": {
        "desc": "Specimen Source",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Specimen Source Name Or Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Additives",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Freetext",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Body Site",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Site Modifier",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_UVC": {
        "desc": "Value Code And Amount",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Value Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value Amount",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_VR": {
        "desc": "Value Qualifier",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "First Data Code Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Last Data Code Calue",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CN": {
        "desc": "Composite ID Number And Name",
        "subfields": [
            {
                "datatype": "ID",
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
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Source Table Id",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "AD",
                "desc": "Adresse",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TN",
                "desc": "Telefon",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TN",
                "desc": "Faxnummer",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TN",
                "desc": "Online-Nummer",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "E-Mail",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CN_PERSON": {
        "desc": "Person",
        "subfields": [
            {
                "datatype": "ID",
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
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Source Table Id",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CQ_QUANTITY": {
        "desc": "Quantity",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Units",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "DT": {
        "desc": "Date",
        "subfields": []
    },
    "FT": {
        "desc": "Formatted Text Data",
        "subfields": []
    },
    "ID": {
        "desc": "Coded values for HL7 tables",
        "subfields": []
    },
    "IS": {
        "desc": "Coded value for user-defined tables",
        "subfields": []
    },
    "NM": {
        "desc": "Numeric",
        "subfields": []
    },
    "PN": {
        "desc": "Person Name",
        "subfields": [
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
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "SI": {
        "desc": "Sequence ID",
        "subfields": []
    },
    "ST": {
        "desc": "String Data",
        "subfields": []
    },
    "TN": {
        "desc": "Telephone Number",
        "subfields": []
    },
    "TQ": {
        "desc": "Timing Quantity",
        "subfields": [
            {
                "datatype": "CQ_QUANTITY",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_RI",
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
                "datatype": "TS",
                "desc": "Start Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "End Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
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
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Order Sequencing",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "TS": {
        "desc": "Time Stamp",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Time Of An Event",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree Of Precision",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "TX": {
        "desc": "Text Data",
        "subfields": []
    },
    "VARIES": {
        "desc": "Variable Datatype",
        "subfields": []
    }
};

module.exports = fields;
