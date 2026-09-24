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
  <p><strong>Overview.</strong> Medication recommendation from EHRs must do two hard things at once: integrate sparse, heterogeneous clinical codes (diagnoses, procedures, medications), and prescribe combinations that are not only safe but also therapeutically synergistic. Most prior systems treat drug–drug interactions as <em>negative-only</em> constraints and leave beneficial co-prescription signals unused; their pre-training also usually aligns only a pair of modalities. <strong>DiCon</strong> closes both gaps with a CLIP-inspired cross-modal pre-training stage and a dual-signed interaction graph, and introduces <strong>Positive DDI Rate (PDR)</strong> to evaluate synergy coverage rather than safety alone.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/detail/dicon-framework.png' | relative_url }}"><img src="{{ '/images/publications/detail/dicon-framework.png' | relative_url }}" alt="Framework of DiCon"></a>
  <figcaption class="paper-caption">Pipeline: (a) patient representation via CLIP-style InfoNCE pre-training + residual GRU; (b) dual-signed drug graph for synergy / adverse DDI; (c) multi-head attention fusion for recommendation.</figcaption>
</figure>

## Motivation

Graph-based recommenders such as GAMENet / SafeDrug / MoleRec mainly regularize <em>adverse</em> DDIs. Synergistic pairs that improve efficacy are missing from the graph schema, so models systematically under-cover clinically validated co-prescriptions. On the representation side, clinical pre-training (G-BERT, RAREMed) stays close to masked code modeling or pairwise modality alignment, and does not jointly pull diagnoses–procedures–medications from the same visit into one space—hurting sparse-visit and new-patient generalization.

## Method

<ul class="paper-keypoints">
  <li><strong>CLIP-style cross-modal pre-training (InfoNCE).</strong> For each medical code we build an <em>intrinsic</em> embedding and a <em>contextual</em> embedding aggregated from the other two modalities co-occurring in the same visit. Following CLIP, DiCon aligns the two views with a <strong>symmetric InfoNCE</strong> objective (L2-normalized features, temperature \(\tau\)), so diagnoses, procedures, and medications live in a shared space before recommendation fine-tuning.</li>
  <li><strong>Temporal patient encoding.</strong> After pre-training, visit-level modality embeddings are fed to residual GRUs to capture longitudinal history, then concatenated into a patient query.</li>
  <li><strong>Dual-signed drug interaction graph.</strong> A signed GCN propagates over both synergistic edges \(A^+\) and adverse edges \(A^-\), then gates the result with pretrained drug embeddings.</li>
  <li><strong>Adaptive dual-constraint training.</strong> Recommendation loss mixes BCE, multi-label ranking, and a DDI regularizer whose adaptive weight \(\alpha\) reacts to both adverse rate \(r^-\) and synergistic rate \(r^+\), instead of only punishing bad pairs.</li>
  <li><strong>PDR metric + synergy DDI resource.</strong> We propose Positive DDI Rate and release curated synergistic DDI pairs extracted from DrugBank for MIMIC-III / MIMIC-IV.</li>
</ul>

## Results

<ul class="paper-keypoints">
  <li>On <strong>MIMIC-III</strong> and <strong>MIMIC-IV</strong>, DiCon outperforms strong baselines (SafeDrug, MoleRec, VITA, RAREMed, …) on Jaccard / F1 / PRAUC while keeping competitive adverse DDI rates.</li>
  <li>PDR rises with dual-signed modeling, showing the model recovers beneficial co-prescriptions rather than only avoiding harmful ones.</li>
  <li>Ablations confirm that InfoNCE pre-training, signed graph modeling, and temporal encoding each contribute measurable gains.</li>
  <li>Accepted to <strong>IEEE BIBM</strong> as a <strong>Regular / Full Paper Oral</strong>.</li>
</ul>

<div class="paper-gallery">
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/dicon-signed-graph.png' | relative_url }}"><img src="{{ '/images/publications/detail/dicon-signed-graph.png' | relative_url }}" alt="Dual-signed DDI graph schema"></a>
    <figcaption>Negative-only DDI graphs drop synergistic edges; DiCon’s dual-signed schema keeps efficacy (\(A^+\)) and safety (\(A^-\)) in one representation space.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/dicon.png' | relative_url }}"><img src="{{ '/images/publications/dicon.png' | relative_url }}" alt="Cover figure of DiCon"></a>
    <figcaption>End-to-end view: CLIP/InfoNCE patient pre-training → signed drug graph → attention-based recommendation.</figcaption>
  </figure>
</div>
