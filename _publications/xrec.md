---
title: "X-Rec Technical Report"
permalink: /publications/xrec/
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
    <span class="paper-tag">arXiv 2026</span>
    <span class="paper-tag">Technical Report</span>
    <span class="paper-tag">ByteDance TikTok</span>
    <span class="paper-tag">Contributor</span>
    <span class="paper-tag"><a href="https://arxiv.org/abs/2609.29180">arXiv:2609.29180</a></span>
  </div>
  <p><strong>Overview.</strong> X-Rec is a generative retrieval framework from TikTok-Data-Content Intelligence and TikTok-Data-Feed Quality. Instead of compressing a user into one deterministic embedding (U2I) or decoding discrete semantic IDs token by token (SID-AR), X-Rec learns the recommendation distribution directly in the continuous item-embedding space with flow matching, and generates multiple embedding triggers for approximate nearest neighbor retrieval. I am listed as a <strong>Contributor</strong> of the report.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/xrec.png' | relative_url }}"><img src="{{ '/images/publications/xrec.png' | relative_url }}" alt="U2I versus X-Rec"></a>
  <figcaption class="paper-caption">U2I produces a single retrieval trigger that can fall into a compromised position between interest modes. X-Rec models the full distribution of items of interest and denoises multiple triggers that cover different interest regions.</figcaption>
</figure>

## Motivation

U2I retrieval represents user context with one or a few deterministic embeddings, which struggles to capture diverse, multi-mode interests. SID-AR methods model richer distributions but suffer from quantization error and the low throughput of sequential decoding. X-Rec aims to keep the expressiveness of generative modeling while staying efficient enough for large-scale retrieval.

## Method

<ul class="paper-keypoints">
  <li><strong>Anchor conditioning</strong> decomposes generation into coarse semantic-region selection followed by fine-grained refinement.</li>
  <li><strong>Riemannian flow matching</strong> aligns generative trajectories with the hyperspherical geometry of l2-normalized item embeddings.</li>
  <li><strong>Late-interaction diffusion Transformer</strong> encodes the interaction history once and restricts repeated velocity-field estimation to the final Transformer layer, reusing the KV cache.</li>
</ul>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/detail/xrec-architecture.png' | relative_url }}"><img src="{{ '/images/publications/detail/xrec-architecture.png' | relative_url }}" alt="Model architecture of X-Rec"></a>
  <figcaption class="paper-caption">Historical interaction tokens are encoded by the first L-1 Transformer layers; target denoising tokens are fed only into the last layer to predict the velocity.</figcaption>
</figure>

## Results

<ul class="paper-keypoints">
  <li>On a streaming benchmark, X-Rec substantially outperforms U2I baselines and matches the retrieval quality of SID-AR methods.</li>
  <li>It delivers 3.46x higher inference throughput than SID-AR, since triggers are generated in parallel rather than decoded token by token.</li>
  <li>Ablations show that anchor conditioning, RFM, and pretraining each contribute to Recall@20.</li>
  <li>Deployed as a new retrieval source for vertical content on TikTok, two consecutive launches improved vertical engagement by +4.1484% and general engagement by +0.0111%.</li>
</ul>
