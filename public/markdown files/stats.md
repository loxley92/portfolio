---
title: "Making Stats Meaningful"
description: "Improving user understanding with a transparent, colour-coded grading system and in-game guides."
tags: ["Data Viz", "Prototyping", "User Testing"]
themeColor: "#f7cf7b"
themeGradient: "linear-gradient(to bottom, #fff7e5 0%, #ffdf9b 100%)"
heroImage: "/assets/projects/stats/hero.png"
---

{ type="project-hero", zIndex=10 }

{ section="case-study-body", zIndex=20 }
 
  { 
    type="sub-nav", 
    links=["Overview", "The Problem", "Design and Testing", "Final Release"],
    glassmorphism=true
  }

## Overview

{ section="narrative" }

* **Role:** UX/Product Designer
* **Duration:** 3 Weeks
* **Context:** Core Game Progression Loop

### The Challenge
Breeding for high stats is a core progression and monetisation loop in *Rival Stars*. However, the existing system relied on hidden maths and flat numbers. Outcomes were highly unpredictable, forcing players to rely on external spreadsheets to make sense of the game's mechanics.

### The Aim
To design a transparent, intuitive stat grading system that empowers players to strategise their breeding with confidence natively within the game.

### Release Impact

> **Improved Comprehension:** Validated a letter and colour grading system that was universally understood by a global audience.

> **Reduced Cognitive Load:** Restructured the interface to deliver goal-specific, contextual insights rather than generic popups.

> **High Community Sentiment:** The update successfully demystified the breeding maths, resulting in overwhelmingly positive player feedback.

{ section="theme-banner" }

### Execution & Strategy:
## Project Phases

{ section="narrative" }

{ component="stepper-success" }

1. **Identify & Audit:** Mapped the hidden mathematical probability curves and analysed player sentiment to understand the core friction.
2. **Architecture & Grading:** Designed a dual-indicator (letter and colour) grading system to translate raw data into universally understood values.
3. **Prototyping & User Testing:** Rapidly tested the new UI with high-value players, pivoting the "refresh" icon to safe carousel arrows based on direct feedback.
4. **Implementation & Launch:** Consolidated complex rules into an in-game Breeding Guide and balanced the distribution curve with Game Design before launch.

{ section="narrative" }

## The Problem
We identified two major pain points with the stat inheritance system during breeding:

* 1. While the system was designed with intentional randomness, the output felt too unpredictable, often leading to player disappointment and frustration.
* 2. Players had to build complex Excel sheets and keep handwritten notes just to make sense of the game's core breeding loop.

{ type="caption", label="Diagram 1.0 - The stat progression system" }
![](/assets/projects/stats/stat-table-diagram.png)

{ type="caption", label="Diagram 1.1 - The wide probability spread" }
![](/assets/projects/stats/stat-curve.png)

{ section="narrative" }

### The Player Experience
Because the UI only surfaced flat numbers, players were left completely in the dark regarding their horse's true potential. This lack of transparency caused immense frustration in the community, creating high friction in a core loop. 

To cope, players were forced to create complex, fan-made databases just to track performance. 

{ section="wide" }

{ type="card-grid", cols="2" }

*"OK...for sanity's sake I'm just trying to understand what equates to good stats for each level. Is this a good or even decent level 4?"*
![](/assets/projects/stats/problem-community-one.png)

---

*"Is this horse good?? I have interest to buy this one..."*
![](/assets/projects/stats/problem-community-two.png)

---

*"For inexperienced players it is often difficult to know what to look for."*
![](/assets/projects/stats/problem-community-three.png)

---

*"Am I the only one obsessed enough to have started a spreadsheet? It's otherwise impossible for me to remember stats and who parented who without having to check."*
![](/assets/projects/stats/problem-community-four.png)

{ section="theme-banner" }

### Designing for Clarity:
## Design and Testing

{ section="narrative" }

### The Grading System
We needed a system that was instantly recognisable without cluttering the UI. We designed a dual-indicator system:
* **Letter Grading (A+ to D):** Adopted a standard Western educational scale to communicate baseline quality instantly.
* **Colour Grading:** Layered a colour-coding system over the letters to ensure universal comprehension for non-Western players.

![](/assets/projects/stats/letter-grading.png)

### Contextual UI
The old UI was a "one-size-fits-all" popup. I redesigned it to adapt to the player's immediate goals depending on what screen they were on:

{ section="wide" }
{ type="card-grid", cols="2" }

### Breeding Screen
**Goal: Genetics.** The UI puts the Letter Grades (potential) at the top so players can quickly compare quality for breeding.
![](/assets/projects/stats/stat-quality-breed.png)


---

### Racing Screen
**Goal: Performance.** The hierarchy flips. It puts the Trained Stats (numbers) at the top, as that’s what matters most during active gameplay.
![](/assets/projects/stats/stat-quality-racing.png)

{ section="narrative" }

### Consolidating Knowledge
To keep the main screens clean, we moved the deep-dive technical rules into a dedicated Breeding Guide accessible directly on the screen. This allowed us to keep the stat popups lean and focused on data, while still providing a "one-stop shop" for players who wanted to understand the deeper mechanics.

![](/assets/projects/stats/breeding-guide.png)

### User Testing & UX Pivots
Working with the Games User Research team, we tested the prototype with existing high-value players. While the grading system was universally understood, testing revealed critical UI friction points that required immediate iteration:

* **Friction:** The legacy UI used a global "Display" toggle located far away from the actual horse cards. Crucially, it used a "refresh" icon (a circular arrow). Players interpreted this as a destructive action—fearing that clicking it would re-roll their horse's stats.
* **Pivot (Law of Proximity):** I moved the toggle directly onto the individual horse cards, placing the control exactly where the data is modified. We replaced the scary refresh icon with safe, familiar carousel arrows, allowing players to cycle through views without fear of losing progress.
* **Friction:** Players found the proposed term "Training Potential" confusing, assuming it related to gameplay mini-games.
* **Pivot:** Switched terminology to "Base Stats" to clearly separate genetics from gameplay mechanics.

![](/assets/projects/stats/ui-iterations.png)


{ section="theme-banner" }

### The Outcome:
## Final Release

{ section="narrative" }

### Official Release
This overhaul was a major update for the game, completely changing how players engaged with the core loop. To help transition the player base, the studio released an official developer update video highlighting the new mechanics.

{ section="wide" }

<div style="position: relative; padding-bottom: 56.25%; height: 0; border-radius: 0.75rem; overflow: hidden; margin: 2rem 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
  <iframe
    src="https://www.youtube.com/embed/V58RDD25xYM"
    srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%;background:#000}img{position:absolute;width:100%;top:0;bottom:0;margin:auto;object-fit:cover;height:100%;transition:opacity 0.2s} .play{position:absolute;width:68px;height:48px;left:50%;top:50%;transform:translate(-50%,-50%);background:rgba(33,33,33,0.9);border-radius:12px;cursor:pointer;transition:background 0.2s} a:hover .play{background:#FF0000} .play::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-40%,-50%);border-style:solid;border-width:10px 0 10px 20px;border-color:transparent transparent transparent #fff;}</style><a href='https://www.youtube.com/embed/V58RDD25xYM?autoplay=1'><img src='https://i.ytimg.com/vi/V58RDD25xYM/maxresdefault.jpg' alt='Better Breeding Update'> <div class='play'></div></a>"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    title="Better Breeding Update"
    loading="lazy"
  ></iframe>
</div>

{ section="narrative" }

### Balancing the Game Economy
In collaboration with Game Design, we adjusted the underlying math to generate fairer, more predictable stats. This ensured players were actually rewarded for their effort, balancing user satisfaction with the game's monetization economy.

![](/assets/projects/stats/new-curve.png)

### Community Response
The release successfully demystified the breeding maths. Players immediately understood the quality of their foals without relying on external spreadsheets. By surfacing the mechanics clearly, we restored a sense of fairness and strategy to the core loop, which was reflected in highly positive community sentiment.

{ section="wide" }

{ type="card-grid", cols="2" }

*"I have dyscalculia (dyslexia with numbers) and I couldn't cope with stat breeding when I first started the game. Since the stats have been lettered, I am finally able to understand breeding."*
![](/assets/projects/stats/community-response-one.png)

---

*"I look forward to breeding more better stat higher grades, it definitely is SO much better than before."*
![](/assets/projects/stats/community-response-two.png)

---

*"The letters make it so easy to choose sires who are strong where the mares might be weak and vice versa."*
![](/assets/projects/stats/community-response-three.png)

---

*"I'm enjoying the process much better with the new game breeding system... bred her back to the sire and got my 5A+ foal!"*
![](/assets/projects/stats/community-response-four.png)

{ section="narrative" }

### Post-Launch Learnings & Design Debt

While the launch was overwhelmingly positive, making the hidden maths visible naturally exposed the underlying mechanics of the game's Random Number Generation (RNG), which led to new, highly specific community friction:

* **"Why does A + A = B?"**
<div style="max-width: 300px;">

  ![](/assets/projects/stats/community-friction-a-plus-b.jpg)
  
</div>

* **The Transparency Trade-off:** Making the hidden maths visible also exposed the game's deliberate progression constraints. Because the new UI was so legible, intentional economy friction-like stat penalties when breeding *up* a grade became glaringly obvious, causing new player confusion (e.g., "Why did two A+ parents make a B foal?").

* **Scaling for Complexity:** Later game updates introduced new traits and bonuses that compounded the complexity of the grading system. Balancing increasing mechanical depth with interface clarity remains an ongoing UX challenge for the team.

* **New Player Overload:** Analytics showed that introducing the Breeding Guide during initial onboarding caused cognitive overload. We patched this in a fast-follow update by delaying the UI prompt until players had mastered the basics.
