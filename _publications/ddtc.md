---
title: "Don't Default to CLIP: A Cost-Based Optimizer for Embedding Selection"
permalink: /publications/ddtc/
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
  <p><strong>Overview.</strong> This paper starts from a very concrete systems observation shown in the first figure: a tiny low-storage CoCa configuration can beat the familiar 20MB CLIP ViT-B/32 default. From that cost paradox, the paper reframes embedding choice as a physical-design problem for vector databases and proposes the Pareto Catalog to select <em>(model, dimension, precision)</em> under budget constraints.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/detail/ddtc-motivation.png' | relative_url }}"><img src="{{ '/images/publications/detail/ddtc-motivation.png' | relative_url }}" alt="Cost paradox figure of Don't Default to CLIP"></a>
  <figcaption class="paper-caption">The paper's opening motivation figure. It makes the central claim visually: the default CLIP configuration is often not even close to optimal, and embedding selection should be treated like physical design rather than inherited as a fixed upstream choice.</figcaption>
</figure>

## Motivation

Modern vector systems spend enormous effort on ANN indexes, storage compression, and query execution, while often inheriting CLIP ViT-B/32 as a fixed default embedding. The actual figures in the paper show why that is a category error: the representation choice itself dominates much of the downstream quality-cost tradeoff, so index tuning on top of a poor embedding is fundamentally the wrong optimization order.

## Method

The method section is built around the Pareto Catalog pipeline. From a small probe set, the system first computes per-model geometric signatures, then calibrates those signatures into task-level quality estimates, and finally constructs an accuracy-vs-storage Pareto frontier that can answer deployment queries like “under this budget, which embedding configuration should I use?” The geometric analyses around PCA-basis orthogonality, alignment gap, migration, and whitening are there to explain why this optimizer is needed and what signals it should trust.

<div class="paper-gallery">
  <figure class="paper-figure-card paper-figure-card--wide">
    <a href="{{ '/images/publications/detail/ddtc-framework.png' | relative_url }}"><img src="{{ '/images/publications/detail/ddtc-framework.png' | relative_url }}" alt="Pareto Catalog framework of Don't Default to CLIP"></a>
    <figcaption>The actual framework figure from the paper. The Pareto Catalog does not require a full benchmark sweep: it uses a small probe set to build geometric signatures, maps them to per-task accuracy, and then returns the optimal configuration on the Pareto frontier.</figcaption>
  </figure>
</div>

## Results

<ul class="paper-keypoints">
  <li>The full study evaluates 12 models over 5 datasets and 7 data-management tasks, and reports <span class="metric-up">+7.5%</span> average improvement over the default with 10/10 wins in the main comparison.</li>
  <li>The default CLIP baseline is frequently dominated by smaller or better-targeted configurations rather than merely slightly suboptimal.</li>
  <li>The most convincing mechanism result is geometric: different embedding families occupy markedly different subspaces, and those differences directly affect cross-modal robustness.</li>
  <li>The PCA-overlap and alignment-gap analyses explain why native embedding quality matters upstream of ANN indexing and why naive space alignment is unreliable.</li>
  <li>The broader analysis also reports that a small universal post-hoc whitening correction can improve retrieval broadly, with around <span class="metric-up">+22%</span> gain over 36 model-dataset pairs in the full study.</li>
</ul>

<div class="paper-gallery">
  <figure class="paper-figure-card paper-figure-card--wide">
    <a href="{{ '/images/publications/detail/ddtc-pca.png' | relative_url }}"><img src="{{ '/images/publications/detail/ddtc-pca.png' | relative_url }}" alt="PCA basis orthogonality of Don't Default to CLIP"></a>
    <figcaption>The PCA-overlap heatmap explains why naive alignment is unreliable: different embedding families occupy nearly orthogonal principal subspaces, so “just warp everything into one space” is not a robust systems strategy.</figcaption>
  </figure>
  <figure class="paper-figure-card paper-figure-card--wide">
    <a href="{{ '/images/publications/detail/ddtc-alignment.png' | relative_url }}"><img src="{{ '/images/publications/detail/ddtc-alignment.png' | relative_url }}" alt="Alignment-gap analysis of Don't Default to CLIP"></a>
    <figcaption>The alignment figure connects geometry back to behavior: models with better native cross-modal separation suffer less degradation under warping, which is why embedding quality matters upstream of ANN indexing.</figcaption>
  </figure>
</div>

## Selected Tables

<div class="paper-table-wrap">
  <div class="paper-table-caption">Comprehensive benchmark table from the paper.</div>
  <div class="paper-table-note">The full paper studies a wider 5-dataset, 7-task space. This benchmark table is the main dense comparison slice shown in the manuscript, covering 12 multimodal embedding models across COCO, DataComp subset, and Flickr30k.</div>
  <table class="paper-data-table">
    <thead>
      <tr>
        <th>Model</th>
        <th>Dataset</th>
        <th>EM R@1</th>
        <th>T→I R@1</th>
        <th>T→I R@10</th>
        <th>I→T R@1</th>
        <th>Anomaly AUC</th>
      </tr>
    </thead>
    <tbody>
      <tr class="paper-row--coco"><td>CLIP ViT-B/16</td><td>COCO</td><td>0.7092</td><td>0.6394</td><td>0.9090</td><td>0.7092</td><td>0.9999</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.3977</td><td>0.3977</td><td>0.5158</td><td>0.4093</td><td>0.9383</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.8214</td><td>0.7930</td><td>0.9766</td><td>0.8214</td><td>0.9964</td></tr>

      <tr class="paper-row--coco"><td>CLIP ViT-B/32</td><td>COCO</td><td>0.6838</td><td>0.6074</td><td>0.8902</td><td>0.6838</td><td>0.9999</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.3949</td><td>0.3949</td><td>0.5154</td><td>0.3933</td><td>0.9370</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.7882</td><td>0.7462</td><td>0.9640</td><td>0.7882</td><td>0.9947</td></tr>

      <tr class="paper-row--coco"><td>CLIP ViT-L/14</td><td>COCO</td><td>0.7394</td><td>0.6728</td><td>0.9148</td><td>0.7394</td><td>1.0000</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.4710</td><td>0.4710</td><td>0.6171</td><td>0.4794</td><td>0.9571</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.8512</td><td>0.8148</td><td>0.9828</td><td>0.8512</td><td>0.9949</td></tr>

      <tr class="paper-row--coco"><td>CLIP ViT-L/14@336</td><td>COCO</td><td>0.3988</td><td>0.3990</td><td>0.7468</td><td>0.3650</td><td>0.9948</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.3248</td><td>0.3252</td><td>0.4670</td><td>0.3112</td><td>0.9152</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.3758</td><td>0.3758</td><td>0.7158</td><td>0.3734</td><td>0.9898</td></tr>

      <tr class="paper-row--coco"><td>CoCa ViT-L/14</td><td>COCO</td><td>0.8092</td><td>0.7994</td><td>0.9644</td><td>0.8092</td><td>1.0000</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.3761</td><td>0.3761</td><td>0.4866</td><td>0.4057</td><td>0.9298</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.8812</td><td>0.8886</td><td>0.9918</td><td>0.8812</td><td>0.9956</td></tr>

      <tr class="paper-row--coco"><td>DFN ViT-H/14</td><td>COCO</td><td>0.7780</td><td>0.7250</td><td>0.9416</td><td>0.7780</td><td>0.9999</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.4529</td><td>0.4529</td><td>0.5823</td><td>0.4854</td><td>0.9468</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.8772</td><td>0.8856</td><td>0.9928</td><td>0.8772</td><td>0.9952</td></tr>

      <tr class="paper-row--coco"><td>EVA-CLIP L/14</td><td>COCO</td><td>0.7622</td><td>0.7152</td><td>0.9270</td><td>0.7622</td><td>0.9999</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.4353</td><td>0.4353</td><td>0.5879</td><td>0.4141</td><td>0.9552</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.8798</td><td>0.8682</td><td>0.9880</td><td>0.8798</td><td>0.9943</td></tr>

      <tr class="paper-row--coco"><td>Jina-CLIP</td><td>COCO</td><td>0.6614</td><td>0.6000</td><td>0.9006</td><td>0.6614</td><td>0.9996</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.2988</td><td>0.2988</td><td>0.4425</td><td>0.3128</td><td>0.8941</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.7550</td><td>0.7232</td><td>0.9474</td><td>0.7550</td><td>0.9935</td></tr>

      <tr class="paper-row--coco"><td>MetaCLIP B/32</td><td>COCO</td><td>0.5464</td><td>0.4748</td><td>0.8260</td><td>0.5464</td><td>0.9991</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.3044</td><td>0.3044</td><td>0.4662</td><td>0.3048</td><td>0.9222</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.6334</td><td>0.5952</td><td>0.9118</td><td>0.6334</td><td>0.9908</td></tr>

      <tr class="paper-row--coco"><td>OpenCLIP ViT-L</td><td>COCO</td><td>0.7510</td><td>0.6916</td><td>0.9232</td><td>0.7510</td><td>1.0000</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.4177</td><td>0.4177</td><td>0.5427</td><td>0.4445</td><td>0.9477</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.8648</td><td>0.8378</td><td>0.9846</td><td>0.8648</td><td>0.9968</td></tr>

      <tr class="paper-row--coco"><td>SigLIP ViT-B</td><td>COCO</td><td>0.7100</td><td>0.6734</td><td>0.9232</td><td>0.7100</td><td>0.9998</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.4213</td><td>0.4213</td><td>0.5623</td><td>0.4269</td><td>0.9279</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.8108</td><td>0.8024</td><td>0.9758</td><td>0.8108</td><td>0.9951</td></tr>

      <tr class="paper-row--coco"><td>SigLIP ViT-L</td><td>COCO</td><td>0.7646</td><td>0.7268</td><td>0.9410</td><td>0.7646</td><td>0.9999</td></tr>
      <tr class="paper-row--datacomp"><td></td><td>DataComp subset</td><td>0.4678</td><td>0.4678</td><td>0.6003</td><td>0.4838</td><td>0.9404</td></tr>
      <tr class="paper-row--flickr"><td></td><td>Flickr30k</td><td>0.8724</td><td>0.8670</td><td>0.9874</td><td>0.8724</td><td>0.9951</td></tr>
    </tbody>
  </table>
</div>

<div class="paper-table-wrap">
  <div class="paper-table-caption">Spectral engineering table from the paper.</div>
  <div class="paper-table-note">This is the whitening result the paper highlights in its analysis section. Every reported pair improves under partial whitening, which supports the claim that representation geometry itself is a tunable systems lever rather than an immutable model artifact.</div>
  <table class="paper-data-table paper-data-table--compact">
    <thead>
      <tr>
        <th>Model</th>
        <th>Dataset</th>
        <th>Original R@1</th>
        <th>Whitened R@1</th>
        <th>Gain</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>CLIP B/32</td><td>COCO</td><td>0.614</td><td>0.790</td><td><span class="metric-up">+28.7%</span></td></tr>
      <tr><td>CLIP B/32</td><td>Flickr30k</td><td>0.735</td><td>0.880</td><td><span class="metric-up">+19.7%</span></td></tr>
      <tr><td>CLIP L/14</td><td>COCO</td><td>0.746</td><td>0.802</td><td><span class="metric-up">+7.5%</span></td></tr>
      <tr><td>CLIP L/14</td><td>Flickr30k</td><td>0.805</td><td>0.909</td><td><span class="metric-up">+12.9%</span></td></tr>
      <tr><td>CoCa</td><td>COCO</td><td>0.699</td><td>0.911</td><td><span class="metric-up">+30.3%</span></td></tr>
      <tr><td>CoCa</td><td>Flickr30k</td><td>0.849</td><td>0.950</td><td><span class="metric-up">+11.9%</span></td></tr>
      <tr><td>DFN</td><td>COCO</td><td>0.760</td><td>0.870</td><td><span class="metric-up">+14.5%</span></td></tr>
      <tr><td>DFN</td><td>Flickr30k</td><td>0.865</td><td>0.950</td><td><span class="metric-up">+9.8%</span></td></tr>
      <tr><td>SigLIP B</td><td>COCO</td><td>0.515</td><td>0.810</td><td><span class="metric-up">+57.3%</span></td></tr>
      <tr><td>SigLIP B</td><td>Flickr30k</td><td>0.711</td><td>0.910</td><td><span class="metric-up">+28.0%</span></td></tr>
      <tr><td>SigLIP L</td><td>COCO</td><td>0.746</td><td>0.851</td><td><span class="metric-up">+14.1%</span></td></tr>
      <tr><td>SigLIP L</td><td>Flickr30k</td><td>0.849</td><td>0.946</td><td><span class="metric-up">+11.4%</span></td></tr>
    </tbody>
  </table>
</div>

## Conclusion

<div class="paper-highlight-box">
  <p>Don't Default to CLIP is strongest when read from its figures rather than only from the title: it starts with a cost paradox, formalizes the problem as physical design, then uses migration, alignment, and whitening analyses to show why embedding spaces behave so differently in practice. The core contribution is to move representation choice into the optimizer loop instead of treating it as a fixed precondition.</p>
</div>
