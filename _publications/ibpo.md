---
title: "Reducing Credit Assignment Variance via Counterfactual Reasoning Paths"
permalink: /publications/ibpo/
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
    <span class="paper-tag">Accepted</span>
    <span class="paper-tag">CCF-A</span>
    <span class="paper-tag">Student First Author</span>
  </div>
  <p><strong>Overview.</strong> Reinforcement learning for multi-step LLM reasoning usually relies on sparse terminal rewards, so the final feedback is spread uniformly over every intermediate decision. IBPO (Implicit Behavior Policy Optimization) turns this sparse signal into step-sensitive credit by comparing counterfactual reasoning trajectories.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/ibpo.png' | relative_url }}"><img src="{{ '/images/publications/ibpo.png' | relative_url }}" alt="Overview of IBPO"></a>
  <figcaption class="paper-caption">(a) Sequence-level RL assigns the same advantage to every step, so correct steps are penalized too and updates are high-variance. (b) IBPO compares an incorrect trajectory with a reference, generates a corrected trajectory, and assigns token-level credit only to the edited tokens.</figcaption>
</figure>

## Motivation

Propagating a single terminal reward across a whole reasoning chain creates a poorly conditioned credit-assignment problem: high gradient variance, unstable training, and many ineffective updates that cap sustained improvement.

## Method

<ul class="paper-keypoints">
  <li>For each input, sample multiple reasoning trajectories and treat their differences as implicit approximations to alternative decisions.</li>
  <li>Use a compare-and-correct operator to produce a corrected trajectory from an incorrect one, guided by a reference trajectory.</li>
  <li>Build an implicit process-level advantage from the terminal reward and the token-level differences, so gradients concentrate on the decisions that actually changed the outcome.</li>
</ul>

## Results

<div class="paper-highlight-box">
  <p>IBPO substantially improves training stability and the performance ceiling on mathematical and code-reasoning benchmarks.</p>
</div>
