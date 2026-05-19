---
title: "Designing for Engagement"
description: "Elevating Player Engagement and Revenue in Rival Stars Horse Racing Through Strategic Event Design"
tags: ["Strategy", "Revenue Growth", "Interaction Design"]
themeColor: "#e5eda2"
themeGradient: "linear-gradient(to bottom, #f0f0ce 0%, #e5ef9e 100%)"
heroImage: "/assets/projects/engagement/hero.png"
---

{ type="project-hero", zIndex=10 }

{ section="case-study-body", zIndex=20 }
  { type="wave-divider"}

  { 
    type="sub-nav", 
    links=["Overview", "Release One", "Release Two", "Continued Success"],
    glassmorphism=true
  }

## Overview

{ section="narrative" }

* **Role:** Product/UX Designer
* **Duration:** 12 Weeks (Phase 1 & Phase 2)
* **Context:** Live Operations & Monetisation

### The Challenge
Rival Stars Horse Racing has a dedicated player base engaged in competitive events, but **55% of players remains disengaged from PvP modes.**
 
### The Aim
We aimed to create a non-competitive, community-driven event to attract a broader player base, encourage completion-focused play, and foster inclusivity.

### Release Impact

> **23% increase** in app conversion rate

> **$55,000 USD** revenue at launch (2-week event)

> **$1 million USD per year** projected from standard and special events.

> **Increased community engagement** and anticipation for future events

{ section="theme-banner" }

### Release One:
## Testing Our Hypothesis

{ section="narrative" }

Creating an event that is aimed at non-competitive players will attract a broader player base, encourage completion-focused play, and increase revenue.

### Process Overview (4 Weeks)

{ component="stepper-success" }

1. **Desk Research & Ideation:** Analysed competitor events and generated a baseline hypothesis for a non-competitive mode.
> 💡 Aiming to quickly validate our hypothesis, we took inspiration from other games and ideation to generate our solution.

2. **Prototyping & Feedback:** Developed low-fidelity flows and gathered internal team feedback to refine the direction.

3. **UI Development & Tech Implementation:** Created the final mocks and built the core event framework.

4. **Release & Live Operations:** Launched the MVP into live operations to experiment and validate player engagement.

### User Experience & Flow
Before jumping into high-fidelity designs, we mapped out the core loop to ensure players understood how to progress and claim rewards.

{ section="wide" }

{ type="caption", label="Diagram 1.0 - User Flow" }
![](/assets/projects/engagement/release-one-flow.png)

{ section="narrative" }

With the logic validated, we established the Information Architecture for the main Event Hub, ensuring the reward track and tasks were the primary focus.

{ section="wide" }

{ type="caption", label="Diagram 1.2 - Event Home Anatomy" }
![](/assets/projects/engagement/release-one-home.png)

{ section="narrative" }

## Final Release

### Core Event Loop

{ section="wide" }

<video src="/assets/projects/engagement/release-one-reel.mp4" autoplay loop muted playsinline></video>

{ section="narrative" }

### Contextual Entry Points & Feedback
To keep the event top of mind without being intrusive, we implemented contextual toasts and badges. These allowed players to track progress organically while performing their standard daily game loops.

{ section="wide" }

<video src="/assets/projects/engagement/toasts.mp4" autoplay loop muted playsinline></video>

{ section="narrative" }

## Release Impact

### Key Metrics & Player Sentiment

> **37.46% increase** in average spending per user

> **$24,000 total revenue**

> Feedback from users was overall positive, reporting that it was a refreshing change from the existing events.

> Increased engagement on our social media channels; players were excited to share their progress and outcomes from the events.

{ section="wide" }

{ type="card-grid", cols="2" }

> *"Finally finished Foaling Season, here's a few cute babies from the event, only kept a handful of them"*
![](/assets/projects/engagement/release-one-community-one.png)

---

> *"I have finished foaling season! Here are some of the fillies and colts I bred!"*
![](/assets/projects/engagement/release-one-community-two.png)

---

> *"Just Finished. I love the Foaling Season events"*
![](/assets/projects/engagement/release-one-community-three.png)

---

> *"Looking forward to seeing what this new Foaling Season event is like starting tomorrow"*
![](/assets/projects/engagement/release-one-community-four.png)

{ section="narrative" }

## Learnings & Future Changes

* Extending the duration of the event and increasing exposure might boost participation and revenue.
* Players wanted more diverse tasks and goals from the events.
* The UI didn't allow for much iteration.


{ section="theme-banner" }

### Release Two:
## Adding Monetisation Layers

{ section="narrative" }

Due to the success of the initial release, we wanted to iterate on this framework to support a new game mode and create deeper monetisation opportunities.

### Process Overview (8 Weeks)

{ component="stepper-success" }

1. **Data Review & Ideation:** Evaluated Release One metrics to map out new monetisation layers.
> 💡 Using our existing event due to its success, we iterated to include more monetisation aspects and improve the UI.

2. **Prototyping & User Testing:** Developed high-fidelity Figma prototypes and tested them with existing high-value players.

3. **Iterations & Final UI:** Refined the reward track based on user testing and finalised the UI.
> 💡 **Community Teasers:** At this stage, we also launched teaser posts to build player anticipation ahead of the release.

4. **Tech Implementation & Release:** Deployed the expanded event, tracking Live Operations experiments for both Iteration One and Two.

---

## What We Added: Feature & UI Evolution

To accommodate new monetisation layers without cluttering the screen, we adopted an existing in-game paradigm for tabbed navigation. This created a cleaner, adaptable layout that allowed us to introduce new features while leaving room for future A/B testing.

### 1. The Event Store & Tabbed Navigation
We introduced an **Event Store** (Star Club) featuring additional purchases for in-app currency (Gold) that offered a variety of event progression benefits. The new tabbed architecture provided the necessary screen real estate to display these offers alongside tasks and key art.

{ section="wide" }

{ type="image-gallery", layout="hero-top" }
![Tabbed Overview](/assets/projects/engagement/release-two-home.png)
![Tasks Tab](/assets/projects/engagement/release-two-tasks.png)
![Star Club Tab](/assets/projects/engagement/release-two-subscription.png)

{ section="narrative" }

### 2. Premium Rewards & Event Subscription (Race Pass)
We added an IAP (In-App Purchase) allowing players to access premium rewards and finish the event faster. Introducing this required careful adjustments to the reward track to ensure fairness and clarity.

{ section="wide" }

![](/assets/projects/engagement/reward-track.png)

{ section="narrative" }

* **1. Race Pass Branding:** We added clear visual branding to locked premium tiers. This maintained compliance around new monetisation features and ensured user comprehension.
* **2. New Points System:** Because the event was now longer, we changed how points were displayed. The UI now focuses on the immediate, achievable milestone rather than the total event goal, which helps maintain player motivation and reduces fatigue.

## Validating the Premium Experience

To ensure the new monetisation layers didn't alienate our player base, I developed a high-fidelity prototype and partnered with User Research to conduct sessions with 5 existing players of varying spend behaviours. We utilised a rapid-iterative approach, tweaking UI elements between sessions to immediately address friction points.

### Key Insights & Iterations

* **Navigation Validated:** Our assumption that the tabbed paradigm would be intuitive was correct.
> 💡 Players effortlessly navigated between tasks, the reward track, and the new Event Store without needing additional tutorials.

* **Copywriting Friction:** The initial wording for the Race Pass caused hesitation. Players were confused about exactly what benefits they were purchasing.
> 💡 We flagged this for a comprehensive copy rewrite before launch to ensure absolute transparency and build player trust.

* **A Deliberate Trade-off (Points Progression):** Players expressed slight uncertainty about whether the points needed for each reward scaled progressively (e.g., 100, 200, 300 points). 
> 💡 We decided against adding more UI to explain this. We determined the system was easily learnable through play, and maintaining player focus on the *immediate* next reward was more critical to session retention.

### Solving the "Paywall" Confusion

Our biggest hurdle was visual clarity on the reward track itself. Initially, players did not immediately understand which rewards were free and which required the Race Pass. 

Because we were testing iteratively, we were able to redesign the "locked" states mid-testing. By adding a much stronger visual container and explicit "Race Pass" branding to the premium tier, comprehension instantly improved in subsequent sessions.

{ section="wide" }
{ type="card-grid", cols="2" }

{ type="caption", label="Before: Lacking clear premium distinction" }
![](/assets/projects/engagement/testing-before.png)

{ type="caption", label="After: Strong visual containers and explicit branding" }
![](/assets/projects/engagement/testing-after.png)

{ section="narrative" }

> **Player Sentiment:** Overall, the introduction of the Steeplechase event and the Race Pass was viewed positively. We learned that providing advance notice via community teasers gave players time to prepare their in-game resources, which mitigated frustration around the new monetisation layers.

{ section="narrative" }

## Final Implementation

Onboarding followed a familiar structure to the previous Foaling Season event, but featured updated characters and content to reflect the Steeplechase theme. Additionally, the introduction of event-affecting Boosts required new visual feedback states—such as a gold animated progress bar—to clearly indicate to the player when their 2x points multiplier was active.

{ section="wide" }

{ type="caption", label="Video 2.0 - Onboarding, Navigation & Premium Unlocked" }
<video src="/assets/projects/engagement/release-two-reel.mp4" autoplay loop muted playsinline></video>

{ section="narrative" }

> 💡 **UX Highlight:** At the 0:16 mark, notice how purchasing the Race Pass instantly removes all padlocks on the premium track and updates the button to a "Purchase Complete" state. This provides immediate visual validation for the player's spending.

---

### Community Response

{ section="wide" }

{ type="card-grid", cols="2" }

> *"Finally, finished the event, I got the new horse. Steeplechase Stars Event"*
![](/assets/projects/engagement/release-two-community-one.png)

---

> *"I don’t normally pay to play... but the gold from this event bought me 2 much-needed stalls, so the expense was worth it to me"*
![](/assets/projects/engagement/release-one-community-two.png)

---

> *"Much less of a grind this time, thankfully. I wasn't planning on buying the pass until I saw your changes to points."*
![](/assets/projects/engagement/release-one-community-three.png)

---

> *"Steeplechase Event Complete! Also, got both horses."*
![](/assets/projects/engagement/release-one-community-four.png)

{ section="narrative" }

## Learnings and Future Changes

* **Collect All Button:** Minimise admin by allowing users to collect all their rewards at once.
* **Dual Reward Track:** Having locked rewards on a separate track to the free ones gives more flexibility for designers and allows us to integrate more frequent and tangible rewards to encourage progression.
* **Live Event Hub:** Players noted they loved that they were told in advance about the events so they could plan. Look at putting an event calendar or hub in the game.
* **Conversion Tests:** How can we increase conversions of the Race Pass for non-spenders?

## Continued Success

> Our regular event rotation now generates an average of $7,000 USD per week, maintaining consistent player participation and monetisation.

> Special seasonal events drive between $22,000 - $25,000 USD per week, significantly boosting engagement and excitement around new content.

> LTEs have expanded to support new content types and mechanics, making them the primary way we introduce fresh gameplay experiences.

> These events have also enabled us to create more seasonal content, celebrating global traditions, cultural moments, and our diverse player community.


{ section="image-banner", bgImage="/assets/projects/engagement/outro-full-screen.jpg" }

## LTEs are now a core pillar of engagement, monetisation, and content strategy - turning events into lasting value.

{ section="wide" }

 ## Continue Reading

{ type="related-projects" }

{ section="footer", zIndex=30 }
  { type="wave-divider", position="top" }