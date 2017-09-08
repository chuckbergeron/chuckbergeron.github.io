---
layout:    post
title:     "WorldSpace VR UI Performance Optimizations in Unity"
author:    "chuckbergeron"
category:  blog
date:      2017-08-17 16:00
published: false
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

For the past six months I've been working on a city-building sim game for VR in Unity, and early on we realized we needed a UI (user interface) for the player to choose which buildings they would want to add to their city. Instead of creating a typical, boring flat UI and pointing a laser at scrollbars and menus we decided to create a card deck concept where you choose buildings from your card hand (similar to any card game you've played).

The most difficult part so far creating this game is trying to find the best ways to keep performance up. We need to hit and keep the game at over 90FPS for the Vive, while maintaining a visually interesting aesthetic.

One of the things we noticed was that performance was dropping after we rolled out a new update to this card UI. Each time a card category with more than 10+ cards was chosen, the frame rate would drop to around 50 - 60 FPS.

Digging in to Unity's profiler showed that re-draws of the UI each time the player moved their hand was the issue.

The hierarchy of the cards, and their Images &amp; TextMeshPro objects looked like so:

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

Each element in the tree above is a GameObject. And in typical Unity fashion, each GameObject has a Transform, which controls it's position, rotation and scale in the world. When the card hand is open, and the player moves their hand the <em>CardsUISystem</em> loosely follows the hand around so the UI is always available.

This turned out to be the biggest issue with the cards, as the CardUISystem Transform follows the player's hand, and their hand moves every single frame (even miniscule amounts are picked up). Each time the CardUISystem moves, under the hood Unity has to let every child Transform know what it's new position is, move it their, then send that to the graphics pipelines for rendering to the player's headset view.



<h5>
  TextMeshPro Mobile Shader &amp; Material Presets
</h5>

The TextMeshPro mobile shader was used, with Material Preset set to a shared WorldSpace preset. We use one TextMeshPro font and font asset, with 2 material preset. One material preset is for any UI canvas elements (TextMeshPro UGUI components), and another is for regular TextMeshPro components (meshes drawn in the world that aren't children of a UI canvas). This is important so that each piece of text shows up correctly based on it's layer (z-depth), and the mobile shader is to keep the text as simple as possible for the engine to render. (MORE ON THIS LINK)

😄

...

<a href="https://www.facebook.com/groups/vancouverVRcommunity">Vancouver VR Community on Facebook</a> &mdash; <a href="https://twitter.com/vrvancouver">Twitter</a>
