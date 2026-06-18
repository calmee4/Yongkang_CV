---
title: "DeCoPatch: Revealing Causal Latent Subspaces in Vision-Language Models for GUI Grounding"
permalink: /publications/decopatch/
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
    <span class="paper-tag">ECCV 2026</span>
    <span class="paper-tag">Accepted</span>
    <span class="paper-tag">CCF-B</span>
    <span class="paper-tag">First Author</span>
    <span class="paper-tag">2025.12 - 2026.03</span>
  </div>
  <p><strong>Overview.</strong> DeCoPatch studies why visual markers help GUI grounding and shows that the gain is not just a superficial rendering effect. The paper identifies a low-rank latent subspace in late decoder layers that causally mediates the marker benefit, then converts that mechanism finding into a training-free decode-time intervention.</p>
</div>

<figure class="paper-main-figure">
  <a href="{{ '/images/publications/decopatch.png' | relative_url }}"><img src="{{ '/images/publications/decopatch.png' | relative_url }}" alt="Main figure of DeCoPatch"></a>
  <figcaption class="paper-caption">The paper's two-stage pipeline. During prefilling, DeCoPatch scores late-layer FFN neurons online and selects a small Top-k mask; during decoding, it reuses the cached mask to reinforce the grounding-relevant latent subspace with almost no extra latency.</figcaption>
</figure>

## Motivation

Marker overlay is widely used because it often improves grounding accuracy, but prior work largely treats it as a rendering trick. DeCoPatch asks the more useful question: if markers help because they activate a specific internal computation pattern, can we patch that pattern directly without keeping external markers at test time?

## Method

The method has two tightly connected parts. First, the paper performs a mechanistic analysis of marker-vs-base activations and finds that the signal peaks in late decoder layers, concentrates in a low-rank subspace, and is causally important under decode-time suppression tests. Second, DeCoPatch turns this into an online intervention: it scores late FFN neurons during prefilling, caches a sparse layer-wise mask, and amplifies the selected neurons during decoding.

## Results

<ul class="paper-keypoints">
  <li>On ScreenSpot_v2, AndroidControl, and OSWorld-G, the method consistently improves selected-model performance while keeping the extra latency essentially negligible.</li>
  <li>In the standard 300-task head-to-head comparison, DeCoPatch beats marker-overlay baselines and matched random controls; for example, Qwen3-VL-8B on OSWorld-G rises from 0.237 to 0.380, while the matched random control stays at 0.233.</li>
  <li>On AndroidControl-Curated-Hard, Qwen3-VL-8B improves success rate from 31.57 to 33.96, and Pixtral-12B improves from 13.37 to 17.26.</li>
  <li>The detailed tables below focus on the more representative method results: direct marker-baseline comparison, OSWorld-G category breakdown, and AndroidControl decomposition into type, grounding, and final success rate.</li>
  <li>The paper also shows that informed neuron selection matters: matched random controls and plain marker baselines do not reproduce the same gain.</li>
</ul>

<div class="paper-gallery">
  <figure class="paper-figure-card paper-figure-card--wide">
    <a href="{{ '/images/publications/detail/decopatch-mechanism.png' | relative_url }}"><img src="{{ '/images/publications/detail/decopatch-mechanism.png' | relative_url }}" alt="Mechanistic summary of DeCoPatch"></a>
    <figcaption>The core mechanism figure from the paper: marker-induced delta energy peaks in late layers, the effect is strongly low-rank, and direction-specific decode-time suppression removes the gain. This is the causal evidence that motivates DeCoPatch.</figcaption>
  </figure>
  <figure class="paper-figure-card">
    <a href="{{ '/images/publications/detail/decopatch-ablation.png' | relative_url }}"><img src="{{ '/images/publications/detail/decopatch-ablation.png' | relative_url }}" alt="OSWorld ablation of DeCoPatch"></a>
    <figcaption>The OSWorld-G ablation from the正文 shows that moderate intervention rank, moderate strength, and late-layer selection are the most stable operating regime; overly strong intervention starts to saturate or hurt.</figcaption>
  </figure>
</div>

## Selected Tables

<div class="paper-table-wrap">
  <div class="paper-table-caption">Representative head-to-head marker baseline rows from the paper.</div>
  <div class="paper-table-note">I keep the strongest and most representative slices here: base inference, SoM, grid overlay, DeCoPatch, and a matched random control are compared under the same hit@0.1 evaluation budget. The key message is that directly patching the discovered latent subspace is more reliable than keeping explicit markers on screen.</div>
  <table class="paper-data-table paper-data-table--wide">
    <thead>
      <tr>
        <th>Suite</th>
        <th>Model</th>
        <th>base</th>
        <th>SoM</th>
        <th>grid</th>
        <th>ours</th>
        <th>rand</th>
        <th>ours-rand</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>ScreenSpot-v2</td><td>Qwen3-VL-8B</td><td>0.310</td><td>0.277</td><td>0.300</td><td class="paper-cell--best">0.400</td><td>0.320</td><td><span class="metric-up">+0.080</span></td></tr>
      <tr><td>ScreenSpot-v2</td><td>UI-Venus-Ground-7B</td><td>0.413</td><td>0.427</td><td>0.437</td><td class="paper-cell--best">0.630</td><td>0.413</td><td><span class="metric-up">+0.217</span></td></tr>
      <tr><td>ScreenSpot-Pro</td><td>Qwen3-VL-8B</td><td>0.140</td><td>0.177</td><td>0.127</td><td class="paper-cell--best">0.300</td><td>0.160</td><td><span class="metric-up">+0.140</span></td></tr>
      <tr><td>ScreenSpot-Pro</td><td>UI-Venus-Ground-7B</td><td>0.133</td><td>0.203</td><td>0.173</td><td class="paper-cell--best">0.223</td><td>0.140</td><td><span class="metric-up">+0.083</span></td></tr>
      <tr><td>AndroidControl</td><td>UI-Venus-Ground-7B</td><td>0.663</td><td>0.733</td><td>0.613</td><td class="paper-cell--best">0.760</td><td>0.663</td><td><span class="metric-up">+0.097</span></td></tr>
      <tr><td>OSWorld-G</td><td>Qwen3-VL-8B</td><td>0.237</td><td>0.073</td><td>0.090</td><td class="paper-cell--best">0.380</td><td>0.233</td><td><span class="metric-up">+0.147</span></td></tr>
      <tr><td>OSWorld-G</td><td>UI-Venus-Ground-7B</td><td>0.350</td><td>0.357</td><td>0.273</td><td class="paper-cell--best">0.410</td><td>0.347</td><td><span class="metric-up">+0.063</span></td></tr>
    </tbody>
  </table>
</div>

<div class="paper-table-wrap">
  <div class="paper-table-caption">OSWorld-G selected benchmark blocks from the paper.</div>
  <div class="paper-table-note">This is a better table for the homepage than the old compressed summary because it shows where the gain appears in hybrid long-horizon tasks. I keep four representative model blocks here, and in each block the overall score of DeCoPatch is the best.</div>
  <table class="paper-data-table paper-data-table--wide">
    <thead>
      <tr>
        <th>Model</th>
        <th>Method</th>
        <th>TextMatch</th>
        <th>ElemRecog</th>
        <th>Layout</th>
        <th>FineManip</th>
        <th>Refusal</th>
        <th>Overall</th>
      </tr>
    </thead>
    <tbody>
      <tr><td rowspan="4">Qwen3-VL-8B</td><td>base</td><td>63.22</td><td>45.91</td><td>55.34</td><td>41.61</td><td class="paper-cell--best">7.41</td><td>52.48</td></tr>
      <tr><td>SoM</td><td>63.98</td><td>47.58</td><td class="paper-cell--best">57.13</td><td>41.61</td><td class="paper-cell--best">7.41</td><td>52.84</td></tr>
      <tr><td>rand</td><td>62.45</td><td>46.36</td><td>55.34</td><td>40.94</td><td>5.56</td><td>51.95</td></tr>
      <tr class="paper-row--ours"><td>ours</td><td class="paper-cell--best">65.13</td><td class="paper-cell--best">48.48</td><td>56.92</td><td class="paper-cell--best">42.62</td><td class="paper-cell--best">7.41</td><td class="paper-cell--best">54.26</td></tr>

      <tr><td rowspan="4">Jedi-7B-1080p</td><td>base</td><td>65.13</td><td>54.55</td><td>56.92</td><td>46.31</td><td class="paper-cell--best">5.56</td><td>53.19</td></tr>
      <tr><td>SoM</td><td>65.52</td><td>55.45</td><td>57.71</td><td>46.98</td><td class="paper-cell--best">5.56</td><td>53.55</td></tr>
      <tr><td>rand</td><td>64.37</td><td>56.06</td><td>56.13</td><td>44.97</td><td>3.70</td><td>52.48</td></tr>
      <tr class="paper-row--ours"><td>ours</td><td class="paper-cell--best">66.67</td><td class="paper-cell--best">56.67</td><td class="paper-cell--best">58.89</td><td class="paper-cell--best">47.65</td><td>3.70</td><td class="paper-cell--best">54.26</td></tr>

      <tr><td rowspan="4">UI-Venus-Ground-7B</td><td>base</td><td>73.95</td><td>59.70</td><td>60.87</td><td>44.97</td><td>0.00</td><td>57.80</td></tr>
      <tr><td>SoM</td><td>74.33</td><td>60.61</td><td class="paper-cell--best">61.66</td><td>45.64</td><td>0.00</td><td>58.16</td></tr>
      <tr><td>rand</td><td>74.71</td><td>58.48</td><td>61.26</td><td>46.31</td><td>0.00</td><td>57.45</td></tr>
      <tr class="paper-row--ours"><td>ours</td><td class="paper-cell--best">75.48</td><td class="paper-cell--best">61.52</td><td>60.47</td><td class="paper-cell--best">47.65</td><td>0.00</td><td class="paper-cell--best">59.04</td></tr>

      <tr><td rowspan="4">Pixtral-12B</td><td>base</td><td>15.71</td><td>12.73</td><td>17.39</td><td>6.04</td><td>0.00</td><td>13.12</td></tr>
      <tr><td>SoM</td><td>16.48</td><td class="paper-cell--best">14.55</td><td class="paper-cell--best">19.76</td><td>6.71</td><td>0.00</td><td>13.48</td></tr>
      <tr><td>rand</td><td>14.94</td><td>12.42</td><td>16.60</td><td>6.04</td><td>0.00</td><td>12.77</td></tr>
      <tr class="paper-row--ours"><td>ours</td><td class="paper-cell--best">16.48</td><td>14.24</td><td>17.39</td><td class="paper-cell--best">7.38</td><td>0.00</td><td class="paper-cell--best">15.96</td></tr>
    </tbody>
  </table>
</div>

<div class="paper-table-wrap">
  <div class="paper-table-caption">AndroidControl-Curated selected benchmark blocks from the paper.</div>
  <div class="paper-table-note">This table decomposes performance into action type, grounding, and final success rate. I keep four representative model blocks here; the main thing to watch is that the grounding column rises together with final success, which matches the intended effect of DeCoPatch.</div>
  <table class="paper-data-table paper-data-table--xwide">
    <thead>
      <tr>
        <th rowspan="2">Model</th>
        <th rowspan="2">Method</th>
        <th colspan="3">Easy</th>
        <th colspan="3">Hard</th>
      </tr>
      <tr>
        <th>Type</th>
        <th>Grounding</th>
        <th>SR</th>
        <th>Type</th>
        <th>Grounding</th>
        <th>SR</th>
      </tr>
    </thead>
    <tbody>
      <tr><td rowspan="4">Qwen3-VL-8B</td><td>base</td><td>73.15</td><td>57.62</td><td>40.39</td><td>66.79</td><td>49.19</td><td>31.57</td></tr>
      <tr><td>SoM</td><td class="paper-cell--best">73.28</td><td>60.19</td><td>42.21</td><td class="paper-cell--best">66.95</td><td>51.87</td><td>33.53</td></tr>
      <tr><td>rand</td><td>73.01</td><td>57.28</td><td>39.66</td><td>66.64</td><td>48.76</td><td>31.14</td></tr>
      <tr class="paper-row--ours"><td>ours</td><td>73.09</td><td class="paper-cell--best">60.45</td><td class="paper-cell--best">42.86</td><td>66.88</td><td class="paper-cell--best">52.15</td><td class="paper-cell--best">33.96</td></tr>

      <tr><td rowspan="4">Jedi-7B-1080p</td><td>base</td><td>81.93</td><td>70.69</td><td>55.67</td><td>76.41</td><td>63.22</td><td>45.96</td></tr>
      <tr><td>SoM</td><td class="paper-cell--best">82.07</td><td>73.42</td><td>57.64</td><td class="paper-cell--best">76.55</td><td>65.97</td><td>47.76</td></tr>
      <tr><td>rand</td><td>81.79</td><td>70.35</td><td>55.17</td><td>76.22</td><td>62.81</td><td>45.45</td></tr>
      <tr class="paper-row--ours"><td>ours</td><td>82.01</td><td class="paper-cell--best">73.68</td><td class="paper-cell--best">57.88</td><td>76.48</td><td class="paper-cell--best">66.31</td><td class="paper-cell--best">48.12</td></tr>

      <tr><td rowspan="4">UI-Venus-Ground-7B</td><td>base</td><td>78.04</td><td>64.41</td><td>48.28</td><td>71.52</td><td>56.29</td><td>38.59</td></tr>
      <tr><td>SoM</td><td>77.89</td><td>67.28</td><td>50.25</td><td>71.38</td><td>58.79</td><td>40.25</td></tr>
      <tr><td>rand</td><td class="paper-cell--best">78.12</td><td>64.13</td><td>47.78</td><td class="paper-cell--best">71.64</td><td>56.05</td><td>38.37</td></tr>
      <tr class="paper-row--ours"><td>ours</td><td>77.96</td><td class="paper-cell--best">67.55</td><td class="paper-cell--best">50.49</td><td>71.45</td><td class="paper-cell--best">59.05</td><td class="paper-cell--best">40.61</td></tr>

      <tr><td rowspan="4">Pixtral-12B</td><td>base</td><td>51.61</td><td>34.85</td><td>19.70</td><td>45.22</td><td>27.59</td><td>13.37</td></tr>
      <tr><td>SoM</td><td>51.48</td><td>37.68</td><td>22.17</td><td>45.08</td><td>30.35</td><td>15.48</td></tr>
      <tr><td>rand</td><td class="paper-cell--best">51.77</td><td>34.51</td><td>19.46</td><td class="paper-cell--best">45.35</td><td>27.25</td><td>13.15</td></tr>
      <tr class="paper-row--ours"><td>ours</td><td>51.74</td><td class="paper-cell--best">38.04</td><td class="paper-cell--best">22.41</td><td>45.29</td><td class="paper-cell--best">31.12</td><td class="paper-cell--best">17.26</td></tr>
    </tbody>
  </table>
</div>

## Conclusion

<div class="paper-highlight-box">
  <p>DeCoPatch's value is that it closes the loop from explanation to method. The paper first localizes where marker gains live inside the model, proves that the effect is low-rank and causal, and then turns that finding into a practical decode-time patch that improves grounding without retraining.</p>
</div>
