---
title: "DiCon: A Synergy-Aware Framework for Medication Recommendation via Signed Drug Interaction Modeling and Contextual Pre-training"
permalink: /publications/dicon/
author_profile: true
stylesheets:
  - /assets/css/publication-detail.css
share: false
related: false
comments: false
---

## Overview
{: #overview .paper-overview-heading}

<div class="paper-detail-intro">
  <div class="paper-tags">
    <span class="paper-tag">BIBM 2026</span>
    <span class="paper-tag">Accepted</span>
    <span class="paper-tag">Regular / Full Paper Oral</span>
    <span class="paper-tag">CCF-B</span>
    <span class="paper-tag">First Author</span>
    <span class="paper-tag">2025.03 - 2025.10</span>
  </div>
  <p><strong>Overview.</strong> DiCon treats medication recommendation as a synergy-aware data management problem over EHRs: instead of modeling drug–drug interactions only as adverse constraints, it jointly encodes synergistic and adverse relations and aligns diagnoses, procedures, and prescriptions under sparse visit histories.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/detail/dicon-framework.png' | relative_url }}"><img src="{{ '/images/publications/detail/dicon-framework.png' | relative_url }}" alt="Framework of DiCon"></a>
  <figcaption class="paper-caption">DiCon combines patient representation via cross-modal pre-training, dual-signed drug interaction modeling, and attention-based fusion for clinically safe and synergistic recommendations.</figcaption>
</figure>

## Motivation

Prior graph-based medication recommenders usually treat DDIs as negative-only constraints and leave positive synergistic co-prescription signals unused. Pre-training methods also often align only two clinical modalities, which underuses complementary diagnosis–procedure–medication dependencies in sparse EHR data.

## Method

DiCon builds a signed heterogeneous DDI graph that encodes both synergistic (\(A^+\)) and adverse (\(A^-\)) edges, and uses cross-modal contextual pre-training to align visit-level embeddings across diagnoses, procedures, and medications. An adaptive dual-constraint loss balances accuracy, safety, and beneficial synergy. The paper also introduces Positive DDI Rate (PDR) to measure coverage of clinically validated synergistic drug pairs.

## Results

<ul class="paper-keypoints">
  <li>On MIMIC-III and MIMIC-IV, DiCon outperforms strong medication-recommendation baselines on both accuracy-centric and safety–synergy-aware metrics.</li>
  <li>Dual-signed interaction modeling improves coverage of beneficial co-prescriptions rather than only suppressing adverse pairs.</li>
  <li>Cross-modal contextual pre-training helps under sparse-visit and new-patient settings.</li>
  <li>Accepted to IEEE BIBM as a Regular / Full Paper Oral.</li>
</ul>

<div class="paper-gallery">
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/dicon-signed-graph.png' | relative_url }}"><img src="{{ '/images/publications/detail/dicon-signed-graph.png' | relative_url }}" alt="Dual-signed DDI graph schema"></a>
    <figcaption>Negative-only DDI schemas omit synergistic edges; DiCon’s dual-signed graph keeps both efficacy and safety in the same representation space.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/dicon.png' | relative_url }}"><img src="{{ '/images/publications/dicon.png' | relative_url }}" alt="Cover figure of DiCon"></a>
    <figcaption>The visual summary highlights patient encoding, signed drug-interaction modeling, and recommendation fusion as one pipeline.</figcaption>
  </figure>
</div>
