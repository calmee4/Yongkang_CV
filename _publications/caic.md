---
title: "CAIC: Congestion-Aware Intent Communication for Multi-Agent Reinforcement Learning"
permalink: /publications/caic/
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
    <span class="paper-tag">UAI 2026</span>
    <span class="paper-tag">Accepted</span>
    <span class="paper-tag">CCF-B</span>
    <span class="paper-tag">Co-first, Second Author</span>
    <span class="paper-tag">2025.07 - 2025.09</span>
  </div>
  <p><strong>Overview.</strong> CAIC studies a bottleneck that most MARL communication papers ignore: messages are not delivered on a magic zero-delay channel. When multiple agents share a channel, queueing delay becomes an endogenous part of the system.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/detail/caic-framework.png' | relative_url }}"><img src="{{ '/images/publications/detail/caic-framework.png' | relative_url }}" alt="Framework of CAIC"></a>
  <figcaption class="paper-caption">The framework models the shared channel as a queueing system and combines delay-robust intent encoding, asynchronous fusion, and adaptive communication control.</figcaption>
</figure>

## Motivation

Most communication methods in cooperative MARL assume instant delivery. A few delay-aware settings consider external random delay, but they still miss a more realistic case: queueing delay caused by the agents’ own communication behavior when they compete for the same channel.

## Method

CAIC models the communication channel as a state-dependent queueing system. To keep messages useful under delay, it predicts future trajectories and compresses them into intent messages. At the receiver side, asynchronously arriving messages are fused through attention, and the communication frequency is adjusted dynamically according to intent change and estimated delay.

## Results

<ul class="paper-keypoints">
  <li>CAIC outperforms communication baselines on Hallway, MPE, and SMAC under both no-delay and queueing-delay settings.</li>
  <li>On SMAC, it reaches 91.5 / 87.8 / 86.5 / 68.0 on 2s3z, 8m, MMM, and 5m_vs_6m.</li>
  <li>The ablations show that stale delayed messages can be worse than using no communication at all.</li>
  <li>The paper makes queueing delay a first-class modeling target rather than treating it as an afterthought.</li>
</ul>

<div class="paper-gallery">
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/caic-results.png' | relative_url }}"><img src="{{ '/images/publications/detail/caic-results.png' | relative_url }}" alt="Main results of CAIC"></a>
    <figcaption>The main results summarize the improvement across representative settings, especially when congestion becomes the limiting factor.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/caic.png' | relative_url }}"><img src="{{ '/images/publications/caic.png' | relative_url }}" alt="Cover figure of CAIC"></a>
    <figcaption>The visual summary highlights that the key challenge is not only communication quality, but communication timeliness under shared-channel congestion.</figcaption>
  </figure>
</div>

## Selected Tables

<div class="paper-table-wrap">
  <div class="paper-table-caption">Queueing-delay benchmark table from the paper.</div>
  <div class="paper-table-note">This is the main dense result table in the paper. The important pattern is that CAIC stays strong when delay is endogenous and shared, while several communication baselines degrade sharply and can even underperform no-communication QMIX.</div>
  <table class="paper-data-table paper-data-table--xwide">
    <thead>
      <tr>
        <th>Task</th>
        <th>Scenario</th>
        <th>CAIC</th>
        <th>TGCNet</th>
        <th>T2MAC</th>
        <th>SOG</th>
        <th>TMC</th>
        <th>NDQ</th>
        <th>QMIX</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cooperative Navigation</td>
        <td>N=6</td>
        <td class="paper-cell--runner">-1.37&plusmn;0.00</td>
        <td class="paper-cell--best">-1.12&plusmn;0.08</td>
        <td>-1.38&plusmn;0.04</td>
        <td>-1.70&plusmn;0.22</td>
        <td>-3.34&plusmn;0.43</td>
        <td>-2.71&plusmn;1.17</td>
        <td>-1.79&plusmn;0.20</td>
      </tr>
      <tr>
        <td>Cooperative Navigation</td>
        <td>N=10</td>
        <td class="paper-cell--best">-1.83&plusmn;0.03</td>
        <td class="paper-cell--runner">-1.84&plusmn;0.07</td>
        <td>-1.88&plusmn;0.02</td>
        <td>-4.17&plusmn;1.59</td>
        <td>-5.41&plusmn;0.09</td>
        <td>-2.56&plusmn;0.12</td>
        <td>-2.62&plusmn;0.60</td>
      </tr>
      <tr>
        <td>Predator-Prey</td>
        <td>5v2</td>
        <td class="paper-cell--best">7.70&plusmn;0.29</td>
        <td class="paper-cell--runner">6.69&plusmn;0.73</td>
        <td>1.69&plusmn;1.42</td>
        <td>0.64&plusmn;0.07</td>
        <td>0.87&plusmn;0.10</td>
        <td>2.26&plusmn;0.20</td>
        <td>6.39&plusmn;0.42</td>
      </tr>
      <tr>
        <td>Predator-Prey</td>
        <td>8v3</td>
        <td class="paper-cell--best">12.63&plusmn;1.70</td>
        <td>10.78&plusmn;2.70</td>
        <td>3.61&plusmn;1.36</td>
        <td>2.24&plusmn;1.05</td>
        <td>1.88&plusmn;0.22</td>
        <td>4.20&plusmn;0.64</td>
        <td class="paper-cell--runner">12.36&plusmn;0.09</td>
      </tr>
      <tr>
        <td>SMAC</td>
        <td>2s3z</td>
        <td class="paper-cell--best">91.5&plusmn;2.8</td>
        <td>67.9&plusmn;5.9</td>
        <td>0.0&plusmn;0.0</td>
        <td class="paper-cell--runner">70.7&plusmn;8.3</td>
        <td>27.5&plusmn;17.5</td>
        <td>69.1&plusmn;4.6</td>
        <td>51.9&plusmn;22.9</td>
      </tr>
      <tr>
        <td>SMAC</td>
        <td>8m</td>
        <td class="paper-cell--best">87.8&plusmn;4.6</td>
        <td>59.4&plusmn;8.8</td>
        <td>29.7&plusmn;42.1</td>
        <td class="paper-cell--runner">84.2&plusmn;9.7</td>
        <td>47.5&plusmn;28.0</td>
        <td>80.8&plusmn;10.4</td>
        <td>82.9&plusmn;5.7</td>
      </tr>
      <tr>
        <td>SMAC</td>
        <td>MMM</td>
        <td class="paper-cell--best">86.5&plusmn;8.9</td>
        <td>56.8&plusmn;8.1</td>
        <td>0.0&plusmn;0.0</td>
        <td>54.6&plusmn;7.1</td>
        <td>38.0&plusmn;12.0</td>
        <td>57.4&plusmn;19.4</td>
        <td class="paper-cell--runner">76.3&plusmn;3.5</td>
      </tr>
      <tr>
        <td>SMAC</td>
        <td>5m_vs_6m</td>
        <td class="paper-cell--best">68.0&plusmn;5.2</td>
        <td>2.1&plusmn;1.6</td>
        <td class="paper-cell--runner">62.9&plusmn;6.2</td>
        <td>37.0&plusmn;9.6</td>
        <td>15.4&plusmn;6.8</td>
        <td>14.1&plusmn;6.5</td>
        <td>51.0&plusmn;6.6</td>
      </tr>
      <tr>
        <td>SMAC</td>
        <td>3s5z</td>
        <td class="paper-cell--best">37.5&plusmn;12.1</td>
        <td class="paper-cell--runner">35.3&plusmn;4.8</td>
        <td>1.0&plusmn;1.5</td>
        <td>25.1&plusmn;4.1</td>
        <td>0.1&plusmn;0.1</td>
        <td>0.0&plusmn;0.0</td>
        <td>28.3&plusmn;8.0</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="paper-table-wrap">
  <div class="paper-table-caption">Communication analysis table from the paper.</div>
  <div class="paper-table-note">This table is useful because it shows CAIC is not just “communicate more.” It adapts communication frequency to scenario-specific congestion, value of information, and intent dynamics.</div>
  <table class="paper-data-table paper-data-table--compact">
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Comm. Prob. (%)</th>
        <th>VOI</th>
        <th>Delay Cost</th>
        <th>Intent Diff</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>2s3z</td><td>40.3&plusmn;3.8</td><td>0.67&plusmn;0.05</td><td>0.33&plusmn;0.08</td><td>0.60&plusmn;0.12</td></tr>
      <tr><td>8m</td><td>36.9&plusmn;0.4</td><td>0.80&plusmn;0.04</td><td>0.41&plusmn;0.00</td><td>0.54&plusmn;0.07</td></tr>
      <tr><td>MMM</td><td>47.9&plusmn;0.1</td><td>0.74&plusmn;0.02</td><td>0.22&plusmn;0.00</td><td>0.69&plusmn;0.01</td></tr>
      <tr><td>5m_vs_6m</td><td>32.9&plusmn;0.4</td><td>0.75&plusmn;0.04</td><td>0.34&plusmn;0.01</td><td>0.28&plusmn;0.00</td></tr>
      <tr><td>3s5z</td><td>45.5&plusmn;1.5</td><td>0.77&plusmn;0.04</td><td>0.22&plusmn;0.01</td><td>0.63&plusmn;0.04</td></tr>
    </tbody>
  </table>
</div>

## Conclusion

<div class="paper-highlight-box">
  <p>CAIC shows that queueing delay is a real and harmful failure mode in MARL communication, and that delay-robust intent messages plus congestion-aware communication control can materially improve cooperative performance.</p>
</div>
