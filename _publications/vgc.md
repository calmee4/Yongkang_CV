---
title: "Visual Grounding Chain-of-Thought: Structural Constraints Improve Multimodal Reasoning Accuracy"
permalink: /publications/vgc/
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
    <span class="paper-tag">NeurIPS 2026</span>
    <span class="paper-tag">Under Review</span>
    <span class="paper-tag">CCF-A</span>
    <span class="paper-tag">First Author</span>
    <span class="paper-tag">2026.02 - 2026.05</span>
  </div>
  <p><strong>Overview.</strong> VGC studies a recurring failure in multimodal reasoning: models often say they used visual evidence, but their internal computation still follows language priors. The paper names this failure the <em>compliance gap</em> and proposes a training-free way to reduce it.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/vgc.png' | relative_url }}"><img src="{{ '/images/publications/vgc.png' | relative_url }}" alt="Main figure of VGC"></a>
  <figcaption class="paper-caption">VGC enforces an autoregressive generation order of visual evidence, then reasoning, then answer, so that downstream reasoning has to condition on explicitly generated evidence.</figcaption>
</figure>

## Motivation

Prompting a model to “use visual evidence” is often not enough. The paper shows that standard grounded prompting can increase the appearance of grounded reasoning without changing what the model actually uses internally. That gap between claimed and actual grounding is the central target.

## Method

VGC is an inference-time method with no parameter update. It imposes a three-stage output format: visual evidence, reasoning, and answer. The key idea is structural rather than verbal: by forcing the model to emit visual evidence first, the rest of the reasoning chain becomes autoregressively conditioned on that stage.

## Results

<ul class="paper-keypoints">
  <li>Across 11 VLMs and 33 benchmark settings, VGC improves accuracy in every setting tested.</li>
  <li>On ChartQA, gains range from +5.3 to +47.3 points.</li>
  <li>The average gain is +9.0 on MathVista and +14.0 on MMMU.</li>
  <li>Mechanistically, image-token attention rises 2.3x, the compliance gap drops from 0.73 to 0.18, and probe accuracy on visual features rises from 8% to 77%.</li>
</ul>

<div class="paper-gallery">
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/vgc-attention.png' | relative_url }}"><img src="{{ '/images/publications/detail/vgc-attention.png' | relative_url }}" alt="Attention heatmap of VGC"></a>
    <figcaption>The attention heatmap shows a clear increase in image-token usage when the model is forced to ground visual evidence before reasoning.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/vgc-causal.png' | relative_url }}"><img src="{{ '/images/publications/detail/vgc-causal.png' | relative_url }}" alt="Causal intervention of VGC"></a>
    <figcaption>The intervention result shows that masking image tokens during the evidence stage causes the largest accuracy collapse, which supports the causal interpretation.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/vgc-compliance.png' | relative_url }}"><img src="{{ '/images/publications/detail/vgc-compliance.png' | relative_url }}" alt="Compliance gap reduction of VGC"></a>
    <figcaption>The cross-benchmark result indicates that compliance-gap reduction is not confined to one benchmark or one model family.</figcaption>
  </figure>
</div>

## Selected Tables

<div class="paper-table-wrap">
  <div class="paper-table-caption">Cross-benchmark result table from the paper.</div>
  <div class="paper-table-note">This is the main dense result table in the paper. It shows that VGC improves all 33 evaluated settings, with the strongest gains appearing on ChartQA and within the Qwen2.5/3 family.</div>
  <table class="paper-data-table paper-data-table--wide">
    <thead>
      <tr>
        <th rowspan="2">Model</th>
        <th rowspan="2">Size</th>
        <th colspan="3">ChartQA</th>
        <th colspan="3">MathVista</th>
        <th colspan="3">MMMU</th>
      </tr>
      <tr>
        <th>Base</th>
        <th>VGC</th>
        <th>&Delta;</th>
        <th>Base</th>
        <th>VGC</th>
        <th>&Delta;</th>
        <th>Base</th>
        <th>VGC</th>
        <th>&Delta;</th>
      </tr>
    </thead>
    <tbody>
      <tr class="paper-row--good"><td>Qwen2.5-VL 32B</td><td>32B</td><td>39.5</td><td>86.8</td><td><span class="metric-up">+47.3</span></td><td>45.2</td><td>57.6</td><td><span class="metric-up">+12.4</span></td><td>49.1</td><td>59.4</td><td><span class="metric-up">+10.3</span></td></tr>
      <tr class="paper-row--good"><td>Qwen2.5-VL 7B</td><td>7B</td><td>41.8</td><td>80.9</td><td><span class="metric-up">+39.1</span></td><td>47.3</td><td>52.8</td><td><span class="metric-up">+5.5</span></td><td>41.2</td><td>63.1</td><td><span class="metric-up">+21.9</span></td></tr>
      <tr class="paper-row--good"><td>Qwen3-VL 8B</td><td>8B</td><td>50.7</td><td>87.4</td><td><span class="metric-up">+36.7</span></td><td>50.9</td><td>59.1</td><td><span class="metric-up">+8.2</span></td><td>44.6</td><td>51.3</td><td><span class="metric-up">+6.7</span></td></tr>
      <tr class="paper-row--good"><td>Qwen3-VL 4B</td><td>4B</td><td>65.4</td><td>90.3</td><td><span class="metric-up">+24.9</span></td><td>47.5</td><td>59.6</td><td><span class="metric-up">+12.1</span></td><td>59.2</td><td>73.1</td><td><span class="metric-up">+13.9</span></td></tr>
      <tr class="paper-row--good"><td>Qwen2.5-VL 3B</td><td>3B</td><td>56.9</td><td>76.8</td><td><span class="metric-up">+19.9</span></td><td>35.1</td><td>41.4</td><td><span class="metric-up">+6.3</span></td><td>33.4</td><td>43.7</td><td><span class="metric-up">+10.3</span></td></tr>
      <tr><td>InternVL2.5 4B</td><td>4B</td><td>35.8</td><td>50.2</td><td><span class="metric-up">+14.4</span></td><td>31.6</td><td>39.1</td><td><span class="metric-up">+7.5</span></td><td>22.9</td><td>27.4</td><td><span class="metric-up">+4.5</span></td></tr>
      <tr><td>InternVL3 14B</td><td>14B</td><td>45.6</td><td>53.1</td><td><span class="metric-up">+7.5</span></td><td>48.7</td><td>52.4</td><td><span class="metric-up">+3.7</span></td><td>29.3</td><td>42.7</td><td><span class="metric-up">+13.4</span></td></tr>
      <tr class="paper-row--soft"><td>Qwen2-VL 7B</td><td>7B</td><td>69.4</td><td>77.5</td><td><span class="metric-up">+8.1</span></td><td>47.1</td><td>53.3</td><td><span class="metric-up">+6.2</span></td><td>39.2</td><td>53.6</td><td><span class="metric-up">+14.4</span></td></tr>
      <tr class="paper-row--soft"><td>Qwen2-VL 2B</td><td>2B</td><td>51.2</td><td>78.1</td><td><span class="metric-up">+26.9</span></td><td>43.4</td><td>63.1</td><td><span class="metric-up">+19.7</span></td><td>21.1</td><td>33.5</td><td><span class="metric-up">+12.4</span></td></tr>
      <tr><td>LLaVA v1.6 7B</td><td>7B</td><td>26.4</td><td>34.1</td><td><span class="metric-up">+7.7</span></td><td>17.3</td><td>31.6</td><td><span class="metric-up">+14.3</span></td><td>55.1</td><td>69.2</td><td><span class="metric-up">+14.1</span></td></tr>
      <tr><td>LLaVA 1.5 7B</td><td>7B</td><td>20.3</td><td>25.6</td><td><span class="metric-up">+5.3</span></td><td>18.8</td><td>21.4</td><td><span class="metric-up">+2.6</span></td><td>35.2</td><td>67.3</td><td><span class="metric-up">+32.1</span></td></tr>
    </tbody>
  </table>
</div>

<div class="paper-table-wrap">
  <div class="paper-table-caption">Ablation table from the paper.</div>
  <div class="paper-table-note">This table shows VGC is not just “longer CoT.” Removing the explicit grounding stage, swapping the order, or merging stages all causes a large drop from the full three-stage design.</div>
  <table class="paper-data-table paper-data-table--compact">
    <thead>
      <tr>
        <th>Variant</th>
        <th>Qwen2.5-VL-7B</th>
        <th>Qwen3-VL-8B</th>
      </tr>
    </thead>
    <tbody>
      <tr class="paper-row--ours"><td>VGC (full)</td><td><span class="metric-up">+40.5 [31.5, 49.4]</span></td><td><span class="metric-up">+38.1</span></td></tr>
      <tr><td>Length-matched CoT (no structure)</td><td>+12.5 [1.8, 23.2]</td><td>+4.2</td></tr>
      <tr><td>Structure-only (no grounding)</td><td>+19.0 [8.3, 29.2]</td><td>+14.3</td></tr>
      <tr><td>Order-swapped (R-&gt;E-&gt;A)</td><td>+20.2 [10.1, 30.4]</td><td>+14.3</td></tr>
      <tr><td>Two-stage (E+R-&gt;A)</td><td>+17.9 [7.7, 28.0]</td><td>+14.9</td></tr>
    </tbody>
  </table>
</div>

## Conclusion

<div class="paper-highlight-box">
  <p>VGC shows that stronger multimodal reasoning can come from changing the structure of generation rather than changing the model weights. The main contribution is not just higher accuracy, but a cleaner alignment between claimed reasoning and actual evidence usage.</p>
</div>
