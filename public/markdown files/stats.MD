---
title: "Making Stats Meaningful"
description: "Improving user understanding with a transparent, colour-coded grading system and in-game guides."
tags: ["Data Viz", "Prototyping", "User Testing"]
themeColor: "#f7cf7b"
themeGradient: "linear-gradient(to bottom, #f7e5a2 0%, #f7cf7b 100%)"
heroImage: "/assets/projects/stats/hero.png"
---

{ type="project-hero", zIndex=10 }

{ section="case-study-body", zIndex=20 }
  { type="wave-divider" }

  { 
    type="sub-nav", 
    links=["Overview", "The Problem", "Architecture", "Implementation"],
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

> **Improved Comprehension:** Validated a letter/colour grading system that was universally understood by a global audience.

> **Reduced Cognitive Load:** Overhauled the Information Architecture to deliver goal-specific, contextual insights rather than generic popups.

> **High Community Sentiment:** The update successfully demystified the breeding maths, resulting in overwhelmingly positive player feedback.

{ section="theme-banner" }

### Execution & Strategy:
## Process Overview

{ section="narrative" }

{ component="stepper-success" }

1. **Identify & Audit:** Mapped the hidden mathematical probability curves and analysed player sentiment to understand the core friction.
2. **Architecture & Grading:** Designed a dual-indicator (letter and colour) grading system to translate raw data into universally understood values.
3. **Prototyping & User Testing:** Rapidly tested the new UI with high-value players, pivoting the "refresh" icon to safe carousel arrows based on direct feedback.
4. **Implementation & Launch:** Consolidated complex rules into an in-game Breeding Guide and balanced the distribution curve with Game Design before launch.

{ section="wide" }

## The Problem
Understanding why the existing system was failing player expectations.

{ type="caption", label="Diagram 1.0 - The stat progression system" }
![](/assets/projects/stats/stat-table-diagram.png)

{ type="caption", label="Diagram 1.1 - The wide probability spread" }
![](/assets/projects/stats/stat-curve.png)

{ section="narrative" }

### The Player Experience
Because the UI only surfaced flat numbers, players were left completely in the dark. This lack of transparency caused immense frustration in the community, leading to high friction in a core loop. 

To cope, players were forced to create complex, fan-made Excel databases just to track their genetics. 

{ section="wide" }

{ type="card-grid", cols="2" }

> *"OK...for sanity's sake I'm just trying to understand what equates to good stats for each level. Is this a good or even decent level 4?"*
![](/assets/projects/stats/problem-community-one.png)

---

> *"Is this horse good?? I have interest to buy this one..."*
![](/assets/projects/stats/problem-community-two.png)

---

> *"For inexperienced players it is often difficult to know what to look for."*
![](/assets/projects/stats/problem-community-three.png)

---

> *"Am I the only one obsessed enough to have started a spreadsheet? It's otherwise impossible for me to remember stats and who parented who without having to check."*
![](/assets/projects/stats/problem-community-four.png)

{ section="theme-banner" }

### Designing for Clarity:
## Architecture & Validation

{ section="narrative" }

### The Grading System
We needed a system that was instantly recognisable without cluttering the UI. We designed a dual-indicator system:
* **Letter Grading (A+ to D):** Adopted a standard Western educational scale to communicate baseline quality instantly.
* **Colour Grading:** To ensure universal comprehension for non-Western players, a colour-coding system was layered over the letters.

![](/assets/projects/stats/letter-grading.png)

### Contextual UI
The old UI was a "one-size-fits-all" popup. I redesigned it to adapt to the player's immediate goals:

{ section="wide" }
{ type="card-grid", cols="2" }

#### Breeding Screen
![](/assets/projects/stats/stat-quality-breed.png)
Goal: Genetics. The UI puts the Letter Grades (potential) at the top so players can quickly compare quality for breeding.

---

#### Racing Screen
![](/assets/projects/stats/stat-quality-racing.png)
Goal: Performance. The hierarchy flips. It puts the Trained Stats (numbers) at the top, as that’s what matters most during active gameplay.

{ section="narrative" }

### Consolidating Knowledge
To keep the main screens clean, we moved the deep-dive technical rules into a dedicated Breeding Guide directly on the screen. This allowed us to keep the stat popups lean and focused on the data, while still providing a "one-stop shop" for players who wanted to understand the full mechanics.

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
## Final Implementation

{ section="narrative" }

### Official Release
This overhaul was a major update for the game, completely changing how players engaged with the core loop. To help transition the player base, the studio released an official developer update video highlighting the new mechanics.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/V58RDD25xYM" title="Better Breeding Update" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Optimised Distribution Curve
In collaboration with Game Design, we adjusted the underlying math to generate fairer, more predictable stats. This ensured players were actually rewarded for their effort, balancing user satisfaction with the game's economy.

![](/assets/projects/stats/new-curve.png)

### Community Response
The release successfully demystified the breeding maths. Players immediately understood the quality of their foals without relying on external spreadsheets. By surfacing the mechanics clearly, we restored a sense of fairness and strategy to the core loop, which was reflected in highly positive community sentiment.

{ section="wide" }

{ type="card-grid", cols="2" }

> *"I have dyscalculia (dyslexia with numbers) and I couldn't cope with stat breeding when I first started the game. Since the stats have been lettered, I am finally able to understand breeding."*
![](/assets/projects/stats/community-response-one.png)

---

> *"I look forward to breeding more better stat higher grades, it definitely is SO much better than before."*
![](/assets/projects/stats/community-response-two.png)

---

> *"The letters make it so easy to choose sires who are strong where the mares might be weak and vice versa."*
![](/assets/projects/stats/community-response-three.png)

---

> *"I'm enjoying the process much better with the new game breeding system... bred her back to the sire and got my 5A+ foal!"*
![](/assets/projects/stats/community-response-four.png)

{ section="narrative" }

### Post-Launch Learnings & Design Debt

While the launch was overwhelmingly positive, making the hidden maths visible naturally exposed the underlying mechanics of the game's Random Number Generation (RNG), which led to new, highly specific community friction:

> *"Why does A + A = B?"*
![](/assets/projects/stats/community-friction-a-plus-b.jpg) 

* **The Double-Edged Sword of Transparency:** To support core monetisation and retention, the game requires stat variation; players cannot simply get perfect stats every time. While a game designer did the heavy lifting to tighten the underlying mathematical curve and balance the economy, my challenge was surfacing those mechanics in the UI. Because our new grading system was so legible, deliberate gameplay constraints—like the stat penalty incurred when breeding *up* a grade—became glaringly obvious to players, leading to confusion when two "A+" parents produced a "B" foal. 
* **Compounding Systems:** In later updates, the studio folded in additional traits and stat bonuses, which compounded the complexity of the letter grading system. This remains an ongoing UX challenge for the product team to balance mechanical depth with interface clarity.
* **First-Time User Overload:** Analytics showed that badging the new Breeding Guide during the First Time User Experience (FTUE) caused cognitive overload for new players. We successfully patched this in the following release by delaying the badge trigger.

{ section="wide" }

## Continue Reading

{ type="related-projects" }

{ section="footer", zIndex=30 }
  { type="wave-divider", position="top" }