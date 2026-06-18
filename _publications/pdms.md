---
title: "PDMS: A Preference Data Management System for RLHF"
permalink: /publications/pdms/
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
    <span class="paper-tag">VLDB 2026</span>
    <span class="paper-tag">Under Review</span>
    <span class="paper-tag">CCF-A</span>
    <span class="paper-tag">First Author</span>
    <span class="paper-tag">2026.03 - 2026.06</span>
  </div>
  <p><strong>Overview.</strong> PDMS treats RLHF preference data as a systems problem instead of a pure modeling problem. The paper focuses on three recurring decisions before reward-model training: what to label, what to distrust, and whether transfer is worth trying at all.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/detail/pdms-framework.png' | relative_url }}"><img src="{{ '/images/publications/detail/pdms-framework.png' | relative_url }}" alt="Framework of PDMS"></a>
  <figcaption class="paper-caption">PDMS consists of an SNR-based front gate and three operational modules: Selector, Auditor, and Transfer Predictor.</figcaption>
</figure>

## Motivation

Preference data are one of the most expensive components in RLHF, yet teams often manage them as flat files with little discipline. Random sampling wastes budgets, noisy preferences remain undetected, and cross-domain failures are usually discovered only after the reward-model experiment is already done.

## Method

PDMS introduces a zero-cost SNR diagnostic over frozen embeddings and then adds three lightweight modules. The Selector allocates annotation budget more efficiently, the Auditor finds ambiguous or unreliable preference pairs, and the Transfer Predictor estimates cross-domain degradation without training a target-domain reward model first.

## Results

<ul class="paper-keypoints">
  <li>The Selector can beat full-data reward modeling with far fewer labeled pairs on representative datasets.</li>
  <li>The Auditor brings measurable quality gains without extra annotation cost, with around +2.1% improvement in the reported setting.</li>
  <li>The Transfer Predictor correctly forecasts substantial cross-domain degradation before expensive transfer experiments are launched.</li>
  <li>The SNR analysis reveals that some common preference pools are close to chance and should be fixed before teams spend more annotation budget on them.</li>
</ul>

<div class="paper-gallery">
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/pdms-budget.png' | relative_url }}"><img src="{{ '/images/publications/detail/pdms-budget.png' | relative_url }}" alt="Budget curves of PDMS"></a>
    <figcaption>The budget curves make the core point visible: careful selection can dominate naive full-pool usage in low-budget regimes.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/pdms-transfer.png' | relative_url }}"><img src="{{ '/images/publications/detail/pdms-transfer.png' | relative_url }}" alt="Transfer matrix of PDMS"></a>
    <figcaption>The transfer matrix shows how close many off-domain reward-model transfers are to chance, which motivates a lightweight transfer cost model.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/pdms.png' | relative_url }}"><img src="{{ '/images/publications/pdms.png' | relative_url }}" alt="Main visual summary of PDMS"></a>
    <figcaption>The compact visual summary frames the whole problem from a data-management perspective rather than a reward-model-only perspective.</figcaption>
  </figure>
</div>

## Selected Tables

<div class="paper-table-wrap">
  <div class="paper-table-caption">Preference benchmark table from the paper.</div>
  <div class="paper-table-note">This is the paper's main benchmark table across 4 embedding backbones and 3 preference datasets. The repeated pattern is that LDA-1d beats CLIP-EOS in every reported case, while the SNR column immediately explains why HH is structurally low-quality.</div>
  <table class="paper-data-table paper-data-table--wide">
    <thead>
      <tr>
        <th>Model</th>
        <th>Dataset</th>
        <th>SNR</th>
        <th>CLIP-EOS Rand@500</th>
        <th>CLIP-EOS Full</th>
        <th>LDA-1d Rand@500</th>
        <th>LDA-1d Full</th>
        <th>&Delta;</th>
      </tr>
    </thead>
    <tbody>
      <tr class="paper-row--good"><td>b32</td><td>UF</td><td>1.63</td><td>0.607</td><td>0.600</td><td>0.660</td><td>0.660</td><td><span class="metric-up">+0.060</span></td></tr>
      <tr class="paper-row--good"><td>b32</td><td>PKU</td><td>1.54</td><td>0.546</td><td>0.546</td><td>0.580</td><td>0.580</td><td><span class="metric-up">+0.034</span></td></tr>
      <tr class="paper-row--bad"><td>b32</td><td>HH</td><td>0.12</td><td>0.106</td><td>0.106</td><td>0.127</td><td>0.127</td><td><span class="metric-up">+0.021</span></td></tr>
      <tr class="paper-row--good"><td>b16</td><td>UF</td><td>1.63</td><td>0.624</td><td>0.624</td><td>0.690</td><td>0.690</td><td><span class="metric-up">+0.066</span></td></tr>
      <tr class="paper-row--good"><td>b16</td><td>PKU</td><td>1.55</td><td>0.577</td><td>0.577</td><td>0.627</td><td>0.627</td><td><span class="metric-up">+0.050</span></td></tr>
      <tr class="paper-row--bad"><td>b16</td><td>HH</td><td>0.13</td><td>0.090</td><td>0.090</td><td>0.133</td><td>0.133</td><td><span class="metric-up">+0.043</span></td></tr>
      <tr class="paper-row--good"><td>l14</td><td>UF</td><td>1.55</td><td>0.641</td><td>0.641</td><td>0.760</td><td>0.760</td><td><span class="metric-up">+0.119</span></td></tr>
      <tr class="paper-row--good"><td>l14</td><td>PKU</td><td>1.43</td><td>0.530</td><td>0.530</td><td>0.680</td><td>0.680</td><td><span class="metric-up">+0.150</span></td></tr>
      <tr class="paper-row--bad"><td>l14</td><td>HH</td><td>0.12</td><td>0.106</td><td>0.106</td><td>0.140</td><td>0.140</td><td><span class="metric-up">+0.034</span></td></tr>
      <tr class="paper-row--good"><td>dfn</td><td>UF</td><td>1.75</td><td>0.609</td><td>0.609</td><td>0.704</td><td>0.704</td><td><span class="metric-up">+0.095</span></td></tr>
      <tr class="paper-row--good"><td>dfn</td><td>PKU</td><td>1.63</td><td>0.541</td><td>0.541</td><td>0.736</td><td>0.736</td><td><span class="metric-up">+0.195</span></td></tr>
      <tr class="paper-row--bad"><td>dfn</td><td>HH</td><td>0.14</td><td>0.082</td><td>0.082</td><td>0.126</td><td>0.126</td><td><span class="metric-up">+0.044</span></td></tr>
    </tbody>
  </table>
</div>

<div class="paper-table-wrap">
  <div class="paper-table-caption">Budget crossover table from the paper.</div>
  <div class="paper-table-note">This table captures a practical systems decision. LDA-1d is stronger in low-budget regimes, while CLIP-EOS becomes better once annotation budget is large enough; the crossover happens around B≈400.</div>
  <table class="paper-data-table paper-data-table--wide">
    <thead>
      <tr>
        <th>Method</th>
        <th>B=50</th>
        <th>B=100</th>
        <th>B=200</th>
        <th>B=350</th>
        <th>B=500</th>
        <th>B=1000</th>
        <th>B=1500</th>
        <th>B=2000</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>CLIP-EOS</td><td>0.585</td><td>0.609</td><td>0.606</td><td>0.617</td><td>0.637</td><td>0.662</td><td>0.696</td><td>0.697</td></tr>
      <tr class="paper-row--ours"><td>LDA-1d</td><td>0.630</td><td>0.632</td><td>0.630</td><td>0.630</td><td>0.630</td><td>0.630</td><td>0.630</td><td>0.630</td></tr>
      <tr class="paper-row--group"><td colspan="9">Best: LDA at B=50/100/200/350, CLIP at B=500/1000/1500/2000.</td></tr>
    </tbody>
  </table>
</div>

## Conclusion

<div class="paper-highlight-box">
  <p>PDMS argues that many RLHF failures begin before optimization starts. If preference data are managed with better diagnostics, selection, and transfer checks, teams can avoid wasting both labeling budget and reward-model training effort.</p>
</div>
