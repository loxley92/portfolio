---
title: "Restructuring Core Navigation"
description: "Reducing cognitive load by transitioning from nested menus to a scalable hub framework."
tags: ["IA", "Cognitive Load", "Scalable Systems"]
themeColor: "#61d2ff"
themeGradient: "linear-gradient(to bottom, #abe7ff 0%, #61d2ff 100%)"
heroImage: "/assets/projects/nav/hero.png"
---

{ type="project-hero", zIndex=10 }

{ section="case-study-body", zIndex=20 }
  { type="wave-divider" }

  { 
    type="sub-nav", 
    links=["Overview", "Legacy IA", "Hub Framework", "Impact & Evolution"],
    glassmorphism=true
  }

## Overview

{ section="narrative" }

* **Role:** Senior UX Designer (Project Lead)
* **Duration:** 4 Weeks (2 Sprints)
* **Context:** Pre-release Mobile Product

### The Challenge
Following a strategic pivot, the legacy "Phone" navigation became a critical bottleneck. It prioritised immersion over usability, failing to support the game's new core loop. High interaction costs buried features, and a lack of hierarchy created choice paralysis, risking the Soft Launch deadline.

### The Aim
To design a scalable, hub-and-spoke framework that reduces cognitive load, clearly surfaces revenue drivers, and aligns with mobile gaming best practices prior to launch.

### Release Impact

> **100% navigation success rate** achieved in recent user tests by moving from a confusing "Phone" interface to a streamlined Hub.

> **Absorbed 4+ major feature updates** during Soft Launch with zero UI refactoring required, proving a scalable architecture.

> **De-Risked Soft Launch** by identifying and removing navigation bottlenecks prior to development, allowing engineering to focus on gameplay polish.

{ section="theme-banner" }

### Execution & Strategy:
## Process Overview

{ section="narrative" }

{ component="stepper-success" }

1. **Identify:** Conducted heuristic analysis to identify navigation bottlenecks prior to development. 
2. **Map & Align:** Created the Hub-and-Spoke framework to align user flows with business goals.
3. **Iterate & Finalise:** Used prototype findings to validate the pivot, removing the phone layer entirely to prioritise clarity.
4. **Support Build:** Oversaw the greybox implementation, establishing the rules for the final Hub grid.

## Diagnostic Audit & Legacy IA
Mapping the legacy architecture revealed a fragile system unable to support the game's expanding scope.

{ section="wide" }

![Diagram 1.0 - HUD Navigation Model](/assets/projects/nav/audit-diagram.png)

{ section="narrative" }

### Analysis

* **High Interaction Cost & Dead Ends:** Core gameplay loops were buried behind **4+ taps**. Inconsistent "Back" button behaviour frequently trapped users in deep sub-menus, creating logic dead ends.
* **Unfamiliar Paradigm:** Forcing players to open a nested "phone" menu for every interaction created a jarring modal interrupt that deviated from standard mobile game patterns.

## Proposed Solutions
I narrowed the approach down to two primary directions to present to the product manager and engineering teams:

### Option 1: The "Open World" RPG Model
Primary navigation points live directly on the HUD. However, technical constraints prevented lateral tabs between screens, creating a "Pogo-Stick" effect where users were forced back to the HUD for every task switch.

{ section="wide" }

![](/assets/projects/nav/option-one.png)

{ type="card-grid", cols="2" }

**✅ POSITIVES**
* **High Immersion:** Keeps the player grounded in the 3D world; matches industry standards for Exploration RPGs.

---

**⚠️ NEGATIVES**
* **High Interaction Cost:** Lack of lateral navigation created inefficient "Silos," breaking the gameplay flow.
* **Production Risk:** The studio lacked an existing pipeline for diegetic UI, presenting significant timeline risk.
* **Monetisation Friction:** Overlay menus offered poor visibility for Live Ops, reducing impression opportunities.

{ section="narrative" }

### Option 2: Hub & Spoke (Chosen Design)
Adopts an industry-standard Hub model to minimise onboarding friction and centralise the user journey.

{ section="wide" }

![](/assets/projects/nav/option-two.png)

{ type="card-grid", cols="2" }

**✅ POSITIVES**
* **Validated Pattern:** Leverages navigation standards already proven in our portfolio titles.
* **Low Risk:** Removes the technical complexity of diegetic UI.
* **Production Speed:** Feasible to implement within the tight Soft Launch window.

---

**⚠️ NEGATIVES**
* **Immersion Break:** Removes the player from the 3D world context (a necessary trade-off).

{ section="narrative" }

> **The Verdict:** We selected this direction to prioritise clarity over immersion. Testing confirmed this decision, achieving a **100% navigation success rate** in subsequent user tests compared to the confusion of the legacy model.

## The System

To resolve "Pogo-sticking," I developed a three-tier architecture that balances immersion with revenue-driving access.

{ type="process-list" }

### Tier 1: Core Engagement & Revenue
Game Modes and Monetization are surfaced at the top level. This ensures entry points are always one click away, directly impacting LTV and session engagement.

### Tier 2: Management & Preparation
Grouped "admin" loops (Wardrobe, Stables) to separate preparation from active gameplay. This reduces cognitive load by keeping the player’s focus on the mission at hand.

### Tier 3: Contextual Access
System menus like Settings are available without cluttering the HUD during high-action moments. These remain reachable via a single tap but stay hidden during active play.

{ section="wide" }

{ type="image-gallery", layout="hero-top" }
![](/assets/projects/nav/architecture.png)
![](/assets/projects/nav/top-bar.png)

{ section="narrative" }

## Notification Strategy

In a feature-rich live service game, "Alert Fatigue" is a major risk. To manage cognitive load, I designed a dual-layer notification system based on urgency:

### The Active Layer (Toasts)
Transient, high-motion alerts for **immediate gratification** (e.g., Level Ups). These use a priority queue where completion events always override incremental progress.

{ section="wide" }

![](/assets/projects/nav/toasts.png)

{ section="narrative" }

### The Passive Layer (Badging)
Persistent anchors for **deferred actions**. I utilized a "Progressive Disclosure" model to reduce visual noise as the player navigates deeper into the menus.

#### 1. Top-Level: Compact Indicators
![](/assets/projects/nav/zone-1.png)

To keep the main screen clean, a simple dot shows there is a new item without distracting the player from active gameplay.

#### 2. Sub-Menus: Explicit Context
![](/assets/projects/nav/zone-2.png)

As the player opens a menu, the UI expands to show specific text and numbers (e.g., "Rewards Ready"). This uses the extra screen space to clearly explain the reward and encourage the player to tap it.

## Impact & Evolution

### Final Implementation
The transition from the "Phone" interface to the Hub resulted in a significant reduction in interaction cost and required zero UI structural changes during the Soft Launch.

{ section="wide" }

<video src="/assets/projects/nav/final-implementation.mp4" autoplay loop muted playsinline></video>

{ section="narrative" }

### Future Evolution
Post-launch feedback highlighted a mental model conflict within the "Play" menu. Currently, **Structured Gameplay** and **Unstructured Exploration** (Free Roam) are grouped together, which contradicts our onboarding.

* **Elevate "Free Roam":** Extracting Free Roam from the nested menu and making it a top-level Hub action reduces friction for the most frequent player behaviour.
* **Refocus "Play":** Dedicating this button exclusively to structured instances like **Time Trials** makes the player's choice more intentional.
* **Align with Onboarding:** Removing "Scouting" from the menu reinforces the discovery loop taught during the tutorial.

{ section="wide" }

![Diagram 1.6 - Future Iteration Mapping](/assets/projects/nav/future-iteration.png)

{ section="narrative" }

## Continue Reading

{ type="related-projects" }

{ section="footer", zIndex=30 }
  { type="wave-divider", position="top" }