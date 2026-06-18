---
title: "Learning with Challenges: Adaptive Difficulty-Aware Data Generation for Mobile GUI Agent Training"
permalink: /publications/mobilegen/
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
    <span class="paper-tag">Co-first, Third Author</span>
    <span class="paper-tag">2025.12 - 2026.03</span>
  </div>
  <p><strong>Overview.</strong> MobileGen studies how to generate training data for mobile GUI agents in a way that matches the model’s current capability frontier. Instead of synthesizing arbitrary trajectories, it tries to generate the “right level” of difficulty.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/detail/mobilegen-pipeline.png' | relative_url }}"><img src="{{ '/images/publications/detail/mobilegen-pipeline.png' | relative_url }}" alt="Pipeline of MobileGen"></a>
  <figcaption class="paper-caption">The detailed pipeline profiles agent capability, constructs challenge-point-guided difficulty distributions, and then synthesizes trajectories with a controllable multi-agent generator.</figcaption>
</figure>

## Motivation

Existing mobile GUI data-generation pipelines often scale up trajectory count without controlling trajectory difficulty. That creates a mismatch: easy tasks stop being useful, while overly hard tasks add noise rather than improving the agent. The paper is built around this challenge-point view of agent training.

## Method

MobileGen decomposes trajectory difficulty into structural and semantic dimensions. It first profiles the current agent on a curated prior dataset, then builds adaptive sampling distributions around the model’s challenge point, and finally uses a multi-agent controllable generator to synthesize trajectories whose difficulty stays aligned with the targeted capability boundary.

## Results

<ul class="paper-keypoints">
  <li>The paper reports roughly 1.57x average improvement over zero-shot baselines across representative GUI benchmarks.</li>
  <li>It outperforms prior data-generation baselines on AndroidWorld, AndroidControl-Curated, and GUIOdyssey.</li>
  <li>The challenge-point study shows that an intermediate difficulty setting works best; both trivial and overly difficult settings underperform.</li>
  <li>The gains come from capability-aligned data generation rather than simply generating more trajectories.</li>
</ul>

<div class="paper-gallery">
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/mobilegen-ablation.png' | relative_url }}"><img src="{{ '/images/publications/detail/mobilegen-ablation.png' | relative_url }}" alt="Ablation of MobileGen"></a>
    <figcaption>The ablation confirms that capability profiling, distribution control, and generation-time regulation all contribute to the final gain.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/mobilegen-point.png' | relative_url }}"><img src="{{ '/images/publications/detail/mobilegen-point.png' | relative_url }}" alt="Challenge point study of MobileGen"></a>
    <figcaption>The challenge-point analysis shows that the best training effect appears near a moderate difficulty setting rather than at either extreme.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/mobilegen.png' | relative_url }}"><img src="{{ '/images/publications/mobilegen.png' | relative_url }}" alt="Main visual summary of MobileGen"></a>
    <figcaption>The main figure emphasizes the high-level idea: data generation should track the evolving capability frontier of the GUI agent.</figcaption>
  </figure>
</div>

## Selected Tables

<div class="paper-table-wrap">
  <div class="paper-table-caption">AndroidWorld + AndroidControl-Curated table from the paper.</div>
  <div class="paper-table-note">This table is the clearest summary of MobileGen's training effect. It compares zero-shot performance, competing synthesis methods, and the final MobileGen results across AndroidWorld plus the hard/easy splits of AndroidControl-Curated.</div>
  <table class="paper-data-table paper-data-table--wide">
    <thead>
      <tr>
        <th rowspan="2">Model</th>
        <th rowspan="2">AndroidWorld SR (%)</th>
        <th colspan="3">AndroidControl-Curated-Hard</th>
        <th colspan="3">AndroidControl-Curated-Easy</th>
      </tr>
      <tr>
        <th>Type (%)</th>
        <th>Grounding (%)</th>
        <th>SR (%)</th>
        <th>Type (%)</th>
        <th>Grounding (%)</th>
        <th>SR (%)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>GPT-5</td><td>46.6</td><td>66.2</td><td>14.5</td><td>16.6</td><td>79.0</td><td>16.1</td><td>29.6</td></tr>
      <tr><td>GUI-Owl-7B</td><td>54.3</td><td>62.2</td><td>64.5</td><td>41.6</td><td>71.0</td><td>83.9</td><td>61.8</td></tr>
      <tr><td>UI-TARS-1.5-7B</td><td>39.7</td><td>62.6</td><td>37.6</td><td>28.2</td><td>70.6</td><td>64.9</td><td>51.6</td></tr>

      <tr class="paper-row--group"><td colspan="8">Zero-shot</td></tr>
      <tr><td>Qwen3-VL-4B-Inst.</td><td>25.0</td><td>70.8</td><td>26.4</td><td>25.6</td><td>81.4</td><td>49.1</td><td>37.8</td></tr>
      <tr><td>Qwen3-VL-8B-Inst.</td><td>31.0</td><td>71.2</td><td>27.9</td><td>24.0</td><td>78.6</td><td>51.9</td><td>34.2</td></tr>
      <tr><td>InternVL3-14B</td><td>29.3</td><td>69.4</td><td>32.7</td><td>27.6</td><td>78.0</td><td>47.5</td><td>33.6</td></tr>

      <tr class="paper-row--group"><td colspan="8">OS-Genesis</td></tr>
      <tr><td>Qwen3-VL-4B-Inst.</td><td>31.9</td><td>72.8</td><td>29.7</td><td>27.8</td><td>83.6</td><td>68.4</td><td>54.4</td></tr>
      <tr><td>Qwen3-VL-8B-Inst.</td><td>37.9</td><td>75.2</td><td>31.2</td><td>29.6</td><td>85.4</td><td>69.6</td><td>56.8</td></tr>
      <tr><td>InternVL3-14B</td><td>35.3</td><td>71.6</td><td>37.9</td><td>31.2</td><td>81.8</td><td>69.9</td><td>55.0</td></tr>

      <tr class="paper-row--group"><td colspan="8">GUI-ReWalk</td></tr>
      <tr><td>Qwen3-VL-4B-Inst.</td><td>33.6</td><td>71.8</td><td>28.8</td><td>29.2</td><td>82.8</td><td>67.1</td><td>53.2</td></tr>
      <tr><td>Qwen3-VL-8B-Inst.</td><td>41.4</td><td>73.0</td><td>33.3</td><td>31.6</td><td>84.2</td><td>68.7</td><td>55.8</td></tr>
      <tr><td>InternVL3-14B</td><td>31.9</td><td>73.8</td><td>36.4</td><td>32.8</td><td>80.6</td><td>66.5</td><td>53.6</td></tr>

      <tr class="paper-row--group"><td colspan="8">Ours</td></tr>
      <tr class="paper-row--ours"><td>Qwen3-VL-4B-Inst.</td><td>40.5</td><td>77.6</td><td>37.9</td><td>35.6</td><td>86.8</td><td>70.9</td><td>58.6</td></tr>
      <tr class="paper-row--ours"><td>Qwen3-VL-8B-Inst.</td><td>45.7</td><td>80.8</td><td>45.5</td><td>38.4</td><td>88.6</td><td>72.2</td><td>61.2</td></tr>
      <tr class="paper-row--ours"><td>InternVL3-14B</td><td>42.2</td><td>78.6</td><td>46.7</td><td>36.6</td><td>86.8</td><td>68.4</td><td>58.8</td></tr>
    </tbody>
  </table>
</div>

<div class="paper-table-wrap">
  <div class="paper-table-caption">GUI-Odyssey table from the paper.</div>
  <div class="paper-table-note">GUI-Odyssey is the strongest OOD transfer test in the paper because it involves unseen device types, screen sizes, and long-horizon cross-app tasks. MobileGen still shows the most consistent gains across all three trained backbones.</div>
  <table class="paper-data-table paper-data-table--xwide">
    <thead>
      <tr>
        <th rowspan="2">Model</th>
        <th colspan="2">Tool</th>
        <th colspan="2">Information</th>
        <th colspan="2">Shopping</th>
        <th colspan="2">Media</th>
        <th colspan="2">Social</th>
        <th colspan="2">Multi-Apps</th>
        <th colspan="2">Overall</th>
      </tr>
      <tr>
        <th>HL</th><th>LL</th>
        <th>HL</th><th>LL</th>
        <th>HL</th><th>LL</th>
        <th>HL</th><th>LL</th>
        <th>HL</th><th>LL</th>
        <th>HL</th><th>LL</th>
        <th>HL</th><th>LL</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>GPT-5</td><td>38.6</td><td>75.5</td><td>27.7</td><td>65.4</td><td>23.9</td><td>61.0</td><td>26.9</td><td>71.4</td><td>36.6</td><td>74.8</td><td>24.4</td><td>65.5</td><td>29.2</td><td>68.4</td></tr>
      <tr><td>GUI-Owl-7B</td><td>71.3</td><td>73.0</td><td>58.1</td><td>62.0</td><td>52.6</td><td>68.4</td><td>59.7</td><td>67.9</td><td>66.5</td><td>71.0</td><td>54.1</td><td>64.0</td><td>59.7</td><td>66.9</td></tr>
      <tr><td>UI-TARS-1.5-7B</td><td>52.7</td><td>66.0</td><td>39.8</td><td>54.7</td><td>31.6</td><td>49.1</td><td>47.5</td><td>61.6</td><td>48.8</td><td>64.8</td><td>39.2</td><td>54.1</td><td>42.7</td><td>57.7</td></tr>

      <tr class="paper-row--group"><td colspan="15">Zero-shot</td></tr>
      <tr><td>Qwen3-VL-4B-Inst.</td><td>44.5</td><td>67.8</td><td>37.1</td><td>57.8</td><td>33.3</td><td>55.7</td><td>36.3</td><td>59.3</td><td>42.9</td><td>67.1</td><td>33.4</td><td>57.6</td><td>37.5</td><td>60.5</td></tr>
      <tr><td>Qwen3-VL-8B-Inst.</td><td>44.7</td><td>70.8</td><td>35.3</td><td>59.6</td><td>31.2</td><td>58.5</td><td>36.0</td><td>63.0</td><td>41.4</td><td>69.1</td><td>34.4</td><td>60.5</td><td>37.0</td><td>63.2</td></tr>
      <tr><td>InternVL3-14B</td><td>23.3</td><td>44.4</td><td>18.6</td><td>41.4</td><td>18.1</td><td>38.2</td><td>15.1</td><td>34.6</td><td>22.5</td><td>43.6</td><td>18.3</td><td>37.8</td><td>19.4</td><td>40.1</td></tr>

      <tr class="paper-row--group"><td colspan="15">OS-Genesis</td></tr>
      <tr><td>Qwen3-VL-4B-Inst.</td><td>55.1</td><td>76.4</td><td>46.4</td><td>64.0</td><td>47.3</td><td>66.2</td><td>47.8</td><td>68.3</td><td>58.2</td><td>76.1</td><td>50.2</td><td>69.9</td><td>49.0</td><td>70.0</td></tr>
      <tr><td>Qwen3-VL-8B-Inst.</td><td>60.6</td><td>78.8</td><td>51.0</td><td>67.0</td><td>49.4</td><td>69.1</td><td>52.1</td><td>74.1</td><td>61.1</td><td>79.6</td><td>56.0</td><td>74.4</td><td>53.6</td><td>73.3</td></tr>
      <tr><td>InternVL3-14B</td><td>62.8</td><td>75.1</td><td>52.8</td><td>66.1</td><td>46.7</td><td>68.5</td><td>48.5</td><td>70.3</td><td>59.4</td><td>78.0</td><td>53.8</td><td>72.8</td><td>52.1</td><td>71.0</td></tr>

      <tr class="paper-row--group"><td colspan="15">GUI-ReWalk</td></tr>
      <tr><td>Qwen3-VL-4B-Inst.</td><td>57.2</td><td>78.1</td><td>48.2</td><td>66.2</td><td>47.0</td><td>71.9</td><td>51.4</td><td>74.4</td><td>56.2</td><td>79.3</td><td>52.2</td><td>72.2</td><td>51.8</td><td>72.1</td></tr>
      <tr><td>Qwen3-VL-8B-Inst.</td><td>63.9</td><td>80.5</td><td>53.9</td><td>69.8</td><td>51.1</td><td>71.0</td><td>56.9</td><td>78.6</td><td>63.0</td><td>82.5</td><td>58.0</td><td>76.9</td><td>56.8</td><td>75.9</td></tr>
      <tr><td>InternVL3-14B</td><td>59.9</td><td>77.6</td><td>50.5</td><td>65.5</td><td>48.2</td><td>67.2</td><td>53.6</td><td>72.3</td><td>60.5</td><td>83.4</td><td>55.2</td><td>74.0</td><td>53.4</td><td>72.4</td></tr>

      <tr class="paper-row--group"><td colspan="15">Ours</td></tr>
      <tr class="paper-row--ours"><td>Qwen3-VL-4B-Inst.</td><td>58.9</td><td>77.7</td><td>49.5</td><td>66.1</td><td>49.1</td><td>70.8</td><td>52.1</td><td>76.3</td><td>60.2</td><td>81.1</td><td>54.2</td><td>74.2</td><td>54.8</td><td>75.1</td></tr>
      <tr class="paper-row--ours"><td>Qwen3-VL-8B-Inst.</td><td>63.5</td><td>79.9</td><td>53.5</td><td>69.1</td><td>53.1</td><td>72.7</td><td>58.0</td><td>76.9</td><td>64.2</td><td>80.3</td><td>60.0</td><td>78.9</td><td>59.8</td><td>81.3</td></tr>
      <tr class="paper-row--ours"><td>InternVL3-14B</td><td>61.1</td><td>78.9</td><td>52.1</td><td>67.8</td><td>50.2</td><td>70.4</td><td>52.5</td><td>74.3</td><td>62.1</td><td>82.9</td><td>57.2</td><td>76.0</td><td>56.4</td><td>75.4</td></tr>
    </tbody>
  </table>
</div>

## Conclusion

<div class="paper-highlight-box">
  <p>MobileGen argues that GUI-agent data generation should be capability-aware. The paper’s main value is not just more synthetic data, but better-targeted synthetic data that keeps training pressure close to the model’s actual learning frontier.</p>
</div>
