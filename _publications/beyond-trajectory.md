---
title: "Beyond Trajectory: Explicit Case-Based Memory for Decision-Making in Multimodal GUI Agents"
permalink: /publications/beyond-trajectory/
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
    <span class="paper-tag">ICCBR 2026</span>
    <span class="paper-tag">Accepted</span>
    <span class="paper-tag">CCF-B</span>
    <span class="paper-tag">First Author</span>
    <span class="paper-tag">2025.10 - 2025.12</span>
  </div>
  <p><strong>Overview.</strong> This paper studies how GUI agents should remember prior experience. Instead of storing memory as opaque retrieved trajectories, it formulates memory as explicit case-based reuse with inspectable structure and controlled adaptation.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/detail/beyond-overview.png' | relative_url }}"><img src="{{ '/images/publications/detail/beyond-overview.png' | relative_url }}" alt="Main figure of Beyond Trajectory"></a>
  <figcaption class="paper-caption">The overall pipeline organizes prior interactions as structured cases, retrieves compatible neighbors, reshapes the candidate decision space, and uses revision only when necessary.</figcaption>
</figure>

## Motivation

Many retrieval-augmented GUI agents benefit from prior trajectories, but it is often unclear what is actually being reused: semantic similarity, app compatibility, action schema alignment, or later repair. The paper argues that raw trajectory retrieval makes memory gains hard to interpret and hard to control.

## Method

The proposed framework has four stages: structured case representation, similarity retrieval, candidate shaping, and conservative revision. Each prior interaction is stored as an explicit case with fields that matter for GUI reuse, such as instruction, benchmark context, app identity, action family, and object cues. This keeps reuse visible and auditable.

## Results

<ul class="paper-keypoints">
  <li>On AndroidWorld, case coverage reaches 45.18 / 49.46 / 50.54 at top-1 / top-3 / top-5.</li>
  <li>On OSWorld, the same metric reaches 74.32 / 88.86 / 90.60.</li>
  <li>The framework consistently outperforms no-memory baselines and raw trajectory retrieval across multiple backbones.</li>
  <li>The strongest gains come from structured retrieval and candidate shaping, not from heavy revision after the fact.</li>
</ul>

<div class="paper-gallery">
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/beyond-analysis.png' | relative_url }}"><img src="{{ '/images/publications/detail/beyond-analysis.png' | relative_url }}" alt="Analysis figure of Beyond Trajectory"></a>
    <figcaption>The robustness and sensitivity analysis shows that the effect is stable across seeds and that retrieval depth matters differently on AndroidWorld and OSWorld.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/beyond-trajectory.png' | relative_url }}"><img src="{{ '/images/publications/beyond-trajectory.png' | relative_url }}" alt="Cover figure of Beyond Trajectory"></a>
    <figcaption>The main visual summary emphasizes that explicit cases produce more controllable reuse than simply dropping retrieved trajectories into context.</figcaption>
  </figure>
</div>

## Selected Tables

<div class="paper-table-wrap">
  <div class="paper-table-caption">Main retrieval-attribution table from the paper.</div>
  <div class="paper-table-note">This table is useful because it separates where the gain really comes from: plain raw-trajectory retrieval helps, but structured retrieval plus controlled reuse is what produces the strongest jump, especially on GUI Odyssey.</div>
  <table class="paper-data-table paper-data-table--wide">
    <thead>
      <tr>
        <th rowspan="2">Method</th>
        <th colspan="2">AndroidWorld-116</th>
        <th colspan="2">OSWorld-300</th>
        <th colspan="2">GUI Odyssey Random</th>
        <th colspan="2">GUI Odyssey Device</th>
        <th colspan="2">Mean</th>
      </tr>
      <tr>
        <th>Acc.</th>
        <th>Macro-F1</th>
        <th>Acc.</th>
        <th>Macro-F1</th>
        <th>Acc.</th>
        <th>Macro-F1</th>
        <th>Acc.</th>
        <th>Macro-F1</th>
        <th>Acc.</th>
        <th>Macro-F1</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>No retrieval</td>
        <td>8.57</td>
        <td>0.56</td>
        <td>19.73</td>
        <td>0.65</td>
        <td>32.29</td>
        <td>3.75</td>
        <td>36.22</td>
        <td>4.83</td>
        <td>24.20</td>
        <td>2.45</td>
      </tr>
      <tr>
        <td>Raw trajectory retrieval</td>
        <td>40.00</td>
        <td>21.79</td>
        <td>61.22</td>
        <td>32.95</td>
        <td>58.77</td>
        <td>35.74</td>
        <td>57.12</td>
        <td>34.25</td>
        <td>54.28</td>
        <td>31.18</td>
      </tr>
      <tr>
        <td>Semantic nearest-neighbor retrieval</td>
        <td>37.14</td>
        <td>20.61</td>
        <td>34.01</td>
        <td>13.59</td>
        <td>55.98</td>
        <td>31.53</td>
        <td>56.04</td>
        <td>30.88</td>
        <td>45.79</td>
        <td>24.15</td>
      </tr>
      <tr class="paper-row--soft">
        <td>Structured retrieval without adaptation</td>
        <td>42.86</td>
        <td>22.50</td>
        <td>83.67</td>
        <td>56.49</td>
        <td>44.13</td>
        <td>22.55</td>
        <td>48.30</td>
        <td>23.86</td>
        <td>54.74</td>
        <td>31.35</td>
      </tr>
      <tr>
        <td>Ablation: without revision</td>
        <td>42.86</td>
        <td>22.50</td>
        <td>85.71</td>
        <td>60.09</td>
        <td>43.90</td>
        <td>22.43</td>
        <td>47.83</td>
        <td>23.42</td>
        <td>55.07</td>
        <td>32.11</td>
      </tr>
      <tr class="paper-row--ours">
        <td><strong>Structured case reuse</strong></td>
        <td class="paper-cell--best">42.86</td>
        <td class="paper-cell--best">25.96</td>
        <td class="paper-cell--best">87.07</td>
        <td class="paper-cell--best">63.88</td>
        <td class="paper-cell--best">78.28</td>
        <td class="paper-cell--best">43.63</td>
        <td class="paper-cell--best">80.34</td>
        <td class="paper-cell--best">50.89</td>
        <td class="paper-cell--best">72.14</td>
        <td class="paper-cell--best">46.09</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="paper-table-wrap">
  <div class="paper-table-caption">Per-model benchmark summary from the paper.</div>
  <div class="paper-table-note">This table makes the paper's main empirical point much clearer: explicit case reuse is not a single-backbone trick. The gains persist across Qwen, InternVL, and Mistral-family agents.</div>
  <table class="paper-data-table paper-data-table--compact">
    <thead>
      <tr>
        <th>Model</th>
        <th>AndroidWorld Base</th>
        <th>AndroidWorld Structured Reuse</th>
        <th>OSWorld Base</th>
        <th>OSWorld Structured Reuse</th>
        <th>Mean Gain</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Qwen2.5-3B</td><td>1.72</td><td>76.72</td><td>53.12</td><td>73.71</td><td><span class="metric-up">+22.80</span></td></tr>
      <tr><td>Qwen2.5-7B</td><td>5.17</td><td>82.76</td><td>45.26</td><td>72.63</td><td><span class="metric-up">+52.48</span></td></tr>
      <tr><td>Qwen2.5-14B</td><td>30.17</td><td>87.07</td><td>25.47</td><td>73.71</td><td><span class="metric-up">+52.57</span></td></tr>
      <tr><td>Qwen2.5-32B</td><td>9.48</td><td>95.69</td><td>26.83</td><td>71.27</td><td><span class="metric-up">+65.33</span></td></tr>
      <tr><td>Qwen3-VL-4B</td><td>18.97</td><td>87.93</td><td>53.66</td><td>73.44</td><td><span class="metric-up">+44.37</span></td></tr>
      <tr><td>Qwen3-VL-8B</td><td>18.97</td><td>82.76</td><td>55.28</td><td>72.36</td><td><span class="metric-up">+40.44</span></td></tr>
      <tr><td>Qwen3-32B</td><td>22.41</td><td>94.83</td><td>42.55</td><td>73.17</td><td><span class="metric-up">+51.52</span></td></tr>
      <tr><td>InternVL3-8B</td><td>15.52</td><td>76.72</td><td>42.55</td><td>74.25</td><td><span class="metric-up">+46.45</span></td></tr>
      <tr><td>InternVL3-14B</td><td>14.66</td><td>93.97</td><td>34.42</td><td>71.54</td><td><span class="metric-up">+58.22</span></td></tr>
      <tr><td>Mistral-Small-3.1-24B</td><td>20.69</td><td>66.38</td><td>44.17</td><td>73.71</td><td><span class="metric-up">+37.62</span></td></tr>
    </tbody>
  </table>
</div>

## Conclusion

<div class="paper-highlight-box">
  <p>Beyond Trajectory shows that useful GUI-agent memory is not just “more retrieval.” The gains mainly come from representing prior experience as structured reusable cases that can reshape the downstream decision space in a benchmark- and app-aware way.</p>
</div>
