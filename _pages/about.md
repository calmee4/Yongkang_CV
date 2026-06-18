---
permalink: /
author_profile: true
stylesheets:
  - /assets/css/home.css
redirect_from:
  - /about/
  - /about.html
---

<section class="intro-shell">
  <h1 class="main-heading">Yongkang Zhang</h1>

  <p class="lead-paragraph">
    I am Yongkang Zhang, an undergraduate student in Computer Science at
    <strong>Huazhong Agricultural University</strong> and a long-term
    <strong>Multimodal Large Model Algorithm Intern</strong> at
    <strong>ByteDance TikTok Content Understanding</strong>.
  </p>

  <p>
    My recent work focuses on <strong>multimodal large models</strong>, <strong>GUI agents</strong>,
    <strong>multimodal reasoning</strong>, and <strong>research engineering</strong> for large-scale
    training, automatic evaluation, and serving-oriented experimentation.
  </p>

  <p>
    I am currently most interested in <strong>3D-GS</strong> and
    <strong>long video generation</strong>, especially problems around controllable generation,
    long-horizon consistency, and scalable experimentation.
  </p>

  <p>
    I like research that can be carried from a clear modeling idea to mechanism analysis,
    reproducible experiments, data pipelines, and usable systems.
  </p>
</section>

Experience
--------------
<div class="experience-container">
  <div class="experience-card experience-card--byte">
    <div class="experience-mark experience-mark--byte" aria-hidden="true">
      <img class="experience-logo experience-logo--byte" src="{{ '/images/icons/bytedance-color.svg' | relative_url }}" alt="">
    </div>
    <div class="experience-info">
      <strong>ByteDance TikTok Content Understanding</strong><br>
      <em>2026.02 - Present · Shanghai</em><br>
      Multimodal Large Model Algorithm Intern<br>
      <span class="experience-note">
        I work on multimodal post-training, evaluation, data-centric iteration, and end-to-end
        experimental pipelines for real product settings. A large part of my internship is turning
        research ideas into reproducible loops across data construction, controlled ablations,
        automatic evaluation, and efficient inference and serving. Mentor:
        <a href="https://hsing-wang.github.io/academic_homepage/" target="_blank" rel="noopener">Xing Wang</a>.
      </span>
    </div>
  </div>

  <div class="experience-card experience-card--school">
    <div class="experience-mark experience-mark--school" aria-hidden="true">
      <img class="experience-logo experience-logo--school" src="{{ '/images/icons/hzau.png' | relative_url }}" alt="">
    </div>
    <div class="experience-info">
      <strong>Huazhong Agricultural University</strong><br>
      <em>2023.09 - Present · Wuhan</em><br>
      B.E. in Computer Science and Technology<br>
      <span class="experience-note">
        Consecutive five-semester major rank <strong>1 / 114</strong>, average score
        <strong>93.46</strong>, GPA <strong>3.93 / 4.00</strong>. My undergraduate research has
        centered on GUI grounding, agent memory, multimodal reasoning, and multi-agent learning.
      </span>
    </div>
  </div>

  <div class="experience-card experience-card--focus">
    <div class="experience-mark experience-mark--focus" aria-hidden="true">
      <img class="experience-logo experience-logo--focus" src="{{ '/images/icons/research-focus.png' | relative_url }}" alt="">
    </div>
    <div class="experience-info">
      <strong>Current Research Direction</strong><br>
      <em>2026 - Present</em><br>
      3D-GS and Long Video Generation<br>
      <span class="experience-note">
        I am currently interested in controllable dynamic scene representation, temporal consistency,
        and scalable training and evaluation pipelines for long-horizon generative systems.
      </span>
    </div>
  </div>
</div>

Publications
--------------
<p class="section-note paper-home-note">
  Selected papers and ongoing submissions. Click <strong>Overview</strong> to see the main figure,
  motivation, experiments, and conclusions for each paper.
</p>

<div class="pub-button-container">
  <button class="pub-button active" onclick="filterPublications(event, 'core')">Selected Publications</button>
  <button class="pub-button" onclick="filterPublications(event, 'list')">Full Publication List</button>
</div>

<div id="core-publications" class="publication-view" data-publication-view="core">
  <div class="publication-card" data-category="all">
    <div class="publication-layout">
      <a class="pub-figure pub-figure--eccv" href="{{ '/publications/decopatch/' | relative_url }}">
        <img src="{{ '/images/publications/decopatch.png' | relative_url }}" alt="Figure for DeCoPatch" loading="lazy">
        <div class="pub-figure-label">
          <span>ECCV 2026</span>
          <small>DeCoPatch</small>
        </div>
      </a>
      <div class="publication-content">
        <strong class="publication-title">DeCoPatch: Revealing Causal Latent Subspaces in Vision-Language Models for GUI Grounding</strong>
        <div class="paper-meta">
          <span class="pub-list-badge">ECCV 2026</span>
          <span class="pub-status pub-status--accepted">Accepted</span>
          <span>CCF-B</span>
          <span>First Author</span>
          <span>2025.12 - 2026.03</span>
        </div>
        <div class="paper-summary">
          DeCoPatch explains why marker overlay helps GUI grounding by tracing the gain to a low-rank
          latent subspace in late decoder layers, then turns that observation into a training-free
          decoding-time intervention with minimal latency overhead.
        </div>
        <div class="paper-actions">
          <a class="paper-action" href="{{ '/publications/decopatch/' | relative_url }}#overview">Overview</a>
          <a class="paper-action paper-action--ghost" href="{{ '/images/publications/decopatch.png' | relative_url }}">Main Figure</a>
        </div>
      </div>
    </div>
  </div>

  <div class="publication-card" data-category="all">
    <div class="publication-layout">
      <a class="pub-figure pub-figure--iccbr" href="{{ '/publications/beyond-trajectory/' | relative_url }}">
        <img src="{{ '/images/publications/beyond-trajectory.png' | relative_url }}" alt="Figure for Beyond Trajectory" loading="lazy">
        <div class="pub-figure-label">
          <span>ICCBR 2026</span>
          <small>Beyond Trajectory</small>
        </div>
      </a>
      <div class="publication-content">
        <strong class="publication-title">Beyond Trajectory: Explicit Case-Based Memory for Decision-Making in Multimodal GUI Agents</strong>
        <div class="paper-meta">
          <span class="pub-list-badge">ICCBR 2026</span>
          <span class="pub-status pub-status--accepted">Accepted</span>
          <span>CCF-B</span>
          <span>First Author</span>
          <span>2025.10 - 2025.12</span>
        </div>
        <div class="paper-summary">
          This work reframes GUI-agent memory as explicit case-based reuse rather than raw trajectory
          retrieval, and shows that structured cases, candidate shaping, and conservative revision are
          more stable than opaque retrieval-heavy memory pipelines.
        </div>
        <div class="paper-actions">
          <a class="paper-action" href="{{ '/publications/beyond-trajectory/' | relative_url }}#overview">Overview</a>
          <a class="paper-action paper-action--ghost" href="{{ '/images/publications/beyond-trajectory.png' | relative_url }}">Main Figure</a>
        </div>
      </div>
    </div>
  </div>

  <div class="publication-card" data-category="all">
    <div class="publication-layout">
      <a class="pub-figure pub-figure--uai" href="{{ '/publications/caic/' | relative_url }}">
        <img src="{{ '/images/publications/caic.png' | relative_url }}" alt="Figure for CAIC" loading="lazy">
        <div class="pub-figure-label">
          <span>UAI 2026</span>
          <small>CAIC</small>
        </div>
      </a>
      <div class="publication-content">
        <strong class="publication-title">CAIC: Congestion-Aware Intent Communication for Multi-Agent Reinforcement Learning</strong>
        <div class="paper-meta">
          <span class="pub-list-badge">UAI 2026</span>
          <span class="pub-status pub-status--accepted">Accepted</span>
          <span>CCF-B</span>
          <span>Co-first, Second Author</span>
          <span>2025.07 - 2025.09</span>
        </div>
        <div class="paper-summary">
          CAIC studies queueing delay on shared communication channels in MARL and introduces
          congestion-aware intent communication, delay-robust message encoding, and adaptive
          communication frequency control.
        </div>
        <div class="paper-actions">
          <a class="paper-action" href="{{ '/publications/caic/' | relative_url }}#overview">Overview</a>
          <a class="paper-action paper-action--ghost" href="{{ '/images/publications/caic.png' | relative_url }}">Main Figure</a>
        </div>
      </div>
    </div>
  </div>

  <div class="publication-card" data-category="all">
    <div class="publication-layout">
      <a class="pub-figure pub-figure--neurips" href="{{ '/publications/vgc/' | relative_url }}">
        <img src="{{ '/images/publications/vgc.png' | relative_url }}" alt="Figure for Visual Grounding Chain-of-Thought" loading="lazy">
        <div class="pub-figure-label">
          <span>NeurIPS 2026</span>
          <small>VGC</small>
        </div>
      </a>
      <div class="publication-content">
        <strong class="publication-title">Visual Grounding Chain-of-Thought: Structural Constraints Improve Multimodal Reasoning Accuracy</strong>
        <div class="paper-meta">
          <span class="pub-list-badge">NeurIPS 2026</span>
          <span class="pub-status pub-status--review">Under Review</span>
          <span>CCF-A</span>
          <span>First Author</span>
          <span>2026.02 - 2026.05</span>
        </div>
        <div class="paper-summary">
          VGC studies the compliance gap in multimodal reasoning and shows that forcing the generation
          order to follow visual evidence, then reasoning, then answer substantially improves both
          accuracy and actual visual grounding.
        </div>
        <div class="paper-actions">
          <a class="paper-action" href="{{ '/publications/vgc/' | relative_url }}#overview">Overview</a>
          <a class="paper-action paper-action--ghost" href="{{ '/images/publications/vgc.png' | relative_url }}">Main Figure</a>
        </div>
      </div>
    </div>
  </div>

  <div class="publication-card" data-category="all">
    <div class="publication-layout">
      <a class="pub-figure pub-figure--neurips" href="{{ '/publications/mobilegen/' | relative_url }}">
        <img src="{{ '/images/publications/mobilegen.png' | relative_url }}" alt="Figure for MobileGen" loading="lazy">
        <div class="pub-figure-label">
          <span>NeurIPS 2026</span>
          <small>MobileGen</small>
        </div>
      </a>
      <div class="publication-content">
        <strong class="publication-title">Learning with Challenges: Adaptive Difficulty-Aware Data Generation for Mobile GUI Agent Training</strong>
        <div class="paper-meta">
          <span class="pub-list-badge">NeurIPS 2026</span>
          <span class="pub-status pub-status--review">Under Review</span>
          <span>CCF-A</span>
          <span>Co-first, Third Author</span>
          <span>2025.12 - 2026.03</span>
        </div>
        <div class="paper-summary">
          MobileGen aligns training difficulty with a GUI agent's capability frontier by profiling
          structural and semantic difficulty, then synthesizing challenge-point-guided trajectories with
          a controllable multi-agent generator.
        </div>
        <div class="paper-actions">
          <a class="paper-action" href="{{ '/publications/mobilegen/' | relative_url }}#overview">Overview</a>
          <a class="paper-action paper-action--ghost" href="{{ '/images/publications/mobilegen.png' | relative_url }}">Main Figure</a>
        </div>
      </div>
    </div>
  </div>

  <div class="publication-card" data-category="all">
    <div class="publication-layout">
      <a class="pub-figure pub-figure--vldb" href="{{ '/publications/pdms/' | relative_url }}">
        <img src="{{ '/images/publications/pdms.png' | relative_url }}" alt="Figure for PDMS" loading="lazy">
        <div class="pub-figure-label">
          <span>VLDB 2026</span>
          <small>PDMS</small>
        </div>
      </a>
      <div class="publication-content">
        <strong class="publication-title">PDMS: A Preference Data Management System for RLHF</strong>
        <div class="paper-meta">
          <span class="pub-list-badge">VLDB 2026</span>
          <span class="pub-status pub-status--review">Under Review</span>
          <span>CCF-A</span>
          <span>First Author</span>
          <span>2026.03 - 2026.06</span>
        </div>
        <div class="paper-summary">
          PDMS treats RLHF preference data as a data systems problem and introduces a lightweight stack
          for SNR diagnosis, budget-aware selection, cross-model auditing, and transfer prediction
          before expensive reward-model training is launched.
        </div>
        <div class="paper-actions">
          <a class="paper-action" href="{{ '/publications/pdms/' | relative_url }}#overview">Overview</a>
          <a class="paper-action paper-action--ghost" href="{{ '/images/publications/pdms.png' | relative_url }}">Main Figure</a>
        </div>
      </div>
    </div>
  </div>

  <div class="publication-card" data-category="all">
    <div class="publication-layout">
      <a class="pub-figure pub-figure--vldb" href="{{ '/publications/ddtc/' | relative_url }}">
        <img src="{{ '/images/publications/ddtc.png' | relative_url }}" alt="Figure for Don't Default to CLIP" loading="lazy">
        <div class="pub-figure-label">
          <span>VLDB 2026</span>
          <small>DDtC</small>
        </div>
      </a>
      <div class="publication-content">
        <strong class="publication-title">Don't Default to CLIP: A Cost-Based Optimizer for Embedding Selection</strong>
        <div class="paper-meta">
          <span class="pub-list-badge">VLDB 2026</span>
          <span class="pub-status pub-status--review">Under Review</span>
          <span>CCF-A</span>
          <span>First Author</span>
          <span>2026.03 - 2026.06</span>
        </div>
        <div class="paper-summary">
          Starting from a concrete cost paradox where a tiny low-storage CoCa setting beats the
          conventional CLIP default, this work reframes embedding choice as a physical-design problem
          and builds a Pareto Catalog over model, dimension, and precision.
        </div>
        <div class="paper-actions">
          <a class="paper-action" href="{{ '/publications/ddtc/' | relative_url }}#overview">Overview</a>
          <a class="paper-action paper-action--ghost" href="{{ '/images/publications/ddtc.png' | relative_url }}">Main Figure</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="full-publications" class="publication-view" data-publication-view="list" hidden>
  <ul class="full-publication-list">
    <li>
      <span class="pub-list-badge">ECCV 2026</span>
      <span class="pub-status pub-status--accepted">Accepted</span>
      <span class="pub-list-title">DeCoPatch: Revealing Causal Latent Subspaces in Vision-Language Models for GUI Grounding</span><br>
      <span class="pub-list-authors">First Author · CCF-B · 2025.12 - 2026.03</span>
      <span class="pub-list-note">Training-free decoding-time intervention for marker-based GUI grounding. <a class="pub-inline-link" href="{{ '/publications/decopatch/' | relative_url }}#overview">Overview</a></span>
    </li>
    <li>
      <span class="pub-list-badge">ICCBR 2026</span>
      <span class="pub-status pub-status--accepted">Accepted</span>
      <span class="pub-list-title">Beyond Trajectory: Explicit Case-Based Memory for Decision-Making in Multimodal GUI Agents</span><br>
      <span class="pub-list-authors">First Author · CCF-B · 2025.10 - 2025.12</span>
      <span class="pub-list-note">Explicit case memory with structured retrieval and candidate shaping for GUI agents. <a class="pub-inline-link" href="{{ '/publications/beyond-trajectory/' | relative_url }}#overview">Overview</a></span>
    </li>
    <li>
      <span class="pub-list-badge">UAI 2026</span>
      <span class="pub-status pub-status--accepted">Accepted</span>
      <span class="pub-list-title">CAIC: Congestion-Aware Intent Communication for Multi-Agent Reinforcement Learning</span><br>
      <span class="pub-list-authors">Co-first, Second Author · CCF-B · 2025.07 - 2025.09</span>
      <span class="pub-list-note">Delay-aware intent communication under shared-channel congestion and queueing delay. <a class="pub-inline-link" href="{{ '/publications/caic/' | relative_url }}#overview">Overview</a></span>
    </li>
    <li>
      <span class="pub-list-badge">NeurIPS 2026</span>
      <span class="pub-status pub-status--review">Under Review</span>
      <span class="pub-list-title">Visual Grounding Chain-of-Thought: Structural Constraints Improve Multimodal Reasoning Accuracy</span><br>
      <span class="pub-list-authors">First Author · CCF-A · 2026.02 - 2026.05</span>
      <span class="pub-list-note">Structured multimodal reasoning that reduces the compliance gap between claimed and actual evidence use. <a class="pub-inline-link" href="{{ '/publications/vgc/' | relative_url }}#overview">Overview</a></span>
    </li>
    <li>
      <span class="pub-list-badge">NeurIPS 2026</span>
      <span class="pub-status pub-status--review">Under Review</span>
      <span class="pub-list-title">Learning with Challenges: Adaptive Difficulty-Aware Data Generation for Mobile GUI Agent Training</span><br>
      <span class="pub-list-authors">Co-first, Third Author · CCF-A · 2025.12 - 2026.03</span>
      <span class="pub-list-note">Capability-aligned trajectory generation around the agent's challenge point. <a class="pub-inline-link" href="{{ '/publications/mobilegen/' | relative_url }}#overview">Overview</a></span>
    </li>
    <li>
      <span class="pub-list-badge">VLDB 2026</span>
      <span class="pub-status pub-status--review">Under Review</span>
      <span class="pub-list-title">PDMS: A Preference Data Management System for RLHF</span><br>
      <span class="pub-list-authors">First Author · CCF-A · 2026.03 - 2026.06</span>
      <span class="pub-list-note">RLHF preference data management with SNR diagnosis, selection, auditing, and transfer prediction. <a class="pub-inline-link" href="{{ '/publications/pdms/' | relative_url }}#overview">Overview</a></span>
    </li>
    <li>
      <span class="pub-list-badge">VLDB 2026</span>
      <span class="pub-status pub-status--review">Under Review</span>
      <span class="pub-list-title">Don't Default to CLIP: A Cost-Based Optimizer for Embedding Selection</span><br>
      <span class="pub-list-authors">First Author · CCF-A · 2026.03 - 2026.06</span>
      <span class="pub-list-note">A physical-design view of embedding selection, motivated by the cost paradox of small configurations beating the default CLIP baseline. <a class="pub-inline-link" href="{{ '/publications/ddtc/' | relative_url }}#overview">Overview</a></span>
    </li>
  </ul>
</div>

<script src="{{ '/assets/js/show_publications.js' | relative_url }}"></script>

Awards
--------
<ul class="award-list">
  <li><strong>National Scholarship</strong> × 2 <span class="award-note">(Top 1%)</span>.</li>
</ul>
