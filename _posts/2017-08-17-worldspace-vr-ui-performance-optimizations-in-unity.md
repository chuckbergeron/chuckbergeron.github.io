---
excerpt_separator: <!--more-->
layout:    post
title:     "Unity VR: WorldSpace UI Performance Optimizations"
author:    "chuckbergeron"
category:  blog
date:      2017-08-17 16:00
published: true
tags:
- vr
- unity
- performance
shared_square_image: posts/vancouver_vr_community_logo.jpg
shared_description:  FILLIN
---
<!-- shared_square_image: posts/FILLIN.jpg -->


<div class="row">
    <div class="twelve columns">
        <!-- <img src=" asset_path 'posts/FILLIN.gif' " class="img-responsive" alt="Vancouver VR Community Launch Animation">-->
        <!--  style="margin: 0 auto;" -->
    </div>
</div>

<h5>

</h5>

For the past six months I've been working on a city-building sim named Skytropolis for VR &amp; Desktop in Unity. Early on we realized a need for a UI (user interface) where the player could choose which buildings they would want to add to their city. Instead of creating a typical, uninspired flat UI and pointing a laser pointer at scrollbars and menus (similar to using a web browser) we decided to create a card deck concept where you choose buildings from your card hand (similar to any card game you've played).

One of the largest challenges so far while developing Skytropolis has been solving the best ways to keep performance smooth. We need to hit and keep the game at over 90FPS for the Vive &amp; Rift, while maintaining a visually interesting aesthetic.

<!--more-->

One of the things we noticed was that performance was dropping after we rolled out a new update to this card UI. Each time a card category with more than 10+ cards was chosen, the frame rate would drop to around 50 - 60 FPS.

Digging in to Unity's profiler showed that re-draws of the UI each time the player moved their hand was the issue. (ACTUAL CPU/GPU NUMBERS / FPS IMAGE HERE)

The hierarchy of the cards, their Images &amp; TextMeshPro objects looked like so:

<pre><small>
- CardsUISystem
  - CardCategory (ie. Residential Buildings or Utilities ...)
    - Card 1
      - Card 1's canvas, child images &amp; text
    - Card 2
      - Card 2's canvas, child images &amp; text
    - Card 3
      - Canvas
        - Background <em>(Image)</em>
        - Header <em>(Image)</em>
            - Building Name <em>(TextMeshPro)</em>
            - Cost Background <em>(Image)</em>
            - $ Cost <em>(TextMeshPro)</em>
            - Revenue Background <em>(Image)</em>
            - $ Revenue <em>(TextMeshPro)</em>
            - etc.
        - Body
          - Screenshot <em>(Image)</em>
          - Demands Group
              - Demands Icon 1 <em>(Image)</em>
              - Demands Icon 2 <em>(Image)</em>
              - Demands Icon 3 <em>(Image)</em>
              - ... etc.
          - Services Group
              - Power Service Icon <em>(Image)</em>
              - Power Arrow Icon 1 <em>(Image)</em>
              - Power Arrow Icon 2 <em>(Image)</em>
              - Power Arrow Icon 3 <em>(Image)</em>
              - Water Service Icon <em>(Image)</em>
              - Water Arrow Icon 1 <em>(Image)</em>
              - Water Arrow Icon 2 <em>(Image)</em>
              - Water Arrow Icon 3 <em>(Image)</em>
              - ... etc.
          - ... etc.
        - Footer
            - Cost Background <em>(Image)</em>
            - $ Cost <em>(TextMeshPro)</em>
            - ... etc.
</small></pre>

Each element in the tree above is a GameObject. And in typical Unity fashion, each GameObject has a Transform, which controls it's position, rotation and scale in the world. When the card hand is open, and the player moves their hand the <em>`VRCardUISystem`</em> loosely follows the hand around so the UI is always available and ready to use.

This turned out to be the biggest issue with the cards. As the `VRCardUISystem` Transform follows the player's hand, and their hand moves every single frame (even miniscule amounts are picked up by the VR sensors) under the hood Unity has to tell every child Transform what it's new position is, move it there, then send that to the graphics pipeline for rendering to the player's headset screens.

After a few various attempts at improving performance via other means, such as changing the `VRCardUISystem`'s update rate to not happen every frame, and using object pooling instead of `Instantiate()` and `Destroy()` we found the performance issue still existed.

<img src="{% asset_path 'posts/worldspace-vr-ui-performance-solved-hierarchy.jpg' %}" class="img-responsive" alt="Improved Unity worldspace vr ui hierarchy"><!--  style="margin: 0 auto;" -->
<span class="caption">The solution pt 1: a much simpler hierarchy.</span>

The solution was to simplify. I had read somewhere that Unity prefers very simple hierarchy, and instead of grouping objects together logically (which is easier for the developers and level editors to consume), it ideally wants every GameObject (and Transform) to be at the root level. This is a mess for us developers to read, but helps it's internal systems.

<img src="{% asset_path 'posts/worldspace-vr-ui-performance-ui-background.jpg' %}" class="img-responsive" alt="One background image instead of multiple Image components"><!--  style="margin: 0 auto;" -->
<span class="caption">The solution pt 2: One background image instead of multiple Image components.</span>

On top of removing the container groups, we decided about half of the Unity `Image` components could be baked into 1 PNG background sprite in Photoshop. This resulted in each card only having 10 child GameObjects (and Transforms) instead of 20. And when you have 20 cards in your hand, that means only 250 GameObjects (and Transforms) instead of 500.

NUMBERS, 10 and 20? 250 and 500?

Coincidentally, this also improved a performance issue we were experiencing when using these same `VRUICard` prefabs on the Desktop version of the game (yes, we have yet to refactor the naming convention on these so they apply to both version of the game 😊).

<h5>
  Further Improvements: TextMeshPro Mobile Shader &amp; Material Presets
</h5>

After using Unity 3 and 4 for a while, I found the default `Text` component lacking. The result of text was almost always blurry, and the hack to make it crisper (size the font waaay up and scale the transform waaay down) felt silly. After learning about TextMeshPro, and all the amazing improvements it offered I thought it would be ideal to use in VR for Skytropolis. Thankfully, Unity agreed and purchased TextMeshPro to provide it for free to all of us Unity game developers.

Integrating TextMeshPro properly came with it's own learning curve. Thankfully there is fantastic documentation and forum discussion on how to use it best. Here's a quick guide on what I found most beneficial.

The TextMeshPro mobile shader was used, with Material Preset set to a shared WorldSpace preset. We use one TextMeshPro font and font asset, with 2 material preset. One material preset is for any UI canvas elements (TextMeshPro UGUI components), and another is for regular TextMeshPro components (meshes drawn in the world that aren't children of a UI canvas). This is important so that each piece of text shows up correctly based on it's layer (z-depth), and the mobile shader is to keep the text as simple as possible for the engine to render. (MORE ON THIS LINK)

😄

...

<a href="https://www.facebook.com/groups/vancouverVRcommunity">Vancouver VR Community on Facebook</a> &mdash; <a href="https://twitter.com/vrvancouver">Twitter</a>
