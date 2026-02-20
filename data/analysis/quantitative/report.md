# ROI Form Study: Quantitative Analysis

**N = 181** organizations across 43 states

## 1. Sample Description

### facility_type
| Value | N | % |
|-------|---|---|
| community_hospital | 77 | 42.5% |
| teaching_hospital | 30 | 16.6% |
| critical_access_hospital | 29 | 16% |
| physician_practice | 25 | 13.8% |
| fqhc | 20 | 11% |

### system_affiliation
| Value | N | % |
|-------|---|---|
| independent | 81 | 44.8% |
| major_system | 65 | 35.9% |
| regional_system | 35 | 19.3% |

### ownership
| Value | N | % |
|-------|---|---|
| nonprofit | 119 | 65.7% |
| for_profit | 39 | 21.5% |
| government | 23 | 12.7% |

### census_region
| Value | N | % |
|-------|---|---|
| south | 64 | 35.4% |
| midwest | 41 | 22.7% |
| west | 40 | 22.1% |
| northeast | 36 | 19.9% |

## 2. Overall Score Distribution

### Grades
| Grade | N | % | Bar |
|-------|---|---|-----|
| A | 1 | 0.6% |  |
| B | 79 | 43.6% | ██████████████████████ |
| C | 94 | 51.9% | ██████████████████████████ |
| D | 7 | 3.9% | ██ |
| F | 0 | 0% |  |

### Dimension Scores
| Dimension | Mean | Median | SD | Min | Max |
|-----------|------|--------|----|-----|-----|
| findability | 3.85 | 4 | 0.85 | 1 | 5 |
| technical_accessibility | 3.11 | 3 | 0.82 | 1 | 5 |
| content_design | 3.53 | 4 | 0.54 | 2 | 5 |
| patient_centeredness | 3.11 | 3 | 0.69 | 2 | 5 |
| compliance | 3.49 | 4 | 0.53 | 2 | 4 |
| overall | 3.36 | 3.4 | 0.5 | 1.75 | 4.65 |

### Dimension Correlations (Spearman)
| | findabil | technica | content_ | patient_ | complian | overall |
|-|-|-|-|-|-|-|
| findabil | — | 0.218 | 0.435 | 0.235 | 0.28 | 0.515 |
| technica | 0.218 | — | 0.328 | 0.455 | 0.456 | 0.784 |
| content_ | 0.435 | 0.328 | — | 0.41 | 0.419 | 0.655 |
| patient_ | 0.235 | 0.455 | 0.41 | — | 0.446 | 0.721 |
| complian | 0.28 | 0.456 | 0.419 | 0.446 | — | 0.736 |
| overall | 0.515 | 0.784 | 0.655 | 0.721 | 0.736 | — |

### Binary Outcomes
| Metric | N | % |
|--------|---|---|
| has_fillable_fields | 48 | 26.5% |
| has_individual_access_pathway | 38 | 21% |
| online_submission_available | 149 | 82.3% |
| requires_physical_delivery | 17 | 9.4% |
| multilingual | 62 | 34.3% |
| has_instructions | 81 | 44.8% |
| plain_language | 88 | 48.6% |

### Primary Pathway Type
| Type | N | % |
|------|---|---|
| generic_hipaa_auth | 142 | 78.5% |
| dedicated_patient_form | 22 | 12.2% |
| online_portal | 16 | 8.8% |
| phone_or_in_person_only | 1 | 0.6% |

### Retrieval Difficulty
| Difficulty | N | % |
|------------|---|---|
| easy | 131 | 72.4% |
| moderate | 36 | 19.9% |
| hard | 14 | 7.7% |

## 3. Univariate Predictors

### Continuous Outcomes (Kruskal-Wallis)

#### By facility_type
| Outcome | H | df | p | η² | Significant |
|---------|---|----|----|----|----|
| findability | 6.72 | 4 | 0.1512 | 0.015 |  |
| technical_accessibility | 7.19 | 4 | 0.1261 | 0.018 |  |
| content_design | 11.42 | 4 | 0.0222 | 0.042 | ✅ |
| patient_centeredness | 11.03 | 4 | 0.0262 | 0.04 | ✅ |
| compliance | 5.8 | 4 | 0.2146 | 0.01 |  |
| overall | 17.86 | 4 | 0.0013 | 0.079 | ✅ |

**Group medians for significant results:**

- **content_design**: teaching_hospital: 4 (n=30), fqhc: 4 (n=20), physician_practice: 4 (n=25), community_hospital: 3 (n=77), critical_access_hospital: 3 (n=29)
- **patient_centeredness**: community_hospital: 3 (n=77), teaching_hospital: 3 (n=30), critical_access_hospital: 3 (n=29), fqhc: 3 (n=20), physician_practice: 3 (n=25)
- **overall**: teaching_hospital: 3.68 (n=30), community_hospital: 3.4 (n=77), fqhc: 3.4 (n=20), physician_practice: 3.25 (n=25), critical_access_hospital: 3.1 (n=29)

#### By system_affiliation
| Outcome | H | df | p | η² | Significant |
|---------|---|----|----|----|----|
| findability | 3.95 | 2 | 0.1388 | 0.011 |  |
| technical_accessibility | 10.83 | 2 | 0.0044 | 0.05 | ✅ |
| content_design | 3.62 | 2 | 0.1634 | 0.009 |  |
| patient_centeredness | 13.48 | 2 | 0.0012 | 0.065 | ✅ |
| compliance | 5.14 | 2 | 0.0766 | 0.018 |  |
| overall | 18.88 | 2 | 0.0001 | 0.095 | ✅ |

**Group medians for significant results:**

- **technical_accessibility**: major_system: 4 (n=65), regional_system: 3 (n=35), independent: 3 (n=81)
- **patient_centeredness**: major_system: 3 (n=65), regional_system: 3 (n=35), independent: 3 (n=81)
- **overall**: major_system: 3.65 (n=65), regional_system: 3.35 (n=35), independent: 3.3 (n=81)

#### By ownership
| Outcome | H | df | p | η² | Significant |
|---------|---|----|----|----|----|
| findability | 0.42 | 2 | 0.8099 | 0 |  |
| technical_accessibility | 4.47 | 2 | 0.1068 | 0.014 |  |
| content_design | 5.06 | 2 | 0.0799 | 0.017 |  |
| patient_centeredness | 2.23 | 2 | 0.3282 | 0.001 |  |
| compliance | 5.81 | 2 | 0.0548 | 0.021 |  |
| overall | 5.92 | 2 | 0.0517 | 0.022 |  |

#### By census_region
| Outcome | H | df | p | η² | Significant |
|---------|---|----|----|----|----|
| findability | 4.58 | 3 | 0.205 | 0.009 |  |
| technical_accessibility | 3.02 | 3 | 0.3879 | 0 |  |
| content_design | 1.79 | 3 | 0.6178 | 0 |  |
| patient_centeredness | 0.5 | 3 | 0.9182 | 0 |  |
| compliance | 7.42 | 3 | 0.0597 | 0.025 |  |
| overall | 2.78 | 3 | 0.4261 | 0 |  |

### Binary Outcomes (Chi-Squared)

| Axis | Outcome | χ² | df | p | Cramér's V | Significant |
|------|---------|----|----|---|------------|-------------|
| facility_type | has_fillable_fields | 7.53 | 4 | 0.1105 | 0.204 |  |
| facility_type | has_individual_access_pathway | 11.8 | 4 | 0.0189 | 0.255 | ✅ |
| facility_type | online_submission | 6.28 | 4 | 0.1794 | 0.186 |  |
| facility_type | uses_system_forms | 66.65 | 4 | 0 | 0.607 | ✅ |
| system_affiliation | has_fillable_fields | 14.49 | 2 | 0.0007 | 0.283 | ✅ |
| system_affiliation | has_individual_access_pathway | 22.73 | 2 | 0 | 0.354 | ✅ |
| system_affiliation | online_submission | 2.32 | 2 | 0.313 | 0.113 |  |
| system_affiliation | uses_system_forms | 103.23 | 2 | 0 | 0.755 | ✅ |
| ownership | has_fillable_fields | 2.46 | 2 | 0.2927 | 0.117 |  |
| ownership | has_individual_access_pathway | 2.04 | 2 | 0.3607 | 0.106 |  |
| ownership | online_submission | 12.63 | 2 | 0.0018 | 0.264 | ✅ |
| ownership | uses_system_forms | 8.7 | 2 | 0.0129 | 0.219 | ✅ |
| census_region | has_fillable_fields | 6.79 | 3 | 0.079 | 0.194 |  |
| census_region | has_individual_access_pathway | 1.08 | 3 | 0.7831 | 0.077 |  |
| census_region | online_submission | 1.31 | 3 | 0.7271 | 0.085 |  |
| census_region | uses_system_forms | 1.21 | 3 | 0.7505 | 0.082 |  |
